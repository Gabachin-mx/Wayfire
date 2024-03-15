// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Creates a DomDistiller, applies to to the content of the page, and returns
// a DomDistillerResults as a JavaScript object/dictionary.
(function (options) {
  try {
    // The generated domdistiller.js accesses the window object only explicitly
    // via the window name. This creates a new object with the normal window
    // object as its prototype and initialize the domdistiller.js with that new
    // context so that it does not change the real window object.
    function initialize(window_) {
      (function () {
        var $gwt_version = "2.7.0";
        var $wnd = window_;
        var $doc = window.document;
        var $moduleName, $moduleBase;
        var $stats = $wnd.__gwtStatsEvent
          ? function (a) {
              $wnd.__gwtStatsEvent(a);
            }
          : null;
        var $strongName = "4EF74B0AFE27B1FAE6BEBDB0F622E7D1";
        var aa = 2147483647,
          ba = { 3: 1, 12: 1 },
          ca = { 3: 1, 15: 1, 12: 1 },
          da = { 3: 1, 4: 1 },
          ea = { 3: 1, 5: 1, 6: 1, 4: 1 },
          ga = { 10: 1, 19: 1, 3: 1, 11: 1, 9: 1 },
          h = { 3: 1, 5: 1, 14: 1, 6: 1, 4: 1, 13: 1 },
          ha = { 46: 1 },
          ka = { 25: 1 },
          la = { 3: 1, 30: 1 },
          ma = { 3: 1, 11: 1, 9: 1, 29: 1 },
          na = { 3: 1, 5: 1, 4: 1 },
          _,
          oa,
          pa = {};
        function qa() {}
        function ra(a) {
          function b() {}
          b.prototype = a || {};
          return new b();
        }
        function k() {}
        function n(a, b, c) {
          var d = pa[a],
            e = d instanceof Array ? d[0] : null;
          d && !e
            ? (_ = d)
            : ((_ = pa[a] = b ? ra(pa[b]) : {}),
              (_.cM = c),
              (_.constructor = _),
              !b && (_.tM = qa));
          for (d = 3; d < arguments.length; ++d) arguments[d].prototype = _;
          e && (_.cZ = e);
        }
        function sa() {}
        function ta(a, b) {
          return va(a) ? a === b : wa(a) ? a.eQ(b) : (za(a), a === b);
        }
        function Aa(a) {
          return va(a) ? p : wa(a) ? a.cZ : za(a) ? a.cZ : Ba;
        }
        function Ha(a) {
          if (va(a)) {
            Ia();
            var b = ":" + a,
              c = Ja[b];
            if (null != c) a = c;
            else {
              c = Ka[b];
              if (null == c) {
                var d, e, f;
                d = 0;
                e = a.length;
                f = e - 4;
                for (c = 0; c < f; )
                  (d =
                    a.charCodeAt(c + 3) +
                    31 *
                      (a.charCodeAt(c + 2) +
                        31 *
                          (a.charCodeAt(c + 1) +
                            31 * (a.charCodeAt(c) + 31 * d)))),
                    (d = ~~d),
                    (c += 4);
                for (; c < e; )
                  (d *= 31), (f = c++), (f = a.charCodeAt(f)), (d += f);
                c = ~~d;
              }
              256 == Qa && ((Ka = Ja), (Ja = {}), (Qa = 0));
              ++Qa;
              a = Ja[b] = c;
            }
          } else a = wa(a) ? a.hC() : (za(a), a.$H || (a.$H = ++Ua));
          return a;
        }
        n(1, null, {}, sa);
        _.eQ = function (a) {
          return this === a;
        };
        _.gC = function () {
          return this.cZ;
        };
        _.hC = function () {
          return this.$H || (this.$H = ++Ua);
        };
        _.tS = function () {
          var a = Va(Aa(this)) + "@",
            b;
          b = (Ha(this) >>> 0).toString(16);
          return a + b;
        };
        _.toString = function () {
          return this.tS();
        };
        Wa = { 3: 1, 221: 1, 11: 1, 2: 1 };
        !Array.isArray &&
          (Array.isArray = function (a) {
            return "[object Array]" === Object.prototype.toString.call(a);
          });
        function Xa(a) {
          return a.toString ? a.toString() : "[JavaScriptObject]";
        }
        function wa(a) {
          return !Array.isArray(a) && a.tM === qa;
        }
        function r(a, b) {
          return null != a && ((va(a) && !!Wa[b]) || (a.cM && !!a.cM[b]));
        }
        function za(a) {
          return Array.isArray(a) && a.tM === qa;
        }
        function va(a) {
          return "string" === typeof a;
        }
        function s(a) {
          return null == a ? null : a;
        }
        function Ya(a) {
          return ~~Math.max(Math.min(a, aa), -2147483648);
        }
        var Wa;
        function Za(a) {
          if (null == a.n)
            if (a.B()) {
              var b = a.c;
              b.C()
                ? (a.n = "[" + b.k)
                : b.B()
                ? (a.n = "[" + b.w())
                : (a.n = "[L" + b.w() + ";");
              a.b = b.v() + "[]";
              a.j = b.A() + "[]";
            } else {
              var b = a.g,
                c = a.d,
                c = c.split("/");
              a.n = $a(".", [b, $a("$", c)]);
              a.b = $a(".", [b, $a(".", c)]);
              a.j = c[c.length - 1];
            }
        }
        function Va(a) {
          Za(a);
          return a.n;
        }
        function ab(a) {
          Za(a);
          return a.j;
        }
        function bb() {
          this.i = cb++;
          this.a = this.k = this.b = this.d = this.g = this.j = this.n = null;
        }
        function mb(a) {
          var b;
          b = new bb();
          b.n = "Class$" + (a ? "S" + a : "" + b.i);
          b.b = b.n;
          b.j = b.n;
          return b;
        }
        function t(a) {
          var b;
          b = mb(a);
          nb(a, b);
          return b;
        }
        function u(a, b) {
          var c;
          c = mb(a);
          nb(a, c);
          c.f = b ? 8 : 0;
          c.e = b;
          return c;
        }
        function ob() {
          var a;
          a = mb(null);
          a.f = 2;
          return a;
        }
        function w(a, b) {
          var c = (a.a = a.a || []);
          return c[b] || (c[b] = a.u(b));
        }
        function $a(a, b) {
          for (var c = 0; !b[c] || "" == b[c]; ) c++;
          for (var d = b[c++]; c < b.length; c++)
            b[c] && "" != b[c] && (d += a + b[c]);
          return d;
        }
        function nb(a, b) {
          if (a) {
            b.k = a;
            var c = b.C() ? null : pa[b.k];
            c ? (c.cZ = b) : (pa[a] = [b]);
          }
        }
        n(77, 1, {}, bb);
        _.u = function (a) {
          var b;
          b = new bb();
          b.f = 4;
          1 < a ? (b.c = w(this, a - 1)) : (b.c = this);
          return b;
        };
        _.v = function () {
          Za(this);
          return this.b;
        };
        _.w = function () {
          return Va(this);
        };
        _.A = function () {
          return ab(this);
        };
        _.B = function () {
          return 0 != (this.f & 4);
        };
        _.C = function () {
          return 0 != (this.f & 1);
        };
        _.tS = function () {
          return (
            (0 != (this.f & 2)
              ? "interface "
              : 0 != (this.f & 1)
              ? ""
              : "class ") + (Za(this), this.n)
          );
        };
        _.f = 0;
        _.i = 0;
        var cb = 1,
          pb = t(1),
          Ba = t(0);
        t(77);
        n(12, 1, ba);
        _.q = function () {
          return this.e;
        };
        _.tS = function () {
          var a, b;
          a = Va(this.cZ);
          b = this.q();
          return null != b ? a + ": " + b : a;
        };
        t(12);
        function qb(a) {
          this.e = a;
          rb(this, this.e);
        }
        n(15, 12, ca, qb);
        t(15);
        n(20, 15, ca);
        t(20);
        n(102, 20, ca);
        t(102);
        function sb() {
          sb = k;
          fc = new sa();
        }
        function gc(a) {
          sb();
          this.e = null;
          this.a = "";
          this.b = a;
          this.a = "";
        }
        n(39, 102, { 39: 1, 3: 1, 15: 1, 12: 1 }, gc);
        _.q = function () {
          var a;
          null == this.c &&
            ((a = s(this.b) === s(fc) ? null : this.b),
            (this.d =
              null == a
                ? "null"
                : null == a || va(a) || a.tM === qa
                ? va(a)
                  ? "String"
                  : Va(Aa(a))
                : null == a
                ? null
                : a.name),
            (this.a =
              this.a +
              ": " +
              (null == a || va(a) || a.tM === qa
                ? a + ""
                : null == a
                ? null
                : a.message)),
            (this.c = "(" + this.d + ") " + this.a));
          return this.c;
        };
        _.r = function () {
          return s(this.b) === s(fc) ? null : this.b;
        };
        var fc;
        t(39);
        n(197, 1, {});
        t(197);
        function hc(a) {
          $wnd.setTimeout(function () {
            throw a;
          }, 0);
        }
        function ic() {
          0 != jc && (jc = 0);
          kc = -1;
        }
        var jc = 0,
          Ua = 0,
          lc = 0,
          kc = -1;
        function mc() {
          mc = k;
          nc = new oc();
        }
        function oc() {}
        function pc(a, b) {
          var c, d, e;
          d = 0;
          for (e = a.length; d < e; d++) {
            c = a[d];
            try {
              if (c[1]) {
                if (c[0].Ib()) {
                  var f = b;
                  !f && (f = []);
                  f[f.length] = c;
                  b = f;
                }
              } else c[0].Ib();
            } catch (g) {
              if (((g = qc(g)), r(g, 12))) (c = g), hc(r(c, 39) ? c.r() : c);
              else throw rc(g);
            }
          }
          return b;
        }
        n(146, 197, {}, oc);
        var nc;
        t(146);
        function sc() {
          sc = k;
          var a, b;
          b = !(Error.stackTraceLimit || "stack" in Error());
          a = new Dc();
          Jc = b ? new Kc() : a;
        }
        function rb(a, b) {
          sc();
          Jc.s(a, b);
        }
        var Jc;
        n(209, 1, {});
        t(209);
        function Kc() {}
        n(112, 209, {}, Kc);
        _.s = function (a, b) {
          var c = {};
          a.fnStack = [];
          for (var d = arguments.callee.caller; d; ) {
            sc();
            var e;
            if (!(e = d.name)) {
              e = d;
              var f = /function(?:\s+([\w$]+))?\s*\(/.exec(d.toString());
              e = e.name = (f && f[1]) || "anonymous";
            }
            a.fnStack.push(e);
            e = ":" + e;
            if ((f = c[e])) {
              var g, l;
              g = 0;
              for (l = f.length; g < l; g++) if (f[g] === d) return;
            }
            (f || (c[e] = [])).push(d);
            d = d.caller;
          }
        };
        t(112);
        function Lc() {
          Lc = k;
          Error.stackTraceLimit = 64;
        }
        n(210, 209, {});
        _.s = function (a, b) {
          function c(a) {
            if (!("stack" in a))
              try {
                throw a;
              } catch (b) {}
            return a;
          }
          var d;
          "string" == typeof b
            ? (d = c(Error(b)))
            : b instanceof Object && "stack" in b
            ? (d = b)
            : (d = c(Error()));
          a.__gwt$backingJsError = d;
        };
        t(210);
        function Dc() {
          Lc();
        }
        n(113, 210, {}, Dc);
        t(113);
        function Mc(a, b) {
          if (!a) throw new Nc("" + b);
        }
        function y(a) {
          if (!a) throw new Oc();
        }
        function z(a, b) {
          if (0 > a || a >= b) throw new Pc("Index: " + a + ", Size: " + b);
        }
        function Qc(a) {
          if (null == a) throw new Rc();
        }
        function Sc(a, b) {
          if (0 > a || a > b) throw new Pc("Index: " + a + ", Size: " + b);
        }
        function Tc(a, b) {
          var c, d, e, f;
          a = "" + a;
          c = new Uc();
          for (d = f = 0; d < b.length; ) {
            e = a.indexOf("%s", f);
            if (-1 == e) break;
            f = a.substr(f, e - f);
            c.a += f;
            f = b[d++];
            c.a += f;
            f = e + 2;
          }
          e = a.substr(f, a.length - f);
          c.a += e;
          if (d < b.length) {
            c.a += " [";
            e = b[d++];
            for (c.a += e; d < b.length; )
              (c.a += ", "), (e = b[d++]), (c.a += e);
            c.a += "]";
          }
          return c.a;
        }
        function Vc(a, b) {
          return null == a[b] ? null : String(a[b]);
        }
        function A(a, b) {
          return a.getAttribute(b) || "";
        }
        function B(a) {
          ((a = a.parentNode) && 1 == a.nodeType) || (a = null);
          return a;
        }
        function C(a, b) {
          this.a = a;
          this.b = b;
        }
        n(9, 1, { 3: 1, 11: 1, 9: 1 });
        _.t = function (a) {
          return this.b - a.b;
        };
        _.eQ = function (a) {
          return this === a;
        };
        _.hC = function () {
          return this.$H || (this.$H = ++Ua);
        };
        _.tS = function () {
          return null != this.a ? this.a : "" + this.b;
        };
        _.b = 0;
        t(9);
        function Wc() {
          Wc = k;
          Xc = new Yc();
          Zc = new $c();
          ad = new bd();
          kd = new nd();
          vd = new Cd();
          Dd = new Ed();
          Fd = new Gd();
          Hd = new Id();
          Jd = new Kd();
          Ld = new Md();
          Nd = new Od();
          Pd = new Qd();
          Rd = new Sd();
          Td = new Ud();
          Vd = new Wd();
          Xd = new Yd();
          Zd = new $d();
          ae = new be();
        }
        function ce() {
          Wc();
          return D(w(ue, 1), ea, 10, 0, [
            Xc,
            Zc,
            ad,
            kd,
            vd,
            Dd,
            Fd,
            Hd,
            Jd,
            Ld,
            Nd,
            Pd,
            Rd,
            Td,
            Vd,
            Xd,
            Zd,
            ae,
          ]);
        }
        n(10, 9, ga);
        var Zc,
          Zd,
          ad,
          Xc,
          Dd,
          Xd,
          vd,
          Fd,
          Hd,
          Jd,
          kd,
          ae,
          Ld,
          Nd,
          Pd,
          Td,
          Vd,
          Rd,
          ue = u(10, ce);
        function Yc() {
          C.call(this, "DEFAULT", 0);
        }
        n(161, 10, ga, Yc);
        u(161, null);
        function Md() {
          C.call(this, "SE_RESIZE", 9);
        }
        n(170, 10, ga, Md);
        u(170, null);
        function Od() {
          C.call(this, "SW_RESIZE", 10);
        }
        n(171, 10, ga, Od);
        u(171, null);
        function Qd() {
          C.call(this, "S_RESIZE", 11);
        }
        n(172, 10, ga, Qd);
        u(172, null);
        function Sd() {
          C.call(this, "W_RESIZE", 12);
        }
        n(173, 10, ga, Sd);
        u(173, null);
        function Ud() {
          C.call(this, "TEXT", 13);
        }
        n(174, 10, ga, Ud);
        u(174, null);
        function Wd() {
          C.call(this, "WAIT", 14);
        }
        n(175, 10, ga, Wd);
        u(175, null);
        function Yd() {
          C.call(this, "HELP", 15);
        }
        n(176, 10, ga, Yd);
        u(176, null);
        function $d() {
          C.call(this, "COL_RESIZE", 16);
        }
        n(177, 10, ga, $d);
        u(177, null);
        function be() {
          C.call(this, "ROW_RESIZE", 17);
        }
        n(178, 10, ga, be);
        u(178, null);
        function $c() {
          C.call(this, "AUTO", 1);
        }
        n(162, 10, ga, $c);
        u(162, null);
        function bd() {
          C.call(this, "CROSSHAIR", 2);
        }
        n(163, 10, ga, bd);
        u(163, null);
        function nd() {
          C.call(this, "POINTER", 3);
        }
        n(164, 10, ga, nd);
        u(164, null);
        function Cd() {
          C.call(this, "MOVE", 4);
        }
        n(165, 10, ga, Cd);
        u(165, null);
        function Ed() {
          C.call(this, "E_RESIZE", 5);
        }
        n(166, 10, ga, Ed);
        u(166, null);
        function Gd() {
          C.call(this, "NE_RESIZE", 6);
        }
        n(167, 10, ga, Gd);
        u(167, null);
        function Id() {
          C.call(this, "NW_RESIZE", 7);
        }
        n(168, 10, ga, Id);
        u(168, null);
        function Kd() {
          C.call(this, "N_RESIZE", 8);
        }
        n(169, 10, ga, Kd);
        u(169, null);
        function Ce() {
          Ce = k;
          var a = ce(),
            b,
            c,
            d,
            e;
          b = {};
          d = 0;
          for (e = a.length; d < e; ++d)
            (c = a[d]), (b[":" + (null != c.a ? c.a : "" + c.b)] = c);
          Je = b;
        }
        var Je;
        function Me(a, b) {
          var c;
          c = a.slice(0, b);
          D(Aa(a), a.cM, a.__elementTypeId$, a.__elementTypeCategory$, c);
          return c;
        }
        function Ne(a, b) {
          var c;
          c = Oe(0, b);
          D(Aa(a), a.cM, a.__elementTypeId$, a.__elementTypeCategory$, c);
          return c;
        }
        function E(a, b, c, d, e) {
          d = Oe(e, d);
          D(w(a, 1), b, c, e, d);
          return d;
        }
        function Pe(a) {
          return Qe(p, [na, h], [13, 2], 4, a, 0, 2);
        }
        function Qe(a, b, c, d, e, f, g) {
          var l, m, q, v;
          q = e[f];
          l = (m = f == g - 1) ? d : 0;
          v = Oe(l, q);
          D(w(a, g - f), b[f], c[f], l, v);
          if (!m) for (++f, l = 0; l < q; ++l) v[l] = Qe(a, b, c, d, e, f, g);
          return v;
        }
        function D(a, b, c, d, e) {
          e.cZ = a;
          e.cM = b;
          e.tM = qa;
          e.__elementTypeId$ = c;
          e.__elementTypeCategory$ = d;
          return e;
        }
        function Oe(a, b) {
          var c = Array(b),
            d;
          switch (a) {
            case 6:
              d = { l: 0, m: 0, h: 0 };
              break;
            case 7:
              d = 0;
              break;
            case 8:
              d = !1;
              break;
            default:
              return c;
          }
          for (var e = 0; e < b; ++e) c[e] = d;
          return c;
        }
        function Re(a, b, c, d, e, f) {
          a === c && ((a = a.slice(b, b + e)), (b = 0));
          var g = b;
          for (b += e; g < b; ) {
            var l = Math.min(g + 1e4, b);
            e = l - g;
            Array.prototype.splice.apply(
              c,
              [d, f ? e : 0].concat(a.slice(g, l))
            );
            g = l;
            d += e;
          }
        }
        function rc(a) {
          return r(a, 39) && s(a.b) !== s((sb(), fc))
            ? s(a.b) === s(fc)
              ? null
              : a.b
            : a;
        }
        function qc(a) {
          var b;
          if (r(a, 12)) return a;
          b = a && a.__gwt$exception;
          if (!b && ((b = new gc(a)), rb(b, a), a && "object" == typeof a))
            try {
              a.__gwt$exception = b;
            } catch (c) {}
          return b;
        }
        function Se() {
          var a;
          a = navigator.userAgent.toLowerCase();
          var b = $doc.documentMode;
          a =
            -1 != a.indexOf("webkit")
              ? "safari"
              : -1 != a.indexOf("msie") && 10 <= b && 11 > b
              ? "ie10"
              : -1 != a.indexOf("msie") && 9 <= b && 11 > b
              ? "ie9"
              : -1 != a.indexOf("msie") && 8 <= b && 11 > b
              ? "ie8"
              : -1 != a.indexOf("gecko") || 11 <= b
              ? "gecko1_8"
              : "unknown";
          if ("safari" !== a) throw new Te(a);
        }
        n(59, 12, ba);
        t(59);
        n(22, 59, ba);
        t(22);
        function Te(a) {
          this.e =
            "" +
            ("Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (" +
              a +
              ").\nExpect more errors.");
          rb(this, this.e);
        }
        n(101, 22, ba, Te);
        t(101);
        n(60, 1, {});
        _.tS = function () {
          return this.a;
        };
        t(60);
        function Ue() {
          rb(this, this.e);
        }
        function Pc(a) {
          qb.call(this, a);
        }
        n(31, 20, ca, Ue, Pc);
        t(31);
        function Ve() {
          rb(this, this.e);
        }
        n(181, 31, ca, Ve);
        t(181);
        function Nc(a) {
          qb.call(this, a);
        }
        n(36, 20, ca, Nc);
        t(36);
        function We() {
          We = k;
          Xe = new Ye(!1);
          Ze = new Ye(!0);
        }
        function Ye(a) {
          this.a = a;
        }
        n(47, 1, { 3: 1, 47: 1, 11: 1 }, Ye);
        _.t = function (a) {
          var b = this.a;
          return b == a.a ? 0 : b ? 1 : -1;
        };
        _.eQ = function (a) {
          return r(a, 47) && a.a == this.a;
        };
        _.hC = function () {
          return this.a ? 1231 : 1237;
        };
        _.tS = function () {
          return "" + this.a;
        };
        _.a = !1;
        var Xe, Ze;
        t(47);
        function $e(a) {
          this.a = a;
        }
        n(37, 1, { 3: 1, 37: 1, 11: 1 }, $e);
        _.t = function (a) {
          return this.a - a.a;
        };
        _.eQ = function (a) {
          return r(a, 37) && a.a == this.a;
        };
        _.hC = function () {
          return this.a;
        };
        _.tS = function () {
          return String.fromCharCode(this.a);
        };
        _.a = 0;
        var af = t(37);
        function bf() {
          bf = k;
          cf = E(af, ea, 37, 128, 0);
        }
        var cf;
        n(76, 1, { 3: 1, 76: 1 });
        t(76);
        function df(a) {
          qb.call(this, a);
        }
        n(23, 20, { 3: 1, 15: 1, 23: 1, 12: 1 }, df);
        t(23);
        function ef() {
          rb(this, this.e);
        }
        n(182, 20, ca, ef);
        t(182);
        function ff(a) {
          this.a = a;
        }
        function gf(a) {
          var b, c;
          return -129 < a && 128 > a
            ? ((b = a + 128),
              (c = (hf(), jf)[b]),
              !c && (c = jf[b] = new ff(a)),
              c)
            : new ff(a);
        }
        n(38, 76, { 3: 1, 11: 1, 38: 1, 76: 1 }, ff);
        _.t = function (a) {
          var b = this.a;
          a = a.a;
          return b < a ? -1 : b > a ? 1 : 0;
        };
        _.eQ = function (a) {
          return r(a, 38) && a.a == this.a;
        };
        _.hC = function () {
          return this.a;
        };
        _.tS = function () {
          return "" + this.a;
        };
        _.a = 0;
        var kf = t(38);
        function hf() {
          hf = k;
          jf = E(kf, ea, 38, 256, 0);
        }
        var jf;
        function lf(a, b) {
          return a < b ? a : b;
        }
        function Rc() {
          rb(this, this.e);
        }
        function mf(a) {
          qb.call(this, a);
        }
        n(53, 20, ca, Rc, mf);
        t(53);
        function nf(a, b) {
          var c;
          c = b.length;
          return a.substr(a.length - c, c) === b;
        }
        function F(a, b) {
          return null == b
            ? !1
            : a == b
            ? !0
            : a.length == b.length && a.toLowerCase() == b.toLowerCase();
        }
        function of(a) {
          return !a.length;
        }
        function pf(a, b, c) {
          var d;
          65536 <= b
            ? ((d = (56320 + ((b - 65536) & 1023)) & 65535),
              (b =
                String.fromCharCode(
                  (55296 + (((b - 65536) >> 10) & 1023)) & 65535
                ) + String.fromCharCode(d)))
            : (b = String.fromCharCode(b & 65535));
          return a.lastIndexOf(b, c);
        }
        function qf(a, b, c, d, e) {
          if (null == c) throw new Rc();
          if (0 > b || 0 > d || 0 >= e || b + e > a.length || d + e > c.length)
            return !1;
          a = a.substr(b, e);
          c = c.substr(d, e);
          return a === c;
        }
        function rf(a) {
          var b = (160).toString(16),
            b = "\\u" + "0000".substring(b.length) + b;
          return a.replace(RegExp(b, "g"), String.fromCharCode(32));
        }
        function sf(a, b) {
          var c;
          c = xf("");
          return a.replace(RegExp(b, "g"), c);
        }
        function zf(a, b) {
          var c;
          c = xf("");
          return a.replace(RegExp(b), c);
        }
        function Gf(a, b) {
          for (var c = RegExp(b, "g"), d = [], e = 0, f = a, g = null; ; ) {
            var l = c.exec(f);
            if (null == l || "" == f) {
              d[e] = f;
              break;
            } else
              (d[e] = f.substring(0, l.index)),
                (f = f.substring(l.index + l[0].length, f.length)),
                (c.lastIndex = 0),
                g == f && ((d[e] = f.substring(0, 1)), (f = f.substring(1))),
                (g = f),
                e++;
          }
          if (0 < a.length) {
            for (c = d.length; 0 < c && "" == d[c - 1]; ) --c;
            c < d.length && d.splice(c, d.length - c);
          }
          c = E(p, h, 2, d.length, 4);
          for (e = 0; e < d.length; ++e) c[e] = d[e];
          return c;
        }
        function Hf(a, b) {
          return a.substr(0, b.length) === b;
        }
        function dg(a, b) {
          return a.substr(b, a.length - b);
        }
        function eg(a, b, c) {
          return a.substr(b, c - b);
        }
        function rg(a) {
          return 0 == a.length || (" " < a[0] && " " < a[a.length - 1])
            ? a
            : a.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, "");
        }
        function xf(a) {
          var b;
          for (b = 0; 0 <= (b = a.indexOf("\\", b)); )
            36 == a.charCodeAt(b + 1)
              ? (a = a.substr(0, b) + "$" + dg(a, ++b))
              : (a = a.substr(0, b) + dg(a, ++b));
          return a;
        }
        var p = t(2);
        function Ia() {
          Ia = k;
          Ka = {};
          Ja = {};
        }
        var Ka,
          Qa = 0,
          Ja;
        function ug() {
          this.a = "";
        }
        function Uc() {
          this.a = "";
        }
        function vg(a) {
          this.a = a;
        }
        n(40, 60, { 221: 1 }, ug, Uc, vg);
        t(40);
        function zg(a) {
          qb.call(this, a);
        }
        n(54, 20, ca, zg);
        t(54);
        function Ag(a, b) {
          var c, d, e;
          Qc(b);
          c = !1;
          for (e = b.D(); e.Q(); ) (d = e.R()), (c |= a.F(d));
          return c;
        }
        function Zg(a) {
          var b, c, d, e;
          e = new vg("[");
          b = !1;
          for (d = a.D(); d.Q(); )
            (c = d.R()),
              b ? (e.a += ", ") : (b = !0),
              (e.a += c === a ? "(this Collection)" : "" + c);
          e.a += "]";
          return e.a;
        }
        n(212, 1, {});
        _.F = function () {
          throw new zg("Add not supported on this collection");
        };
        _.G = function (a) {
          return Ag(this, a);
        };
        _.H = function (a) {
          a: {
            var b, c;
            for (c = this.D(); c.Q(); )
              if (((b = c.R()), s(a) === s(b) || (null != a && ta(a, b)))) {
                a = !0;
                break a;
              }
            a = !1;
          }
          return a;
        };
        _.I = function () {
          return 0 == this.J();
        };
        _.K = function () {
          return this.L(E(pb, da, 1, this.J(), 3));
        };
        _.L = function (a) {
          var b, c, d;
          d = this.J();
          a.length < d && (a = Ne(a, d));
          c = this.D();
          for (b = 0; b < d; ++b) a[b] = c.R();
          a.length > d && (a[d] = null);
          return a;
        };
        _.tS = function () {
          return Zg(this);
        };
        t(212);
        function $g(a, b) {
          var c, d, e;
          c = b.W();
          e = b.X();
          d = a.P(c);
          return !(s(e) === s(d) || (null != e && ta(e, d))) ||
            (null == d && !a.N(c))
            ? !1
            : !0;
        }
        function ah(a, b) {
          var c, d, e;
          for (d = a.O().D(); d.Q(); )
            if (
              ((c = d.R()),
              (e = c.W()),
              s(b) === s(e) || (null != b && ta(b, e)))
            )
              return c;
          return null;
        }
        function bh(a, b) {
          return b === a ? "(this Map)" : "" + b;
        }
        function ch(a) {
          return a ? a.X() : null;
        }
        n(211, 1, ha);
        _.M = function (a) {
          return $g(this, a);
        };
        _.N = function (a) {
          return !!ah(this, a);
        };
        _.eQ = function (a) {
          var b;
          if (a === this) return !0;
          if (!r(a, 46) || this.J() != a.J()) return !1;
          for (b = a.O().D(); b.Q(); ) if (((a = b.R()), !this.M(a))) return !1;
          return !0;
        };
        _.P = function (a) {
          return ch(ah(this, a));
        };
        _.hC = function () {
          return dh(this.O());
        };
        _.J = function () {
          return this.O().J();
        };
        _.tS = function () {
          var a, b, c, d;
          d = new vg("{");
          a = !1;
          for (c = this.O().D(); c.Q(); )
            (b = c.R()),
              a ? (d.a += ", ") : (a = !0),
              (d.a += bh(this, b.W())),
              (d.a += "\x3d"),
              (d.a += bh(this, b.X()));
          d.a += "}";
          return d.a;
        };
        t(211);
        function eh(a, b) {
          return va(b) ? G(a, b) : !!fh(a.a, b);
        }
        function gh(a, b) {
          return va(b) ? H(a, b) : ch(fh(a.a, b));
        }
        function H(a, b) {
          return null == b ? ch(fh(a.a, null)) : a.c.eb(b);
        }
        function G(a, b) {
          return null == b ? !!fh(a.a, null) : void 0 !== a.c.eb(b);
        }
        function hh(a, b, c) {
          return va(b) ? I(a, b, c) : ih(a.a, b, c);
        }
        function I(a, b, c) {
          return null == b ? ih(a.a, null, c) : a.c.hb(b, c);
        }
        function jh(a) {
          kh();
          a.a = lh.bb();
          a.a.b = a;
          a.c = lh.cb();
          a.c.b = a;
          a.b = 0;
          mh(a);
        }
        n(63, 211, ha);
        _.N = function (a) {
          return eh(this, a);
        };
        _.O = function () {
          return new nh(this);
        };
        _.P = function (a) {
          return gh(this, a);
        };
        _.J = function () {
          return this.b;
        };
        _.b = 0;
        t(63);
        n(213, 212, ka);
        _.eQ = function (a) {
          if (a === this) a = !0;
          else if (r(a, 25) && a.J() == this.J())
            a: {
              var b;
              Qc(a);
              for (b = a.D(); b.Q(); )
                if (((a = b.R()), !this.H(a))) {
                  a = !1;
                  break a;
                }
              a = !0;
            }
          else a = !1;
          return a;
        };
        _.hC = function () {
          return dh(this);
        };
        t(213);
        function nh(a) {
          this.a = a;
        }
        n(64, 213, ka, nh);
        _.H = function (a) {
          return r(a, 24) ? $g(this.a, a) : !1;
        };
        _.D = function () {
          return new oh(this.a);
        };
        _.J = function () {
          return this.a.b;
        };
        t(64);
        function ph(a) {
          if (a.a.Q()) return !0;
          if (a.a != a.b) return !1;
          a.a = a.c.a._();
          return a.a.Q();
        }
        function qh(a) {
          if (a._gwt_modCount != a.c._gwt_modCount) throw new rh();
          return y(ph(a)), a.a.R();
        }
        function oh(a) {
          this.c = a;
          this.a = this.b = this.c.c._();
          this._gwt_modCount = a._gwt_modCount;
        }
        n(65, 1, {}, oh);
        _.Q = function () {
          return ph(this);
        };
        _.R = function () {
          return qh(this);
        };
        t(65);
        n(214, 212, { 30: 1 });
        _.S = function () {
          throw new zg("Add not supported on this list");
        };
        _.F = function (a) {
          this.S(this.J(), a);
          return !0;
        };
        _.eQ = function (a) {
          var b, c, d;
          if (a === this) return !0;
          if (!r(a, 30) || this.J() != a.J()) return !1;
          d = a.D();
          for (b = this.D(); b.Q(); )
            if (
              ((a = b.R()),
              (c = d.R()),
              !(s(a) === s(c) || (null != a && ta(a, c))))
            )
              return !1;
          return !0;
        };
        _.hC = function () {
          var a, b, c;
          c = 1;
          for (b = this.D(); b.Q(); )
            (a = b.R()), (c = 31 * c + (null != a ? Ha(a) : 0)), (c = ~~c);
          return c;
        };
        _.D = function () {
          return new M(this);
        };
        _.U = function () {
          throw new zg("Remove not supported on this list");
        };
        t(214);
        function sh(a) {
          if (-1 == a.c) throw new ef();
          a.d.U(a.c);
          a.b = a.c;
          a.c = -1;
        }
        function M(a) {
          this.d = a;
        }
        n(7, 1, {}, M);
        _.Q = function () {
          return this.b < this.d.J();
        };
        _.R = function () {
          return y(this.b < this.d.J()), this.d.T((this.c = this.b++));
        };
        _.V = function () {
          sh(this);
        };
        _.b = 0;
        _.c = -1;
        t(7);
        function th(a, b) {
          this.d = this.a = a;
          Sc(b, a.b.length);
          this.b = b;
        }
        n(43, 7, {}, th);
        t(43);
        function uh(a, b) {
          z(b, a.b);
          return N(a.c, a.a + b);
        }
        function vh(a, b, c) {
          var d = a.b.length;
          if (0 > b) throw new Pc("fromIndex: " + b + " \x3c 0");
          if (c > d) throw new Pc("toIndex: " + c + " \x3e size " + d);
          if (b > c) throw new df("fromIndex: " + b + " \x3e toIndex: " + c);
          this.c = a;
          this.a = b;
          this.b = c - b;
        }
        n(50, 214, { 30: 1 }, vh);
        _.S = function (a, b) {
          Sc(a, this.b);
          wh(this.c, this.a + a, b);
          ++this.b;
        };
        _.T = function (a) {
          return uh(this, a);
        };
        _.U = function (a) {
          z(a, this.b);
          a = this.c.U(this.a + a);
          --this.b;
          return a;
        };
        _.J = function () {
          return this.b;
        };
        _.a = 0;
        _.b = 0;
        t(50);
        function xh(a) {
          a = new oh(new nh(a.a).a);
          return new yh(a);
        }
        function zh(a) {
          this.a = a;
        }
        n(66, 213, ka, zh);
        _.H = function (a) {
          return eh(this.a, a);
        };
        _.D = function () {
          return xh(this);
        };
        _.J = function () {
          return this.a.b;
        };
        t(66);
        function yh(a) {
          this.a = a;
        }
        n(114, 1, {}, yh);
        _.Q = function () {
          return ph(this.a);
        };
        _.R = function () {
          return qh(this.a).W();
        };
        t(114);
        function Ah(a, b) {
          var c;
          c = a.d;
          a.d = b;
          return c;
        }
        n(48, 1, { 48: 1, 24: 1 });
        _.eQ = function (a) {
          return r(a, 24) ? Bh(this.c, a.W()) && Bh(this.d, a.X()) : !1;
        };
        _.W = function () {
          return this.c;
        };
        _.X = function () {
          return this.d;
        };
        _.hC = function () {
          return Ch(this.c) ^ Ch(this.d);
        };
        _.Y = function (a) {
          return Ah(this, a);
        };
        _.tS = function () {
          return this.c + "\x3d" + this.d;
        };
        t(48);
        function Dh(a, b) {
          this.c = a;
          this.d = b;
        }
        n(49, 48, { 48: 1, 49: 1, 24: 1 }, Dh);
        t(49);
        n(217, 1, { 24: 1 });
        _.eQ = function (a) {
          return r(a, 24) ? Bh(this.W(), a.W()) && Bh(this.X(), a.X()) : !1;
        };
        _.hC = function () {
          return Ch(this.W()) ^ Ch(this.X());
        };
        _.tS = function () {
          return this.W() + "\x3d" + this.X();
        };
        t(217);
        function Eh(a, b) {
          var c;
          c = Fh(a, b.W());
          return !!c && Bh(c.d, b.X());
        }
        n(219, 211, ha);
        _.M = function (a) {
          return Eh(this, a);
        };
        _.N = function (a) {
          return !!Fh(this, a);
        };
        _.O = function () {
          return new Gh(this);
        };
        _.P = function (a) {
          return ch(Fh(this, a));
        };
        t(219);
        function Gh(a) {
          this.a = a;
        }
        n(98, 213, ka, Gh);
        _.H = function (a) {
          return r(a, 24) && Eh(this.a, a);
        };
        _.D = function () {
          return new Hh(this.a);
        };
        _.J = function () {
          return this.a.c;
        };
        t(98);
        function Ih(a) {
          a = new Hh(new Jh(a.a).a);
          return new Kh(a);
        }
        function Lh(a) {
          this.a = a;
        }
        n(193, 213, ka, Lh);
        _.H = function (a) {
          return !!Fh(this.a, a);
        };
        _.D = function () {
          return Ih(this);
        };
        _.J = function () {
          return this.a.c;
        };
        t(193);
        function Kh(a) {
          this.a = a;
        }
        n(194, 1, {}, Kh);
        _.Q = function () {
          return this.a.a.Q();
        };
        _.R = function () {
          return this.a.a.R().W();
        };
        t(194);
        function Mh(a, b) {
          var c;
          c = Nh(a, b);
          try {
            return y(c.b != c.d.c), (c.c = c.b), (c.b = c.b.a), ++c.a, c.c.c;
          } catch (d) {
            d = qc(d);
            if (r(d, 55)) throw new Pc("Can't get element " + b);
            throw rc(d);
          }
        }
        n(215, 214, { 30: 1 });
        _.S = function (a, b) {
          var c;
          c = Nh(this, a);
          Oh(c.d, b, c.b.b, c.b);
          ++c.a;
          c.c = null;
        };
        _.T = function (a) {
          return Mh(this, a);
        };
        _.D = function () {
          return Nh(this, 0);
        };
        _.U = function (a) {
          var b, c;
          b = Nh(this, a);
          try {
            return (
              (c = (y(b.b != b.d.c), (b.c = b.b), (b.b = b.b.a), ++b.a, b.c.c)),
              Ph(b),
              c
            );
          } catch (d) {
            d = qc(d);
            if (r(d, 55)) throw new Pc("Can't remove element " + a);
            throw rc(d);
          }
        };
        t(215);
        function Qh(a) {
          a.b = E(pb, da, 1, 0, 3);
        }
        function wh(a, b, c) {
          Sc(b, a.b.length);
          a.b.splice(b, 0, c);
        }
        function O(a, b) {
          a.b[a.b.length] = b;
          return !0;
        }
        function Rh(a, b) {
          var c;
          c = b.K();
          if (0 == c.length) return !1;
          Re(c, 0, a.b, a.b.length, c.length, !1);
          return !0;
        }
        function N(a, b) {
          z(b, a.b.length);
          return a.b[b];
        }
        function Sh(a, b) {
          for (var c = 0; c < a.b.length; ++c) if (Bh(b, a.b[c])) return c;
          return -1;
        }
        function Th(a, b) {
          var c;
          c = (z(b, a.b.length), a.b[b]);
          a.b.splice(b, 1);
          return c;
        }
        function Uh(a, b, c) {
          z(b, a.b.length);
          a.b[b] = c;
        }
        function Vh(a, b) {
          var c, d;
          d = a.b.length;
          b.length < d && (b = Ne(b, d));
          for (c = 0; c < d; ++c) b[c] = a.b[c];
          b.length > d && (b[d] = null);
          return b;
        }
        function P() {
          Qh(this);
        }
        function Wh(a) {
          Qh(this);
          a = Me(a.b, a.b.length);
          Re(a, 0, this.b, 0, a.length, !1);
        }
        n(8, 214, la, P, Wh);
        _.S = function (a, b) {
          wh(this, a, b);
        };
        _.F = function (a) {
          return O(this, a);
        };
        _.G = function (a) {
          return Rh(this, a);
        };
        _.H = function (a) {
          return -1 != Sh(this, a);
        };
        _.T = function (a) {
          return N(this, a);
        };
        _.I = function () {
          return 0 == this.b.length;
        };
        _.U = function (a) {
          return Th(this, a);
        };
        _.J = function () {
          return this.b.length;
        };
        _.K = function () {
          return Me(this.b, this.b.length);
        };
        _.L = function (a) {
          return Vh(this, a);
        };
        t(8);
        function Xh(a, b, c, d, e, f) {
          var g, l, m;
          if (7 > d - c)
            for (a = c, g = a + 1; g < d; ++g)
              for (m = g; m > a && 0 < f.Z(b[m - 1], b[m]); --m)
                (c = b[m]), (b[m] = b[m - 1]), (b[m - 1] = c);
          else if (
            ((l = c + e),
            (g = d + e),
            (m = l + ((g - l) >> 1)),
            Xh(b, a, l, m, -e, f),
            Xh(b, a, m, g, -e, f),
            0 >= f.Z(a[m - 1], a[m]))
          )
            for (; c < d; ) b[c++] = a[l++];
          else
            for (e = l, l = m; c < d; )
              l >= g || (e < m && 0 >= f.Z(a[e], a[l]))
                ? (b[c++] = a[e++])
                : (b[c++] = a[l++]);
        }
        function Yh(a) {
          this.a = a;
        }
        n(115, 214, la, Yh);
        _.H = function (a) {
          a: {
            var b, c;
            b = 0;
            for (c = this.a.length; b < c; ++b)
              if (Bh(a, (z(b, this.a.length), this.a[b]))) {
                a = b;
                break a;
              }
            a = -1;
          }
          return -1 != a;
        };
        _.T = function (a) {
          return z(a, this.a.length), this.a[a];
        };
        _.J = function () {
          return this.a.length;
        };
        _.K = function () {
          var a = this.a;
          return Me(a, a.length);
        };
        _.L = function (a) {
          var b, c;
          c = this.a.length;
          a.length < c && (a = Ne(a, c));
          for (b = 0; b < c; ++b) a[b] = this.a[b];
          a.length > c && (a[c] = null);
          return a;
        };
        t(115);
        function dh(a) {
          var b, c;
          c = 0;
          for (b = a.D(); b.Q(); )
            (a = b.R()), (c += null != a ? Ha(a) : 0), (c = ~~c);
          return c;
        }
        function Zh() {
          Zh = k;
          $h = new ai();
        }
        var $h;
        function bi(a, b) {
          Qc(a);
          Qc(b);
          return va(a) ? (a == b ? 0 : a < b ? -1 : 1) : a.t(b);
        }
        function ai() {}
        n(188, 1, {}, ai);
        _.Z = function (a, b) {
          return bi(a, b);
        };
        t(188);
        function mh(a) {
          a._gwt_modCount = (a._gwt_modCount | 0) + 1;
        }
        function rh() {
          rb(this, this.e);
        }
        n(195, 20, ca, rh);
        t(195);
        function ci() {
          rb(this, this.e);
        }
        n(89, 20, ca, ci);
        t(89);
        function di(a, b) {
          return ei(a.a, b) ? a.b[b.b] : null;
        }
        function fi(a, b, c) {
          gi(a.a, b);
          hi(a, b.b, c);
        }
        function hi(a, b, c) {
          var d;
          d = a.b[b];
          a.b[b] = c;
          return d;
        }
        function ii(a) {
          var b;
          this.a = ((b = a.e && a.e()), new ji(b, Ne(b, b.length)));
          this.b = E(pb, da, 1, this.a.a.length, 3);
        }
        n(186, 211, ha, ii);
        _.N = function (a) {
          return ei(this.a, a);
        };
        _.O = function () {
          return new ki(this);
        };
        _.P = function (a) {
          return di(this, a);
        };
        _.J = function () {
          return this.a.c;
        };
        t(186);
        function ki(a) {
          this.a = a;
        }
        n(93, 213, ka, ki);
        _.H = function (a) {
          return r(a, 24) ? $g(this.a, a) : !1;
        };
        _.D = function () {
          return new li(this.a);
        };
        _.J = function () {
          return this.a.a.c;
        };
        t(93);
        function li(a) {
          this.c = a;
          this.a = new mi(this.c.a);
        }
        n(94, 1, {}, li);
        _.Q = function () {
          return ni(this.a);
        };
        _.R = function () {
          return (this.b = oi(this.a)), new pi(this.c, this.b);
        };
        t(94);
        function pi(a, b) {
          this.b = a;
          this.a = b;
        }
        n(95, 217, { 24: 1 }, pi);
        _.W = function () {
          return this.a;
        };
        _.X = function () {
          return this.b.b[this.a.b];
        };
        _.Y = function (a) {
          return hi(this.b, this.a.b, a);
        };
        t(95);
        n(220, 213, ka);
        t(220);
        function gi(a, b) {
          var c;
          Qc(b);
          c = b.b;
          return a.b[c] ? !1 : ((a.b[c] = b), ++a.c, !0);
        }
        function ei(a, b) {
          return r(b, 9) && !!b && a.b[b.b] == b;
        }
        function ji(a, b) {
          this.a = a;
          this.b = b;
          this.c = 0;
        }
        n(196, 220, ka, ji);
        _.F = function (a) {
          return gi(this, a);
        };
        _.H = function (a) {
          return ei(this, a);
        };
        _.D = function () {
          return new mi(this);
        };
        _.J = function () {
          return this.c;
        };
        _.c = 0;
        t(196);
        function qi(a) {
          var b;
          ++a.a;
          for (b = a.c.a.length; a.a < b && !a.c.b[a.a]; ++a.a);
        }
        function ni(a) {
          return a.a < a.c.a.length;
        }
        function oi(a) {
          return y(a.a < a.c.a.length), (a.b = a.a), qi(a), a.c.b[a.b];
        }
        function mi(a) {
          this.c = a;
          qi(this);
        }
        n(100, 1, {}, mi);
        _.Q = function () {
          return ni(this);
        };
        _.R = function () {
          return oi(this);
        };
        _.a = -1;
        _.b = -1;
        t(100);
        function ri(a, b) {
          return s(a) === s(b) || (null != a && ta(a, b));
        }
        function ui() {
          jh(this);
        }
        function Ai(a) {
          if (!(0 <= a)) throw new df("Negative initial capacity");
          jh(this);
        }
        n(18, 63, { 3: 1, 46: 1 }, ui, Ai);
        t(18);
        function R(a, b) {
          return null == hh(a.a, b, a);
        }
        function S(a, b) {
          return eh(a.a, b);
        }
        function Ci() {
          this.a = new ui();
        }
        function cj(a) {
          this.a = new Ai(a.a.length);
          Ag(this, a);
        }
        n(17, 213, { 3: 1, 25: 1 }, Ci, cj);
        _.F = function (a) {
          return R(this, a);
        };
        _.H = function (a) {
          return S(this, a);
        };
        _.I = function () {
          return 0 == this.a.b;
        };
        _.D = function () {
          return xh(new zh(this.a));
        };
        _.J = function () {
          return this.a.b;
        };
        _.tS = function () {
          return Zg(new zh(this.a));
        };
        t(17);
        function fh(a, b) {
          var c, d, e, f;
          c = null == b ? "0" : "" + ~~Ha(b);
          d = a.a[c] || [];
          e = 0;
          for (f = d.length; e < f; ++e)
            if (((c = d[e]), ri(b, c.W()))) return c;
          return null;
        }
        function ih(a, b, c) {
          var d, e, f, g;
          d = null == b ? "0" : "" + ~~Ha(b);
          e = a.a;
          d = e[d] || (e[d] = []);
          f = 0;
          for (g = d.length; f < g; ++f)
            if (((e = d[f]), ri(b, e.W()))) return e.Y(c);
          d[d.length] = new Dh(b, c);
          a = a.b;
          ++a.b;
          mh(a);
          return null;
        }
        function ej() {
          this.a = this.$();
        }
        n(90, 1, {}, ej);
        _.$ = function () {
          return Object.create(null);
        };
        _._ = function () {
          return new fj(this);
        };
        t(90);
        function lj(a) {
          if (a.c < a.a.length) return !0;
          if (a.b < a.d.length - 1) {
            var b = a.d[++a.b];
            a.a = a.f.a[b];
            a.c = 0;
            return !0;
          }
          return !1;
        }
        function fj(a) {
          this.f = a;
          this.d = Object.getOwnPropertyNames(this.f.a);
          this.a = E(mj, da, 24, 0, 0);
        }
        n(145, 1, {}, fj);
        _.Q = function () {
          return lj(this);
        };
        _.R = function () {
          return y(lj(this)), (this.e = this.a[this.c++]), this.e;
        };
        _.b = -1;
        _.c = 0;
        _.e = null;
        t(145);
        function nj() {
          ej.call(this);
        }
        n(143, 90, {}, nj);
        _.$ = function () {
          return {};
        };
        _._ = function () {
          var a = this.ab(),
            b = this.a,
            c;
          for (c in b)
            if (c == parseInt(c, 10))
              for (var d = b[c], e = 0, f = d.length; e < f; ++e) a.F(d[e]);
          return a.D();
        };
        _.ab = function () {
          return new oj(this);
        };
        t(143);
        function oj(a) {
          this.a = a;
          Qh(this);
        }
        n(144, 8, la, oj);
        _.U = function (a) {
          a = Th(this, a);
          a: {
            var b = this.a,
              c = a.W(),
              d,
              e,
              f,
              g;
            f = null == c ? "0" : "" + ~~Ha(c);
            d = b.a[f] || [];
            for (g = 0; g < d.length; g++)
              if (((e = d[g]), ri(c, e.W()))) {
                1 == d.length ? delete b.a[f] : d.splice(g, 1);
                b = b.b;
                --b.b;
                mh(b);
                break a;
              }
          }
          return a;
        };
        t(144);
        function tj() {}
        n(140, 1, {}, tj);
        _.bb = function () {
          return new ej();
        };
        _.cb = function () {
          return new Dj();
        };
        t(140);
        function kh() {
          kh = k;
          var a, b;
          if ((b = Object.create && Object.getOwnPropertyNames))
            (b = Object.create(null)),
              void 0 !== b.__proto__ ||
              0 != Object.getOwnPropertyNames(b).length
                ? (b = !1)
                : ((b.__proto__ = 42), (b = 42 !== b.__proto__ ? !1 : !0));
          lh = b
            ? ((a = Object.create(null)),
              (a.__proto__ = 42),
              0 == Object.getOwnPropertyNames(a).length)
              ? new Ej()
              : new tj()
            : new Fj();
        }
        var lh;
        function Ej() {}
        n(142, 140, {}, Ej);
        _.cb = function () {
          return new Sj();
        };
        t(142);
        function Fj() {}
        n(141, 140, {}, Fj);
        _.bb = function () {
          return new nj();
        };
        _.cb = function () {
          return new Tj();
        };
        t(141);
        function ek(a, b, c) {
          var d;
          d = a.a[b];
          if (void 0 === d) {
            var e = a.b;
            ++e.b;
            mh(e);
          }
          a.a[b] = void 0 === c ? null : c;
          return d;
        }
        function fk(a, b) {
          var c;
          c = a.a[b];
          if (void 0 !== c) {
            delete a.a[b];
            var d = a.b;
            --d.b;
            mh(d);
          }
          return c;
        }
        function Dj() {
          this.a = this.db();
        }
        n(72, 1, {}, Dj);
        _.db = function () {
          return Object.create(null);
        };
        _._ = function () {
          var a;
          a = this.fb();
          return new gk(this, a);
        };
        _.eb = function (a) {
          return this.a[a];
        };
        _.fb = function () {
          return Object.getOwnPropertyNames(this.a);
        };
        _.gb = function (a) {
          return new hk(this, a);
        };
        _.hb = function (a, b) {
          return ek(this, a, b);
        };
        _.ib = function (a) {
          return fk(this, a);
        };
        t(72);
        function gk(a, b) {
          this.b = a;
          this.c = b;
        }
        n(132, 1, {}, gk);
        _.Q = function () {
          return this.a < this.c.length;
        };
        _.R = function () {
          return y(this.a < this.c.length), new hk(this.b, this.c[this.a++]);
        };
        _.a = 0;
        t(132);
        function hk(a, b) {
          this.a = a;
          this.b = b;
        }
        n(84, 217, { 24: 1 }, hk);
        _.W = function () {
          return this.b;
        };
        _.X = function () {
          return this.a.eb(this.b);
        };
        _.Y = function (a) {
          return this.a.hb(this.b, a);
        };
        t(84);
        function Tj() {
          Dj.call(this);
        }
        n(129, 72, {}, Tj);
        _.db = function () {
          return {};
        };
        _._ = function () {
          var a = this.jb(),
            b;
          for (b in this.a)
            if (58 == b.charCodeAt(0)) {
              var c = this.gb(b.substring(1));
              a.F(c);
            }
          return a.D();
        };
        _.eb = function (a) {
          return this.a[":" + a];
        };
        _.jb = function () {
          return new ik(this);
        };
        _.hb = function (a, b) {
          return ek(this, ":" + a, b);
        };
        _.ib = function (a) {
          return fk(this, ":" + a);
        };
        t(129);
        function ik(a) {
          this.a = a;
          Qh(this);
        }
        n(131, 8, la, ik);
        _.U = function (a) {
          var b;
          return (b = Th(this, a)), fk(this.a, ":" + b.W()), b;
        };
        t(131);
        function Sj() {
          Dj.call(this);
        }
        n(130, 72, {}, Sj);
        _.fb = function () {
          var a;
          a = Object.getOwnPropertyNames(this.a);
          void 0 !== this.a.__proto__ && (a[a.length] = "__proto__");
          return a;
        };
        t(130);
        function jk(a, b) {
          Oh(a, b, a.c.b, a.c);
          return !0;
        }
        function Oh(a, b, c, d) {
          var e;
          e = new kk();
          e.c = b;
          e.b = c;
          e.a = d;
          d.b = c.a = e;
          ++a.b;
        }
        function Nh(a, b) {
          var c, d;
          Sc(b, a.b);
          if (b >= a.b >> 1) for (d = a.c, c = a.b; c > b; --c) d = d.b;
          else for (d = a.a.a, c = 0; c < b; ++c) d = d.a;
          return new lk(a, b, d);
        }
        function mk() {
          this.a = new kk();
          this.c = new kk();
          this.a.a = this.c;
          this.c.b = this.a;
          this.a.b = this.c.a = null;
          this.b = 0;
        }
        n(81, 215, la, mk);
        _.F = function (a) {
          return jk(this, a);
        };
        _.J = function () {
          return this.b;
        };
        _.b = 0;
        t(81);
        function Ph(a) {
          var b;
          if (!a.c) throw new ef();
          b = a.c.a;
          var c = a.d,
            d = a.c;
          d.a.b = d.b;
          d.b.a = d.a;
          d.a = d.b = null;
          d.c = null;
          --c.b;
          a.b == a.c ? (a.b = b) : --a.a;
          a.c = null;
        }
        function lk(a, b, c) {
          this.d = a;
          this.b = c;
          this.a = b;
        }
        n(116, 1, {}, lk);
        _.Q = function () {
          return this.b != this.d.c;
        };
        _.R = function () {
          return (
            y(this.b != this.d.c),
            (this.c = this.b),
            (this.b = this.b.a),
            ++this.a,
            this.c.c
          );
        };
        _.V = function () {
          Ph(this);
        };
        _.a = 0;
        _.c = null;
        t(116);
        function kk() {}
        n(67, 1, {}, kk);
        t(67);
        var mj = ob();
        function Oc() {
          rb(this, this.e);
        }
        n(55, 20, { 3: 1, 15: 1, 12: 1, 55: 1 }, Oc);
        t(55);
        function Bh(a, b) {
          return s(a) === s(b) || (null != a && ta(a, b));
        }
        function Ch(a) {
          return null != a ? Ha(a) : 0;
        }
        function nk(a, b) {
          if (0 > a || a >= b) throw new Ve();
        }
        n(125, 214, la);
        _.S = function (a, b) {
          nk(a, this.a.b.length + 1);
          wh(this.a, a, b);
        };
        _.F = function (a) {
          return O(this.a, a);
        };
        _.G = function (a) {
          return Rh(this.a, a);
        };
        _.H = function (a) {
          return -1 != Sh(this.a, a);
        };
        _.T = function (a) {
          return nk(a, this.a.b.length), N(this.a, a);
        };
        _.I = function () {
          return 0 == this.a.b.length;
        };
        _.D = function () {
          return new M(this.a);
        };
        _.U = function (a) {
          return nk(a, this.a.b.length), this.a.U(a);
        };
        _.J = function () {
          return this.a.b.length;
        };
        _.K = function () {
          var a = this.a;
          return Me(a.b, a.b.length);
        };
        _.L = function (a) {
          return Vh(this.a, a);
        };
        _.tS = function () {
          return Zg(this.a);
        };
        t(125);
        function ok(a) {
          var b;
          b = a.a.b.length;
          if (0 < b) return nk(b - 1, a.a.b.length), a.a.U(b - 1);
          throw new ci();
        }
        function pk() {
          this.a = new P();
        }
        n(68, 125, la, pk);
        t(68);
        function Fh(a, b) {
          var c, d;
          for (d = a.b; d; ) {
            c = bi(b, d.c);
            if (0 == c) return d;
            c = 0 > c ? 0 : 1;
            d = d.a[c];
          }
          return null;
        }
        function qk(a, b, c, d, e, f, g, l) {
          var m;
          if (d) {
            (m = d.a[0]) && qk(a, b, c, m, e, f, g, l);
            m = d.c;
            var q, v;
            (c.kb() && ((q = bi(m, e)), 0 > q || (!f && 0 == q))) ||
              (c.lb() && ((v = bi(m, g)), 0 < v || (!l && 0 == v))) ||
              b.F(d);
            (d = d.a[1]) && qk(a, b, c, d, e, f, g, l);
          }
        }
        function rk(a, b, c, d) {
          var e, f;
          if (b) {
            e = bi(c.c, b.c);
            if (0 == e) return (d.d = Ah(b, c.d)), (d.b = !0), b;
            e = 0 > e ? 0 : 1;
            b.a[e] = rk(a, b.a[e], c, d);
            sk(b.a[e]) &&
              (sk(b.a[1 - e])
                ? ((b.b = !0), (b.a[0].b = !1), (b.a[1].b = !1))
                : sk(b.a[e].a[e])
                ? (b = tk(b, 1 - e))
                : sk(b.a[e].a[1 - e]) &&
                  (b =
                    ((f = 1 - (1 - e)),
                    (b.a[f] = tk(b.a[f], f)),
                    tk(b, 1 - e))));
          } else return c;
          return b;
        }
        function sk(a) {
          return !!a && a.b;
        }
        function tk(a, b) {
          var c, d;
          c = 1 - b;
          d = a.a[c];
          a.a[c] = d.a[b];
          d.a[b] = a;
          a.b = !0;
          d.b = !1;
          return d;
        }
        function uk() {
          var a = null;
          this.b = null;
          !a && (a = (Zh(), Zh(), $h));
          this.a = a;
        }
        n(97, 219, { 3: 1, 46: 1 }, uk);
        _.O = function () {
          return new Jh(this);
        };
        _.J = function () {
          return this.c;
        };
        _.c = 0;
        t(97);
        function Hh(a) {
          var b = (vk(), wk),
            c;
          c = new P();
          qk(a, c, b, a.b, null, !1, null, !1);
          this.a = new th(c, 0);
        }
        n(75, 1, {}, Hh);
        _.Q = function () {
          return this.a.Q();
        };
        _.R = function () {
          return this.a.R();
        };
        t(75);
        function Jh(a) {
          this.a = a;
        }
        n(99, 98, ka, Jh);
        t(99);
        function xk(a, b) {
          Dh.call(this, a, b);
          this.a = E(yk, da, 58, 2, 0);
          this.b = !0;
        }
        n(58, 49, { 48: 1, 49: 1, 24: 1, 58: 1 }, xk);
        _.b = !1;
        var yk = t(58);
        function zk() {}
        n(189, 1, {}, zk);
        _.tS = function () {
          return (
            "State: mv\x3d" +
            this.c +
            " value\x3d" +
            this.d +
            " done\x3d" +
            this.a +
            " found\x3d" +
            this.b
          );
        };
        _.a = !1;
        _.b = !1;
        _.c = !1;
        t(189);
        function vk() {
          vk = k;
          wk = new Ak("All", 0);
          Bk = new Ck();
          Dk = new Ek();
          Fk = new Gk();
        }
        function Ak(a, b) {
          C.call(this, a, b);
        }
        n(29, 9, ma, Ak);
        _.kb = function () {
          return !1;
        };
        _.lb = function () {
          return !1;
        };
        var wk,
          Bk,
          Dk,
          Fk,
          Hk = u(29, function () {
            vk();
            return D(w(Hk, 1), ea, 29, 0, [wk, Bk, Dk, Fk]);
          });
        function Ck() {
          C.call(this, "Head", 1);
        }
        n(190, 29, ma, Ck);
        _.lb = function () {
          return !0;
        };
        u(190, null);
        function Ek() {
          C.call(this, "Range", 2);
        }
        n(191, 29, ma, Ek);
        _.kb = function () {
          return !0;
        };
        _.lb = function () {
          return !0;
        };
        u(191, null);
        function Gk() {
          C.call(this, "Tail", 3);
        }
        n(192, 29, ma, Gk);
        _.kb = function () {
          return !0;
        };
        u(192, null);
        function Ik(a) {
          this.a = new uk();
          Ag(this, a);
        }
        n(91, 213, { 3: 1, 25: 1 }, Ik);
        _.F = function (a) {
          var b = this.a,
            c = (We(), Xe);
          a = new xk(a, c);
          c = new zk();
          b.b = rk(b, b.b, a, c);
          c.b || ++b.c;
          b.b.b = !1;
          return null == c.d;
        };
        _.H = function (a) {
          return !!Fh(this.a, a);
        };
        _.D = function () {
          return Ih(new Lh(this.a));
        };
        _.J = function () {
          return this.a.c;
        };
        t(91);
        function Jk(a) {
          var b;
          if (!(0 < a.a.b)) {
            b = Kk(a.f);
            !b.length || jk(a.a, b);
            b = a.a;
            var c;
            var d = $doc.title,
              e = $doc.documentElement,
              f;
            c = f = "";
            p == p
              ? (f = c = d)
              : e &&
                ((d = e.getElementsByTagName("TITLE")),
                0 < d.length && (f = c = Lk(d[0])));
            if (f.length) {
              T();
              if (/ [\|\-] /i.test(f))
                (f = c.replace(RegExp("(.*)[\\|\\-] .*", "gi"), "$1")),
                  3 > Mk.Bb(f) &&
                    (f = c.replace(
                      RegExp("[^\\|\\-]*[\\|\\-](.*)", "gi"),
                      "$1"
                    ));
              else if (-1 != f.indexOf(": "))
                (f = c.replace(RegExp(".*:(.*)", "gi"), "$1")),
                  3 > Mk.Bb(f) &&
                    (f = c.replace(RegExp("[^:]*[:](.*)", "gi"), "$1"));
              else if (e && (150 < f.length || 15 > f.length)) {
                f = e.getElementsByTagName("H1");
                e = "";
                for (d = 0; d < f.length && !e.length; d++) e = Nk(f[d]);
                f = e;
                !f.length && (f = c);
              }
              f = Ok(f);
              4 >= Mk.Bb(f) && (f = c);
              c = f;
            } else c = "";
            jk(b, c);
            p == p && jk(a.a, $doc.title);
          }
        }
        function Pk(a) {
          var b, c;
          this.b = a;
          this.a = new mk();
          this.e = ((b = {}), (b[6] = []), b);
          this.d = ((c = {}), c);
          b = U();
          this.f = new Qk(a, this.e);
          a = U() - b;
          if (void 0 == a) throw new TypeError();
          this.e[1] = a;
          this.g = "";
        }
        n(103, 1, {}, Pk);
        t(103);
        function Rk() {}
        n(104, 1, {}, Rk);
        t(104);
        function Sk(a) {
          var b,
            c,
            d,
            e,
            f,
            g,
            l,
            m,
            q,
            v,
            J,
            tb,
            Ca,
            si,
            xn,
            ti,
            ia,
            tf,
            uf,
            yn,
            zn;
          v = U();
          var An = Lk($doc.documentElement),
            Bn,
            Cn;
          T();
          Mk =
            ((Bn = RegExp("[\\u3040-\\uA4CF]", "g")),
            (Cn = RegExp("[\\uAC00-\\uD7AF]", "g")),
            Bn.test(An) ? new Tk() : Cn.test(An) ? new Uk() : new Vk());
          m = ((si = {}), (si[10] = []), si);
          c = new Pk($doc.documentElement);
          var Fn = (Jk(c), Mh(c.a, 0));
          if (void 0 == Fn) throw new TypeError();
          m[1] = Fn;
          var vi;
          if (void 0 != a[2]) {
            if (void 0 === a[2]) throw new TypeError();
            vi = a[2];
          } else vi = 0;
          Wk = vi;
          V("DomDistiller debug level: " + Wk);
          b = ((xn = {}), xn);
          var wi;
          if ((wi = void 0 != a[1])) {
            if (void 0 === a[1]) throw new TypeError();
            wi = a[1];
          }
          var Gn = wi,
            tc,
            de,
            xi,
            ee,
            cd,
            yi,
            fe,
            Hn,
            vf,
            dd;
          cd = U();
          yi = new Rk();
          fe = new Xk();
          Hn = Yk(
            c.b,
            'meta[name\x3d"viewport"][content*\x3d"width\x3ddevice-width"]'
          );
          vf = new Zk(fe);
          vf.i = 0 < Hn.length;
          var zi;
          var Kn = c.b;
          W();
          var wf, uc;
          wf = Kn.getElementsByTagName("ARTICLE");
          uc = $k(wf);
          1 == uc.b.length
            ? (zi = (z(0, uc.b.length), uc.b[0]))
            : ((wf = Yk(
                Kn,
                '[itemscope][itemtype*\x3d"Article"],[itemscope][itemtype*\x3d"Posting"]'
              )),
              (uc = $k(wf)),
              (zi = 0 < uc.b.length ? al(uc) : null));
          tc =
            ((dd = zi),
            (vf.d = !!dd),
            dd ? 1 <= Wk && V("Extracted article element: " + dd) : (dd = c.b),
            bl(new cl(vf), dd),
            (yi.a = (dl(fe, fe.d), fe.b)),
            Jk(c),
            yi);
          var Nn = U() - cd;
          if (void 0 == Nn) throw new TypeError();
          c.e[2] = Nn;
          cd = U();
          var Da = tc.a,
            K;
          var ge, yf, ua, Bi, ed;
          ed = new P();
          b: {
            var he;
            for (he = 0; he < Da.a.b.length; he++)
              if (r(N(Da.a, he), 35)) {
                ua = he;
                break b;
              }
            ua = Da.a.b.length;
          }
          if (ua != Da.a.b.length) {
            Bi = yf = N(Da.a, ua).d;
            ge = new el(Da.a, ua);
            for (++ua; ua < Da.a.b.length; ua++)
              r(N(Da.a, ua), 35) &&
                ((yf = N(Da.a, ua).d),
                yf == Bi
                  ? fl(ge, new el(Da.a, ua))
                  : ((ed.b[ed.b.length] = ge),
                    (Bi = yf),
                    (ge = new el(Da.a, ua))));
            ed.b[ed.b.length] = ge;
          }
          K = new gl(ed);
          var yr = c.a,
            Q;
          hl(K, !0, "Start");
          var zr = (il(), K),
            Di,
            ub;
          for (ub = new M(zr.a); ub.b < ub.d.J(); ) {
            Di = (y(ub.b < ub.d.J()), ub.d.T((ub.c = ub.b++)));
            var Ei;
            var Fi = Di,
              ie = void 0;
            14 < Fi.d
              ? (Ei = !1)
              : ((ie = Ok(Fi.g)),
                (Ei =
                  8 <= ie.length
                    ? jl.test(ie)
                    : 1 == Fi.c
                    ? "Comment" === ie
                    : "Shares" === ie
                    ? !0
                    : !1));
            Ei && R(Di.b, "STRICTLY_NOT_CONTENT");
          }
          var Gi = new kl(yr),
            Af,
            vb,
            Ea;
          if (Gi.a)
            for (vb = new M(K.a); vb.b < vb.d.J(); )
              (Af = (y(vb.b < vb.d.J()), vb.d.T((vb.c = vb.b++)))),
                (Ea = Af.g),
                (Ea = rf(Ea)),
                (Ea = sf(Ea, "'")),
                (Ea = rg(Ea).toLowerCase()),
                S(Gi.a, Ea) && R(Af.b, "de.l3s.boilerpipe/TITLE"),
                (Ea = rg(Ea.replace(ll, ""))),
                S(Gi.a, Ea) && R(Af.b, "de.l3s.boilerpipe/TITLE");
          var je, Bf, Fa, ke, le, La, db;
          La = K.a;
          if (0 == La.b.length) Q = !1;
          else {
            Bf = !1;
            for (Fa = 0; Fa < La.b.length; Fa++)
              (le = 0 == Fa ? null : (z(Fa - 1, La.b.length), La.b[Fa - 1])),
                (je = (z(Fa, La.b.length), La.b[Fa])),
                (ke =
                  Fa + 1 == La.b.length
                    ? null
                    : (z(Fa + 1, La.b.length), La.b[Fa + 1])),
                (Bf |=
                  (0.333333 >= je.c
                    ? !le || 0.555556 >= le.c
                      ? 16 >= je.d
                        ? !ke || 15 >= ke.d
                          ? !le || 4 >= le.d
                            ? (db = !1)
                            : (db = !0)
                          : (db = !0)
                        : (db = !0)
                      : 40 >= je.d
                      ? !ke || 17 >= ke.d
                        ? (db = !1)
                        : (db = !0)
                      : (db = !0)
                    : (db = !1),
                  ml(je, db)));
            Q = Bf;
          }
          hl(K, Q, "Classification Complete");
          var Ar = (nl(), ol),
            Hi,
            Vn,
            Ii,
            Cf,
            Wn,
            Df,
            wb;
          Hi = !1;
          wb = new M(K.a);
          a: for (; wb.b < wb.d.J(); )
            if (((Df = (y(wb.b < wb.d.J()), wb.d.T((wb.c = wb.b++)))), Df.a))
              for (Ii = Ar.a, Cf = 0, Wn = Ii.length; Cf < Wn; ++Cf)
                if (((Vn = Ii[Cf]), S(Df.b, Vn))) {
                  ml(Df, !1);
                  Hi = !0;
                  continue a;
                }
          Q = Hi;
          hl(K, Q, "Ignore Strictly Not Content blocks");
          var Ji = pl();
          Ji.e = 0.5;
          Ji.d = 10;
          Q = ql(rl(Ji), K);
          hl(K, Q, "SimilarSiblingContentExpansion: Cross headings");
          var Ef = pl();
          Ef.c = !0;
          Ef.e = 0;
          Ef.d = 10;
          Q = ql(rl(Ef), K);
          hl(K, Q, "SimilarSiblingContentExpansion: Mixed tags");
          var Ff, xb, $n, me, Ga, Ki;
          Ki = K.a;
          if (2 > Ki.b.length) Q = !1;
          else {
            Ff = !1;
            me = new th(Ki, 0);
            for (xb = me.R(); me.Q(); )
              if (
                ((Ga = xb),
                (xb = me.R()),
                S(Ga.b, "de.l3s.boilerpipe/HEADING") &&
                  !(
                    S(Ga.b, "STRICTLY_NOT_CONTENT") ||
                    S(xb.b, "STRICTLY_NOT_CONTENT") ||
                    S(Ga.b, "de.l3s.boilerpipe/TITLE") ||
                    S(xb.b, "de.l3s.boilerpipe/TITLE")
                  ))
              )
                if (xb.a) {
                  Ff = !0;
                  $n = Ga.a;
                  fl(Ga, xb);
                  xb = Ga;
                  me.V();
                  var ao = Ga;
                  S(ao.b, "de.l3s.boilerpipe/HEADING") &&
                    ao.b.a.c.ib("de.l3s.boilerpipe/HEADING");
                  $n || R(Ga.b, "BOILERPLATE_HEADING_FUSED");
                } else Ga.a && ((Ff = !0), ml(Ga, !1));
            Q = Ff;
          }
          hl(K, Q, "HeadingFusion");
          Q = sl((tl(), ul), K);
          hl(K, Q, "BlockProximityFusion: Distance 1");
          var Br = (vl(), wl),
            Li,
            eb,
            Mi,
            ho;
          ho = K.a;
          Li = !1;
          for (eb = new M(ho); eb.b < eb.d.J(); )
            (Mi = (y(eb.b < eb.d.J()), eb.d.T((eb.c = eb.b++)))),
              Mi.a ||
                (null != Br.a && S(Mi.b, "de.l3s.boilerpipe/TITLE")) ||
                (sh(eb), (Li = !0));
          Q = Li;
          hl(K, Q, "BlockFilter");
          Q = sl(xl, K);
          hl(K, Q, "BlockProximityFusion: Same level content-only");
          var Cr = (yl(), zl),
            Ni,
            yb,
            ne,
            Oi,
            Pi,
            Ma,
            zb,
            Ab,
            fd;
          fd = K.a;
          if (2 > fd.b.length) Q = !1;
          else {
            Oi = -1;
            yb = null;
            Ni = 0;
            ne = -1;
            for (Ab = new M(fd); Ab.b < Ab.d.J(); )
              (Ma = (y(Ab.b < Ab.d.J()), Ab.d.T((Ab.c = Ab.b++)))),
                Ma.a &&
                  ((Pi = Ma.d), Pi > Oi && ((yb = Ma), (Oi = Pi), (ne = Ni))),
                ++Ni;
            for (zb = new M(fd); zb.b < zb.d.J(); )
              (Ma = (y(zb.b < zb.d.J()), zb.d.T((zb.c = zb.b++)))),
                Ma == yb
                  ? (ml(Ma, !0),
                    R(Ma.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT"))
                  : (ml(Ma, !1), R(Ma.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT"));
            if (Cr.a && -1 != ne) {
              var Dr = ne,
                Bb,
                lo,
                Qi,
                Ri;
              Ri = B(Al(N(yb.j, N(yb.i, yb.i.b.length - 1).a)));
              for (Qi = new th(fd, Dr + 1); Qi.Q(); )
                (Bb = Qi.R()),
                  (lo = B(Bl(N(Bb.j, N(Bb.i, 0).a)))),
                  B(Ri) == B(lo) &&
                    (ml(Bb, !0),
                    R(Bb.b, "SIBLING_OF_MAIN_CONTENT"),
                    (Ri = B(Al(N(Bb.j, N(Bb.i, Bb.i.b.length - 1).a)))));
              var Er = ne,
                Cb,
                mo,
                Si,
                gd;
              Si = B(Bl(N(yb.j, N(yb.i, 0).a)));
              for (gd = new th(fd, Er); 0 < gd.b; )
                (Cb = (y(0 < gd.b), N(gd.a, (gd.c = --gd.b)))),
                  (mo = B(Al(N(Cb.j, N(Cb.i, Cb.i.b.length - 1).a)))),
                  B(Si) == B(mo) &&
                    (ml(Cb, !0),
                    R(Cb.b, "SIBLING_OF_MAIN_CONTENT"),
                    (Si = B(Bl(N(Cb.j, N(Cb.i, 0).a)))));
            }
            Q = !0;
          }
          hl(K, Q, "Keep Largest Block");
          var If, vc, Jf, hd, Db, Eb, oe;
          Jf = 0;
          vc = oe = -1;
          for (Eb = new M(K.a); Eb.b < Eb.d.J(); )
            (hd = (y(Eb.b < Eb.d.J()), Eb.d.T((Eb.c = Eb.b++)))),
              -1 == vc &&
                S(hd.b, "de.l3s.boilerpipe/TITLE") &&
                ((oe = Jf), (vc = -1)),
              -1 == vc && hd.a && (vc = Jf),
              ++Jf;
          if (vc <= oe || -1 == oe) Q = !1;
          else {
            If = !1;
            for (Db = new M(new vh(K.a, oe, vc)); Db.b < Db.d.J(); )
              (hd = (y(Db.b < Db.d.J()), Db.d.T((Db.c = Db.b++)))),
                S(hd.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT") &&
                  (If |= ml(hd, !0));
            Q = If;
          }
          hl(K, Q, "Expand Title to Content");
          var Ti, Kf, fb, Fb, Gb;
          Ti = !1;
          Kf = -1;
          for (Gb = new M(K.a); Gb.b < Gb.d.J(); )
            if (
              ((fb = (y(Gb.b < Gb.d.J()), Gb.d.T((Gb.c = Gb.b++)))),
              fb.a && S(fb.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT"))
            ) {
              Kf = fb.f;
              break;
            }
          if (-1 == Kf) Q = !1;
          else {
            for (Fb = new M(K.a); Fb.b < Fb.d.J(); )
              (fb = (y(Fb.b < Fb.d.J()), Fb.d.T((Fb.c = Fb.b++)))),
                !fb.a && 100 <= fb.d && fb.f == Kf && (ml(fb, !0), (Ti = !0));
            Q = Ti;
          }
          hl(K, Q, "Largest Block Same Tag Level -\x3e Content");
          var Ui, Lf, gb, Hb;
          Ui = !1;
          Lf = aa;
          for (Hb = new M(K.a); Hb.b < Hb.d.J(); )
            (gb = (y(Hb.b < Hb.d.J()), Hb.d.T((Hb.c = Hb.b++)))),
              gb.a && S(gb.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT")
                ? (Lf = gb.f)
                : gb.f > Lf &&
                  S(gb.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT") &&
                  S(gb.b, "de.l3s.boilerpipe/LI") &&
                  0 == gb.c
                ? (ml(gb, !0), (Ui = !0))
                : (Lf = aa);
          Q = Ui;
          hl(K, Q, "List at end filter");
          var Fr = c.d,
            Vi,
            Mf,
            Wi,
            Ib;
          Mf = 0;
          for (Ib = new M(K.a); Ib.b < Ib.d.J(); )
            (Wi = (y(Ib.b < Ib.d.J()), Ib.d.T((Ib.c = Ib.b++)))),
              Wi.a && (Mf += Wi.d);
          Vi = Mf;
          if (void 0 == Vi) throw new TypeError();
          Fr[1] = Vi;
          var Gr, Jb;
          for (Jb = new M(K.a); Jb.b < Jb.d.J(); ) {
            var Nf = (Gr = (y(Jb.b < Jb.d.J()), Jb.d.T((Jb.c = Jb.b++)))),
              no = void 0,
              Kb = void 0,
              Xi = void 0;
            if (Nf.a)
              for (Kb = new M(Nf.i); Kb.b < Kb.d.J(); )
                (no = (y(Kb.b < Kb.d.J()), Kb.d.T((Kb.c = Kb.b++)))),
                  (Xi = N(Nf.j, no.a)),
                  (Xi.p = !0),
                  S(Nf.b, "de.l3s.boilerpipe/TITLE") &&
                    R(Xi.e, "de.l3s.boilerpipe/TITLE");
          }
          var Of, Lb, Pf;
          Pf = !1;
          for (Lb = new M(tc.a.a); Lb.b < Lb.d.J(); )
            (Of = (y(Lb.b < Lb.d.J()), Lb.d.T((Lb.c = Lb.b++)))),
              Of.p ? (Pf = !0) : r(Of, 35) ? (Pf = !1) : Pf && (Of.p = !0);
          var oo = tc.a,
            Qf,
            Na,
            Mb,
            Nb,
            id,
            po,
            Rf;
          Qf = new P();
          Rf = id = null;
          for (Nb = new M(oo.a); Nb.b < Nb.d.J(); )
            (Na = (y(Nb.b < Nb.d.J()), Nb.d.T((Nb.c = Nb.b++)))),
              r(Na, 35) && Na.p && (!id && (id = Na), (Rf = Na));
          if (Rf) {
            for (
              Mb = new M(oo.a);
              Mb.b < Mb.d.J() &&
              !((Na = (y(Mb.b < Mb.d.J()), Mb.d.T((Mb.c = Mb.b++)))),
              ((po = r(Na, 32)) && Na.p) || Na == Rf);

            )
              po && O(Qf, Na);
            var pe, Yi, Zi, qe, qo, Sf, Ob, jd;
            if (0 != Qf.b.length) {
              Zi = null;
              id && (Zi = N(id.a, id.c));
              qo =
                ((jd = new P()),
                O(jd, new Cl()),
                O(jd, new Dl()),
                O(jd, new El(Zi)),
                O(jd, new Fl()),
                jd);
              pe = null;
              Yi = 0;
              for (Ob = new M(Qf); Ob.b < Ob.d.J(); ) {
                Sf = (y(Ob.b < Ob.d.J()), Ob.d.T((Ob.c = Ob.b++)));
                var Tf = void 0,
                  vo = void 0,
                  Pb = void 0,
                  re = void 0;
                if (Sf) {
                  re = 0;
                  Tf = Sf.d;
                  for (Pb = new M(qo); Pb.b < Pb.d.J(); )
                    (vo = (y(Pb.b < Pb.d.J()), Pb.d.T((Pb.c = Pb.b++)))),
                      (re += vo.Gb(Tf));
                  2 > Wk ||
                    (Tf
                      ? V("FINAL SCORE: " + re + " : " + A(Tf, "src"))
                      : V("Null image attempting to be scored!"));
                  qe = re;
                } else qe = 0;
                26 <= qe && (!pe || Yi < qe) && ((pe = Sf), (Yi = qe));
              }
              pe && (pe.p = !0);
            }
          }
          var Hr = tc.a,
            Uf,
            Qb,
            Oa,
            se,
            $i,
            aj,
            wo,
            te;
          Oa = !1;
          $i = -1;
          se = new pk();
          for (Qb = new M(Hr.a); Qb.b < Qb.d.J(); )
            (Uf = (y(Qb.b < Qb.d.J()), Qb.d.T((Qb.c = Qb.b++)))),
              r(Uf, 51)
                ? ((te = Uf),
                  te.b == (Gl(), Hl)
                    ? ((te.p = Oa), O(se.a, te), (Oa = !1))
                    : ((aj = ok(se)),
                      (Oa |= $i >= se.a.b.length) && ($i = se.a.b.length - 1),
                      (wo = aj.p),
                      (aj.p = Oa),
                      (te.p = Oa),
                      (Oa = wo)))
                : Oa || (Oa = Uf.p);
          var xo = U() - cd;
          if (void 0 == xo) throw new TypeError();
          c.e[3] = xo;
          cd = U();
          var bj, Rb, ld;
          ld = new ug();
          for (Rb = new M(tc.a.a); Rb.b < Rb.d.J(); )
            if (((bj = (y(Rb.b < Rb.d.J()), Rb.d.T((Rb.c = Rb.b++)))), bj.p)) {
              var Ir = bj.Eb(Gn);
              ld.a += Ir;
              Gn && (ld.a += "\n");
            }
          xi = ld.a;
          var yo = U() - cd;
          if (void 0 == yo) throw new TypeError();
          c.e[4] = yo;
          var Jr = tc.a,
            Pa,
            Sb,
            Vf,
            Wf;
          Vf = new P();
          for (Sb = new M(Jr.a); Sb.b < Sb.d.J(); )
            if (((Pa = (y(Sb.b < Sb.d.J()), Sb.d.T((Sb.c = Sb.b++)))), Pa.p))
              if (r(Pa, 32))
                Rh(
                  Vf,
                  (!Pa.b && Il(Pa),
                  (Wf = new P()),
                  !Pa.e.length || O(Wf, Pa.e),
                  Rh(Wf, Jl(Pa.b)),
                  Wf)
                );
              else if (r(Pa, 69)) {
                var Kr = Vf,
                  Xf = Pa,
                  Yf = void 0,
                  Zf = void 0,
                  $f = void 0,
                  dj = void 0;
                !Xf.a && (Xf.a = (W(), Kl(Ll(Xf.b))));
                $f = new P();
                dj = Yk(Xf.a, "IMG, SOURCE");
                for (Yf = 0; Yf < dj.length; Yf++)
                  (Zf = dj[Yf]),
                    !Zf.src.length || O($f, Zf.src),
                    Rh($f, Jl(Zf));
                Rh(Kr, $f);
              }
          c.c = Vf;
          if (4 <= Wk) {
            for (ee = 0; ee < c.e[6].length; ee++) {
              var Ao = c.e;
              if (ee >= Ao[6].length) throw new RangeError();
              de = Ao[6][ee];
              if (void 0 === de[1]) throw new TypeError();
              var Lr = "Timing: " + de[1] + " \x3d ";
              if (void 0 === de[2]) throw new TypeError();
              V(Lr + de[2]);
            }
            var Bo = c.e;
            if (void 0 === Bo[1]) throw new TypeError();
            var Mr =
                "Timing: MarkupParsingTime \x3d " +
                Bo[1] +
                "\nTiming: DocumentConstructionTime \x3d ",
              Co = c.e;
            if (void 0 === Co[2]) throw new TypeError();
            var Nr = Mr + Co[2] + "\nTiming: ArticleProcessingTime \x3d ",
              Do = c.e;
            if (void 0 === Do[3]) throw new TypeError();
            var Or = Nr + Do[3] + "\nTiming: FormattingTime \x3d ",
              Eo = c.e;
            if (void 0 === Eo[4]) throw new TypeError();
            V(Or + Eo[4]);
          }
          if (void 0 == xi) throw new TypeError();
          b[1] = xi;
          if (void 0 == b) throw new TypeError();
          m[2] = b;
          var Fo = ((null == c.g || !c.g.length) && (c.g = "auto"), c.g);
          if (void 0 == Fo) throw new TypeError();
          m[9] = Fo;
          for (Ca = new M(c.c); Ca.b < Ca.d.J(); ) {
            tb = (y(Ca.b < Ca.d.J()), Ca.d.T((Ca.c = Ca.b++)));
            var Pr = ((ti = {}), m[10].push(ti), ti);
            if (void 0 == tb) throw new TypeError();
            Pr[1] = tb;
          }
          var gj;
          if (void 0 != a[3]) {
            if (void 0 === a[3]) throw new TypeError();
            gj = a[3];
          } else gj = $doc.URL;
          g = gj;
          J = c.e;
          q = U();
          var hj;
          if (void 0 != a[4]) {
            if (void 0 === a[4]) throw new TypeError();
            hj = a[4];
          } else hj = "next";
          if ("pagenum" === hj) {
            Ml();
            ia = new Nl(J);
            var ij;
            var Io = $doc.documentElement,
              jj,
              kj,
              md,
              ag,
              bg,
              Jo,
              cg;
            cg = U();
            ia.b = g.replace(Ol, "");
            ia.d = Pl(ia.b);
            if (ia.d) {
              kj = Ql(Rl(Io, g));
              jj = Io.getElementsByTagName("A");
              for (md = 0; md < jj.length; )
                (bg = jj[md]),
                  (Jo = Sl(ia, bg, kj))
                    ? (Tl(ia.a),
                      Ul(ia, bg, !1, !0, null),
                      Vl(ia.a, Jo.a),
                      (ia.c = 0),
                      Ul(ia, bg, !1, !1, kj),
                      (md += 1 + ia.c))
                    : ++md;
              var ve = ia.a;
              0 != ve.a.b.length &&
                0 == N(ve.a, ve.a.b.length - 1).b.b.length &&
                ve.a.U(ve.a.b.length - 1);
              Wl(cg, ia.e, "PageParameterParser");
              cg = U();
              var Qr = ia.a,
                Mo = ia.b,
                od,
                wc,
                fg,
                Tb,
                gg,
                hg;
              if ((gg = Pl(Mo))) {
                gg.d.username = "";
                gg.d.password = "";
                wc = new Xl();
                for (Tb = new M(Qr.a); Tb.b < Tb.d.J(); )
                  if (
                    ((fg = (y(Tb.b < Tb.d.J()), Tb.d.T((Tb.c = Tb.b++)))),
                    !(2 > fg.b.b.length))
                  ) {
                    for (
                      var xa = fg.b,
                        Rr = 0 > fg.a,
                        pj = gg,
                        Sr = wc.a ? wc.a.d : "",
                        pd = void 0,
                        No = void 0,
                        Ub = void 0,
                        pd = 0,
                        Ub = new M(xa);
                      Ub.b < Ub.d.J();

                    )
                      (No = (y(Ub.b < Ub.d.J()), Ub.d.T((Ub.c = Ub.b++)))),
                        !No.b.length || ++pd;
                    if (0 == pd) hg = null;
                    else {
                      if (Rr)
                        for (
                          var xc = xa,
                            qd = void 0,
                            rd = void 0,
                            Oo = void 0,
                            rd = 0,
                            qd = xc.b.length - 1;
                          rd < qd;
                          ++rd, --qd
                        )
                          (Oo = (z(rd, xc.b.length), xc.b[rd])),
                            Uh(xc, rd, (z(qd, xc.b.length), xc.b[qd])),
                            Uh(xc, qd, Oo);
                      2 == xa.b.length &&
                        1 == pd &&
                        1 == (z(0, xa.b.length), xa.b[0]).a &&
                        2 == (z(1, xa.b.length), xa.b[1]).a &&
                        (of((z(0, xa.b.length), xa.b[0]).b)
                          ? Uh(xa, 0, new Yl(1, Xa(pj.d)))
                          : Uh(xa, 1, new Yl(2, Xa(pj.d))),
                        ++pd);
                      var ig;
                      if (2 <= pd) {
                        for (
                          var Ra = xa,
                            Po = pj,
                            Tr = Sr,
                            yc = void 0,
                            qj = void 0,
                            sd = void 0,
                            jg = void 0,
                            rj = void 0,
                            Vb = void 0,
                            zc = void 0,
                            td = void 0,
                            Wb = void 0,
                            we = void 0,
                            Sa = void 0,
                            kg = void 0,
                            Qo = void 0,
                            lg = void 0,
                            xe = void 0,
                            Ro = void 0,
                            Xb = void 0,
                            ye = void 0,
                            ye = 0,
                            Xb = new M(Ra);
                          Xb.b < Xb.d.J();

                        )
                          (Ro = (y(Xb.b < Xb.d.J()), Xb.d.T((Xb.c = Xb.b++)))),
                            Ro.a == ye + 1 && ++ye;
                        if (28 <= ye && 31 >= ye) ig = null;
                        else {
                          rj = "";
                          we = new Zl();
                          kg = E($l, da, 70, Ra.b.length, 0);
                          for (zc = 0; zc < Ra.b.length; zc++)
                            if (
                              ((Wb = (z(zc, Ra.b.length), Ra.b[zc])),
                              Wb.b.length && ((xe = Pl(Wb.b)), (kg[zc] = xe)))
                            ) {
                              xe.d.username = "";
                              xe.d.password = "";
                              var To = xe,
                                Vr = Wb.a,
                                Wr = zc,
                                Xr = we,
                                ze = void 0,
                                sj = void 0,
                                Ae = void 0,
                                mg = void 0,
                                Ac = To,
                                ng = void 0,
                                ud = void 0,
                                og = void 0,
                                pg = void 0;
                              if (null == Ac.b)
                                if (((pg = Ac.d.search), pg.length))
                                  for (
                                    ng =
                                      (T(),
                                      Gf(
                                        pg.substr(1, pg.length - 1),
                                        "\\\x26"
                                      )),
                                      Ac.b = Pe([ng.length, 2]),
                                      ud = 0;
                                    ud < ng.length;
                                    ud++
                                  )
                                    (og = Gf(ng[ud], "\x3d")),
                                      (Ac.b[ud][0] = og[0]),
                                      (Ac.b[ud][1] =
                                        1 < og.length ? og[1] : "");
                                else Ac.b = Pe([0, 2]);
                              mg = Ac.b;
                              if (0 != mg.length)
                                for (ze = 0; ze < mg.length; ze++) {
                                  sj = mg[ze];
                                  try {
                                    Ae = new am(To, 0 == ze, sj[0], sj[1]);
                                  } catch (qg) {
                                    if (((qg = qc(qg)), r(qg, 23))) Ae = null;
                                    else throw rc(qg);
                                  }
                                  Ae && bm(Xr, Ae, new cm(Vr, Ae.a, Wr));
                                }
                              1 == Wb.a && (rj = Wb.b);
                            }
                          if (0 == we.a.b)
                            for (Vb = 0; Vb < Ra.b.length; Vb++)
                              if (
                                ((Wb = (z(Vb, Ra.b.length), Ra.b[Vb])), kg[Vb])
                              ) {
                                var Bc = kg[Vb],
                                  Yr = Wb.a,
                                  Zr = Vb,
                                  $r = we,
                                  uj = void 0,
                                  vj = void 0,
                                  Wo = void 0,
                                  wj = void 0,
                                  xj = void 0,
                                  Be = void 0,
                                  Xo = void 0,
                                  wj =
                                    (null == Bc.c && (Bc.c = dm(Bc.d)), Bc.c);
                                if (wj.length && em(wj))
                                  for (
                                    Xo = Xa(Bc.d),
                                      xj = Bc.d.origin.length,
                                      !fm && (fm = RegExp("(\\d+)", "gi")),
                                      fm.lastIndex = xj;
                                    ;

                                  ) {
                                    uj = fm.exec(Xo);
                                    if (!uj) break;
                                    vj = fm.lastIndex;
                                    Wo = vj - uj[1].length;
                                    try {
                                      Be = new gm(Bc, xj, Wo, vj);
                                    } catch (sg) {
                                      if (((sg = qc(sg)), r(sg, 23))) Be = null;
                                      else throw rc(sg);
                                    }
                                    Be && bm($r, Be, new cm(Yr, Be.a, Zr));
                                  }
                              }
                          lg = new Xl();
                          for (sd = new oh(new nh(we.a).a); ph(sd); ) {
                            if (sd._gwt_modCount != sd.c._gwt_modCount)
                              throw new rh();
                            qj = (y(ph(sd)), sd.a.R());
                            Qo = qj.W();
                            td = qj.X();
                            if (
                              !(Qo === Tr || 100 < td.a.b.length) &&
                              td.b.Ab(Po)
                            ) {
                              e: {
                                var yj = td.b,
                                  Cc = td.a,
                                  Yb = Ra,
                                  zj = rj,
                                  hb = void 0,
                                  Aj = void 0,
                                  De = void 0,
                                  $o = void 0,
                                  Bj = void 0,
                                  Zb = void 0,
                                  Ta = void 0,
                                  ap = void 0,
                                  Ee = void 0,
                                  Cj = void 0;
                                if (2 <= Cc.b.length)
                                  if (
                                    ((Ee = hm(Cc, Yb)),
                                    Ee.a && Ee.b && im(Yb, Ee))
                                  ) {
                                    $o = jm(Cc);
                                    hb = new P();
                                    for (Zb = new M(Cc); Zb.b < Zb.d.J(); )
                                      (Bj =
                                        (y(Zb.b < Zb.d.J()),
                                        Zb.d.T((Zb.c = Zb.b++)))),
                                        O(hb, new Yl(Bj.a, N(Yb, Bj.c).b));
                                    Sa = new km(
                                      (lm(), mm),
                                      yj.tS(),
                                      hb,
                                      $o,
                                      Ee.c
                                    );
                                  } else Sa = null;
                                else {
                                  if (
                                    1 == Cc.b.length &&
                                    zj.length &&
                                    ((Ta = (z(0, Cc.b.length), Cc.b[0])),
                                    (ap = 2 == Ta.a && 1 == Ta.c),
                                    (Cj =
                                      3 == Ta.a &&
                                      2 == Ta.c &&
                                      2 == (z(1, Yb.b.length), Yb.b[1]).a),
                                    1 == (z(0, Yb.b.length), Yb.b[0]).a &&
                                      (ap || Cj) &&
                                      yj.zb(zj))
                                  ) {
                                    De = Ta.b - Ta.a;
                                    0 == De || 1 == De
                                      ? (Aj = 1)
                                      : ((Aj = Ta.b), (De = 0));
                                    hb = new P();
                                    O(hb, new Yl(1, zj));
                                    O(hb, new Yl(Ta.a, N(Yb, Ta.c).b));
                                    Sa = new km(
                                      (lm(), mm),
                                      yj.tS(),
                                      hb,
                                      new nm(Aj, De),
                                      Cj ? (z(1, hb.b.length), hb.b[1]).b : ""
                                    );
                                    break e;
                                  }
                                  Sa = null;
                                }
                              }
                              if (Sa) {
                                var yc =
                                    (!om && (om = /\/$/),
                                    Po.d.href.replace(om, "")),
                                  Fe;
                                e: {
                                  var wd = Sa,
                                    Gj = yc,
                                    ds = Ra,
                                    xd = void 0,
                                    tg = void 0,
                                    $b = void 0;
                                  if (
                                    2 > wd.a.b.length ||
                                    1 == N(wd.a, 0).a ||
                                    Gj.length >= N(wd.a, 0).b.length
                                  )
                                    Fe = !1;
                                  else {
                                    for (xd = 0; xd < wd.a.b.length; xd++) {
                                      var Hj;
                                      (Hj = N(wd.a, xd).a != xd + 2) ||
                                        (Hj = N(wd.a, xd).b === Gj);
                                      if (Hj) {
                                        Fe = !1;
                                        break e;
                                      }
                                    }
                                    for ($b = new M(ds); $b.b < $b.d.J(); )
                                      if (
                                        ((tg =
                                          (y($b.b < $b.d.J()),
                                          $b.d.T(($b.c = $b.b++)))),
                                        1 == tg.a && tg.b.length && tg.b !== Gj)
                                      ) {
                                        Fe = !1;
                                        break e;
                                      }
                                    Fe = !0;
                                  }
                                }
                                Fe
                                  ? wh(Sa.a, 0, new Yl(1, yc))
                                  : td.b.zb(yc) &&
                                    ((jg = N(Sa.a, 0)),
                                    2 == jg.a &&
                                      jg.b !== yc &&
                                      yc.length < jg.b.length &&
                                      wh(Sa.a, 0, new Yl(1, yc)));
                                pm(lg, new qm(Sa));
                              }
                            }
                          }
                          ig = lg.a ? lg : null;
                        }
                      } else ig = null;
                      hg = ig;
                    }
                    hg && pm(wc, hg);
                  }
                if (wc.a) {
                  wc.b && 3 <= Wk && V("Detected multiple page patterns");
                  od = wc.a;
                  var Ij, Jj, ac;
                  if (!od.c.length && 0 != od.a.b.length)
                    for (Ij = !1, ac = new M(od.a); ac.b < ac.d.J(); ) {
                      Jj = (y(ac.b < ac.d.J()), ac.d.T((ac.c = ac.b++)));
                      if (Ij) {
                        od.c = Jj.b;
                        break;
                      }
                      Jj.b === Mo && (Ij = !0);
                    }
                  ag = od;
                } else ag = new rm();
              } else ag = new rm();
              Wl(cg, ia.e, "PageParameterDetector");
              ij = ag;
            } else ij = new rm();
            l = ij;
            e = {};
            f = l.c;
            if (f.length) {
              if (void 0 == f) throw new TypeError();
              e[1] = f;
            }
            if (void 0 == e) throw new TypeError();
            m[3] = e;
            3 <= Wk && V("paging by pagenum: " + sm(l));
          } else {
            3 <= Wk && V("paging by next");
            tm();
            tf = {};
            var ep = $doc.documentElement,
              Ec,
              Kj,
              Lj,
              Mj,
              Nj,
              ib,
              Oj,
              Ge,
              L,
              bc,
              ja,
              Pj,
              x,
              cc,
              yd,
              wg,
              He,
              Qj,
              zd,
              Ad,
              Bd,
              xg,
              yg,
              fp,
              jb,
              Rj,
              gp,
              hp;
            3 <= Wk && jh(um);
            ib = (T(), g.replace(RegExp("\\/[^/]*$", "gi"), ""));
            gp = g.replace(RegExp("\\/$", "gi"), "");
            Ec = ep.getElementsByTagName("A");
            yg = new Ci();
            Lj = new Ci();
            Mj = Ql(Rl(ep, g));
            var es = Gf(g, ":\\/\\/")[0] + "://",
              ip,
              Ie = g,
              Ie = (T(), Gf(Ie, ":\\/\\/"))[1];
            ip = -1 == Ie.indexOf("/") ? Ie : Gf(Ie, "\\/")[0];
            Kj = es + ip + "/";
            var fs =
              "^" +
              Kj.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26") +
              ".*\\d";
            fp = RegExp(fs, "i");
            for (Ge = 0; Ge < Ec.length; Ge++)
              if (
                ((L = Ec[Ge]),
                (hp = A(L, "href")),
                Mj.setAttribute("href", hp),
                (ja = Mj.href),
                fp.test(ja))
              )
                if (
                  ((Rj = (L.offsetWidth || 0) | 0),
                  (Oj = (L.offsetHeight || 0) | 0),
                  0 == Rj || 0 == Oj)
                )
                  X(L, "ignored: sz\x3d" + Rj + "x" + Oj);
                else if (vm(L))
                  if (
                    ((ja = ja.replace(wm, "")),
                    X(L, "-\x3e " + ja),
                    F(ja, gp) || F(ja, ib))
                  )
                    X(L, "ignored: same as current or folder url " + ib);
                  else if (((cc = Nk(L)), 25 < cc.length))
                    X(L, "ignored: link text too long");
                  else if (xm.test(cc))
                    X(L, "ignored: one of extra"), R(Lj, ja);
                  else if (
                    ((Pj = ja),
                    ja.substr(0, ib.length) === ib && (Pj = dg(ja, ib.length)),
                    ym.test(Pj))
                  ) {
                    x = new zm(Ge, cc, ja);
                    R(yg, x);
                    0 != ja.indexOf(ib) &&
                      ((x.d -= 25),
                      X(
                        L,
                        "score\x3d" + x.d + ": not part of folder url " + ib
                      ));
                    bc = cc + " " + A(L, "class") + " " + L.id;
                    X(L, "txt+class+id\x3d" + bc);
                    Am.test(bc) &&
                      ((x.d += 50), X(L, "score\x3d" + x.d + ": has next"));
                    Bm.test(bc) &&
                      ((x.d += 25),
                      X(L, "score\x3d" + x.d + ": has pag* word"));
                    Cm.test(bc) &&
                      !Am.test(x.c) &&
                      ((x.d -= 65),
                      X(
                        L,
                        "score\x3d" + x.d + ": has first|last but no next regex"
                      ));
                    if (Dm.test(bc) || xm.test(bc))
                      (x.d -= 50),
                        X(L, "score\x3d" + x.d + ": has neg or extra regex");
                    Em.test(bc) &&
                      ((x.d -= 200),
                      X(L, "score\x3d" + x.d + ": has opp of next regex"));
                    wg = xg = !1;
                    for (Ad = B(L); Ad && (!xg || !wg); )
                      (Bd = A(Ad, "class") + " " + Ad.id),
                        !xg &&
                          Bm.test(Bd) &&
                          ((x.d += 25),
                          (xg = !0),
                          X(L, "score\x3d" + x.d + ": posParent - " + Bd)),
                        wg ||
                          !Dm.test(Bd) ||
                          Fm.test(Bd) ||
                          ((x.d -= 25),
                          (wg = !0),
                          X(L, "score\x3d" + x.d + ": negParent - " + Bd)),
                        (Ad = B(Ad));
                    if (Gm.test(ja) || Bm.test(ja))
                      (x.d += 25),
                        X(L, "score\x3d" + x.d + ": has paging info");
                    xm.test(ja) &&
                      ((x.d -= 15),
                      X(L, "score\x3d" + x.d + ": has extra regex"));
                    10 < cc.length &&
                      ((x.d -= cc.length),
                      X(L, "score\x3d" + x.d + ": text too long"));
                    yd = Hm(cc);
                    0 < yd &&
                      (1 == yd
                        ? (x.d -= 10)
                        : (x.d += 0 > 10 - yd ? 0 : 10 - yd),
                      X(
                        L,
                        "score\x3d" + x.d + ": linktxt is a num (" + yd + ")"
                      ));
                    for (
                      var kb = g,
                        lb = ja,
                        qp = L,
                        gs = Kj.length,
                        Fc = void 0,
                        Bg = void 0,
                        Cg = void 0,
                        kb = Im(kb),
                        lb = Im(lb),
                        Fc = gs;
                      Fc < lf(kb.length, lb.length) &&
                      kb.charCodeAt(Fc) == lb.charCodeAt(Fc);
                      Fc++
                    );
                    kb = eg(kb, Fc, kb.length);
                    lb = eg(lb, Fc, lb.length);
                    X(qp, "remains: " + kb + ", " + lb);
                    Bg = Hm(lb);
                    Cg = Hm(kb);
                    X(qp, "remains: " + Cg + ", " + Bg);
                    (Nj = 0 < Cg && 0 < Bg ? gf(Bg - Cg) : null) &&
                      1 == Nj.a &&
                      ((x.d += 25),
                      X(L, "score\x3d" + x.d + ": diff \x3d " + Nj));
                  } else X(L, "ignored: no number beyond folder url " + ib);
                else X(L, "ignored: invisible");
              else X(L, "ignored: not prefix + num");
            jb = null;
            if (0 != yg.a.b)
              for (Qj = xh(new zh(yg.a)); ph(Qj.a); )
                (He = qh(Qj.a).W()),
                  S(Lj, He.a) ||
                    (50 <= He.d && (!jb || jb.d < He.d) && (jb = He));
            zd = null;
            if (jb) {
              var hs = jb.a;
              T();
              zd = hs.replace(RegExp("\\/$", "gi"), "");
              X(
                Ec[jb.b],
                "found: score\x3d" + jb.d + ", txt\x3d[" + jb.c + "], " + zd
              );
            }
            if (3 <= Wk) {
              var Ke, Dg, dc, Le, Eg;
              V(
                "numLinks\x3d" +
                  Ec.length +
                  ", found next: " +
                  (null != zd ? zd : "null")
              );
              for (Ke = 0; Ke < Ec.length; Ke++) {
                Dg = Ec[Ke];
                dc = Nk(Dg);
                Eg = (T(), Gf(dc, "\\s+"));
                dc = "";
                for (Le = 0; Le < Eg.length; Le++)
                  (dc += Eg[Le]), Le < Eg.length - 1 && (dc += " ");
                V(
                  Ke +
                    ")" +
                    Dg.href +
                    ", txt\x3d[" +
                    dc +
                    "], dbg\x3d[" +
                    gh(um, Dg) +
                    "]"
                );
              }
            }
            uf = zd;
            if (null != uf) {
              if (void 0 == uf) throw new TypeError();
              tf[1] = uf;
            }
            if (void 0 == tf) throw new TypeError();
            m[3] = tf;
          }
          Wl(q, J, "Pagination");
          var fa = c.f,
            Gc,
            ec,
            Fg,
            Gg,
            Hc,
            Ic,
            Uj,
            ya,
            Vj,
            Wj,
            Xj;
          ya = ((Vj = {}), (Vj[9] = []), Vj);
          var Hg, Ig;
          Ig = !1;
          for (Hg = 0; Hg < fa.a.b.length && !Ig; Hg++) Ig = N(fa.a, Hg).xb();
          if (!Ig) {
            var sp = Kk(fa);
            if (void 0 == sp) throw new TypeError();
            ya[1] = sp;
            var Yj, Jg, Kg;
            Kg = "";
            for (Jg = 0; Jg < fa.a.b.length && !Kg.length; Jg++)
              Kg = N(fa.a, Jg).vb();
            Yj = Kg;
            if (void 0 == Yj) throw new TypeError();
            ya[2] = Yj;
            var Zj, Lg, Mg;
            Mg = "";
            for (Lg = 0; Lg < fa.a.b.length && !Mg.length; Lg++)
              Mg = N(fa.a, Lg).wb();
            Zj = Mg;
            if (void 0 == Zj) throw new TypeError();
            ya[3] = Zj;
            var ak, Ng, Og;
            Ng = "";
            for (Og = 0; Og < fa.a.b.length && !Ng.length; Og++)
              Ng = N(fa.a, Og).rb();
            ak = Ng;
            if (void 0 == ak) throw new TypeError();
            ya[4] = ak;
            var bk, Pg, Qg;
            Qg = "";
            for (Pg = 0; Pg < fa.a.b.length && !Qg.length; Pg++)
              Qg = N(fa.a, Pg).tb();
            bk = Qg;
            if (void 0 == bk) throw new TypeError();
            ya[5] = bk;
            var ck, Rg, Sg;
            Rg = "";
            for (Sg = 0; Sg < fa.a.b.length && !Rg.length; Sg++)
              Rg = N(fa.a, Sg).qb();
            ck = Rg;
            if (void 0 == ck) throw new TypeError();
            ya[6] = ck;
            var dk, Tg, Ug;
            Tg = "";
            for (Ug = 0; Ug < fa.a.b.length && !Tg.length; Ug++)
              Tg = N(fa.a, Ug).pb();
            dk = Tg;
            if (void 0 == dk) throw new TypeError();
            ya[7] = dk;
            var Vg, Wg;
            Vg = null;
            for (Wg = 0; Wg < fa.a.b.length && !Vg; Wg++) Vg = N(fa.a, Wg).ob();
            if ((Gc = Vg)) {
              ec = ((Wj = {}), (Wj[5] = []), Wj);
              var tp = Gc.d;
              if (void 0 == tp) throw new TypeError();
              ec[1] = tp;
              var up = Gc.c;
              if (void 0 == up) throw new TypeError();
              ec[2] = up;
              var vp = Gc.b;
              if (void 0 == vp) throw new TypeError();
              ec[3] = vp;
              var wp = Gc.e;
              if (void 0 == wp) throw new TypeError();
              ec[4] = wp;
              for (Gg = 0; Gg < Gc.a.length; Gg++) ec[5].push(Gc.a[Gg]);
              if (void 0 == ec) throw new TypeError();
              ya[8] = ec;
            }
            var Xg, Yg;
            Yg = null;
            for (
              Xg = 0;
              Xg < fa.a.b.length && !((Yg = N(fa.a, Xg).sb()), 0 < Yg.length);
              Xg++
            );
            Uj = Yg;
            for (Fg = 0; Fg < Uj.length; Fg++) {
              Hc = Uj[Fg];
              Ic = ((Xj = {}), ya[9].push(Xj), Xj);
              var xp = Hc.e;
              if (void 0 == xp) throw new TypeError();
              Ic[1] = xp;
              var yp = Hc.c;
              if (void 0 == yp) throw new TypeError();
              Ic[2] = yp;
              var zp = Hc.d;
              if (void 0 == zp) throw new TypeError();
              Ic[3] = zp;
              var Ap = Hc.a;
              if (void 0 == Ap) throw new TypeError();
              Ic[4] = Ap;
              var Bp = Hc.f;
              if (void 0 == Bp) throw new TypeError();
              Ic[5] = Bp;
              var Cp = Hc.b;
              if (void 0 == Cp) throw new TypeError();
              Ic[6] = Cp;
            }
          }
          if (void 0 == ya) throw new TypeError();
          m[5] = ya;
          var Dp = U() - v;
          if (void 0 == Dp) throw new TypeError();
          J[5] = Dp;
          if (void 0 == J) throw new TypeError();
          m[6] = J;
          var Ep = c.d;
          if (void 0 == Ep) throw new TypeError();
          m[8] = Ep;
          d = ((yn = {}), yn);
          var Fp = ((zn = Jm), (Jm = ""), zn);
          if (void 0 == Fp) throw new TypeError();
          d[1] = Fp;
          if (void 0 == d) throw new TypeError();
          m[7] = d;
          return m;
        }
        n(208, 1, {}, function () {});
        t(208);
        function W() {
          W = k;
          Km = new cj(
            new Yh(
              D(
                w(p, 1),
                h,
                2,
                4,
                "abbr accept-charset accept accesskey action align alink allow allowfullscreen allowpaymentrequest alt archive as async autocapitalize autocomplete autocorrect autofocus autoplay autopictureinpicture axis background behavior bgcolor border bordercolor capture cellpadding cellspacing char challenge charoff charset checked cite class classid clear code codebase codetype color cols colspan compact content contenteditable controls controlslist conversiondestination coords crossorigin csp data datetime declare decoding default defer dir direction dirname disabled disablepictureinpicture disableremoteplayback disallowdocumentaccess download draggable elementtiming enctype end enterkeyhint event exportparts face for form formaction formenctype formmethod formnovalidate formtarget frame frameborder headers height hidden high href hreflang hreftranslate hspace http-equiv id imagesizes imagesrcset importance impressiondata impressionexpiry incremental inert inputmode integrity is ismap keytype kind invisible label lang language latencyhint leftmargin link list loading longdesc loop low lowsrc manifest marginheight marginwidth max maxlength mayscript media method min minlength multiple muted name nohref nomodule nonce noresize noshade novalidate nowrap object open optimum part pattern placeholder playsinline ping policy poster preload pseudo readonly referrerpolicy rel reportingorigin required resources rev reversed role rows rowspan rules sandbox scheme scope scrollamount scrolldelay scrolling select selected shadowroot shadowrootdelegatesfocus shape size sizes slot span spellcheck src srcset srcdoc srclang standby start step style summary tabindex target text title topmargin translate truespeed trusttoken type usemap valign value valuetype version vlink vspace virtualkeyboardpolicy webkitdirectory width wrap".split(
                  " "
                )
              )
            )
          );
        }
        function Kl(a) {
          var b;
          W();
          if (0 == a.b.length) return null;
          b = new Lm(a);
          var c = (z(0, a.b.length), a.b[0]),
            d;
          for (d = c.parentNode; d && 9 != d.nodeType; c = d, d = d.parentNode);
          bl(new cl(b), c);
          b = b.c;
          for (
            a = (z(0, a.b.length), a.b[0]);
            1 == b.a.b && b.b != a && 3 != Mh(b.a, 0).b.nodeType;

          )
            b = Mh(b.a, 0);
          a = Mm(b);
          if (1 != a.nodeType) return null;
          Nm(a, "ID", D(w(p, 1), h, 2, 4, ["*"]));
          Om(a);
          Nm(a, "TARGET", D(w(p, 1), h, 2, 4, ["A"]));
          Nm(a, "COLOR", D(w(p, 1), h, 2, 4, ["FONT"]));
          Nm(a, "BGCOLOR", D(w(p, 1), h, 2, 4, ["TABLE", "TR", "TD", "TH"]));
          Nm(a, "STYLE", D(w(p, 1), h, 2, 4, ["*"]));
          1 == a.nodeType && "IMG" === a.tagName && Pm(a);
          c = Yk(a, "IMG");
          for (b = 0; b < c.length; b++) Pm(c[b]);
          Qm(a);
          return a;
        }
        function Jl(a) {
          W();
          var b, c;
          c = new P();
          a.hasAttribute("srcset") && Rh(c, Rm(a));
          a = Yk(a, "[SRCSET]");
          for (b = 0; b < a.length; b++) Rh(c, Rm(a[b]));
          return c;
        }
        function Sm(a) {
          W();
          return a
            ? ((a.offsetHeight || 0) | 0) * ((a.offsetWidth || 0) | 0)
            : 0;
        }
        function Tm(a) {
          W();
          return a.attributes;
        }
        function Um(a) {
          W();
          return getComputedStyle(a, null);
        }
        function Vm(a, b) {
          W();
          var c;
          c = a.getElementsByTagName(b);
          return 0 < c.length ? c[0] : null;
        }
        function Wm(a) {
          W();
          return "IMG" == a.tagName ? a : Vm(a, "IMG");
        }
        function Nk(a) {
          W();
          return a.innerText;
        }
        function Xm(a, b) {
          W();
          var c;
          for (c = a; c && !c.contains(b); ) c = c.parentNode;
          return c;
        }
        function al(a) {
          W();
          var b, c;
          if (0 == a.J()) return null;
          c = a.T(0);
          for (b = 1; b < a.J(); b++) c = Xm(c, a.T(b));
          return c;
        }
        function Ll(a) {
          W();
          var b;
          b = new P();
          bl(new cl(new Ym(b)), a);
          return b;
        }
        function Zm(a) {
          W();
          var b;
          for (b = new P(); a; ) (b.b[b.b.length] = a), (a = a.parentNode);
          return b;
        }
        function Rm(a) {
          var b, c, d;
          c = new P();
          a = A(a, "srcset");
          if (!a.length) return c;
          d = $m(a);
          for (a = 0; a < d.length; a++)
            (b = Ok(d[a])), b.length && ((b = Gf(b, " ")), O(c, b[0]));
          return c;
        }
        function an(a) {
          W();
          var b;
          $doc.body.appendChild(a);
          b = Nk(a);
          $doc.body.removeChild(a);
          return b;
        }
        function U() {
          W();
          return ("undefined" !== typeof distiller_on_ios &&
            distiller_on_ios) ||
            !window.performance
            ? Date.now()
            : window.performance.now();
        }
        function $k(a) {
          var b, c, d;
          d = new P();
          for (c = 0; c < a.length; c++)
            (b = a[c]),
              vm(b) &&
                (b.offsetParent ||
                  0 != ((b.offsetHeight || 0) | 0) ||
                  0 != ((b.offsetWidth || 0) | 0)) &&
                0 < Sm(b) &&
                (d.b[d.b.length] = b);
          return d;
        }
        function bn(a, b) {
          W();
          var c;
          if (null == a) return !1;
          c = $doc.createElement("a");
          c.href = a;
          return nf("." + Vc(c, "host"), "." + b);
        }
        function vm(a) {
          W();
          var b;
          b = Um(a);
          a = parseFloat(b.opacity);
          return !("none" === b.display || "hidden" === b.visibility || 0 == a);
        }
        function Lk(a) {
          W();
          return a.textContent;
        }
        function Om(a) {
          W();
          var b, c, d;
          "A" === a.tagName && ((d = a), d.href.length && (d.href = d.href));
          b = a.getElementsByTagName("A");
          for (c = 0; c < b.length; c++)
            (d = b[c]), d.href.length && (d.href = d.href);
          "VIDEO" === a.tagName &&
            ((c = a), c.poster.length && (c.poster = c.poster));
          d = a.getElementsByTagName("VIDEO");
          for (b = 0; b < d.length; b++)
            (c = d[b]), c.poster.length && (c.poster = c.poster);
          cn(a);
          dn(a);
        }
        function cn(a) {
          W();
          ("IMG" == a.tagName ||
            "SOURCE" == a.tagName ||
            "TRACK" == a.tagName ||
            "VIDEO" == a.tagName) &&
            a.src &&
            (a.src = a.src);
          a = a.querySelectorAll("img,source,track,video");
          for (var b in a) a[b].src && (a[b].src = a[b].src);
        }
        function dn(a) {
          W();
          var b;
          a.hasAttribute("srcset") && en(a);
          a = Yk(a, "[SRCSET]");
          for (b = 0; b < a.length; b++) en(a[b]);
        }
        function en(a) {
          var b, c, d, e;
          d = A(a, "srcset");
          if (d.length) {
            c = $doc.createElement("img");
            e = $m(d);
            for (d = 0; d < e.length; d++)
              (b = Ok(e[d])),
                b.length &&
                  ((b = Gf(b, " ")),
                  (c.src = b[0]),
                  (b[0] = c.src),
                  (e[d] = fn(b, " ")));
            c = fn(e, ", ");
            a.setAttribute("srcset", c);
          } else a.removeAttribute("srcset");
        }
        function Yk(a, b) {
          W();
          return a.querySelectorAll(b);
        }
        function gn(a) {
          W();
          var b, c, d, e;
          if (null == a || !a.length) return new ui();
          e = new ui();
          a = Gf(a, "\x26");
          for (c = 0; c < a.length; c++);
          c = 0;
          for (d = a.length; c < d; ++c)
            if (((b = a[c]), (b = Gf(b, "\x3d")), 1 < b.length)) {
              var f = e,
                g = b[0];
              if (null == b[1]) throw new mf("encodedURL cannot be null");
              I(f, g, decodeURI(b[1]));
            }
          return e;
        }
        function Qm(a) {
          W();
          var b;
          1 == a.nodeType && hn(a);
          a = Yk(a, "*");
          for (b = 0; b < a.length; b++) hn(a[b]);
        }
        function hn(a) {
          var b, c, d;
          c = Tm(a);
          for (d = 0; d < c.length; )
            (b = c[d].nodeName), S(Km, b) ? ++d : a.removeAttribute(b);
        }
        function Nm(a, b, c) {
          W();
          var d, e, f;
          e = 0;
          for (f = c.length; e < f; ++e)
            (d = c[e]), (a.tagName !== d && "*" !== d) || a.removeAttribute(b);
          d = 0;
          for (e = c.length; d < e; ++d);
          c = fn(c, ", ");
          c = Yk(a, c);
          for (a = 0; a < c.length; a++) c[a].removeAttribute(b);
        }
        function Pm(a) {
          W();
          var b, c, d;
          b = Tm(a);
          for (c = 0; c < b.length; )
            (d = b[c].nodeName),
              "src" === d ||
              "alt" === d ||
              "srcset" === d ||
              "dir" === d ||
              "width" === d ||
              "height" === d ||
              "title" === d
                ? ++c
                : a.removeAttribute(d);
        }
        var Km;
        function Ym(a) {
          this.a = a;
        }
        n(106, 1, {}, Ym);
        _.mb = function () {};
        _.nb = function (a) {
          switch (a.nodeType) {
            case 3:
              return O(this.a, a), !1;
            case 1:
              if (!vm(a)) return !1;
              O(this.a, a);
              return !0;
            default:
              return !1;
          }
        };
        t(106);
        function bl(a, b) {
          var c, d;
          if (a.a.nb(b)) {
            if ((d = b.firstChild))
              for (; d != b; ) {
                c = !1;
                if (a.a.nb(d)) {
                  if ((c = d.firstChild)) {
                    d = c;
                    continue;
                  }
                  c = !0;
                }
                for (; d != b; ) {
                  c && a.a.mb(d);
                  if ((c = d.nextSibling)) {
                    d = c;
                    break;
                  }
                  d = d.parentNode;
                  c = !0;
                }
              }
            a.a.mb(b);
          }
        }
        function cl(a) {
          this.a = a;
        }
        n(61, 1, {}, cl);
        t(61);
        function jn(a) {
          var b;
          a.b = "";
          b = a.j;
          W();
          (b = b.querySelector(".byline-name")) && (a.b = Lk(b));
        }
        function kn(a) {
          this.j = a;
        }
        n(122, 1, {}, kn);
        _.ob = function () {
          var a, b;
          a = new ln();
          if (null == this.d) {
            var c;
            !this.a && (this.a = this.j.getElementsByTagName("META"));
            this.d = "";
            b = this.j;
            W();
            if ((b = b.querySelector(".dateline"))) this.d = Lk(b);
            else
              for (b = 0; b < this.a.length; b++)
                if (((c = this.a[b]), F(c.name, "displaydate"))) {
                  this.d = c.content;
                  break;
                }
          }
          a.d = this.d;
          b = (null == this.b && jn(this), this.b);
          a.a = b.length ? D(w(p, 1), h, 2, 4, [b]) : E(p, h, 2, 0, 4);
          return a;
        };
        _.pb = function () {
          return null == this.b && jn(this), this.b;
        };
        _.qb = function () {
          if (null == this.c) {
            var a, b;
            !this.a && (this.a = this.j.getElementsByTagName("META"));
            this.c = "";
            for (a = 0; a < this.a.length; a++)
              if (((b = this.a[a]), F(b.name, "copyright"))) {
                this.c = b.content;
                break;
              }
          }
          return this.c;
        };
        _.rb = function () {
          return "";
        };
        _.sb = function () {
          if (!this.f) {
            var a, b, c, d, e;
            this.f = new P();
            a = this.j.getElementsByTagName("IMG");
            for (c = 0; c < a.length; c++) {
              e = a[c];
              var f = (d = b = void 0),
                g = void 0;
              b = void 0;
              b = B(e);
              if (F("FIGURE", b.tagName)) {
                if (
                  ((d = b.getElementsByTagName("FIGCAPTION")),
                  (g = d.length),
                  (b = ""),
                  0 < g && 2 >= g)
                )
                  for (f = 0; f < g && !b.length; f++) b = Nk(d[f]);
              } else b = "";
              (d = null != b && b.length) ||
                ((d = d = void 0),
                (d = e.width),
                400 > d
                  ? (d = !1)
                  : ((d /= e.height), (d = 1.3 <= d && 3 >= d)));
              d &&
                ((d = new mn()),
                (d.e = e.src),
                (d.a = b),
                (d.f = e.width),
                (d.b = e.height),
                O(this.f, d));
            }
          }
          return Vh(this.f, E(nn, da, 27, this.f.b.length, 0));
        };
        _.tb = function () {
          if (null == this.i) {
            var a, b, c;
            this.i = "";
            a = this.j.getElementsByTagName("*");
            for (c = 0; c < a.length && !this.i.length; c++)
              (b = a[c]),
                (this.i = A(b, "publisher")),
                !this.i.length && (this.i = A(b, "source_organization"));
          }
          return this.i;
        };
        _.ub = function () {
          if (null == this.k) {
            var a, b;
            !this.a && (this.a = this.j.getElementsByTagName("META"));
            this.k = "";
            if (
              0 != this.a.length &&
              ((a = this.j.getElementsByTagName("TITLE")), 0 != a.length)
            )
              for (a = 0; a < this.a.length; a++)
                if (((b = this.a[a]), F(b.name, "title"))) {
                  this.k = b.content;
                  break;
                }
          }
          return this.k;
        };
        _.vb = function () {
          return "";
        };
        _.wb = function () {
          return "";
        };
        _.xb = function () {
          if (!this.e) {
            var a, b;
            !this.a && (this.a = this.j.getElementsByTagName("META"));
            this.e = !0;
            for (a = 0; a < this.a.length; a++)
              if (((b = this.a[a]), F(b.name, "IE_RM_OFF"))) {
                this.g = F(b.content, "true");
                break;
              }
          }
          return this.g;
        };
        _.a = null;
        _.b = null;
        _.c = null;
        _.d = null;
        _.e = !1;
        _.f = null;
        _.g = !1;
        _.i = null;
        _.j = null;
        _.k = null;
        t(122);
        function Hm(a) {
          return parseInt(a, 10) | 0;
        }
        function Wl(a, b, c) {
          var d;
          if (b) {
            b = ((d = {}), b[6].push(d), d);
            if (void 0 == c) throw new TypeError();
            b[1] = c;
            a = U() - a;
            if (void 0 == a) throw new TypeError();
            b[2] = a;
          }
        }
        function V(a) {
          null == a && (a = "");
          (-1 == a.indexOf("[0;") && -1 == a.indexOf("[1;")) ||
            (a += "\u001b[0m");
          on ||
            null == $wnd.console ||
            ("function" != typeof $wnd.console.log &&
              "object" != typeof $wnd.console.log) ||
            $wnd.console.log(a);
          Jm += a + "\n";
        }
        var Wk = 0,
          Jm = "",
          on = !1;
        function Kk(a) {
          var b, c;
          c = "";
          for (b = 0; b < a.a.b.length && !c.length; b++) c = N(a.a, b).ub();
          return c;
        }
        function Qk(a, b) {
          var c;
          this.b = b;
          this.a = new P();
          c = U();
          O(this.a, new pn(a, this.b));
          Wl(c, this.b, "OpenGraphProtocolParser");
          c = U();
          O(this.a, new qn(a, this.b));
          Wl(c, this.b, "SchemaOrgParserAccessor");
          c = U();
          O(this.a, new kn(a));
          Wl(c, this.b, "IEReadingViewParser");
        }
        n(111, 1, {}, Qk);
        t(111);
        function ln() {}
        n(62, 1, {}, ln);
        _.a = null;
        _.b = "";
        _.c = "";
        _.d = "";
        _.e = "";
        t(62);
        function mn() {}
        n(27, 1, { 27: 1 }, mn);
        _.a = "";
        _.b = 0;
        _.c = "";
        _.d = "";
        _.e = "";
        _.f = 0;
        var nn = t(27);
        function Tl(a) {
          if (0 == a.a.b.length || 0 != N(a.a, a.a.b.length - 1).b.b.length)
            O(a.a, new rn()), (a.b = null);
        }
        function Vl(a, b) {
          var c, d, e;
          d = N(a.a, a.a.b.length - 1);
          0 == d.b.b.length
            ? (O(d.b, b), (a.b = b))
            : ((c = b.a - a.b.a),
              (c = 0 == c ? 0 : 0 > c ? -1 : 1),
              c != d.a
                ? 0 != d.a &&
                  ((d = ((e = new rn()), O(a.a, e), e)), 0 != c && O(d.b, a.b))
                : 0 == c && (d.b.b = E(pb, da, 1, 0, 3)),
              O(d.b, b),
              (a.b = b),
              (d.a = c));
        }
        function sn() {
          this.a = new P();
        }
        n(126, 1, {}, sn);
        _.b = null;
        t(126);
        function rn() {
          this.b = new P();
        }
        n(83, 1, {}, rn);
        _.a = 0;
        t(83);
        function Lm(a) {
          this.b = new tn(a);
          this.a = new P();
          this.d = new P();
        }
        n(183, 1, {}, Lm);
        _.mb = function () {
          this.a.U(this.a.b.length - 1);
          this.d.U(this.d.b.length - 1);
        };
        _.nb = function (a) {
          if (!this.b.a) return !1;
          O(this.a, a);
          O(this.d, null);
          1 == this.d.b.length && ((this.c = new un(a)), Uh(this.d, 0, this.c));
          if (vn(this.b, a))
            for (a = 0; a < this.a.b.length; a++)
              if (null == N(this.d, a)) {
                Uh(this.d, a, new un(N(this.a, a)));
                var b = N(this.d, a - 1),
                  c = N(this.d, a);
                jk(b.a, c);
              }
          return !0;
        };
        t(183);
        function wn(a) {
          var b, c;
          c = a.b.cloneNode(!1);
          for (a = Nh(a.a, 0); a.b != a.d.c; )
            (b = (y(a.b != a.d.c), (a.c = a.b), (a.b = a.b.a), ++a.a, a.c.c)),
              (b = wn(b)),
              c.appendChild(b);
          return c;
        }
        function Mm(a) {
          var b, c;
          c = a.b.cloneNode(!1);
          1 == a.b.nodeType &&
            ((b = Um(a.b).direction),
            !b.length && (b = "auto"),
            c.setAttribute("dir", b));
          for (a = Nh(a.a, 0); a.b != a.d.c; )
            (b = (y(a.b != a.d.c), (a.c = a.b), (a.b = a.b.a), ++a.a, a.c.c)),
              (b = Mm(b)),
              c.appendChild(b);
          return c;
        }
        function un(a) {
          this.b = a;
          this.a = new mk();
        }
        n(74, 1, {}, un);
        t(74);
        function Dn() {
          Dn = k;
          En = RegExp(
            "((\\w+):\\s+(http:\\/\\/ogp.me\\/ns(\\/\\w+)*#))\\s*",
            "gi"
          );
          In = /^xmlns:(\w+)/i;
          Jn = /^http:\/\/ogp.me\/ns(\/\w+)*#/i;
        }
        function Ln(a, b) {
          return G(a.f, b) ? H(a.f, b) : "";
        }
        function Mn(a, b, c) {
          null != c && c.length
            ? ((c = c.substr(1, c.length - 1)),
              "profile" === c
                ? fi(a.c, (On(), Pn), b)
                : "article" === c && fi(a.c, (On(), Qn), b))
            : fi(a.c, (On(), Rn), b);
        }
        function Sn(a, b) {
          var c, d;
          this.b = new Tn();
          this.d = new Un();
          this.a = new Xn();
          this.e = D(w(Yn, 1), da, 21, 0, [
            new Zn("title", (On(), Rn), null),
            new Zn("type", Rn, null),
            new Zn("url", Rn, null),
            new Zn("description", Rn, null),
            new Zn("site_name", Rn, null),
            new Zn("image", Rn, this.b),
            new Zn("image:", Rn, this.b),
            new Zn("first_name", Pn, this.d),
            new Zn("last_name", Pn, this.d),
            new Zn("section", Qn, this.a),
            new Zn("published_time", Qn, this.a),
            new Zn("modified_time", Qn, this.a),
            new Zn("expiration_time", Qn, this.a),
            new Zn("author", Qn, this.a),
          ]);
          this.f = new ui();
          this.c = new ii(bo);
          this.g = b;
          d = U();
          var e, f, g;
          c = "";
          F("HTML", a.tagName) && (c = A(a, "prefix"));
          c.length ||
            ((g = a.getElementsByTagName("HEAD")),
            1 == g.length && (c = A(g[0], "prefix")));
          if (c.length)
            for (En.lastIndex = 0; ; ) {
              g = En.exec(c);
              if (!g) break;
              Mn(this, g[2], g[4]);
            }
          else
            for (c = Tm(a), g = 0; g < c.length; g++)
              if (
                ((f = c[g]), (e = f.nodeName.toLowerCase()), (e = In.exec(e)))
              )
                (f = f.nodeValue), (f = Jn.exec(f)) && Mn(this, e[1], f[1]);
          null == di(this.c, (On(), Rn)) && fi(this.c, Rn, "og");
          null == di(this.c, Pn) && fi(this.c, Pn, "profile");
          null == di(this.c, Qn) && fi(this.c, Qn, "article");
          Wl(d, this.g, "OpenGraphProtocolParser.findPrefixes");
          d = U();
          var l, m;
          e = "";
          for (g = new li(new ki(this.c).a); ni(g.a); )
            (c = ((g.b = oi(g.a)), new pi(g.c, g.b))),
              (e += 'meta[property^\x3d"' + c.b.b[c.a.b] + '"],');
          e = eg(e, 0, e.length - 1);
          c = Yk(a, e);
          for (g = 0; g < c.length; g++)
            for (
              f = c[g], m = A(f, "property").toLowerCase(), e = 0;
              e < this.e.length;
              e++
            )
              (l = di(this.c, this.e[e].c) + ":"),
                Hf(m, l + this.e[e].a) &&
                  ((m = dg(m, l.length)),
                  (l = !0),
                  this.e[e].b && (l = this.e[e].b.yb(m, f.content, this.f)),
                  l && I(this.f, this.e[e].a, f.content));
          Wl(d, this.g, "OpenGraphProtocolParser.parseMetaTags");
          d = U();
          c = this.b;
          if (0 != c.a.b.length)
            for (g = c.a.b.length - 1; 0 <= g; g--)
              (e = N(c.a, g)[0]), (null != e && e.length) || c.a.U(g);
          Wl(d, this.g, "OpenGraphProtocolParser.imageParser.verify");
          d = U();
          c = di(this.c, Rn) + ":";
          if (!(G(this.f, "title") ? H(this.f, "title") : "").length)
            throw new qb('Required "' + c + 'title" property is missing.');
          if (!(G(this.f, "type") ? H(this.f, "type") : "").length)
            throw new qb('Required "' + c + 'type" property is missing.');
          if (!(G(this.f, "url") ? H(this.f, "url") : "").length)
            throw new qb('Required "' + c + 'url" property is missing.');
          if (0 == co(this.b).length)
            throw new qb('Required "' + c + 'image" property is missing.');
          Wl(d, this.g, "OpenGraphProtocolParser.checkRequired");
        }
        n(147, 1, {}, Sn);
        var In, Jn, En;
        t(147);
        function Xn() {
          this.b = !1;
          this.a = new P();
        }
        n(150, 1, {}, Xn);
        _.yb = function (a, b, c) {
          this.b ||
            ((c = c.c.eb("type")), (this.b = null != c && F(c, "article")));
          return this.b ? ("author" === a ? (O(this.a, b), !1) : !0) : !1;
        };
        _.b = !1;
        t(150);
        function co(a) {
          var b, c, d, e;
          e = E(nn, da, 27, a.a.b.length, 0);
          for (b = 0; b < a.a.b.length; b++)
            (c = N(a.a, b)),
              (d = new mn()),
              (e[b] = d),
              (d.e = null != c[1] && c[1].length ? c[1] : c[0]),
              null != c[2] && (d.c = c[2]),
              null != c[3] && (d.d = c[3]),
              null != c[4] && (d.f = Hm(c[4])),
              null != c[5] && (d.b = Hm(c[5]));
          return e;
        }
        function Tn() {
          this.b = D(
            w(p, 1),
            h,
            2,
            4,
            "image image:url image:secure_url image:type image:width image:height".split(
              " "
            )
          );
          this.a = new P();
        }
        n(148, 1, {}, Tn);
        _.yb = function (a, b) {
          var c, d;
          if ("image" === a)
            (d = E(p, h, 2, this.b.length, 4)), (d[0] = b), O(this.a, d);
          else
            for (
              0 == this.a.b.length
                ? ((d = E(p, h, 2, this.b.length, 4)), O(this.a, d))
                : (d = N(this.a, this.a.b.length - 1)),
                c = 1;
              c < this.b.length;
              c++
            )
              if (a === this.b[c]) {
                d[c] = b;
                break;
              }
          return !1;
        };
        t(148);
        function On() {
          On = k;
          Rn = new eo("OG", 0);
          Pn = new eo("PROFILE", 1);
          Qn = new eo("ARTICLE", 2);
        }
        function eo(a, b) {
          C.call(this, a, b);
        }
        n(44, 9, { 3: 1, 11: 1, 9: 1, 44: 1 }, eo);
        var Qn,
          Rn,
          Pn,
          bo = u(44, function () {
            On();
            return D(w(bo, 1), ea, 44, 0, [Rn, Pn, Qn]);
          });
        function Un() {
          this.b = this.a = !1;
        }
        n(149, 1, {}, Un);
        _.yb = function (a, b, c) {
          this.a ||
            ((a = c.c.eb("type")),
            (this.b = null != a && F(a, "profile")),
            (this.a = !0));
          return this.b;
        };
        _.a = !1;
        _.b = !1;
        t(149);
        function Zn(a, b, c) {
          this.a = a;
          this.c = b;
          this.b = c;
        }
        n(21, 1, { 21: 1 }, Zn);
        _.a = null;
        _.b = null;
        var Yn = t(21);
        function fo(a) {
          if (!a.a) {
            var b;
            var c = a.c,
              d = a.d;
            Dn();
            var e, f;
            try {
              (f = U()),
                (e = new Sn(c, d)),
                Wl(f, d, "OpenGraphProtocolParser.parse"),
                (b = e);
            } catch (g) {
              if (((g = qc(g)), r(g, 15))) b = null;
              else throw rc(g);
            }
            a.b = b;
            a.a = !0;
          }
          return !!a.b;
        }
        function pn(a, b) {
          this.c = a;
          this.d = b;
          this.a = !1;
        }
        n(119, 1, {}, pn);
        _.ob = function () {
          var a;
          if (fo(this)) {
            a = new ln();
            a.d = Ln(this.b, "published_time");
            a.c = Ln(this.b, "modified_time");
            a.b = Ln(this.b, "expiration_time");
            a.e = Ln(this.b, "section");
            var b;
            b = this.b.a;
            b = Vh(b.a, E(p, h, 2, b.a.b.length, 4));
            a.a = b;
            return a.e.length ||
              a.d.length ||
              a.c.length ||
              a.b.length ||
              0 != a.a.length
              ? a
              : null;
          }
          return null;
        };
        _.pb = function () {
          var a;
          if (fo(this)) {
            var b = this.b;
            a = b.f;
            b.d.b
              ? ((b = a.c.eb("first_name")),
                null == b && (b = ""),
                (a = a.c.eb("last_name")),
                null != a && b.length && a.length && (b += " "),
                (a = b + a))
              : (a = "");
          } else a = "";
          return a;
        };
        _.qb = function () {
          return "";
        };
        _.rb = function () {
          return fo(this) ? Ln(this.b, "description") : "";
        };
        _.sb = function () {
          return fo(this) ? co(this.b.b) : E(nn, da, 27, 0, 0);
        };
        _.tb = function () {
          return fo(this) ? Ln(this.b, "site_name") : "";
        };
        _.ub = function () {
          return fo(this) ? Ln(this.b, "title") : "";
        };
        _.vb = function () {
          var a;
          a = fo(this) ? Ln(this.b, "type") : "";
          return F(a, "article") ? "Article" : "";
        };
        _.wb = function () {
          return fo(this) ? Ln(this.b, "url") : "";
        };
        _.xb = function () {
          return !1;
        };
        _.a = !1;
        t(119);
        function vn(a, b) {
          if (b != a.a) return !1;
          a.a = a.b.Q() ? a.b.R() : null;
          return !0;
        }
        function tn(a) {
          this.b = a.D();
          a.I() || (this.a = this.b.R());
        }
        n(96, 1, {}, tn);
        t(96);
        function cm(a, b, c) {
          this.a = a;
          this.b = b;
          this.c = c;
        }
        n(92, 1, {}, cm);
        _.a = 0;
        _.b = 0;
        _.c = 0;
        t(92);
        function sm(a) {
          var b, c, d;
          d = "Type: " + a.e + "\nPageInfo: " + a.a.b.length;
          d += "\npattern: " + a.d;
          for (c = new M(a.a); c.b < c.d.J(); )
            (b = (y(c.b < c.d.J()), c.d.T((c.c = c.b++)))),
              (d += "\n  " + ("pg" + b.a + ": " + b.b));
          return (d +=
            "\nformula: " +
            (a.b ? go(a.b) : "null") +
            "\nnextPagingUrl: " +
            a.c);
        }
        function rm() {
          this.e = (lm(), io);
          this.a = new P();
        }
        function km(a, b, c, d, e) {
          this.e = (lm(), io);
          this.e = a;
          this.d = b;
          this.a = c;
          this.b = d;
          this.c = e;
        }
        function jm(a) {
          var b, c, d, e;
          if (2 > a.b.length) return null;
          c = (z(0, a.b.length), a.b[0]);
          b = (z(1, a.b.length), a.b[1]);
          if ((d = 2 == a.b.length))
            (d = c.a), (e = b.a), (d = 4 < (d > e ? d : e));
          if (d) return null;
          d = b.a - c.a;
          if (0 == d) return null;
          b = ~~((b.b - c.b) / d);
          if (0 == b) return null;
          c = c.b - b * c.a;
          if (0 != c && c != -b) return null;
          for (d = 2; d < a.b.length; d++)
            if (((e = (z(d, a.b.length), a.b[d])), e.b != b * e.a + c))
              return null;
          return new nm(b, c);
        }
        function hm(a, b) {
          var c, d, e, f, g, l, m, q;
          q = new jo();
          f = c = e = -1;
          m = new Ci();
          for (l = new M(a); l.b < l.d.J(); ) {
            g = (y(l.b < l.d.J()), l.d.T((l.c = l.b++)));
            d = g.c;
            if (-1 == c) e = d;
            else if (d != c + 1) {
              if (d <= c || d != c + 2 || -1 != f) return q;
              f = d - 1;
            }
            if (!R(m, gf(g.b))) return q;
            c = d;
          }
          q.a = !0;
          if (-1 != f) {
            if (0 >= f || f >= b.b.length - 1) return q;
            c = (z(f, b.b.length), b.b[f]).a;
            (z(f - 1, b.b.length), b.b[f - 1]).a == c - 1 &&
              (z(f + 1, b.b.length), b.b[f + 1]).a == c + 1 &&
              ((q.b = !0), (q.c = (z(f + 1, b.b.length), b.b[f + 1]).b));
            return q;
          }
          if (
            ((0 == e || 1 == e) &&
              1 == (z(0, b.b.length), b.b[0]).a &&
              2 == (z(1, b.b.length), b.b[1]).a) ||
            (2 == e &&
              3 == (z(2, b.b.length), b.b[2]).a &&
              of((z(1, b.b.length), b.b[1]).b) &&
              !of((z(0, b.b.length), b.b[0]).b))
          )
            return (q.b = !0), q;
          f = b.b.length;
          if (
            (c == f - 1 || c == f - 2) &&
            (z(f - 2, b.b.length), b.b[f - 2]).a + 1 ==
              (z(f - 1, b.b.length), b.b[f - 1]).a
          )
            return (q.b = !0), q;
          for (e += 1; e < c; e++)
            if (
              (z(e - 1, b.b.length), b.b[e - 1]).a + 2 ==
              (z(e + 1, b.b.length), b.b[e + 1]).a
            ) {
              q.b = !0;
              break;
            }
          return q;
        }
        function im(a, b) {
          var c, d, e, f;
          if (1 >= a.b.length) return !1;
          c = (z(0, a.b.length), a.b[0]);
          if (1 != c.a && !c.b.length) return !1;
          d = !1;
          for (f = new M(a); f.b < f.d.J(); )
            if (((e = (y(f.b < f.d.J()), f.d.T((f.c = f.b++)))), e.b.length))
              d && !b.c.length && (b.c = e.b);
            else {
              if (d) return !1;
              d = !0;
            }
          if (2 == a.b.length) return c.a + 1 == (z(1, a.b.length), a.b[1]).a;
          for (d = 1; d < a.b.length; d++)
            if (
              ((c = (z(d, a.b.length), a.b[d])),
              (e = (z(d - 1, a.b.length), a.b[d - 1])),
              1 != c.a - e.a &&
                ((1 != d && d != a.b.length - 1) || !c.b.length || !e.b.length))
            )
              return !1;
          return !0;
        }
        n(41, 1, {}, rm, km);
        _.tS = function () {
          return sm(this);
        };
        _.b = null;
        _.c = "";
        _.d = "";
        t(41);
        function go(a) {
          return "coefficient\x3d" + a.a + ", delta\x3d" + a.b;
        }
        function nm(a, b) {
          this.a = a;
          this.b = b;
        }
        n(78, 1, {}, nm);
        _.tS = function () {
          return go(this);
        };
        _.a = 0;
        _.b = 0;
        t(78);
        function Yl(a, b) {
          this.a = a;
          this.b = b;
        }
        n(26, 1, {}, Yl);
        _.tS = function () {
          return "pg" + this.a + ": " + this.b;
        };
        _.a = 0;
        t(26);
        function jo() {}
        n(105, 1, {}, jo);
        _.a = !1;
        _.b = !1;
        _.c = "";
        t(105);
        function lm() {
          lm = k;
          io = new ko("UNSET", 0);
          mm = new ko("PAGE_NUMBER", 1);
          ro = new ko("UNKNOWN", 2);
        }
        function ko(a, b) {
          C.call(this, a, b);
        }
        n(42, 9, { 3: 1, 11: 1, 9: 1, 42: 1 }, ko);
        var mm,
          ro,
          io,
          so = u(42, function () {
            lm();
            return D(w(so, 1), ea, 42, 0, [io, mm, ro]);
          });
        function to() {
          Y ||
            ((Y = new Ci()),
            R(Y, "baixar-gratis"),
            R(Y, "category"),
            R(Y, "content"),
            R(Y, "day"),
            R(Y, "date"),
            R(Y, "definition"),
            R(Y, "etiket"),
            R(Y, "film-seyret"),
            R(Y, "key"),
            R(Y, "keys"),
            R(Y, "keyword"),
            R(Y, "label"),
            R(Y, "news"),
            R(Y, "q"),
            R(Y, "query"),
            R(Y, "rating"),
            R(Y, "s"),
            R(Y, "search"),
            R(Y, "seasons"),
            R(Y, "search_keyword"),
            R(Y, "search_query"),
            R(Y, "sortby"),
            R(Y, "subscriptions"),
            R(Y, "tag"),
            R(Y, "tags"),
            R(Y, "video"),
            R(Y, "videos"),
            R(Y, "w"),
            R(Y, "wiki"));
        }
        var Y = null,
          fm = null;
        function pm(a, b) {
          var c;
          if (a.a) {
            c = a.a;
            var d = b.a;
            c =
              c.b && !d.b
                ? 1
                : !c.b && d.b
                ? -1
                : c.e == d.e
                ? 0
                : c.e == (lm(), mm)
                ? 1
                : d.e == mm
                ? -1
                : 0;
            -1 == c ? ((a.a = b.a), (a.b = b.b)) : 0 == c && (a.b = !0);
          } else (a.a = b.a), (a.b = b.b);
        }
        function Xl() {}
        function qm(a) {
          this.a = a;
        }
        n(71, 1, {}, Xl, qm);
        _.a = null;
        _.b = !1;
        t(71);
        function bm(a, b, c) {
          var d;
          d = b.tS();
          G(a.a, d) ? O(H(a.a, d).a, c) : I(a.a, d, new uo(b, c));
        }
        function Zl() {
          this.a = new ui();
        }
        n(127, 1, {}, Zl);
        t(127);
        function uo(a, b) {
          this.b = a;
          this.a = new P();
          O(this.a, b);
        }
        n(128, 1, {}, uo);
        t(128);
        function Ml() {
          Ml = k;
          Ol = /\/$/;
        }
        function Ul(a, b, c, d, e) {
          var f;
          f = c ? b : d ? b.previousSibling : b.nextSibling;
          if (!f)
            return (
              (f = b.parentNode),
              !zo && (zo = /(BODY)|(HTML)/),
              zo.test(f.nodeName) ? !1 : Ul(a, f, !1, d, e)
            );
          c = !1;
          switch (f.nodeType) {
            case 3:
              b = f.nodeValue;
              if (!b.length || (T(), 0 == Mk.Bb(b))) break;
              b = f.nodeValue;
              var g, l, m;
              if (em(b)) {
                Go
                  ? (Go.lastIndex = 0)
                  : (Go = RegExp(
                      "(\\S*[\\w\u00c0-\u1fff\u2c00-\ud7ff]\\S*)",
                      "gi"
                    ));
                !Ho && (Ho = /^[\W_]*(\d+)[\W_]*$/i);
                for (g = !1; ; ) {
                  l = Go.exec(b);
                  if (!l) break;
                  1 >= l.length ||
                    ((l = l[1]),
                    (m = Ho.exec(l)),
                    (l = -1),
                    m && 1 < m.length && (l = Ko(m[1])),
                    0 <= l && 100 >= l
                      ? (Vl(a.a, new Yl(l, "")), (g = !0))
                      : Tl(a.a));
                }
                b = g;
              } else Tl(a.a), (b = !1);
              if (d || !b) return !1;
              break;
            case 1:
              if (((b = f), F("A", b.tagName))) {
                if (d) return !1;
                ++a.c;
                (b = Sl(a, b, e))
                  ? (Vl(a.a, b.a), (b = !0))
                  : (Tl(a.a), (b = !1));
                if (!b) return !1;
                break;
              }
            default:
              if (!f.hasChildNodes()) break;
              c = !0;
              d ? (f = f.lastChild) : (f = f.firstChild);
          }
          return Ul(a, f, c, d, e);
        }
        function Sl(a, b, c) {
          var d, e, f, g;
          if (!vm(b)) return null;
          g = Ok(Nk(b));
          g = sf(g, "[()\\[\\]{}]");
          g = rg(g);
          g = Ko(g);
          if (!(0 <= g && 100 >= g)) return null;
          d = A(b, "href");
          d.length ? (c.setAttribute("href", d), (f = c.href)) : (f = "");
          d = !f.length;
          e = !1;
          c = null;
          if (!d) {
            e = "javascript:" === f.substr(0, 11);
            c = Pl(f);
            if (!c || (!e && !F(c.d.host, a.d.d.host))) return null;
            c.d.hash = "";
          }
          if (!(a = d || e)) {
            b = Um(b);
            b = b.cursor.toUpperCase();
            Wc();
            a = (Ce(), Je);
            Qc(b);
            a = a[":" + b];
            b = D(w(pb, 1), da, 1, 3, [b]);
            if (!a) throw new df(Tc("Enum constant undefined: %s", b));
            a = a == (Wc(), Td);
          }
          return a ? new Lo(g, "") : new Lo(g, Xa(c.d).replace(Ol, ""));
        }
        function Nl(a) {
          this.a = new sn();
          this.e = a;
        }
        n(109, 1, {}, Nl);
        _.b = "";
        _.c = 0;
        _.d = null;
        var Ol,
          zo = null,
          Ho = null,
          Go = null;
        t(109);
        function Lo(a, b) {
          this.a = new Yl(a, b);
        }
        n(80, 1, {}, Lo);
        t(80);
        function tm() {
          tm = k;
          Am = RegExp(
            "(next|weiter|continue|\x3e([^\\|]|$)|\u00bb([^\\|]|$))",
            "i"
          );
          Em = RegExp("(prev|early|old|new|\x3c|\u00ab)", "i");
          Fm =
            /article|body|content|entry|hentry|main|page|pagination|post|text|blog|story/i;
          Dm = RegExp(
            "combx|comment|com-|contact|foot|footer|footnote|masthead|media|meta|outbrain|promo|related|shoutbox|sidebar|sponsor|shopping|tags|tool|widget",
            "i"
          );
          xm = RegExp(
            "print|archive|comment|discuss|e[\\-]?mail|share|reply|all|login|sign|single|as one|article|post|\u7bc7",
            "i"
          );
          Bm = /pag(e|ing|inat)/i;
          Gm = /p(a|g|ag)?(e|ing|ination)?(=|\/)[0-9]{1,2}$/i;
          Cm = /(first|last)/i;
          wm = /\/?(#.*)?$/;
          ym = /\d/;
          um = new ui();
        }
        function X(a, b) {
          var c;
          3 > Wk ||
            ((c = ""),
            eh(um, a) && (c = gh(um, a)),
            !c.length || (c += "; "),
            hh(um, a, c + b));
        }
        function Ql(a) {
          tm();
          var b, c;
          c = $doc;
          W();
          c = c.implementation.createHTMLDocument();
          b = c.createElement("base");
          b.href = a;
          (c.head || c.getElementsByTagName("head")[0]).appendChild(b);
          a = c.createElement("a");
          c.body.appendChild(a);
          return a;
        }
        function Rl(a, b) {
          tm();
          var c, d;
          d = a.getElementsByTagName("BASE");
          if (0 == d.length) return b;
          c = Ql(b);
          d = A(d[0], "href");
          c.setAttribute("href", d);
          return c.href;
        }
        var xm, Cm, wm, Gm, Dm, Am, ym, Bm, Fm, Em, um;
        function zm(a, b, c) {
          this.b = a;
          this.d = 0;
          this.c = b;
          this.a = c;
        }
        n(110, 1, {}, zm);
        _.b = -1;
        _.d = 0;
        t(110);
        function So(a) {
          var b;
          null == a.a &&
            ((b = (null == a.c && (a.c = dm(a.d)), a.c)),
            b.length ? (a.a = (T(), Gf(b, "\\/"))) : (a.a = E(p, h, 2, 0, 4)));
          return a.a;
        }
        function Uo(a) {
          this.d = a;
        }
        function Pl(a) {
          var b;
          try {
            b = new URL(a);
          } catch (c) {
            b = null;
          }
          return b ? new Uo(b) : null;
        }
        n(70, 1, { 70: 1 }, Uo);
        _.tS = function () {
          return Xa(this.d);
        };
        _.a = null;
        _.b = null;
        var om = (_.c = null),
          $l = t(70);
        function dm(a) {
          a = a.pathname.replace(/;.*$/, "");
          a = a.replace(/^\//, "");
          return a.replace(/\/$/, "");
        }
        function Vo(a) {
          var b, c;
          if (2 > a.b) return !1;
          c = So(a.g);
          if (4 != c[a.b].length) return !1;
          b = Ko(c[a.b - 1]);
          return 0 < b && 12 >= b && ((a = Ko(c[a.b - 2])), 1970 < a && 3e3 > a)
            ? !0
            : !1;
        }
        function Yo(a, b) {
          var c, d, e, f;
          f = b.length;
          e = f - a.f.length;
          if (!Hf(b, a.e)) return !1;
          c = a.c;
          for (
            d = lf(a.d, e);
            c < d && b.charCodeAt(c) == a.i.charCodeAt(c);
            c++
          );
          if (c == e) {
            if ((d = c + 1 == a.d))
              (d = a.i.charCodeAt(c)),
                128 > d
                  ? ((e = (bf(), cf)[d]),
                    !e && (e = cf[d] = new $e(d)),
                    (d = e))
                  : (d = new $e(d)),
                (d = /[-_;,]/.test(d));
            if (d || c + a.f.length == f) return !0;
          } else if (c == a.d && 0 <= Ko(b.substr(c, e - c))) return !0;
          return !1;
        }
        function gm(a, b, c, d) {
          var e;
          a = Xa(a.d);
          a: {
            if (
              47 == a.charCodeAt(c - 1) &&
              b < c - 1 &&
              ((e = a.substr(d, a.length - d).toLowerCase()),
              !Zo && (Zo = /(.s?html?)?$/i),
              Zo.test(e) &&
                (!bp && (bp = /([^/]*)\/$/i),
                (b = a.substr(b + 1, c - (b + 1))),
                (b = bp.exec(b)) &&
                  1 < b.length &&
                  (to(), S(Y, b[1].toLowerCase()))))
            ) {
              b = !0;
              break a;
            }
            b = !1;
          }
          if (b) throw new df("Bad last numeric path component");
          e = a.substr(c, d - c);
          b = Ko(e);
          if (0 > b)
            throw new df("Value in path component is an invalid number: " + e);
          d = a.substr(0, c) + "[*!]" + a.substr(d, a.length - d);
          this.g = Pl(d);
          if (!this.g) throw new df("Invalid URL: " + d);
          this.i = d;
          this.a = b;
          this.d = c;
          this.c = pf(this.i, 47, this.d);
          c = So(this.g);
          for (
            this.b = 0;
            this.b < c.length && -1 == c[this.b].indexOf("[*!]");
            this.b++
          );
          this.e = eg(this.i, 0, this.c);
          d = this.i.length;
          c = d - this.d - 4;
          0 != c && (this.f = dg(this.i, d - c));
        }
        n(185, 1, {}, gm);
        _.zb = function (a) {
          if (this.f.length && !nf(a, this.f)) a = !1;
          else if (47 == this.i.charCodeAt(this.d - 1))
            a: {
              var b, c, d, e;
              e = a.length;
              c = this.f.length;
              d = a.length - c;
              b = pf(
                this.g.d.pathname,
                47,
                this.c - 1 - this.g.d.origin.length
              );
              if (-1 != b && ((b += this.g.d.origin.length), b + c == e)) {
                a = qf(a, 0, this.i, 0, b);
                break a;
              }
              Hf(a, this.e)
                ? ((b = this.c + c),
                  (a =
                    b == e
                      ? !0
                      : b > e || 47 != a.charCodeAt(this.c)
                      ? !1
                      : 0 <= Ko(eg(a, this.c + 1, d))))
                : (a = !1);
            }
          else a = Yo(this, a);
          return a;
        };
        _.Ab = function (a) {
          var b, c;
          b = So(a).length;
          c = So(this.g).length;
          if (b > c) return !1;
          if (1 == b && 1 == c) {
            c = So(a)[0];
            a = So(this.g)[0];
            var d;
            if (c.length && a.length)
              for (
                d = lf(c.length, a.length), b = 0;
                b < d && c.charCodeAt(b) == a.charCodeAt(b);
                b++
              );
            else b = 0;
            d = b;
            var e, f, g;
            e = 0;
            f = c.length - 1;
            for (
              g = a.length - 1;
              f > d && g > d && c.charCodeAt(f) == a.charCodeAt(g);
              --f, --g, e++
            );
            return 2 * (e + b) >= c.length;
          }
          a: {
            e = So(a);
            d = So(this.g);
            b = !1;
            for (c = a = 0; a < e.length && c < d.length; ++a, c++)
              if (a == this.b && !b) (b = !0), e.length < d.length && --a;
              else if (!F(e[a], d[c])) {
                a = !1;
                break a;
              }
            a = !0;
          }
          return !a || Vo(this) ? !1 : !0;
        };
        _.tS = function () {
          return this.i;
        };
        _.a = 0;
        _.b = -1;
        _.c = 0;
        _.d = 0;
        _.f = "";
        var Zo = null,
          bp = null;
        t(185);
        function am(a, b, c, d) {
          var e;
          if (!c.length) throw new df("Empty query name");
          if (!d.length) throw new df("Empty query value");
          if (!cp(d)) throw new df("Query value has non-digits: " + d);
          to();
          if (S(Y, c.toLowerCase()))
            throw new df("Query name is bad page param name: " + c);
          e = Ko(d);
          if (0 > e) throw new df("Query value is an invalid number: " + d);
          b = (b ? "?" : "\x26") + c + "\x3d";
          a = a.d.href.replace(b + d, b + "[*!]");
          this.i = Pl(a);
          if (!this.i) throw new df("Invalid URL: " + a);
          this.j = a;
          this.a = e;
          this.c = a.indexOf("[*!]");
          this.e = pf(this.j, 63, this.c - 1);
          this.b = pf(this.j, 38, this.c - 1);
          -1 == this.b && (this.b = this.e);
          !dp && (dp = /\/$/);
          this.d = eg(this.j, 0, this.b).replace(dp, "");
          e = this.j.length;
          this.g = e - this.c - 4;
          0 != this.g && (this.f = dg(this.j, e - this.g + 1));
        }
        n(184, 1, {}, am);
        _.zb = function (a) {
          var b, c;
          if (0 != this.g && !nf(a, this.f)) return !1;
          c = a.length - this.g;
          if (!Hf(a, this.d)) return !1;
          if (this.b == c || (c == this.b - 1 && 47 == this.j.charCodeAt(c)))
            return !0;
          b = eg(a, this.b, c).toLowerCase();
          !jp && (jp = /^\/|(.html?)$/i);
          return jp.test(b)
            ? !0
            : qf(a, this.b, this.j, this.b, this.c - this.b)
            ? 0 <= Ko(eg(a, this.c, c))
            : !1;
        };
        _.Ab = function (a) {
          a = (null == a.c && (a.c = dm(a.d)), a.c);
          var b = this.i;
          null == b.c && (b.c = dm(b.d));
          return F(a, b.c);
        };
        _.tS = function () {
          return this.j;
        };
        _.a = 0;
        _.b = 0;
        _.c = 0;
        _.e = 0;
        _.f = "";
        _.g = 0;
        var dp = null,
          jp = null;
        t(184);
        function kp() {
          kp = k;
          lp = new ui();
          I(lp, "http://schema.org/ImageObject", (mp(), np));
          I(lp, "http://schema.org/Article", op);
          I(lp, "http://schema.org/BlogPosting", op);
          I(lp, "http://schema.org/NewsArticle", op);
          I(lp, "http://schema.org/ScholarlyArticle", op);
          I(lp, "http://schema.org/TechArticle", op);
          I(lp, "http://schema.org/Person", pp);
          I(lp, "http://schema.org/Organization", rp);
          I(lp, "http://schema.org/Corporation", rp);
          I(lp, "http://schema.org/EducationalOrganization", rp);
          I(lp, "http://schema.org/GovernmentOrganization", rp);
          I(lp, "http://schema.org/NGO", rp);
          Gp = new ui();
          I(Gp, "IMG", "SRC");
          I(Gp, "AUDIO", "SRC");
          I(Gp, "EMBED", "SRC");
          I(Gp, "IFRAME", "SRC");
          I(Gp, "SOURCE", "SRC");
          I(Gp, "TRACK", "SRC");
          I(Gp, "VIDEO", "SRC");
          I(Gp, "A", "HREF");
          I(Gp, "LINK", "HREF");
          I(Gp, "AREA", "HREF");
          I(Gp, "META", "CONTENT");
          I(Gp, "TIME", "DATETIME");
          I(Gp, "OBJECT", "DATA");
          I(Gp, "DATA", "VALUE");
          I(Gp, "METER", "VALUE");
        }
        function Hp(a) {
          var b, c, d;
          b = new P();
          for (c = 0; c < a.c.b.length; c++)
            (d = N(a.c, c)), d.d == (mp(), op) && O(b, d);
          return b;
        }
        function Ip(a, b, c) {
          var d, e, f, g, l;
          e = null;
          d = b.hasAttribute("ITEMSCOPE") && b.hasAttribute("ITEMTYPE");
          if (c) {
            var m;
            f = A(b, "ITEMPROP");
            f.length
              ? ((m = (T(), Gf(f, "\\s+"))),
                (f = 0 < m.length ? m : D(w(p, 1), h, 2, 4, [f])))
              : (f = E(p, h, 2, 0, 4));
          } else f = E(p, h, 2, 0, 4);
          if (d) {
            a: {
              var q;
              switch (
                ((q = A(b, "ITEMTYPE")), G(lp, q) ? H(lp, q) : (mp(), Jp)).b
              ) {
                case 0:
                  e = new Kp(b);
                  break;
                case 1:
                  e = new Lp(b);
                  break;
                case 2:
                  e = new Mp(b);
                  break;
                case 3:
                  e = new Np(b);
                  break;
                case 4:
                  e = new Op(b);
                  break;
                default:
                  e = null;
                  break a;
              }
            }
            !e ||
              e.d == (mp(), Jp) ||
              (c && c.d == (mp(), Jp) && 0 != f.length) ||
              (O(a.c, e), hh(a.b, b, e));
          }
          if (0 < f.length && c.d != (mp(), Jp) && (!e || e.d != (mp(), Jp)))
            for (a = 0; a < f.length; a++)
              e
                ? G(c.b, f[a]) && I(c.b, f[a], e)
                : ((d = c),
                  (q = f[a]),
                  (m =
                    ((g = ""),
                    (l = b.tagName),
                    G(Gp, l) && (g = A(b, H(Gp, l))),
                    !g.length && (g = Lk(b)),
                    g)),
                  G(d.c, q) && !H(d.c, q).length && I(d.c, q, m));
        }
        function Pp(a, b) {
          kp();
          var c;
          this.c = new P();
          this.b = new ui();
          this.d = b;
          c = U();
          var d, e, f, g, l;
          d = Yk(a, "[ITEMPROP],[ITEMSCOPE]");
          Ip(this, a, null);
          for (f = 0; f < d.length; f++) {
            for (
              var m = (e = d[f]), q = void 0, v = void 0, v = null, q = e;
              q;

            ) {
              q = B(q);
              if (!q) break;
              if (q.hasAttribute("ITEMSCOPE") && q.hasAttribute("ITEMTYPE")) {
                eh(this.b, q) && (v = gh(this.b, q));
                break;
              }
            }
            Ip(this, m, v);
          }
          d = Yk(a, "A[rel\x3dauthor],LINK[rel\x3dauthor]");
          for (f = 0; f < d.length; f++)
            (e = d[f]),
              !this.a.length &&
                (this.a =
                  ((g = ""),
                  (l = e.tagName),
                  (F(l, "A") || F(l, "LINK")) &&
                    F(A(e, "REL"), "author") &&
                    (g = Lk(e)),
                  g));
          Wl(c, this.d, "SchemaOrgParser.parse");
        }
        function Qp(a, b) {
          kp();
          var c;
          c = a;
          a.length && b.length && (c += " ");
          return c + b;
        }
        n(28, 1, {}, Pp);
        _.a = "";
        var Gp, lp;
        t(28);
        function Rp(a, b) {
          return G(a.c, b) ? H(a.c, b) : "";
        }
        function Sp(a, b) {
          this.a = b;
          this.d = a;
          this.c = new ui();
          this.b = new ui();
          I(this.c, "name", "");
          I(this.c, "url", "");
          I(this.c, "description", "");
          I(this.c, "image", "");
        }
        n(45, 1, {});
        t(45);
        function Tp(a, b) {
          var c, d, e, f;
          c = G(a.c, b) ? H(a.c, b) : "";
          if (c.length) return c;
          (d = G(a.b, b) ? H(a.b, b) : null) &&
            (d.d == (mp(), pp)
              ? (c =
                  ((e = G(d.c, "name") ? H(d.c, "name") : ""),
                  e.length
                    ? e
                    : Qp(
                        G(d.c, "givenName") ? H(d.c, "givenName") : "",
                        G(d.c, "familyName") ? H(d.c, "familyName") : ""
                      )))
              : d.d == rp &&
                (c =
                  ((f = G(d.c, "name") ? H(d.c, "name") : ""),
                  f.length
                    ? f
                    : G(d.c, "legalName")
                    ? H(d.c, "legalName")
                    : "")));
          return c;
        }
        function Lp(a) {
          Sp.call(this, (mp(), op), a);
          I(this.c, "headline", "");
          I(this.c, "publisher", "");
          I(this.c, "copyrightHolder", "");
          I(this.c, "copyrightYear", "");
          I(this.c, "dateModified", "");
          I(this.c, "datePublished", "");
          I(this.c, "author", "");
          I(this.c, "creator", "");
          I(this.c, "articleSection", "");
          hh(this.b, "publisher", null);
          hh(this.b, "copyrightHolder", null);
          hh(this.b, "author", null);
          hh(this.b, "creator", null);
          hh(this.b, "associatedMedia", null);
          hh(this.b, "encoding", null);
        }
        n(152, 45, {}, Lp);
        t(152);
        function Kp(a) {
          Sp.call(this, (mp(), np), a);
          I(this.c, "contentUrl", "");
          I(this.c, "encodingFormat", "");
          I(this.c, "caption", "");
          I(this.c, "representativeOfPage", "");
          I(this.c, "width", "");
          I(this.c, "height", "");
        }
        n(151, 45, {}, Kp);
        t(151);
        function Np(a) {
          Sp.call(this, (mp(), rp), a);
          I(this.c, "legalName", "");
        }
        n(154, 45, {}, Np);
        t(154);
        function Mp(a) {
          Sp.call(this, (mp(), pp), a);
          I(this.c, "familyName", "");
          I(this.c, "givenName", "");
        }
        n(153, 45, {}, Mp);
        t(153);
        function mp() {
          mp = k;
          np = new Up("IMAGE", 0);
          op = new Up("ARTICLE", 1);
          pp = new Up("PERSON", 2);
          rp = new Up("ORGANIZATION", 3);
          Jp = new Up("UNSUPPORTED", 4);
        }
        function Up(a, b) {
          C.call(this, a, b);
        }
        n(33, 9, { 3: 1, 11: 1, 9: 1, 33: 1 }, Up);
        var op,
          np,
          rp,
          pp,
          Jp,
          Vp = u(33, function () {
            mp();
            return D(w(Vp, 1), ea, 33, 0, [np, op, pp, rp, Jp]);
          });
        function Op(a) {
          Sp.call(this, (mp(), Jp), a);
        }
        n(155, 45, {}, Op);
        t(155);
        function qn(a, b) {
          this.b = a;
          this.c = b;
        }
        n(120, 1, {}, qn);
        _.ob = function () {
          var a;
          !this.a && (this.a = new Pp(this.b, this.c));
          a = Hp(this.a);
          if (0 == a.b.length) a = null;
          else {
            a = (z(0, a.b.length), a.b[0]);
            var b, c;
            b = new ln();
            b.d = G(a.c, "datePublished") ? H(a.c, "datePublished") : "";
            b.c = G(a.c, "dateModified") ? H(a.c, "dateModified") : "";
            b.e = G(a.c, "articleSection") ? H(a.c, "articleSection") : "";
            c = Tp(a, "author");
            !c.length && (c = Tp(a, "creator"));
            b.a = c.length ? D(w(p, 1), h, 2, 4, [c]) : E(p, h, 2, 0, 4);
            a = b;
          }
          return a;
        };
        _.pb = function () {
          var a, b;
          !this.a && (this.a = new Pp(this.b, this.c));
          b = "";
          a = Hp(this.a);
          0 != a.b.length &&
            ((a = (z(0, a.b.length), a.b[0])),
            (b = Tp(a, "author")),
            !b.length && (b = Tp(a, "creator")));
          return b.length ? b : this.a.a;
        };
        _.qb = function () {
          var a;
          !this.a && (this.a = new Pp(this.b, this.c));
          a = Hp(this.a);
          0 == a.b.length
            ? (a = "")
            : ((a = (z(0, a.b.length), a.b[0])),
              (a = Qp(
                G(a.c, "copyrightYear") ? H(a.c, "copyrightYear") : "",
                Tp(a, "copyrightHolder")
              )),
              (a = a.length ? "Copyright " + a : a));
          return a;
        };
        _.rb = function () {
          var a;
          !this.a && (this.a = new Pp(this.b, this.c));
          a = Hp(this.a);
          return 0 == a.b.length
            ? ""
            : Rp((z(0, a.b.length), a.b[0]), "description");
        };
        _.sb = function () {
          var a, b, c, d, e, f, g, l;
          !this.a && (this.a = new Pp(this.b, this.c));
          g = new P();
          b = Hp(this.a);
          c = null;
          for (d = 0; d < b.b.length; d++) {
            a = (z(d, b.b.length), b.b[d]);
            if (
              !c &&
              (c =
                ((e = G(a.b, "associatedMedia")
                  ? H(a.b, "associatedMedia")
                  : null),
                !e && (e = G(a.b, "encoding") ? H(a.b, "encoding") : null),
                e && e.d == (mp(), np) ? e : null))
            )
              continue;
            var m = (f = void 0),
              m = G(a.c, "image") ? H(a.c, "image") : "";
            m.length ? ((f = new mn()), (f.e = m), (a = f)) : (a = null);
            a && (g.b[g.b.length] = a);
          }
          d = this.a;
          b = new P();
          for (a = 0; a < d.c.b.length; a++)
            (e = N(d.c, a)), e.d == (mp(), np) && O(b, e);
          d = !1;
          for (e = 0; e < b.b.length; e++)
            (f = (z(e, b.b.length), b.b[e])),
              (a =
                ((l = new mn()),
                (l.e = G(f.c, "contentUrl") ? H(f.c, "contentUrl") : ""),
                !l.e.length && (l.e = G(f.c, "url") ? H(f.c, "url") : ""),
                (l.d = G(f.c, "encodingFormat")
                  ? H(f.c, "encodingFormat")
                  : ""),
                (l.a = G(f.c, "caption") ? H(f.c, "caption") : ""),
                (l.f = Hm(G(f.c, "width") ? H(f.c, "width") : "")),
                (l.b = Hm(G(f.c, "height") ? H(f.c, "height") : "")),
                l)),
              f == c ||
              (!d &&
                F(
                  G(f.c, "representativeOfPage")
                    ? H(f.c, "representativeOfPage")
                    : "",
                  "true"
                ))
                ? ((d = !0), Sc(0, g.b.length), g.b.splice(0, 0, a))
                : (g.b[g.b.length] = a);
          return Vh(g, E(nn, da, 27, g.b.length, 0));
        };
        _.tb = function () {
          var a, b;
          !this.a && (this.a = new Pp(this.b, this.c));
          b = "";
          a = Hp(this.a);
          0 != a.b.length &&
            ((a = (z(0, a.b.length), a.b[0])),
            (b = Tp(a, "publisher")),
            !b.length && (b = Tp(a, "copyrightHolder")));
          return b;
        };
        _.ub = function () {
          var a, b, c;
          !this.a && (this.a = new Pp(this.b, this.c));
          c = "";
          var d = Hp(this.a),
            d = new Wh(d),
            e = new Wp();
          a = Me(d.b, d.b.length);
          b = a.length;
          var f, g;
          !e && (e = (Zh(), Zh(), $h));
          f = b - 0;
          g = D(w(pb, 1), da, 1, 3, [gf(0), gf(b)]);
          if (!(0 <= f)) throw new df(Tc("%s \x3e %s", g));
          g = Ne(a, f);
          var l = 0,
            m = lf(a.length - 0, f);
          f = 0;
          var q, v, J, tb, Ca;
          if (null == a) throw new mf("src");
          if (null == g) throw new mf("dest");
          tb = Aa(a);
          v = Aa(g);
          Mc(0 != (tb.f & 4), "srcType is not an array");
          Mc(0 != (v.f & 4), "destType is not an array");
          J = tb.c;
          q = v.c;
          Mc(
            0 != (J.f & 1) ? J == q : 0 == (q.f & 1),
            "Array types don't match"
          );
          Ca = a.length;
          q = g.length;
          if (0 > l || 0 > f || 0 > m || l + m > Ca || f + m > q)
            throw new Ue();
          if ((0 != (J.f & 1) && 0 == (J.f & 4)) || tb == v)
            0 < m && Re(a, l, g, f, m, !0);
          else if (s(a) === s(g) && l < f)
            for (l += m, m = f + m; m-- > f; ) g[m] = a[--l];
          else for (m = f + m; f < m; ) g[f++] = a[l++];
          Xh(g, a, 0, b, -0, e);
          e = d.b.length;
          for (b = 0; b < e; b++) Uh(d, b, a[b]);
          for (a = 0; a < d.b.length && !c.length; a++)
            (b = (z(a, d.b.length), d.b[a])),
              (c = G(b.c, "headline") ? H(b.c, "headline") : ""),
              !c.length && (c = G(b.c, "name") ? H(b.c, "name") : "");
          return c;
        };
        _.vb = function () {
          !this.a && (this.a = new Pp(this.b, this.c));
          return 0 == Hp(this.a).b.length ? "" : "Article";
        };
        _.wb = function () {
          var a;
          !this.a && (this.a = new Pp(this.b, this.c));
          a = Hp(this.a);
          return 0 == a.b.length ? "" : Rp((z(0, a.b.length), a.b[0]), "url");
        };
        _.xb = function () {
          return !1;
        };
        t(120);
        function Wp() {}
        n(121, 1, {}, Wp);
        _.Z = function (a, b) {
          var c, d;
          c = Sm(a.a);
          d = Sm(b.a);
          return c > d ? -1 : c < d ? 1 : 0;
        };
        t(121);
        function T() {
          T = k;
          Mk = new Tk();
        }
        function em(a) {
          T();
          return /\d/.test(a);
        }
        function Im(a) {
          T();
          return decodeURIComponent(a);
        }
        function cp(a) {
          T();
          return /^\d+$/.test(a);
        }
        function Xp(a) {
          T();
          return !/\S/.test(a);
        }
        function fn(a, b) {
          T();
          return a.join(b);
        }
        function $m(a) {
          T();
          return a.split(",");
        }
        function Ok(a) {
          T();
          return a.trim();
        }
        function Ko(a) {
          T();
          return a.length && cp(a) ? Hm(a) : -1;
        }
        var Mk;
        function Vk() {}
        n(108, 1, {}, Vk);
        _.Bb = function (a) {
          return (a = a.match(/(\S*[\w\u00C0-\u1FFF]\S*)/g)) ? a.length : 0;
        };
        t(108);
        function Tk() {}
        n(79, 1, {}, Tk);
        _.Bb = function (a) {
          var b = a.match(/(\S*[\w\u00C0-\u1FFF\uAC00-\uD7AF]\S*)/g),
            c = b ? b.length : 0,
            b = a.match(/([\u3040-\uA4CF])/g);
          return (c += Math.ceil(0.55 * (b ? b.length : 0)));
        };
        t(79);
        function Uk() {}
        n(107, 1, {}, Uk);
        _.Bb = function (a) {
          return (a = a.match(/(\S*[\w\u00C0-\u1FFF\uAC00-\uD7AF]\S*)/g))
            ? a.length
            : 0;
        };
        t(107);
        function Yp() {
          Yp = k;
          Zp = new ui();
          I(Zp, "COLGROUP", (We(), Xe));
          I(Zp, "COL", Xe);
          I(Zp, "TH", Ze);
          $p = new ui();
          I($p, "EMBED", Xe);
          I($p, "OBJECT", Xe);
          I($p, "APPLET", Xe);
          I($p, "IFRAME", Xe);
          aq = new Ci();
          R(aq, "grid");
          R(aq, "treegrid");
          bq = new Ci();
          R(bq, "gridcell");
          R(bq, "columnheader");
          R(bq, "row");
          R(bq, "rowgroup");
          R(bq, "rowheader");
          cq = new Ci();
          R(cq, "application");
          R(cq, "banner");
          R(cq, "complementary");
          R(cq, "contentinfo");
          R(cq, "form");
          R(cq, "main");
          R(cq, "navigation");
          R(cq, "search");
        }
        function dq(a, b) {
          var c, d, e;
          for (d = new M(a); d.b < d.d.J(); )
            if (
              ((c = (y(d.b < d.d.J()), d.d.T((d.c = d.b++)))),
              (e = c.tagName),
              null == e ? fh(b.a, null) : void 0 !== b.c.eb(e))
            )
              return !(null == e ? ch(fh(b.a, null)) : b.c.eb(e)).a || eq(c);
          return !1;
        }
        function eq(a) {
          a = Nk(a);
          return !!a.length && !Xp(a);
        }
        function fq(a, b, c) {
          2 <= Wk && V(a + b + " -\x3e " + c);
          return c;
        }
        function gq(a) {
          Yp();
          var b, c, d, e, f, g, l, m;
          hq();
          for (f = B(a); f; ) {
            if (F("INPUT", f.tagName) || F(A(f, "contenteditable"), "true"))
              return fq(iq, "", (Z(), jq));
            f = B(f);
          }
          f = A(a, "role").toLowerCase();
          if ("presentation" === f) return fq(kq, "_" + f, (Z(), jq));
          if (S(aq, f) || S(cq, f)) return fq(kq, "_" + f, (Z(), lq));
          f = new P();
          g = a.getElementsByTagName("*");
          if (0 < a.getElementsByTagName("TABLE").length)
            for (e = 0; e < g.length; e++)
              for (c = g[e], d = B(c); d; ) {
                if (F("TABLE", d.tagName)) {
                  d == a && (f.b[f.b.length] = c);
                  break;
                }
                d = B(d);
              }
          else for (e = 0; e < g.length; e++) O(f, g[e]);
          for (g = new M(f); g.b < g.d.J(); )
            if (
              ((b = (y(g.b < g.d.J()), g.d.T((g.c = g.b++)))),
              (c = A(b, "role").toLowerCase()),
              S(bq, c) || S(cq, c))
            )
              return fq(mq, "_" + c, (Z(), lq));
          if ("0" === A(a, "datatable")) return fq(nq, "", (Z(), jq));
          if (0 < a.getElementsByTagName("TABLE").length)
            return fq(oq, "", (Z(), jq));
          g = a.rows;
          if (1 >= g.length) return fq(pq, "", (Z(), jq));
          c = null;
          for (d = b = 0; d < g.length; d++)
            (e = g[d].cells), e.length > b && ((b = e.length), (c = e));
          d = c;
          if (!d || 1 >= d.length) return fq(qq, "", (Z(), jq));
          if (((c = a.caption) && eq(c)) || a.tHead || a.tFoot || dq(f, Zp))
            return fq(rq, "", (Z(), lq));
          c = new P();
          for (e = new M(f); e.b < e.d.J(); )
            (b = (y(e.b < e.d.J()), e.d.T((e.c = e.b++)))),
              F("TD", b.tagName) && (c.b[c.b.length] = b);
          for (e = new M(c); e.b < e.d.J(); ) {
            b = (y(e.b < e.d.J()), e.d.T((e.c = e.b++)));
            if (
              b.hasAttribute("abbr") ||
              b.hasAttribute("headers") ||
              b.hasAttribute("scope")
            )
              return fq(sq, "", (Z(), lq));
            b = b.getElementsByTagName("*");
            if (1 == b.length && F("ABBR", b[0].tagName))
              return fq(tq, "", (Z(), lq));
          }
          e = a.ownerDocument.documentElement;
          b = (e.offsetWidth || 0) | 0;
          if (0 < b && ((a.offsetWidth || 0) | 0) > 0.95 * b) {
            m = !1;
            b = e.getElementsByTagName("META");
            for (l = 0; l < b.length && !m; l++)
              (m = b[l]), (m = F(m.name, "viewport"));
            if (!m) return fq(uq, "", (Z(), jq));
          }
          if (a.hasAttribute("summary")) return fq(vq, "", (Z(), lq));
          if (5 <= d.length) return fq(wq, "", (Z(), lq));
          for (d = new M(c); d.b < d.d.J(); )
            if (
              ((b = (y(d.b < d.d.J()), d.d.T((d.c = d.b++)))),
              (b = Um(b).borderStyle),
              b.length && "none" !== b && "hidden" !== b)
            )
              return fq(xq, "_" + b, (Z(), lq));
          l = null;
          for (b = 0; b < g.length; b++)
            if (((d = Um(g[b]).backgroundColor), null == l)) l = d;
            else if (!F(l, d)) return fq(yq, "", (Z(), lq));
          if (20 <= g.length) return fq(zq, "", (Z(), lq));
          if (10 >= c.b.length) return fq(Aq, "", (Z(), jq));
          if (dq(f, $p)) return fq(Bq, "", (Z(), jq));
          f = (e.offsetHeight || 0) | 0;
          return 0 < f && ((a.offsetHeight || 0) | 0) > 0.9 * f
            ? fq(Cq, "", (Z(), jq))
            : fq(Dq, "", (Z(), lq));
        }
        var cq, bq, aq, Zp, $p;
        function hq() {
          hq = k;
          iq = new Eq("INSIDE_EDITABLE_AREA", 0);
          kq = new Eq("ROLE_TABLE", 1);
          mq = new Eq("ROLE_DESCENDANT", 2);
          nq = new Eq("DATATABLE_0", 3);
          rq = new Eq("CAPTION_THEAD_TFOOT_COLGROUP_COL_TH", 4);
          sq = new Eq("ABBR_HEADERS_SCOPE", 5);
          tq = new Eq("ONLY_HAS_ABBR", 6);
          uq = new Eq("MORE_95_PERCENT_DOC_WIDTH", 7);
          vq = new Eq("SUMMARY", 8);
          oq = new Eq("NESTED_TABLE", 9);
          pq = new Eq("LESS_EQ_1_ROW", 10);
          qq = new Eq("LESS_EQ_1_COL", 11);
          wq = new Eq("MORE_EQ_5_COLS", 12);
          xq = new Eq("CELLS_HAVE_BORDER", 13);
          yq = new Eq("DIFFERENTLY_COLORED_ROWS", 14);
          zq = new Eq("MORE_EQ_20_ROWS", 15);
          Aq = new Eq("LESS_EQ_10_CELLS", 16);
          Bq = new Eq("EMBED_OBJECT_APPLET_IFRAME", 17);
          Cq = new Eq("MORE_90_PERCENT_DOC_HEIGHT", 18);
          Dq = new Eq("DEFAULT", 19);
          Fq = new Eq("UNKNOWN", 20);
        }
        function Eq(a, b) {
          C.call(this, a, b);
        }
        n(16, 9, { 3: 1, 11: 1, 9: 1, 16: 1 }, Eq);
        var sq,
          rq,
          xq,
          nq,
          Dq,
          yq,
          Bq,
          iq,
          Aq,
          qq,
          pq,
          Cq,
          uq,
          zq,
          wq,
          oq,
          tq,
          mq,
          kq,
          vq,
          Fq,
          Gq = u(16, function () {
            hq();
            return D(w(Gq, 1), ea, 16, 0, [
              iq,
              kq,
              mq,
              nq,
              rq,
              sq,
              tq,
              uq,
              vq,
              oq,
              pq,
              qq,
              wq,
              xq,
              yq,
              zq,
              Aq,
              Bq,
              Cq,
              Dq,
              Fq,
            ]);
          });
        function Z() {
          Z = k;
          lq = new Hq("DATA", 0);
          jq = new Hq("LAYOUT", 1);
        }
        function Hq(a, b) {
          C.call(this, a, b);
        }
        n(56, 9, { 3: 1, 11: 1, 9: 1, 56: 1 }, Hq);
        var lq,
          jq,
          Iq = u(56, function () {
            Z();
            return D(w(Iq, 1), ea, 56, 0, [lq, jq]);
          });
        function Jq(a, b) {
          var c;
          c = Kq(b);
          a.appendChild(c);
          return c;
        }
        function Kq(a) {
          var b;
          b = a.cloneNode(!1);
          1 == a.nodeType &&
            ((a = Um(a).direction),
            !a.length && (a = "auto"),
            b.setAttribute("dir", a));
          return b;
        }
        function Lq(a, b) {
          var c;
          c = a.parentNode;
          c || ((c = Kq(b)), c.appendChild(a));
          return c;
        }
        function Mq(a) {
          return Bl(N(a.j, N(a.i, 0).a));
        }
        function Nq(a, b) {
          return S(a.b, b);
        }
        function fl(a, b) {
          a.g += "\n";
          a.g += b.g;
          a.d += b.d;
          a.e += b.e;
          a.c = 0 == a.d ? 0 : a.e / a.d;
          a.a |= b.a;
          Rh(a.i, b.i);
          a.b.G(b.b);
          a.f = lf(a.f, b.f);
        }
        function ml(a, b) {
          if (b == a.a) return !1;
          a.a = b;
          return !0;
        }
        function Oq(a) {
          var b;
          b =
            "[" +
            (N(a.j, N(a.i, 0).a).j +
              "-" +
              N(a.j, N(a.i, a.i.b.length - 1).a).j +
              ";");
          b += "tl\x3d" + a.f + ";";
          b += "nw\x3d" + a.d + ";";
          b += "ld\x3d" + a.c + ";";
          b =
            b +
            "]\t" +
            ((a.a ? "\u001b[0;32mCONTENT" : "\u001b[0;35mboilerplate") +
              "\u001b[0m,");
          b += "\u001b[1;30m" + Zg(new Ik(a.b)) + "\u001b[0m";
          return (b += "\n" + a.g);
        }
        function el(a, b) {
          var c, d;
          this.j = a;
          this.i = new P();
          O(this.i, gf(b));
          c = N(this.j, b);
          this.b = ((d = c.e), (c.e = new Ci()), d);
          this.d = c.i;
          this.e = c.g;
          this.f = c.n;
          this.g = c.o;
          this.c = 0 == this.d ? 0 : this.e / this.d;
        }
        n(73, 1, {}, el);
        _.tS = function () {
          return Oq(this);
        };
        _.a = !1;
        _.c = 0;
        _.d = 0;
        _.e = 0;
        _.f = 0;
        t(73);
        function gl(a) {
          this.a = a;
        }
        n(82, 1, {}, gl);
        t(82);
        function Pq() {
          Pq = k;
          Qq = new Ci();
          R(Qq, "IMG");
          R(Qq, "PICTURE");
          R(Qq, "FIGURE");
          R(Qq, "SPAN");
          Rq = D(w(p, 1), h, 2, 4, [
            "data-src",
            "data-original",
            "datasrc",
            "data-url",
          ]);
        }
        function Sq(a) {
          var b;
          b = $doc.createElement("FIGCAPTION");
          a = Ok(Nk(a));
          b.textContent = a || "";
          return b;
        }
        function Tq(a, b) {
          var c, d, e;
          if (!S(Qq, b.tagName)) return null;
          a.b = "";
          c = Wm(b);
          if ("FIGURE" === b.tagName) {
            d = Vm(b, "PICTURE");
            !d && (d = Vm(b, "IMG"));
            if (!d) return null;
            Uq(a, c);
            (c = Vm(b, "FIGCAPTION"))
              ? ((e = Yk(c, "A[HREF]")), (c = 0 < e.length ? c : Sq(c)))
              : (c = Sq(b));
            return new Vq(d, a.c, a.a, a.b, c);
          }
          if ("SPAN" === b.tagName) {
            if (-1 == A(b, "class").indexOf("lazy-image-placeholder"))
              return null;
            c = $doc.createElement("img");
            a.b = A(b, "data-src");
            a.c = Hm(A(b, "data-width"));
            a.a = Hm(A(b, "data-height"));
            d = A(b, "data-srcset");
            c.setAttribute("srcset", d);
            return new Wq(c, a.c, a.a, a.b);
          }
          Uq(a, c);
          return new Wq(b, a.c, a.a, a.b);
        }
        function Uq(a, b) {
          var c, d, e, f;
          d = Rq;
          e = 0;
          for (
            f = d.length;
            e < f && ((c = d[e]), (a.b = A(b, c)), !a.b.length);
            ++e
          );
          a.b.length
            ? ((a.c = 0), (a.a = 0))
            : ((a.b = b.src), (a.c = b.width), (a.a = b.height));
          2 <= Wk && V("Extracted WebImage: " + a.b);
        }
        function Xq() {
          Pq();
        }
        n(133, 1, {}, Xq);
        _.Cb = function (a) {
          return Tq(this, a);
        };
        _.Db = function () {
          return Qq;
        };
        _.a = 0;
        _.c = 0;
        var Rq, Qq;
        t(133);
        function Yq() {
          Yq = k;
          Zq = new Ci();
          R(Zq, "BLOCKQUOTE");
          R(Zq, "IFRAME");
        }
        function $q(a) {
          var b;
          if (-1 == A(a, "class").indexOf("twitter-tweet")) return null;
          b = a.getElementsByTagName("a");
          if (0 == b.length) return null;
          b = b[b.length - 1];
          if (!bn(b.href, "twitter.com")) return null;
          a: {
            var c;
            c = Gf(Vc(b, "pathname"), "/");
            for (b = c.length - 1; 0 <= b; b--)
              if (0 < c[b].length) {
                b = c[b];
                break a;
              }
            b = null;
          }
          return null == b ? null : new ar(a, "twitter", b, null);
        }
        function br(a) {
          var b;
          if ("IFRAME" !== a.tagName || a.src.length) return null;
          b = a.contentWindow.document;
          if (!b) return null;
          b = b.getElementsByTagName("blockquote");
          if (1 > b.length) return null;
          b = A(b[0], "data-tweet-id");
          return b.length ? new ar(a, "twitter", b, null) : null;
        }
        function cr() {
          Yq();
        }
        n(134, 1, {}, cr);
        _.Cb = function (a) {
          var b;
          a && S(Zq, a.tagName)
            ? ((b = null),
              "BLOCKQUOTE" === a.tagName
                ? (b = $q(a))
                : "IFRAME" === a.tagName && (b = br(a)),
              b &&
                2 <= Wk &&
                (V("Twitter embed extracted:"), V("    ID: " + b.b)),
              (a = b))
            : (a = null);
          return a;
        };
        _.Db = function () {
          return Zq;
        };
        var Zq;
        t(134);
        function dr() {
          dr = k;
          er = new Ci();
          R(er, "IFRAME");
        }
        function fr(a) {
          var b, c;
          if (!a || !S(er, a.tagName)) return null;
          c = a.src;
          if (!bn(c, "player.vimeo.com")) return null;
          b = $doc.createElement("a");
          b.href = c;
          c = Vc(b, "pathname");
          b = gn(dg(Vc(b, "search"), 1));
          a: {
            var d;
            d = Gf(c, "/");
            for (c = d.length - 1; 0 <= c && "video" !== d[c]; c--)
              if (0 < d[c].length) {
                c = d[c];
                break a;
              }
            c = null;
          }
          if (null == c) return null;
          2 <= Wk && (V("Vimeo embed extracted:"), V("    ID:    " + c));
          return new ar(a, "vimeo", c, b);
        }
        function gr() {
          dr();
        }
        n(135, 1, {}, gr);
        _.Cb = function (a) {
          return fr(a);
        };
        _.Db = function () {
          return er;
        };
        var er;
        t(135);
        function hr() {
          hr = k;
          ir = new Ci();
          R(ir, "IFRAME");
          R(ir, "OBJECT");
        }
        function jr(a) {
          var b, c, d;
          if (!a || !S(ir, a.tagName)) return null;
          d = null;
          "IFRAME" === a.tagName
            ? (d = a.src)
            : "OBJECT" === a.tagName &&
              ("application/x-shockwave-flash" === A(a, "type")
                ? (d = A(a, "data"))
                : ((b = Yk(a, 'param[name\x3d"movie"]')),
                  1 == b.length && (d = A(b[0], "value"))));
          if (null == d || !bn(d, "youtube.com")) return null;
          c = d.indexOf("?");
          0 > c && (c = d.indexOf("\x26"));
          0 > c && (c = d.length);
          b = d.substr(0, c);
          d = gn(d.substr(c + 1, d.length - (c + 1)));
          a: {
            c = Gf(b, "/");
            for (b = c.length - 1; 0 <= b && "embed" !== c[b]; b--)
              if (0 < c[b].length) {
                b = c[b];
                break a;
              }
            b = null;
          }
          if (null == b) return null;
          2 <= Wk && (V("YouTube embed extracted:"), V("    ID:    " + b));
          return new ar(a, "youtube", b, d);
        }
        function kr() {
          hr();
        }
        n(136, 1, {}, kr);
        _.Cb = function (a) {
          return jr(a);
        };
        _.Db = function () {
          return ir;
        };
        var ir;
        t(136);
        function hl(a, b, c) {
          if (!(1 > Wk))
            if (b) {
              V(
                "\u001b[0;34m\x3c\x3c\x3c\x3c\x3c " +
                  c +
                  " \x3e\x3e\x3e\x3e\x3e"
              );
              if (!(1 > Wk)) {
                b = "";
                for (c = new M(a.a); c.b < c.d.J(); )
                  (a = (y(c.b < c.d.J()), c.d.T((c.c = c.b++)))),
                    (b += Oq(a) + "\n");
                V(b);
              }
              V(
                "\u001b[0;34m\x3c\x3c\x3c\x3c\x3c                \x3e\x3e\x3e\x3e\x3e"
              );
            } else V("\u001b[0;31m~~~~~ No Changes: " + c + " ~~~~~");
        }
        function il() {
          il = k;
          jl = RegExp(
            "(^(comments|\u00a9 reuters|please rate this|post a comment|\\d+\\s+(comments|users responded in))|what you think\\.\\.\\.|add your comment|add comment|reader views|have your say|reader comments|r\u00e4tta artikeln|^thanks for your comments - this feedback is now closed$)",
            "i"
          );
        }
        var jl;
        function tl() {
          tl = k;
          ul = new lr(!1);
          xl = new lr(!0);
        }
        function sl(a, b) {
          var c, d, e, f, g;
          c = b.a;
          if (2 > c.b.length) return !1;
          d = !1;
          g = (z(0, c.b.length), c.b[0]);
          for (f = new th(c, 1); f.b < f.d.J(); )
            (c = (y(f.b < f.d.J()), f.d.T((f.c = f.b++)))),
              c.a && g.a
                ? ((e =
                    N(c.j, N(c.i, 0).a).j -
                    N(g.j, N(g.i, g.i.b.length - 1).a).j -
                    1),
                  1 >= e
                    ? ((e = !0),
                      a.a
                        ? g.f != c.f && (e = !1)
                        : S(c.b, "BOILERPLATE_HEADING_FUSED") && (e = !1),
                      S(g.b, "STRICTLY_NOT_CONTENT") !=
                        S(c.b, "STRICTLY_NOT_CONTENT") && (e = !1),
                      S(g.b, "de.l3s.boilerpipe/TITLE") !=
                        S(c.b, "de.l3s.boilerpipe/TITLE") && (e = !1),
                      !g.a &&
                        S(g.b, "de.l3s.boilerpipe/LI") &&
                        !S(c.b, "de.l3s.boilerpipe/LI") &&
                        (e = !1),
                      e ? (fl(g, c), sh(f), (d = !0)) : (g = c))
                    : (g = c))
                : (g = c);
          return d;
        }
        function lr(a) {
          this.a = a;
        }
        n(86, 1, {}, lr);
        _.tS = function () {
          return Za(mr), mr.n + ": postFiltering\x3d" + this.a;
        };
        _.a = !1;
        var xl,
          ul,
          mr = t(86);
        function nr() {
          nr = k;
          ll = RegExp("[\\?\\!\\.\\-\\:]+", "g");
        }
        function or(a, b, c) {
          var d, e;
          e = Gf(b, c);
          if (1 != e.length)
            for (b = 0; b < e.length; b++)
              (d = e[b]),
                -1 == d.indexOf(".com") &&
                  ((c = (T(), Mk.Bb(d))), 4 <= c && R(a, d));
        }
        function pr(a, b) {
          var c, d, e, f, g, l;
          l = Gf(a, b);
          if (1 == l.length) return null;
          d = 0;
          e = "";
          for (c = 0; c < l.length; c++)
            if (
              ((g = l[c]),
              -1 == g.indexOf(".com") &&
                ((f = (T(), Mk.Bb(g))), f > d || g.length > e.length))
            )
              (d = f), (e = g);
          return 0 == e.length ? null : rg(e);
        }
        function kl(a) {
          nr();
          var b;
          if (a)
            for (this.a = new Ci(), a = Nh(a, 0); a.b != a.d.c; ) {
              b = (y(a.b != a.d.c), (a.c = a.b), (a.b = a.b.a), ++a.a, a.c.c);
              var c = void 0;
              b = rf(b);
              b = sf(b, "'");
              b = rg(b).toLowerCase();
              0 != b.length &&
                R(this.a, b) &&
                ((c = pr(b, "[ ]*[\\|\u00bb|-][ ]*")),
                null != c && R(this.a, c),
                (c = pr(b, "[ ]*[\\|\u00bb|:][ ]*")),
                null != c && R(this.a, c),
                (c = pr(b, "[ ]*[\\|\u00bb|:\\(\\)][ ]*")),
                null != c && R(this.a, c),
                (c = pr(b, "[ ]*[\\|\u00bb|:\\(\\)\\-][ ]*")),
                null != c && R(this.a, c),
                (c = pr(b, "[ ]*[\\|\u00bb|,|:\\(\\)\\-][ ]*")),
                null != c && R(this.a, c),
                (c = pr(b, "[ ]*[\\|\u00bb|,|:\\(\\)\\-\u00a0][ ]*")),
                null != c && R(this.a, c),
                or(this.a, b, "[ ]+[\\|][ ]+"),
                or(this.a, b, "[ ]+[\\-][ ]+"),
                R(this.a, zf(b, " - [^\\-]+$")),
                R(this.a, zf(b, "^[^\\-]+ - ")));
            }
          else this.a = null;
        }
        n(137, 1, {}, kl);
        var ll;
        t(137);
        function yl() {
          yl = k;
          zl = new qr(!0);
        }
        function qr(a) {
          this.a = a;
        }
        n(88, 1, {}, qr);
        _.a = !1;
        var zl;
        t(88);
        function rr(a, b, c) {
          b = N(a.d, b);
          c = N(a.d, c);
          return a.c ||
            (b.nodeType != c.nodeType
              ? 0
              : 1 != b.nodeType || b.nodeName === c.nodeName)
            ? b.parentNode == c.parentNode
            : !1;
        }
        function ql(a, b) {
          var c, d, e, f, g, l, m, q, v, J;
          a.g = b.a;
          if (2 > a.g.b.length) return !1;
          d = a.g;
          e = $doc.documentElement;
          l = new P();
          for (f = 0; f < d.b.length; ++f) {
            g =
              f + 1 == d.b.length ? e : Mq((z(f + 1, d.b.length), d.b[f + 1]));
            0 == f
              ? (m = e)
              : ((m = (z(f - 1, d.b.length), d.b[f - 1])),
                (m = Al(N(m.j, N(m.i, m.i.b.length - 1).a))));
            v = m;
            m = Mq((z(f, d.b.length), d.b[f]));
            for (q = m.parentNode; !q.contains(v) && !q.contains(g); )
              (m = q), (q = q.parentNode);
            l.b[l.b.length] = m;
          }
          a.d = l;
          l = E(sr, { 3: 1 }, 0, a.g.b.length, 7);
          q = m = 0;
          d = E(sr, { 3: 1 }, 0, a.g.b.length, 7);
          f = e = 0;
          g = !1;
          for (v = 0; v < a.g.b.length; v++)
            if (
              (!a.b && Nq(N(a.g, v), "de.l3s.boilerpipe/TITLE")) ||
              (!a.a && Nq(N(a.g, v), "de.l3s.boilerpipe/HEADING"))
            )
              (m = q), (e = f);
            else if (
              N(a.g, v).a &&
              !Nq(N(a.g, v), "STRICTLY_NOT_CONTENT") &&
              !Nq(N(a.g, v), "de.l3s.boilerpipe/TITLE")
            )
              for (l[q++] = v, J = e; J < f; J++)
                (c = d[J]),
                  v - c > a.e
                    ? J == e && ++e
                    : rr(a, v, c) &&
                      ((g = !0), ml(N(a.g, c), !0), (d[J] = d[e++]));
            else if (
              N(a.g, v).c <= a.f &&
              !N(a.g, v).a &&
              !Nq(N(a.g, v), "STRICTLY_NOT_CONTENT") &&
              !Nq(N(a.g, v), "de.l3s.boilerpipe/TITLE")
            ) {
              for (J = m; J < q; J++)
                if (((c = l[J]), v - c > a.e)) J == m && ++m;
                else if (rr(a, v, c)) {
                  g = !0;
                  ml(N(a.g, v), !0);
                  l[J] = l[m++];
                  break;
                }
              J == q ? (d[f++] = v) : (l[q++] = v);
            }
          return g;
        }
        function tr(a, b, c, d, e) {
          this.b = a;
          this.a = b;
          this.c = c;
          this.f = d;
          this.e = e;
        }
        n(139, 1, {}, tr);
        _.a = !1;
        _.b = !1;
        _.c = !1;
        _.e = 0;
        _.f = 0;
        t(139);
        function pl() {
          var a = new ur();
          a.a = !0;
          return a;
        }
        function rl(a) {
          return new tr(a.b, a.a, a.c, a.e, a.d);
        }
        function ur() {
          this.c = this.a = this.b = !1;
          this.d = this.e = 0;
        }
        n(85, 1, {}, ur);
        _.a = !1;
        _.b = !1;
        _.c = !1;
        _.d = 0;
        _.e = 0;
        t(85);
        function vl() {
          vl = k;
          wl = new vr("de.l3s.boilerpipe/TITLE");
        }
        function vr(a) {
          this.a = a;
        }
        n(87, 1, {}, vr);
        var wl;
        t(87);
        function nl() {
          nl = k;
          ol = new wr(D(w(p, 1), h, 2, 4, ["STRICTLY_NOT_CONTENT"]));
        }
        function wr(a) {
          this.a = a;
        }
        n(138, 1, {}, wr);
        var ol;
        t(138);
        function xr(a, b) {
          var c, d, e, f, g, l, m;
          m = vm(b);
          g = l = !1;
          m ||
            (a.i &&
              a.d &&
              (a.f || (g = (W(), b.classList.contains("hidden"))),
              (a.f || g) && (l = !0)),
            a.i &&
              (-1 != A(b, "class").indexOf("continue") && (l = !0),
              "false" === A(b, "aria-expanded") && (l = !0)));
          var q = m || l,
            v;
          2 > Wk ||
            ((v = Um(b)),
            V(
              (q ? "KEEP " : "SKIP ") +
                b.tagName +
                ": id\x3d" +
                b.id +
                ", dsp\x3d" +
                v.display +
                ", vis\x3d" +
                v.visibility +
                ", opaq\x3d" +
                v.opacity
            ));
          if (!m && !l) return R(a.e, b), !1;
          try {
            if (S(a.b, b.tagName))
              for (f = new M(a.c); f.b < f.d.J(); )
                if (
                  ((e = (y(f.b < f.d.J()), f.d.T((f.c = f.b++)))),
                  (d = e.Cb(b)))
                )
                  return (c = a.a), dl(c, c.d), O(c.b.a, d), !1;
          } catch (J) {
            if (((J = qc(J)), r(J, 15)))
              (c = J), V("Exception happened in EmbedExtractors: " + c.q());
            else throw rc(J);
          }
          c = A(b, "class");
          d = A(b, "data-component");
          if ("sharing" === c || "socialArea" === c || "share" === d) return !1;
          Ur(b.tagName) &&
            ((d = a.a),
            (e = new as(b.tagName, (Gl(), Hl))),
            dl(d, d.d),
            O(d.b.a, e));
          switch (b.tagName) {
            case "A":
              if ((c = -1 != b.href.indexOf("action\x3dedit\x26section\x3d")))
                return !1;
              break;
            case "SPAN":
              if ("mw-editsection" === c) return !1;
              break;
            case "BR":
              return (
                (g = a.a),
                g.c && (dl(g, g.d), ++g.d, (g.c = !1)),
                (g = g.g),
                (g.j += "\n"),
                O(g.a, b),
                !1
              );
            case "TABLE":
              c = gq(b);
              2 > Wk ||
                ((d = B(b)),
                V(
                  "TABLE: " +
                    c +
                    ", id\x3d" +
                    b.id +
                    ", class\x3d" +
                    A(b, "class") +
                    ", parent\x3d[" +
                    d.tagName +
                    ", id\x3d" +
                    d.id +
                    ", class\x3d" +
                    A(d, "class") +
                    "]"
                ));
              if (c == (Z(), lq))
                return (g = a.a), dl(g, g.d), O(g.b.a, new bs(b)), !1;
              break;
            case "VIDEO":
              return (g = a.a), (c = new cs(b)), dl(g, g.d), O(g.b.a, c), !1;
            case "OPTION":
            case "OBJECT":
            case "EMBED":
            case "APPLET":
              return (a.a.c = !0), !1;
            case "HEAD":
            case "STYLE":
            case "SCRIPT":
            case "LINK":
            case "NOSCRIPT":
            case "IFRAME":
            case "svg":
              return !1;
          }
          c = a.a;
          is();
          f = Um(b);
          d = new js();
          e = b.tagName;
          switch (f.display) {
            case "inline":
              break;
            case "inline-block":
            case "inline-flex":
              d.a = !0;
              break;
            case "block":
              if ("none" !== f["float"] && "SPAN" === e) break;
            default:
              (d.b = !0), (d.a = !0);
          }
          if ("HTML" !== e && "BODY" !== e && "ARTICLE" !== e)
            switch (
              ((l = A(b, "class")),
              (f = (W(), b.classList).length),
              (m = A(b, "id")),
              (ks.test(l) || ks.test(m)) &&
                2 >= f &&
                ((f = d.d), (f[f.length] = "STRICTLY_NOT_CONTENT")),
              e)
            ) {
              case "ASIDE":
              case "NAV":
                e = d.d;
                e[e.length] = "STRICTLY_NOT_CONTENT";
                break;
              case "LI":
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/LI";
                break;
              case "H1":
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/H1";
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/HEADING";
                break;
              case "H2":
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/H2";
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/HEADING";
                break;
              case "H3":
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/H3";
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/HEADING";
                break;
              case "H4":
              case "H5":
              case "H6":
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/HEADING";
                break;
              case "A":
                (d.a = !0), b.hasAttribute("href") && (d.c = !0);
            }
          O(c.a.a, d);
          d.a && ++c.f;
          d.c && ((e = c.g), (e.e = !0), (e.j += " "));
          c.c |= d.b;
          c = (We(), a.f ? Ze : Xe);
          O(a.g.a, c);
          a.f |= g;
          return !0;
        }
        function Zk(a) {
          var b;
          this.g = new pk();
          this.e = new Ci();
          this.a = a;
          this.c = new P();
          O(this.c, new Xq());
          O(this.c, new cr());
          O(this.c, new gr());
          O(this.c, new kr());
          this.b = new Ci();
          for (b = new M(this.c); b.b < b.d.J(); )
            (a = (y(b.b < b.d.J()), b.d.T((b.c = b.b++)))), Ag(this.b, a.Db());
        }
        n(124, 1, {}, Zk);
        _.mb = function (a) {
          if (1 == a.nodeType && Ur(a.tagName)) {
            var b = this.a;
            a = new as(a.tagName, (Gl(), ls));
            dl(b, b.d);
            O(b.b.a, a);
          }
          b = this.a;
          a = b.a;
          var c;
          c = a.a.b.length;
          if (0 < c) a = (nk(c - 1, a.a.b.length), N(a.a, c - 1));
          else throw new ci();
          a.a && --b.f;
          if (b.c || a.b) dl(b, b.d), ++b.d;
          a.c && ((a = b.g), (a.e = !1), (a.j += " "));
          ok(b.a);
          this.f = ok(this.g).a;
        };
        _.nb = function (a) {
          switch (a.nodeType) {
            case 3:
              var b = this.a;
              b.c && (dl(b, b.d), ++b.d, (b.c = !1));
              var c = b.g,
                b = b.f,
                d;
              d = a.data;
              d.length &&
                ((c.j += d),
                O(c.a, a),
                Xp(d) ||
                  ((a = (T(), Mk.Bb(d))),
                  (c.i += a),
                  c.e && (c.g += a),
                  (c.f = c.a.b.length - 1),
                  c.d < c.c && (c.d = c.f),
                  -1 == c.b && (c.b = b)));
              return !1;
            case 1:
              return xr(this, a);
            default:
              return !1;
          }
        };
        _.d = !1;
        _.f = !1;
        _.i = !1;
        t(124);
        function is() {
          is = k;
          ks = /\bcomments?\b/;
        }
        function js() {
          this.d = [];
        }
        n(180, 1, {}, js);
        _.a = !1;
        _.b = !1;
        _.c = !1;
        var ks;
        t(180);
        function ms() {
          this.a = new P();
        }
        n(117, 1, {}, ms);
        t(117);
        function dl(a, b) {
          var c;
          c = a.g;
          var d = a.e;
          c.c == c.a.b.length
            ? (c = null)
            : c.d < c.c
            ? (ns(c), (c = null))
            : ((d = new os(
                c.j,
                c.a,
                c.c,
                c.a.b.length,
                c.d,
                c.f,
                c.i,
                c.g,
                c.b,
                d
              )),
              ns(c),
              (c = d));
          if (c) {
            c.d = b;
            ++a.e;
            var e, f;
            for (e = new M(a.a.a); e.b < e.d.J(); )
              for (
                d = (y(e.b < e.d.J()), e.d.T((e.c = e.b++))), f = 0;
                f < d.d.length;
                f++
              )
                R(c.e, d.d[f]);
            O(a.b.a, c);
          }
        }
        function Xk() {
          this.b = new ms();
          this.a = new pk();
          this.g = new ps();
          this.d = 0;
        }
        n(123, 1, {}, Xk);
        _.c = !1;
        _.d = 0;
        _.e = 0;
        _.f = 0;
        t(123);
        n(216, 1, {});
        _.p = !1;
        t(216);
        function ar(a, b, c, d) {
          this.a = new P();
          this.b = c;
          O(this.a, a);
          this.c = b;
          !d && new ui();
        }
        n(57, 216, {}, ar);
        _.Eb = function (a) {
          if (a) return "";
          a = $doc.createElement("div");
          a.className = "embed-placeholder";
          a.setAttribute("data-type", this.c);
          a.setAttribute("data-id", this.b);
          return a.outerHTML;
        };
        t(57);
        function qs() {
          qs = k;
          rs = D(w(p, 1), h, 2, 4, ["data-srcset"]);
        }
        function Il(a) {
          var b, c, d, e, f, g, l, m;
          f = a.d.cloneNode(!0);
          c = Wm(f);
          a.e.length && ((c.src = a.e), (a.e = c.src));
          0 < a.f && 0 < a.c && ((c.width = a.f), (c.height = a.c));
          Pm(c);
          m = f.getElementsByTagName("SOURCE");
          for (g = 0; g < m.length; g++)
            for (l = m[g], c = rs, d = 0, e = c.length; d < e; ++d)
              if (((b = c[d]), (b = A(l, b)), b.length)) {
                l.setAttribute("srcset", b);
                break;
              }
          cn(f);
          dn(f);
          a.b = f;
        }
        function Wq(a, b, c, d) {
          qs();
          this.d = a;
          this.f = b;
          this.c = c;
          this.e = d;
          null == this.e && (this.e = "");
        }
        n(32, 216, { 32: 1 }, Wq);
        _.Eb = function (a) {
          if (a) return "";
          !this.b && Il(this);
          return this.b.outerHTML;
        };
        _.c = 0;
        _.f = 0;
        var rs;
        t(32);
        function Vq(a, b, c, d, e) {
          qs();
          Wq.call(this, a, b, c, d);
          this.a = e;
        }
        n(187, 32, { 32: 1 }, Vq);
        _.Eb = function (a) {
          var b;
          b = (W(), Kl(Ll(this.a)));
          if (a) return an(b);
          a = $doc.createElement("FIGURE");
          var c = (!this.b && Il(this), this.b);
          a.appendChild(c);
          !this.a.innerHTML.length || a.appendChild(b);
          return a.outerHTML;
        };
        t(187);
        function bs(a) {
          this.b = a;
        }
        n(69, 216, { 69: 1 }, bs);
        _.Eb = function (a) {
          !this.a && (this.a = (W(), Kl(Ll(this.b))));
          return a ? an(this.a) : this.a.outerHTML;
        };
        t(69);
        function ss() {
          ss = k;
          ts = new Ci();
          R(ts, "UL");
          R(ts, "OL");
          R(ts, "LI");
          R(ts, "BLOCKQUOTE");
          R(ts, "PRE");
        }
        function as(a, b) {
          ss();
          this.a = a;
          this.b = b;
        }
        function Ur(a) {
          ss();
          return S(ts, a);
        }
        n(51, 216, { 51: 1 }, as);
        _.Eb = function (a) {
          return a
            ? ""
            : "\x3c" + (this.b == (Gl(), Hl) ? "" : "/") + this.a + "\x3e";
        };
        var ts;
        t(51);
        function Gl() {
          Gl = k;
          Hl = new us("START", 0);
          ls = new us("END", 1);
        }
        function us(a, b) {
          C.call(this, a, b);
        }
        n(52, 9, { 3: 1, 11: 1, 9: 1, 52: 1 }, us);
        var ls,
          Hl,
          vs = u(52, function () {
            Gl();
            return D(w(vs, 1), ea, 52, 0, [Hl, ls]);
          });
        function Bl(a) {
          return N(a.a, a.c);
        }
        function ws() {
          $ ||
            (($ = new Ci()),
            R($, "B"),
            R($, "BIG"),
            R($, "I"),
            R($, "SMALL"),
            R($, "TT"),
            R($, "ABBR"),
            R($, "ACRONYM"),
            R($, "CITE"),
            R($, "CODE"),
            R($, "DFN"),
            R($, "EM"),
            R($, "KBD"),
            R($, "STRONG"),
            R($, "SAMP"),
            R($, "TIME"),
            R($, "VAR"),
            R($, "A"),
            R($, "BDO"),
            R($, "IMG"),
            R($, "MAP"),
            R($, "Q"),
            R($, "SPAN"),
            R($, "SUB"),
            R($, "SUP"),
            R($, "BUTTON"),
            R($, "INPUT"),
            R($, "LABEL"),
            R($, "SELECT"),
            R($, "TEXTAREA"));
          return $;
        }
        function Al(a) {
          return N(a.a, a.f);
        }
        function os(a, b, c, d, e, f, g, l, m, q) {
          this.o = a;
          this.a = b;
          this.k = c;
          this.b = d;
          this.c = e;
          this.f = f;
          this.i = g;
          this.g = l;
          this.e = new Ci();
          this.n = m;
          this.j = q;
        }
        n(35, 216, { 35: 1 }, os);
        _.Eb = function (a) {
          var b, c, d;
          if (S(this.e, "de.l3s.boilerpipe/TITLE")) return "";
          d = new vh(this.a, this.k, this.b);
          var e;
          if (1 == d.b) b = wn(new un((z(0, d.b), N(d.c, d.a))));
          else {
            c = (z(0, d.b), N(d.c, d.a));
            b = c.cloneNode(!1);
            for (d = new tn(d); d.a; )
              if (vn(d, c)) {
                if (!d.a) break;
                for (;;) {
                  for (e = c.nextSibling; e && !e.contains(d.a); )
                    e = e.nextSibling;
                  if (e) {
                    b = Lq(b, c.parentNode);
                    b = Jq(b, e);
                    c = e;
                    break;
                  }
                  c = c.parentNode;
                  b = Lq(b, c);
                }
              } else {
                for (c = c.firstChild; !c.contains(d.a); ) c = c.nextSibling;
                b = Jq(b, c);
              }
            for (; b.parentNode; ) b = b.parentNode;
          }
          1 != b.nodeType &&
            ((c = B(uh(new vh(this.a, this.k, this.b), 0)).cloneNode(!1)),
            c.appendChild(b),
            (b = c));
          "BODY" === b.tagName &&
            ((c = $doc.createElement("div")),
            (c.innerHTML = b.innerHTML || ""),
            (b = c));
          for (d = null; S(ws(), b.tagName); ) {
            d ||
              ((d = al(new vh(this.a, this.k, this.b))),
              1 != d.nodeType && (d = B(d)));
            d = B(d);
            if ("BODY" === d.tagName) break;
            c = d.cloneNode(!1);
            c.appendChild(b);
            b = c;
          }
          Om(b);
          W();
          Nm(b, "TARGET", D(w(p, 1), h, 2, 4, ["A"]));
          Nm(b, "ID", D(w(p, 1), h, 2, 4, ["*"]));
          c = b;
          W();
          1 == c.nodeType &&
            c.hasAttribute("class") &&
            (-1 != A(c, "class").indexOf("caption")
              ? (c.className = "caption")
              : c.removeAttribute("class"));
          c = Yk(c, "[class]");
          for (d = 0; d < c.length; d++)
            -1 != A(c[d], "class").indexOf("caption")
              ? (c[d].className = "caption")
              : c[d].removeAttribute("class");
          Nm(b, "COLOR", D(w(p, 1), h, 2, 4, ["FONT"]));
          Nm(b, "STYLE", D(w(p, 1), h, 2, 4, ["*"]));
          Qm(b);
          return a ? an(b) : Ur(b.tagName) ? b.innerHTML : b.outerHTML;
        };
        _.b = 0;
        _.c = 0;
        _.d = 0;
        _.f = 0;
        _.g = 0;
        _.i = 0;
        _.j = 0;
        _.k = 0;
        _.n = 0;
        var $ = null;
        t(35);
        function ns(a) {
          a.j = "";
          a.i = 0;
          a.g = 0;
          a.c = a.a.b.length;
          a.b = -1;
        }
        function ps() {
          this.a = new P();
        }
        n(156, 1, {}, ps);
        _.b = -1;
        _.c = 0;
        _.d = -1;
        _.e = !1;
        _.f = 0;
        _.g = 0;
        _.i = 0;
        _.j = "";
        t(156);
        function cs(a) {
          this.a = a;
        }
        n(179, 216, {}, cs);
        _.Eb = function (a) {
          var b, c;
          if (a) return "";
          c = this.a.cloneNode(!1);
          for (a = 0; a < this.a.childNodes.length; a++)
            (b = this.a.childNodes[a]),
              1 != b.nodeType ||
                ("SOURCE" !== b.tagName && "TRACK" !== b.tagName) ||
                ((b = b.cloneNode(!1)), c.appendChild(b));
          c.poster.length && (c.poster = c.poster);
          cn(c);
          W();
          Nm(c, "ID", D(w(p, 1), h, 2, 4, ["*"]));
          Qm(c);
          return c.outerHTML;
        };
        t(179);
        n(218, 1, {});
        _.Gb = function (a) {
          var b;
          b = 0;
          a && (b = this.Fb(a));
          2 <= Wk && V(ab(this.cZ) + ": " + b + "/" + this.Hb());
          return lf(b, this.Hb());
        };
        t(218);
        function Cl() {
          this.b = 25;
          this.c = 75e3;
          this.a = 2e5;
        }
        n(157, 218, {}, Cl);
        _.Fb = function (a) {
          a = ((a.offsetWidth || 0) | 0) * ((a.offsetHeight || 0) | 0);
          if (a < this.c) return 0;
          a = Ya(((a - this.c) / (this.a - this.c)) * this.b);
          return lf(a, this.b);
        };
        _.Hb = function () {
          return this.b;
        };
        _.a = 0;
        _.b = 0;
        _.c = 0;
        t(157);
        function Dl() {
          this.a = 25;
        }
        n(158, 218, {}, Dl);
        _.Fb = function (a) {
          var b, c;
          b = (a.offsetHeight || 0) | 0;
          if (0 >= b) return 0;
          c = (a.offsetWidth || 0) | 0;
          a = 0;
          b = c / b;
          1.4500000476837158 < b && 1.7999999523162842 > b
            ? (a = 1)
            : 1.2999999523162842 < b &&
              2.200000047683716 > b &&
              (a = 0.4000000059604645);
          return Ya(this.a * a);
        };
        _.Hb = function () {
          return this.a;
        };
        _.a = 0;
        t(158);
        function El(a) {
          this.b = 25;
          this.a = a;
        }
        n(159, 218, {}, El);
        _.Fb = function (a) {
          var b;
          if (!this.a) return 0;
          a = (W(), Zm(this.a).b.length - 1 - (Zm(Xm(this.a, a)).b.length - 1));
          b = 0;
          4 > a
            ? (b = 1)
            : 6 > a
            ? (b = 0.6000000238418579)
            : 8 > a && (b = 0.20000000298023224);
          return Ya(this.b * b);
        };
        _.Hb = function () {
          return this.b;
        };
        _.b = 0;
        t(159);
        function Fl() {
          this.a = 15;
        }
        n(160, 218, {}, Fl);
        _.Fb = function (a) {
          var b;
          a = Zm(a);
          for (b = new M(a); b.b < b.d.J(); )
            if (
              ((a = (y(b.b < b.d.J()), b.d.T((b.c = b.b++)))),
              1 == a.nodeType && "FIGURE" === a.tagName)
            )
              return this.a;
          return 0;
        };
        _.Hb = function () {
          return this.a;
        };
        _.a = 0;
        t(160);
        var sr, xs;
        xs = mb("I");
        xs.k = "I";
        xs.f = 1;
        sr = xs;
        t(199);
        t(201);
        t(null);
        t(204);
        mj = ob();
        _ = (function (a) {
          var b = this;
          if ("$wnd" == a) return $wnd;
          if ("" === a) return b;
          "$wnd." == a.substring(0, 5) && ((b = $wnd), (a = a.substring(5)));
          a = a.split(".");
          a[0] in b || !b.execScript || b.execScript("var " + a[0]);
          for (var c; a.length && (c = a.shift()); )
            b[c] ? (b = b[c]) : (b = b[c] = {});
          return b;
        })("org.chromium.distiller.DomDistiller");
        _.apply = function () {
          var a;
          return Sk(((a = {}), a));
        };
        _.applyWithOptions = Sk;
        function ys(a) {
          return function () {
            var b;
            a: {
              var c = arguments,
                d;
              0 != jc &&
                ((d = Date.now ? Date.now() : new Date().getTime()),
                2e3 < d - lc && ((lc = d), (kc = $wnd.setTimeout(ic, 10))));
              if (0 == jc++) {
                d = (mc(), nc);
                var e, f;
                if (d.a) {
                  f = null;
                  do (e = d.a), (d.a = null), (f = pc(e, f));
                  while (d.a);
                  d.a = f;
                }
                d = !0;
              } else d = !1;
              try {
                b = a.apply(this, c);
                break a;
              } finally {
                if ((c = d))
                  if (((d = (mc(), nc)), d.b)) {
                    f = null;
                    do (e = d.b), (d.b = null), (f = pc(e, f));
                    while (d.b);
                    d.b = f;
                  }
                --jc;
                c && -1 != kc && ($wnd.clearTimeout(kc), (kc = -1));
              }
              b = void 0;
            }
            return b;
          };
        }
        var gwtOnLoad = (gwtOnLoad = function (a, b, c) {
          function d() {
            for (var a = 0; a < e.length; a++) e[a]();
          }
          null == oa && (oa = []);
          var e = oa;
          $moduleName = b;
          $moduleBase = c;
          if (a)
            try {
              ys(d)();
            } catch (f) {
              a(b, f);
            }
          else ys(d)();
        });
        (function () {
          null == oa && (oa = []);
          for (var a = oa, b = 0; b < arguments.length; b++)
            a.push(arguments[b]);
        })(function () {
          $wnd.setTimeout(ys(Se));
          var a, b, c;
          b = $doc.compatMode;
          a = D(w(p, 1), h, 2, 4, ["CSS1Compat"]);
          for (c = 0; c < a.length && a[c] !== b; c++);
        });
        var zs = [
          [
            ["locale", "default"],
            ["user.agent", "safari"],
          ],
        ];
        "object" === typeof window &&
          "object" === typeof window.$gwt &&
          (window.$gwt.permProps = zs);
        window.gwtOnLoad = gwtOnLoad;
        gwtOnLoad(undefined, "domdistiller", "", 0);
      })();
    }
    var context = Object.create(window);
    context.setTimeout = function () {};
    context.clearTimeout = function () {};
    initialize(context);

    var distiller = context.org.chromium.distiller.DomDistiller;
    var res = distiller.applyWithOptions(options);
    const textOnly = document.createElement('div');
    textOnly.innerHTML = res[2][1];
    res.textOnly = textOnly.innerText;
    res.bodyInnerTextOnly = document.body.innerText;
    return res;
  } catch (e) {
    return { textOnly: "", bodyInnerTextOnly : document.body.innerText };
  }
  return undefined;
})({});
