#!/bin/bash

NOTIFY_ICON=/usr/share/icons/Papirus/32x32/apps/system-software-update.svg

cp ~/.config/i3/config ~/.config/i3/config.bk && cp ~/.config/xmonad/xmonad.hs ~/.config/xmonad/xmonad.hs.bk &&  notify-send -u normal -i $NOTIFY_ICON \ "backed up configs!"



