
const path = require('path');
const fs = require('fs');

let getpath = url=>path.resolve(process.cwd(),'public',`.${url}`);

let staticFunc = (url)=>{

	let map = {
		'/':'/index.html',
		'/blog':'/blog.html',
		'/about':'/about.html',
		'/login':'/login.html',
		'/logout':'/logout.html',

	}
	url = map[url] || url;
				if(url == '/'){
					url = '/index.html';
				}
				let _path = getpath(url);
				let body = '';
				try{
					body = fs.readFileSync(_path);
				}catch(error){
					body = `not found${error.stack}`;
				}
				return body;
			}

module.exports = staticFunc;