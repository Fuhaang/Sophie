						
//Helper function
function setAttributes(el, attrs){
	for(var key in attrs){
		el.setAttribute(key, attrs[key]);
	}
}

//Real functions
function TexMex(picture, name, size, price){
	this.picture = picture;
	this.name = name;
	this.size = size;
	this.price = price;
}
function TexMexPanier(quantitee, nom, prix, taille){
	this.quantitee = quantitee;
	this.nom = nom;
	this.prix = prix;
	this.taille = taille;
}

function Size(size){
	this.size = size;
}
var piece2 = new Size(1);
var piece4 = new Size(2);
var piece6 = new Size(3);
var piece8 = new Size(4);

var monPanier = new Array();

//Create TexMex's
var nuggets = new TexMex("nuggets.jpg", "NUGGETS", piece8, 6);
var spicyChicken = new TexMex("spicyChicken.jpg", "SPICY CHICKEN", piece6, 10);
var chickenWings = new TexMex("Offres 3 copie.jpg", "CHICKEN WINGS", piece8, 6);
var frites = new TexMex("french-fries-paper-bag-with-sauces_82893-9973.jpg", "FRITES", piece2, 6);
var painMozzaOeuf = new TexMex("Capture d’écran 2020-05-12 à 19.19.52.png", "PAIN MOZZA OEUF", piece2, 6);
var toastMozzaTomate = new TexMex("Capture d’écran 2020-05-12 à 19.22.50.png", "TOAST MOZZA TOMATE", piece2, 6);
//Create List of TexMex's
var texMex = [nuggets, spicyChicken, chickenWings, frites, painMozzaOeuf, toastMozzaTomate];

var texs = document.getElementById("LesTexMex");

for (var i = 0; i < texMex.length; i++) {
	//Create div for one pizza
	var thistex = document.createElement("div");
	thistex.className +="onePizza col-lg-3 col-6"

	//Create balise img and add source
	var img = document.createElement("img");
	img.className +="imgItem";
	img.src = "./images/images/tex mex/" + texMex[i].picture;
	thistex.appendChild(img);

	//Create name of pizza
  	var pName = document.createElement("p");
  	pName.className +="nameOfPizza";
	//Add text in HTML
  	pName.innerHTML = texMex[i].name;
  	//Add my h1 on this div pizza
	thistex.appendChild(pName);


	/*-------LISTBOX SIZE-------*/
	//Add listBox with choice of pizza size
	var sizeTexMex = document.createElement("select");
	sizeTexMex.name ="size";
	sizeTexMex.className +="listbox row";
	sizeTexMex.id = "sizeTex" + i;
	//Option size Medium
	var optionMedium = document.createElement("option");
	optionMedium.setAttribute("value", "piece4");
	optionMedium.innerHTML = "4 Pièces";
	sizeTexMex.appendChild(optionMedium);
	//Option size Small
	var optionSmall = document.createElement("option");
	optionSmall.setAttribute("value", "piece2");
	optionSmall.innerHTML = "2 Pièces";
	sizeTexMex.appendChild(optionSmall);
	//Option size Small
	var optionLarge = document.createElement("option");
	optionLarge.setAttribute("value", "piece6");
	optionLarge.innerHTML = "6 Pièces";
	sizeTexMex.appendChild(optionLarge);
	//Option size extra
	var optionExtra = document.createElement("option");
	optionExtra.setAttribute("value", "piece8");
	optionExtra.innerHTML = "8 Pièces";
	sizeTexMex.appendChild(optionExtra);
	//AddThisListBlox
	thistex.appendChild(sizeTexMex);

	/*-------LISTBOX QUANTITY-------*/
	//Add listBox with choice of number pizza's
	var divQuantity = document.createElement("div");
	divQuantity.className+="row";
	var quantityTexMex = document.createElement("select");
	quantityTexMex.name="quantity";
	quantityTexMex.id= "quantityTex" + i;
	quantityTexMex.className +="listboxQuant";
	quantityTexMex.setAttribute("onchange", "changePrice(" + i + ")");
	//Option number 0
	var option0 = document.createElement("option");
	option0.setAttribute("value", "0");
	option0.innerHTML = "0";
	quantityTexMex.appendChild(option0);
	//Option number 1
	var option1 = document.createElement("option");
	option1.setAttribute("value", "1");
	option1.innerHTML = "1";
	quantityTexMex.appendChild(option1);
	//Option number 2
	var option2 = document.createElement("option");
	option2.setAttribute("value", "2");
	option2.innerHTML = "2";
	quantityTexMex.appendChild(option2);
	//Option number 3
	var option3 = document.createElement("option");
	option3.setAttribute("value", "3");
	option3.innerHTML = "3";
	quantityTexMex.appendChild(option3);
	//Option number 4
	var option4 = document.createElement("option");
	option4.setAttribute("value", "4");
	option4.innerHTML = "4";
	quantityTexMex.appendChild(option4);
	//Option number 5
	var option5 = document.createElement("option");
	option5.setAttribute("value", "5");
	option5.innerHTML = "5";
	quantityTexMex.appendChild(option5);
	//AddThisListBloc
	divQuantity.appendChild(quantityTexMex);
	/*-------PRICE-------*/
	var price = document.createElement("p");
	price.className +="pizzaPrice col-5";
	price.id = "priceTex" + i;
	price.innerHTML = texMex[i].price * quantityTexMex.value + "€";//€
	divQuantity.appendChild(price);
	thistex.appendChild(divQuantity);

	/*--------ADD---------*/
	var divRowAjouter = document.createElement("div");
	divRowAjouter.className +="row";
	var buttonAjouter = document.createElement("button");
	buttonAjouter.className +="addThisPizza col-8";
	buttonAjouter.id = "addThisTex" + i;
	buttonAjouter.innerHTML = "AJOUTER";
	buttonAjouter.setAttribute("onclick", "Add(" + i + ")");
	divRowAjouter.appendChild(buttonAjouter);
	thistex.appendChild(divRowAjouter);

	//Add this pizza on pizzas div
	texs.appendChild(thistex);

}




