// ircBOT 2020

console.log("ircBOT")

// fonction pour vérifier si une phrase contient un ou plusieurs mots spécifiques
// laphrase.containsAny( ["mot1", "mot2", "mot3" ] )
// cette fonction sert plus tard dans le code
String.prototype.containsAny = String.prototype.containsAny || function(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (this.indexOf(arr[i]) > -1) {
			return true;
		}
	}
	return false;
};



// https://www.npmjs.com/package/irc

// on crée une variable avec le nom du bot
let nom_du_BOT = 'loicBOT'


// on crée un « objet » qui va permettre de se connecter à IRC
// (IRC = système de messagerie instantanée)
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


client.addListener('registered', function(){
	console.log('connecté à IRC');
});

// const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']

client.addListener('join#hear-protocole', function(){

	console.log('a rejoint #hear-protocole');

	// client.say('ok')

	setTimeout(()=>{
		dire('Tiens, on est ' + new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: "numeric"}).format(new Date()))
	}, 2000)
});


let dire = (text)=>{
	client.say("#hear-protocole", text)
}



// fonction qui sert à analyser un message reçu
// puis a diffuser un réponse
let repondre = (text,from)=>{
	// console.log("analyse ",text)
	// // if(text.search("hey") >= 0){
	// if(text.containsAny(["hello","bonjour"])){
	// 	console.log("hey a été trouvé")
	// 	client.say("#hear-protocole", `Hello ${from}!`)
	// }
	// if(text.containsAny(["hey"])){
	// 	console.log("hey a été trouvé")
	// 	client.say("#hear-protocole", `Comment ça va ${from}?`)
	// }
	//  if(text.containsAny(["appelle"])){
	//    console.log("hey a été trouvé")
	//    client.say("#hear-protocole", `Et toi, comment tu t'appelles?`)
	//  }

	//  if(
	//    text.containsAny(["vie","existence"]) && 
	//    text.containsAny(["sens","but","finalité","aboutissement"]) && 
	//    text.containsAny(["?"]) 
	//  ){

	//    let reponses = [
	//      `les pauvres ne s’interrogent pas sur le sens de l’existence`,
	//      `mourir`,
	//      `42`
	//    ];

	//    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
	//    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	//    client.say("#hear-protocole", reponses[ Math.floor( Math.random() * reponses.length ) ] )

	//  }
	//  

	const expression =  /[\w]+ri[es]{0,}\b/g
	const resultat = [...text.matchAll(expression)]
	resultat.forEach((tableau)=>{
		console.log(tableau[0])
		console.log("\tposition : ",tableau.index)
	})



	if(
		text.containsAny(["hello","bye","i don't know"]) && 
		text.containsAny(["!","."]) 
	){

		let reponses = [
			`are you mad at me?`,
			`did I made you angry?`,
			`did I say something wrong`
		]

		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
		client.say("#hear-protocole", reponses[ Math.floor( Math.random() * reponses.length ) ] )

	}

	if(from == "Sandra1" && text.search("Véronique") >= 0){
		client.say("#hear-protocole", `Non tu t'appelles ${from}` )
	}
}


