#!/bin/bash
#
# Author: Yang, Ying-chao@gmail.com, 2014-11-24
#

for sz in 16 32 48 64 96 128; do
    echo "Converting "icon_"$sz".png
    convert -background none  -resize "$sz"x"$sz" icon.svg icon_"$sz".png
done
