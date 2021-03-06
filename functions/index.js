const functions = require('firebase-functions')
const interests = require('./data/interests')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
	functions.logger.info('Hello logs!', { structuredData: true })
	response.send('Hello from Firebase!')
})

// console.log('interests..', interests.interestsList)
exports.interests = functions.https.onRequest((request, response) => {
	functions.logger.info('Hello logs! / interests api', { structuredData: true })
	response.send({
		interestsList: interests.interestsList,
	})
})
