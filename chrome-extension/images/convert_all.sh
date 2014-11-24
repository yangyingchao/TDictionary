#!/bin/bash
#
# Author: Yang, Ying-chao@gmail.com, 2014-11-24
#

for sz in 16 32 48 64 96 128; do
    echo "Converting "icon_"$sz".png
    convert -resize "$sz"x"$sz" $1 icon_"$sz".png
done
