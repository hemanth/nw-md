#!/usr/bin/env bash
. ~/.bash_profile # You need to have node-webit in your path!
rm app.nw; zip -r app.nw *; nw app.nw
