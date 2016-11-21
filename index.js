var through     = require('through2');
var gutil       = require('gulp-util');
var PluginError = gutil.PluginError;

var PLUGIN_NAME = "gulp-truncate";

module.exports = (file) => {
	return through.obj(function(file, encoding, callback){
		console.log("Calling me");		
		if (!file)
			 throw new PluginError(PLUGIN_NAME,'Missing file option for ' + PLUGIN_NAME);
		
		if (!file.stat.isFile()) {
			 throw new PluginError("gulp-truncate", "Oops!! Expected to be a file got a directory for gulp-truncate");
		}
		//ignore empty files
		if (file.contents.toString() == "") {
			 return callback(null, file);
		}
		if (file.stat.isFile()){
			 file.contents = new Buffer(0);
			 this.push(file);
			 return callback(null, file);
		}
	})
}