//EVENT CHANGE NUMBER OF PIZZA (CHANGE PRICE)
function changePrice(i){
	var nbr = document.getElementById("quantityTex" + i).value;
	console.log("nbr of " + i + " ===> " + nbr);
	document.getElementById("priceTex" + i).innerHTML = texMex[i].price * nbr + "€"; //€
}



function Add(i){
	if(document.getElementById("quantityTex" + i).value != 0){

		var commande = document.getElementById("PanierItems");
		var pNbrPizza = document.createElement("p");
		var quantitee = document.getElementById("quantityTex" + i).value;

		var pPricePizza = document.getElementById("panierPriceTex" + i);

		var existName = document.getElementById("panierNameTex" + i);
		var existSize = document.getElementById("panierSizeTex" + i);
		var taille = document.getElementById("sizeTex" + i).value;

		if(existName && existSize && taille == existSize.innerHTML){
			var oldPrice = pPricePizza.innerHTML;

			pNbrPizza = document.getElementById("panierNbrTex" + i);
			pNbrPizza.innerHTML = pNbrPizza.innerHTML.split("x")[0];

			//var floatUnitPrice = parseFloat(pPricePizza.innerHTML) * 100
			//var intUnitPrice = parseInt(pPricePizza.innerHTML) * 100

			var unitPrice = parseInt(pPricePizza.innerHTML) / parseInt(pNbrPizza.innerHTML);
			var newQuantity = parseInt(pNbrPizza.innerHTML) + parseInt(quantitee);

			pNbrPizza.innerHTML = newQuantity + "x";

			var totalPanier = document.getElementById("PanierTotal");

			var pTotalWord = document.createElement("p");
			pTotalWord.id = "panierTotalWord";
			pTotalWord.innerHTML = "TOTAL";

			var pTotalPrice = document.createElement("p");
			pTotalPrice.className +="col-6";
			pTotalPrice.id = "panierTotalPrice";

			pPricePizza.innerHTML = (unitPrice * newQuantity) + "€";
			pTotalPrice.innerHTML += parseInt(pPricePizza.innerHTML);

			panierTotalPrice.innerHTML = parseInt(panierTotalPrice.innerHTML) + parseInt(pTotalPrice.innerHTML) - parseInt(oldPrice) + "€";

		}
		else{


		var monTexMex = new TexMexPanier();


		var div1 = document.createElement("div");
		div1.className += "row";

		pNbrPizza.id = "panierNbrTex" + i;
		pNbrPizza.className += "col-2 panierNbrPizza";
		//add quantity
		quantitee += "x";
		pNbrPizza.innerHTML = quantitee;
		monTexMex.quantitee = quantitee;

		var pNamePizza = document.createElement("p");
		pNamePizza.id = "panierNameTex" + i;
		pNamePizza.className += "col-7 panierNamePizza";
		//add name
		var nom = texMex[i].name;
		pNamePizza.innerHTML = nom;
		monTexMex.nom = nom;

		var pPricePizza = document.createElement("p");
		pPricePizza.id = "panierPriceTex" + i;
		pPricePizza.className +="panierPricePizza";
		//add price
		var prix = document.getElementById("quantityTex" + i).value * texMex[i].price;//€
		pPricePizza.innerHTML = prix + "€";
		monTexMex.prix = prix;

		div1.appendChild(pNbrPizza);
		div1.appendChild(pNamePizza);
		div1.appendChild(pPricePizza);
		commande.appendChild(div1);


		var div2 = document.createElement("div");
		div2.className +="row";
		var div2Before = document.createElement("div");
		div2Before.className +="col-2";
		var psizeTexMex = document.createElement("p");
		psizeTexMex.id = "panierSizeTex" + i;
		psizeTexMex.className += "col-10 panierSizePizza";
		//add size
		var taille = document.getElementById("sizeTex" + i).value;
		psizeTexMex.innerHTML = taille;
		monTexMex.taille = taille;
		
		monPanier.push(monTexMex);
		div2.appendChild(div2Before);
		div2.appendChild(psizeTexMex);
		commande.appendChild(div2);



		var totalPanier = document.getElementById("PanierTotal");

		var pTotalWord = document.createElement("p");
		pTotalWord.className +="col-6";
		pTotalWord.id = "panierTotalWord";
		pTotalWord.innerHTML = "TOTAL";

		var pTotalPrice = document.createElement("p");
		pTotalPrice.className +="col-6";
		pTotalPrice.id = "panierTotalPrice";
		pTotalPrice.innerHTML += pPricePizza.innerHTML;

		panierTotalPrice.innerHTML = parseFloat(panierTotalPrice.innerHTML) + parseInt(pTotalPrice.innerHTML) + "€";
		}
	}
}

