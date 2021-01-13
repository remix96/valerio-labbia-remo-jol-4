const axios = require('axios')
const readline = require('readline')

function postUpd(postParam) {
	try {
		axios.post('http://localhost:3000/position', {
			"user": postParam[1] ,
			"beacon": postParam[2]
		})
	} catch (error) {
		console.error(error)
  }
}

function getRst() {
	try {
		axios.get('http://localhost:3000/reset')
	} catch (error) {
		console.error(error)
  }
}

function replDemo() {
	return new Promise(function(resolve, reject) {
		let rl = readline.createInterface(process.stdin, process.stdout)
		rl.setPrompt('ready> ')
		rl.prompt();
		rl.on('line', function(line) {
			const postParam = line.split(':') 
			if (postParam[0] === "exit" || postParam[0] === "quit" || postParam[0] == 'q') {
				rl.close()
				return 
			}
			if (postParam[0] === "hello") {
				console.log('world')
			} else if (postParam[0] === "post") {
				if (!isNaN(postParam[2]) && postParam[2] >=1 && postParam[2] <= 12) {
					postUpd(postParam) //post:userid:baconid
					console.log('added')
				} else {
					console.log('beacon must be a number && 1<=beacon<=12')
				}
			} else if (postParam[0] === "reset") {
				getRst()
				console.log('crowding levels successfully resetted')
			} else if (postParam[0] === "") {
				console.log('empty line')
			} else {
				console.log(`unknown command: "${postParam[0]}"`)
			}
			rl.prompt()
		}).on('close',function(){
			resolve(42)
		});
	})
}

async function run() {
	try {
		let replResult = await replDemo()
		console.log('close result:', replResult)
	} catch(e) {
		console.log('failed:', e)
	}
}

run()