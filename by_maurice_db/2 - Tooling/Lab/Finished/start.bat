@IF EXIST node_modules GOTO start-server
	call npm install

:start-server
start npm run webpack
explorer http://localhost:8080
npm start
