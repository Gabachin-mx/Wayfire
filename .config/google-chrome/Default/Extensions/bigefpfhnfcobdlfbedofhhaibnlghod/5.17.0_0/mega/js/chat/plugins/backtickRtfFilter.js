/**
 * Backtick specific Rich text formatting filter
 *
 * @param megaChat
 * @returns {BacktickRtfFilter}
 * @constructor
 */
var BacktickRtfFilter = function(megaChat) {
    "use strict";
    var self = this;

    self.regexps = {};
    self.regexps['(^|\\s)`{3}(\\n?)(\\n|.*)`{3}'] = [
        'gis',
        '$1<pre class="rtf-multi">$2$3</pre>',
        '$1 $2$3'
    ];

    self.regexps['(^|\\s)`{1}([^\\n|^`]{1,})`{1}'] = [
        'gim',
        '$1<pre class="rtf-single">$2</pre>',
        '$1 $2'
    ];
    self.escaped = {};
    self.index = 0;

    megaChat.rebind("onPreBeforeRenderMessage.btrtf", function(e, eventData) {
        self.escapeAndProcessMessage(e, eventData, ['messageHtml', 'textContents'], 'messageHtml');
    });
    megaChat.rebind("onPostBeforeRenderMessage.btrtf", function(e, eventData) {
        self.unescapeAndProcessMessage(e, eventData, ['messageHtml', 'textContents'], 'messageHtml');
    });

    megaChat.rebind("onPreBeforeSendMessage.btrtf", function(e, eventData) {
        self.escapeAndProcessMessage(e, eventData, ['message', 'messageHtml', 'textContents'], 'message');
    });
    megaChat.rebind("onPostBeforeSendMessage.btrtf", function(e, eventData) {
        self.unescapeAndProcessMessage(e, eventData, ['message', 'messageHtml', 'textContents'], 'message');
    });

    return this;
};

BacktickRtfFilter.ESCAPE_TEMPLATE = "%%BTRTE%$NUM%%";
BacktickRtfFilter.ESCAPE_SEARCH = "%%BTRTE%";
BacktickRtfFilter.UNESCAPE_REGEXP = "%%BTRTE%(\\d+)%%";

BacktickRtfFilter.prototype.escapeAndProcessMessage = function(e, eventData, props, mainProp, skipSet) {
    "use strict";
    var self = this;

    if (eventData instanceof Message) {
        // in case of incoming data is a before send msg
        eventData = {
            'message': eventData
        };
    }

    if (eventData.message.decrypted === false) {
        return;
    }

    // use the HTML version of the message if such exists (the HTML version should be generated by hooks/filters on the
    // client side.
    var textContents;
    if (eventData.message.textContents) {
        textContents = eventData.message.textContents;
    } else {
        return; // not yet decrypted.
    }

    var tmp = {};

    props.forEach(function(prop) {
        var messageContents = eventData.message[prop] ? eventData.message[prop] : textContents;


        if (prop === "messageHtml" && !eventData.message[prop]) {
            messageContents = htmlentities(messageContents);
        }

        if (!messageContents) {
            return; // ignore, maybe its a system message (or composing/paused composing notification)
        }

        messageContents = messageContents ? messageContents.trim() : "";

        /*jshint -W049 */
        if (prop === "messageHtml") {
            messageContents = messageContents.replace(/\<br\/\>/gi, '\n');
        }
        /*jshint +W049 */

        // performance cheat/trick
        if (messageContents.indexOf("`") !== -1) {
            messageContents = self.processBackticks(messageContents, function (match, replacementHtml, replTxt) {
                var id = self.index++;
                self.escaped[id] = [replacementHtml, e.textOnly ? replTxt : match];
                return BacktickRtfFilter.ESCAPE_TEMPLATE.replace("$NUM", id);
            });
        }

        if (prop === "messageHtml") {
            messageContents = messageContents.replace(/\n/gi, "<br/>");
        }
        if (!skipSet) {
            eventData.message[prop] = messageContents;
        }
        else {
            tmp[prop] = messageContents;
        }
    });


    return !skipSet ? eventData.message[mainProp] : tmp[mainProp];
};

