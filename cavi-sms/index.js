/**
* Ekpoto Liberty
* @delino12
* 🍺 Cheers
*/
const request = require('request');

// new class SMS
export default class Sms {

	// init constructor
	constructor(endpoint, username, password, sms_type, delivery_report = ""){
		this.endpoint = endpoint;
		this.username = username;
		this.password = password;
		this.sms_type = sms_type;
		this.dlr 	  = delivery_report;
	}

	// send to one
	send(sender, message, receiver){

		const params = {
			user: this.username,
			pass: this.password,
			sender: sender,
			message: message,
			receiver: receiver
		}

		request(params).then((val) => {
			this.apiResponse(val);
		}).catch((err) => {
			this.apiResponse(val);
		});
	}

	// return response
	apiResponse(data){
		console.log(data);
	}
}