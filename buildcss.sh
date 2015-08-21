#!/bin/bash

root_dir=$(git rev-parse --show-toplevel) || eval 'echo "This script must be run from within the autodl-rutorrent repo directory." 1>&2; exit 1'
styles_dir="$root_dir/styles"
css_dir="$root_dir/css"

stylus $styles_dir/acid.styl -o $css_dir/acid.css
stylus $styles_dir/acid.styl -o $css_dir/acid-min.css -c

stylus $styles_dir/blue.styl -o $css_dir/blue.css
stylus $styles_dir/blue.styl -o $css_dir/blue-min.css -c

stylus $styles_dir/dark.styl -o $css_dir/dark.css
stylus $styles_dir/dark.styl -o $css_dir/dark-min.css -c

stylus $styles_dir/excel.styl -o $css_dir/excel.css
stylus $styles_dir/excel.styl -o $css_dir/excel-min.css -c

stylus $styles_dir/oblivion.styl -o $css_dir/oblivion.css
stylus $styles_dir/oblivion.styl -o $css_dir/oblivion-min.css -c

stylus $styles_dir/standard.styl -o $css_dir/standard.css
stylus $styles_dir/standard.styl -o $css_dir/standard-min.css -c
