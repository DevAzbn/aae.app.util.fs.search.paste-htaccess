'use strict';

var azbn = new require(__dirname + '/../../../../../../system/bootstrap')({
	
});

var app = azbn.loadApp(module);

var fs = require('fs');

var argv = require('optimist')
	.usage('Usage: $0 --path=[Path to root dir]')
	.default('path', '/var/www/')
	.argv
;

var spawn = require('child_process').spawn;

var ht_storage = '/var/www/include/apache2/';

azbn.mdl('fs/tree').walk(argv.path, function(file, stat){
	
	if (stat && stat.isDirectory()) {
		
		if(file.match(new RegExp('wp-content$', 'ig'))) {
			
			//console.log(file);
			
			/*
			var content = fs.readFileSync(file, {encoding : 'utf8'});
			
			if(content.match(new RegExp('(' + argv.str.toLowerCase() + ')', 'ig'))) {
				
				console.log(file);
				
			}
			*/
			
			(function(){
				
				var _from = ht_storage + 'htaccess_wp_plugins';
				var _to = file + '/plugins/.htaccess';
				
				var del = spawn('rm', ['-f', _to]);
				
				del.on('close', function(code){
					//console.log('code:', code);
					
					var ls = spawn('ln', ['-s', _from, _to]);
					
					ls.stdout.on('data', function(data){
						//console.log('out:', data.toString('utf8'));
					});
					
					ls.stderr.on('data', function(data){
						//console.log('error:', data.toString('utf8'));
					});
					
					ls.on('close', function(code){
						//console.log('code:', code);
						console.log('to plugins', _to);
					});
					
				});
				
			})();
			
			(function(){
				
				var _from = ht_storage + 'htaccess_wp_themes';
				var _to = file + '/themes/.htaccess';
				
				var del = spawn('rm', ['-f', _to]);
				
				del.on('close', function(code){
					//console.log('code:', code);
					
					var ls = spawn('ln', ['-s', _from, _to]);
					
					ls.stdout.on('data', function(data){
						//console.log('out:', data.toString('utf8'));
					});
					
					ls.stderr.on('data', function(data){
						//console.log('error:', data.toString('utf8'));
					});
					
					ls.on('close', function(code){
						//console.log('code:', code);
						console.log('to themes', _to);
					});
					
				});
				
			})();
			
			(function(){
				
				var _from = ht_storage + 'htaccess_wp_uploads';
				var _to = file + '/uploads/.htaccess';
				
				var del = spawn('rm', ['-f', _to]);
				
				del.on('close', function(code){
					//console.log('code:', code);
					
					var ls = spawn('ln', ['-s', _from, _to]);
					
					ls.stdout.on('data', function(data){
						//console.log('out:', data.toString('utf8'));
					});
					
					ls.stderr.on('data', function(data){
						//console.log('error:', data.toString('utf8'));
					});
					
					ls.on('close', function(code){
						//console.log('code:', code);
						console.log('to uploads', _to);
					});
					
				});
				
			})();
			
			(function(){
				
				var _from = ht_storage + 'htaccess_wp_includes';
				var _to = file + '/../wp-includes/.htaccess';
				
				var del = spawn('rm', ['-f', _to]);
				
				del.on('close', function(code){
					//console.log('code:', code);
					
					var ls = spawn('ln', ['-s', _from, _to]);
					
					ls.stdout.on('data', function(data){
						//console.log('out:', data.toString('utf8'));
					});
					
					ls.stderr.on('data', function(data){
						//console.log('error:', data.toString('utf8'));
					});
					
					ls.on('close', function(code){
						//console.log('code:', code);
						console.log('to includes', _to);
					});
					
				});
				
			})();
			
		}
		
	} else if(stat) {
		
		
		
	}
	
}, function(err, results){
	
	
	
});