BacktickRtfFilter.PARSER_STATE = {
    REGULAR: 0,
    IN_PLACEHOLDER_SINGLE: 1,
    IN_PLACEHOLDER_MULTI: 2,
};

BacktickRtfFilter.PARSER_VALID_PREV_CHAR_MATCH = new RegExp(/\n|\s|\r|[.,\/#!$%\^&\*;:{}=\-_~()]/);

BacktickRtfFilter.processUrlsInTickStrings = function(s) {
    return Autolinker.link(s, {
        truncate: 80,
        className: 'chatlink',
        newWindow: true,
        stripPrefix: false,
        twitter: false,
        urls:{
            schemeMatches: true,
            wwwMatches: false,
            tldMatches: false
        }
    });
};

BacktickRtfFilter.prototype.processBackticks = function(msgString, replaceGenCb) {
    msgString = String(msgString);
    var newString = "";
    var placeholderString = "";

    var state = BacktickRtfFilter.PARSER_STATE.REGULAR;
    var len = msgString.length;

    for (var i = 0; i < len; i++) {
        if (msgString.substr(i, 3) === "```" && (
                state === BacktickRtfFilter.PARSER_STATE.REGULAR ||
                state === BacktickRtfFilter.PARSER_STATE.IN_PLACEHOLDER_MULTI
            ) &&
            (
                state === BacktickRtfFilter.PARSER_STATE.IN_PLACEHOLDER_MULTI ||
                i === 0 ||
                msgString[i - 1].match(BacktickRtfFilter.PARSER_VALID_PREV_CHAR_MATCH))
        ) {
            if (state === BacktickRtfFilter.PARSER_STATE.IN_PLACEHOLDER_MULTI) {
                state = BacktickRtfFilter.PARSER_STATE.REGULAR;
                // linkify http(s?):// ONLY urls

                var newPlaceHolderString = BacktickRtfFilter.processUrlsInTickStrings(placeholderString);

                newString += replaceGenCb(
                    "```" + placeholderString + "```",
                    '<pre class="rtf-multi">' + newPlaceHolderString + '</pre>',
                    placeholderString
                );
                placeholderString = "";
            }
            else {
                state = BacktickRtfFilter.PARSER_STATE.IN_PLACEHOLDER_MULTI;
            }
            i += 2;
        }
        else if (msgString[i] === "`" && (
                state === BacktickRtfFilter.PARSER_STATE.REGULAR ||
                state === BacktickRtfFilter.PARSER_STATE.IN_PLACEHOLDER_SINGLE
            ) && (
                state === BacktickRtfFilter.PARSER_STATE.IN_PLACEHOLDER_SINGLE ||
                i === 0 ||
                msgString[i - 1].match(BacktickRtfFilter.PARSER_VALID_PREV_CHAR_MATCH)
            )
        ) {
            if (state === BacktickRtfFilter.PARSER_STATE.IN_PLACEHOLDER_SINGLE) {

                // ensure the placeholder is not just empty thing.
                if (placeholderString.trim() === "") {
                    // current char is `, try to start a new placeholder state
                    newString += "`" + placeholderString;
                    placeholderString = "";
                    if (i === len - 1 || msgString[i + 1] === "\n"  || msgString[i + 1] === "\r") {
                        // end of string.
                        newString += msgString[i];
                        if (msgString[i + 1] === "\n" || msgString[i + 1] === "\r") {
                            newString += msgString[i + 1];
                        }
                        state = BacktickRtfFilter.PARSER_STATE.REGULAR;
                    }
                }
                else if (msgString[i + 1] === "`" || msgString[i - 1] === "`") {
                    // fast forward. e.g. skip ``(`)? in SINGLE placeholders.
                    placeholderString += msgString[i];
                }
                else {
                    state = BacktickRtfFilter.PARSER_STATE.REGULAR;
                    var newPlaceHolderString = BacktickRtfFilter.processUrlsInTickStrings(placeholderString);
                    newString += replaceGenCb(
                        "`" + placeholderString + "`",
                        '<pre class="rtf-single">' + newPlaceHolderString + '</pre>',
                        placeholderString
                    );
                    placeholderString = "";
                }
            }
            else {
                state = BacktickRtfFilter.PARSER_STATE.IN_PLACEHOLDER_SINGLE;
            }
        }
        else if (state === BacktickRtfFilter.PARSER_STATE.IN_PLACEHOLDER_SINGLE && (
                msgString[i] === "\n" ||
                msgString[i] === "\r"
            )
        ) {
            newString += "`" + placeholderString + msgString[i];
            placeholderString = "";
            state = BacktickRtfFilter.PARSER_STATE.REGULAR;
        }
        else if (state === BacktickRtfFilter.PARSER_STATE.IN_PLACEHOLDER_SINGLE) {
            placeholderString += msgString[i];
        }
        else if (state === BacktickRtfFilter.PARSER_STATE.IN_PLACEHOLDER_MULTI) {
            placeholderString += msgString[i];
        }
        else if (state === BacktickRtfFilter.PARSER_STATE.REGULAR) {
            newString += msgString[i];
        }
    }

    if (state !== BacktickRtfFilter.PARSER_STATE.REGULAR) {
        // have started parsing something, but string ended unexpectedly.
        newString += state === BacktickRtfFilter.PARSER_STATE.IN_PLACEHOLDER_SINGLE ? "`" : "```";
        newString += placeholderString;

    }

    return newString;
};

BacktickRtfFilter.prototype.unescapeAndProcessMessage = function(e, eventData, props, mainProp) {
    "use strict";
    var self = this;

    if (eventData instanceof Message) {
        // in case of incoming data is a before send msg
        eventData = {
            'message': eventData
        };
    }

    if (eventData.message.decrypted === false) {
        return;
    }

    // use the HTML version of the message if such exists (the HTML version should be generated by hooks/filters on the
    // client side.
    var textContents;
    if (eventData.message.textContents) {
        textContents = eventData.message.textContents;
    } else {
        return; // not yet decrypted.
    }



    var notFound = false;

    props.forEach(function(prop) {
        var messageContents = eventData.message[prop] ? eventData.message[prop] : textContents;

        if (!messageContents) {
            return; // ignore, maybe its a system message (or composing/paused composing notification)
        }

        messageContents = messageContents ? messageContents.trim() : "";

        /*jshint -W049 */
        if (prop === "messageHtml") {
            messageContents = messageContents.replace(/\<br\/\>/gi, '\n');
        }
        /*jshint +W049 */

        messageContents = messageContents.replace(
            new RegExp(BacktickRtfFilter.UNESCAPE_REGEXP, "gi"),
            function (match, id) {
                var escaped = self.escaped[id];
                var result;
                if (escaped) {
                    if (prop === "messageHtml" && !e.textOnly) {
                        result = escaped[0];
                    }
                    else {
                        result = escaped[1];
                    }

                    // because of plugins shuffling message, messageHtml and textContents, we need to delete the
                    // cache a bit later
                    setTimeout(function(idx) {
                        delete self.escaped[idx];
                    }, 100, id);
                }
                else {
                    notFound = true;
                    result = "";
                    console.error("replacement not found:", id);
                }

                return result;
            });


        if (prop === "messageHtml") {
            messageContents = messageContents.replace(/\n/gi, "<br/>");
        }

        eventData.message[prop] = messageContents;
    });


    if (!notFound && eventData.message[mainProp].indexOf(BacktickRtfFilter.ESCAPE_SEARCH) > -1) {
        // recurse to ensure ALL escaped stuff are unescaped (specially if nested with some super tricky strings)
        return self.unescapeAndProcessMessage(e, eventData, props, mainProp);
    }

    return eventData.message[mainProp];
};
