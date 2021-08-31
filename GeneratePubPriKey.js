/* eslint-disable linebreak-style */
/* eslint-disable no-negated-condition */
/* eslint-disable brace-style */
/* eslint-disable no-undef */

/* eslint-disable linebreak-style */
/* const crypto = require('crypto');*/

const crypto = require('crypto');
crypto.generateKeyPair('rsa', {
modulusLength: 2048,
publicKeyEncoding: {
	type: 'pkcs1',
	format: 'der'
},
privateKeyEncoding: {
	type: 'pkcs8',
	format: 'der',
	cipher: 'aes-256-cbc',
	passphrase: 'Hello, Generate Private Public key'
}
}, (err, publicKey, privateKey) => {
	if(!err)
	{
		console.log("Generated Public Key: \n", publicKey);
		console.log("\nGenerated Private Key is: \n", privateKey);
	}
	else{
		console.log("Error: ", err);
	}
});