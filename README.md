# gulp-truncate
Gulp Plugin to truncate multiple files in a directory and piping to destination directory.

# Installation

npm install gulp-truncate --save

``` javascript
var gulp = require('gulp');
var truncate = require('gulp-truncate');

var paths = ["examples/samples/*.js"];

gulp.task('truncate',function(){
 return gulp.src(paths).truncate().dest('dist');
})
```
Note: In case of empty content it will ignore the file.