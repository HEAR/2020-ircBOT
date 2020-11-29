// ircBOT 2020
// 
console.log("ircBOT")


String.prototype.containsAny = String.prototype.containsAny || function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (this.indexOf(arr[i]) > -1) {
      return true;
    }
  }
  return false;
};

// https://www.npmjs.com/package/irc

let nom_du_BOT = 'loicBOT'


const irc = require('irc')
const client = new irc.Client('chat.freenode.net', nom_du_BOT, {
    channels: ['#hear-protocole']
})

// quand on reçoit un message adressé à tout le monde
client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message)

    repondre(message, from)
})

// quand on reçoit un message privé
client.addListener('pm', function (from, message) {
    console.log(from + ' => ME: ' + message)
})

// quand on reçoit un message adressé au canal
client.addListener('message#hear-protocole', function (from, message) {
    console.log(from + ' => #hear-protocole: ' + message)
})

// pour afficher les erreurs
client.addListener('error', function(message) {
    console.log('error: ', message);
});



let repondre = (text,from)=>{
	console.log("analyse ",text)
	// if(text.search("hey") >= 0){
	if(text.containsAny(["hey","hello","bonjour"])){
		console.log("hey a été trouvé")
		client.say("#hear-protocole", `Hello ${from}!`)
	}
}




