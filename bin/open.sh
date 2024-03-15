#! /bin/bash

fd -t f -H -I | fzf -m -e | xargs -ro -d "\n" xdg-open 2>&-
