const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const server = require('./server/interests')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello from express' })
})

app.post('/api/world', (req, res) => {
	console.log(req.body.express)
	res.send(
		`I received your POST request, this is what you sent ${req.body.post}`,
	)
})
app.get('/api/interests', function (req, res) {
	console.log('interests', server.interests())
	// res.send(interestsObject)
})
if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')))

	// Handle React routing, return all requests to React app
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
	})
}

app.get('/', function (req, res) {
	res.sendStatus(200)
})

// app.listen(port,()=>console.log('Listening on port...', port))
app.listen(port, () => console.log('Backend server live on ' + port))
