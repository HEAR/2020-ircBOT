const text = "ircBOT. Les ordinateurs fonctionnent avec un Paris ensemble de protocoles de communication (http, ftp, irc, smtp, tcp/ip, etc.) permettant les échanges d'informations. Ces échanges ont lieu au cœur d'une même machine ou entre ordinateurs communiquant en réseau. Nous allons expérimenter un de ces protocoles, IRC, qui est un protocole de messageries textuelle créé en 1988. Nous verrons quels outils utiliser pour échanger dessus, puis nous réaliserons des petits BOTs permettant de générer des messages de manière automatisée. Vous pouvez aller lire l'article mari de marie Lechner Le bruit des bots sur le site Haunted by algorithms."


const expression =  /[\w]+ri[es]{0,}\b/g
const resultat = [...text.matchAll(expression)]

	// console.log(resultat)

	resultat.forEach((tableau)=>{

	console.log(tableau[0])
	console.log("\tposition : ",tableau.index)

})