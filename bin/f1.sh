#!/bin/bash

PS3="Choose an application to open the file."
options=("qpdfview" "pluma" "micro" "abiword" "libreoffice" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "qpdfview" )
           xhost si:localuser:root && qpdfview $(fzf)
            ;;
        "pluma")
           xhost si:localuser:root && pluma $(fzf)
            ;;
        "micro")
           xhost si:localuser:root && micro $(fzf)
            ;;
        "abiword")
           xhost si:localuser:root && abiword $(fzf)
            ;;
        "libreoffice")
           xhost si:localuser:root && libreoffice $(fzf)
            ;;
        "Quit")
            echo "Quit"
            break
            ;;
    *) echo "Invalid Option $REPLY";;
    esac
done
