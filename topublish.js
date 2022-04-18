let fs = require('fs');
let path = require('path')
var RegClient = require('npm-registry-client')
var client = new RegClient({scope: '@fawazahmed0'})

let folderPath = path.join(__dirname,'.')
// path to package json
let metadata = JSON.parse(fs.readFileSync(path.join(folderPath, 'package.json')).toString())

var uri = "https://registry.npmjs.org/npm"

// location of tar.gz file
const readable = fs.createReadStream(path.join(__dirname,'test.tar.gz'))
var params = {access:'public', body: readable, auth: {token:'npm_fake_token'}, metadata: metadata}
 

client.publish(uri, params, function (error, data, raw, res) {
  // error is an error if there was a problem.
  // data is the parsed data object
  // raw is the json string
  // res is the response from couch
    if (error) 
    console.error(error)
    if(res)
    console.log(res)


})