function dynamicNextPage(){
	var numRue = document.getElementById("lNbrue").value;
	var rue = document.getElementById("lrue").value;
	var ville = document.getElementById("lville").value;
	var scale = document.getElementById("lscales").value;

	var parameters =  location.search.substring(1).split("&");
	console.log("Donne le nombre de parametres --> " + parameters.length);
	idItem = parameters.length - 4;

	//quantitee, nom, prix, taille
	var urlPanier = "";
	for (var i = idItem; i < monPanier.length + idItem; i++) {
		urlPanier +="&item" + i + "=" + monPanier[i - idItem].quantitee + "|" + monPanier[i - idItem].nom + "|"
		+ monPanier[i - idItem].prix + "|" + monPanier[i - idItem].taille;
	}
	console.log("urlPanier --->" + urlPanier);

	console.log("numRue, rue, ville, scale :" + numRue + "|" + rue + "|" + ville + "|" + scale);
	var urlLocalisation = "ville=" + ville + "&Nbrue=" + numRue + "&rue=" + rue + "&scales=" + scale;
	window.location.href = "Boisson.html"+ window.location.search + urlPanier;
}

function dynamicPreviousPage(){
	var parameters =  location.search.substring(1).split("&");
	console.log("Donne le nombre de parametres --> " + parameters.length);
	idItem = parameters.length - 4;
	var urlPanier = "";
	for (var i = idItem; i < monPanier.length + idItem; i++) {
		urlPanier +="&item" + i + "=" + monPanier[i - idItem].quantitee + "|" + monPanier[i - idItem].nom + "|"
		+ monPanier[i - idItem].prix + "|" + monPanier[i - idItem].taille;
	}
	console.log("urlPanier --->" + urlPanier);
	window.location.href = "ChoicePizza.html" + window.location.search + urlPanier;
}


var pagePizza = document.getElementById("goPizzasPage");
var input = document.createElement("input");