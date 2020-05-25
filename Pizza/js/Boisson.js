						
//Helper function
function setAttributes(el, attrs){
	for(var key in attrs){
		el.setAttribute(key, attrs[key]);
	}
}

//Real functions
function Boisson(picture, name, size, price){
	this.picture = picture;
	this.name = name;
	this.size = size;
	this.price = price;
}
function BoissonPanier(quantitee, nom, prix, taille){
	this.quantitee = quantitee;
	this.nom = nom;
	this.prix = prix;
	this.taille = taille;
}

function Size(size){
	this.size = size;
}
var cl25 = new Size(1);
var cl33 = new Size(2);
var cl50 = new Size(3);
var cl75 = new Size(4);

var monPanier = new Array();

//Create Boisson's
var iceTea = new Boisson("8814267760670.png", "LIPTON ICE TEA", cl33, 1.80);
var oasisTropical = new Boisson("tropical.png", "OASIS TROPICAL", cl33, 1.80);
var orangina = new Boisson("orangina.png", "ORANGINA", cl33, 1.80);
var pepsi = new Boisson("pepsii.png", "PEPSI", cl33, 1.80);
var sanPellegrino = new Boisson("san pel.png", "SAN PELLEGRINO", cl33, 1.80);
var jusOrange = new Boisson("tropicana.png", "JUS D'ORANGE TROPICANA", cl33, 1.80);
var vittel = new Boisson("vitell.png", "VITTEL", cl33, 1.80);

//Create List of Boisson's
var allBoissons = [iceTea, oasisTropical, orangina, pepsi, sanPellegrino, jusOrange, vittel];

var listBoissons = document.getElementById("LesBoisson");

for (var i = 0; i < allBoissons.length; i++) {
	//Create div for one pizza
	var thisBoisson = document.createElement("div");
	thisBoisson.className +="onePizza col-lg-3 col-6"

	//Create balise img and add source
	var img = document.createElement("img");
	img.className +="imgItem";
	img.src = "./images/images/Boissons/" + allBoissons[i].picture;
	thisBoisson.appendChild(img);

	//Create name of pizza
  	var pName = document.createElement("p");
  	pName.className +="nameOfPizza";
	//Add text in HTML
  	pName.innerHTML = allBoissons[i].name;
  	//Add my h1 on this div pizza
	thisBoisson.appendChild(pName);


	/*-------LISTBOX SIZE-------*/
	//Add listBox with choice of pizza size
	var sizeBoisson = document.createElement("select");
	sizeBoisson.name ="size";
	sizeBoisson.className +="listbox row";
	sizeBoisson.id = "sizeBoisson" + i;
	//Option size Medium
	var optionMedium = document.createElement("option");
	optionMedium.setAttribute("value", "cl33");
	optionMedium.innerHTML = "33 cl";
	sizeBoisson.appendChild(optionMedium);
	//Option size Small
	var optionSmall = document.createElement("option");
	optionSmall.setAttribute("value", "cl25");
	optionSmall.innerHTML = "25 cl";
	sizeBoisson.appendChild(optionSmall);
	//Option size Small
	var optionLarge = document.createElement("option");
	optionLarge.setAttribute("value", "cl50");
	optionLarge.innerHTML = "50 cl";
	sizeBoisson.appendChild(optionLarge);
	//Option size extra
	var optionExtra = document.createElement("option");
	optionExtra.setAttribute("value", "cl75");
	optionExtra.innerHTML = "75 cl";
	sizeBoisson.appendChild(optionExtra);
	//AddThisListBlox
	thisBoisson.appendChild(sizeBoisson);

	/*-------LISTBOX QUANTITY-------*/
	//Add listBox with choice of number pizza's
	var divQuantity = document.createElement("div");
	divQuantity.className+="row";
	var quantityBoisson = document.createElement("select");
	quantityBoisson.name="quantity";
	quantityBoisson.id= "quantityBoisson" + i;
	quantityBoisson.className +="listboxQuant";
	quantityBoisson.setAttribute("onchange", "changePrice(" + i + ")");
	//Option number 0
	var option0 = document.createElement("option");
	option0.setAttribute("value", "0");
	option0.innerHTML = "0";
	quantityBoisson.appendChild(option0);
	//Option number 1
	var option1 = document.createElement("option");
	option1.setAttribute("value", "1");
	option1.innerHTML = "1";
	quantityBoisson.appendChild(option1);
	//Option number 2
	var option2 = document.createElement("option");
	option2.setAttribute("value", "2");
	option2.innerHTML = "2";
	quantityBoisson.appendChild(option2);
	//Option number 3
	var option3 = document.createElement("option");
	option3.setAttribute("value", "3");
	option3.innerHTML = "3";
	quantityBoisson.appendChild(option3);
	//Option number 4
	var option4 = document.createElement("option");
	option4.setAttribute("value", "4");
	option4.innerHTML = "4";
	quantityBoisson.appendChild(option4);
	//Option number 5
	var option5 = document.createElement("option");
	option5.setAttribute("value", "5");
	option5.innerHTML = "5";
	quantityBoisson.appendChild(option5);
	//AddThisListBloc
	divQuantity.appendChild(quantityBoisson);
	/*-------PRICE-------*/
	var price = document.createElement("p");
	price.className +="pizzaPrice col-5";
	price.id = "priceBoisson" + i;
	price.innerHTML = allBoissons[i].price * quantityBoisson.value + "€";//€
	divQuantity.appendChild(price);
	thisBoisson.appendChild(divQuantity);

	/*--------ADD---------*/
	var divRowAjouter = document.createElement("div");
	divRowAjouter.className +="row";
	var buttonAjouter = document.createElement("button");
	buttonAjouter.className +="addThisPizza col-8";
	buttonAjouter.id = "addThisBoisson" + i;
	buttonAjouter.innerHTML = "AJOUTER";
	buttonAjouter.setAttribute("onclick", "Add(" + i + ")");
	divRowAjouter.appendChild(buttonAjouter);
	thisBoisson.appendChild(divRowAjouter);

	//Add this pizza on pizzas div
	listBoissons.appendChild(thisBoisson);

}




//EVENT CHANGE NUMBER OF PIZZA (CHANGE PRICE)
function changePrice(i){
	var nbr = document.getElementById("quantityBoisson" + i).value;
	console.log("nbr of " + i + " ===> " + nbr);
	document.getElementById("priceBoisson" + i).innerHTML = allBoissons[i].price * nbr + "€"; //€
}



function Add(i){
	if(document.getElementById("quantityBoisson" + i).value != 0){

		var commande = document.getElementById("PanierItems");

		var pNbrPizza = document.createElement("p");
		var quantitee = document.getElementById("quantityBoisson" + i).value;

		var pPricePizza = document.getElementById("panierPriceBoisson"+ i);

		var existName = document.getElementById("panierNameBoisson" + i);
		var existSize = document.getElementById("paniersizeBoisson" + i);
		var taille = document.getElementById("sizeBoisson" + i).value;

		if(existName && existSize && taille == existSize.innerHTML){
			var oldPrice = pPricePizza.innerHTML;

			pNbrPizza = document.getElementById("panierNbrBoisson" + i);
			pNbrPizza.innerHTML = pNbrPizza.innerHTML.split("x")[0];

			//var floatUnitPrice = parseFloat(pPricePizza.innerHTML) * 100
			//var intUnitPrice = parseInt(pPricePizza.innerHTML) * 100

			var unitPrice = parseInt(parseFloat(pPricePizza.innerHTML) * 100) / parseInt(pNbrPizza.innerHTML);
			var newQuantity = parseInt(pNbrPizza.innerHTML) + parseInt(quantitee);

			pNbrPizza.innerHTML = newQuantity + "x";

			var totalPanier = document.getElementById("PanierTotal");

			var pTotalWord = document.createElement("p");
			pTotalWord.id = "panierTotalWord";
			pTotalWord.innerHTML = "TOTAL";

			var pTotalPrice = document.createElement("p");
			pTotalPrice.className +="col-6";
			pTotalPrice.id = "panierTotalPrice";

			pPricePizza.innerHTML = (unitPrice * newQuantity) / 100 + "€";
			pTotalPrice.innerHTML += parseInt(parseFloat(pPricePizza.innerHTML)*100) / 100;

			panierTotalPrice.innerHTML = parseFloat(parseInt(parseFloat(panierTotalPrice.innerHTML)*100) + parseInt(parseFloat(pTotalPrice.innerHTML)*100) - parseInt(parseFloat(oldPrice)*100)) / 100 + "€";
		}
		else{


		var maBoisson = new BoissonPanier();


		var div1 = document.createElement("div");
		div1.className += "row";

		pNbrPizza.id = "panierNbrBoisson" + i;
		pNbrPizza.className += "col-2 panierNbrPizza";
		//add quantity
		quantitee += "x";
		pNbrPizza.innerHTML = quantitee;
		maBoisson.quantitee = quantitee;

		var pNamePizza = document.createElement("p");
		pNamePizza.id = "panierNameBoisson" + i;
		pNamePizza.className += "col-7 panierNamePizza";
		//add name
		var nom = allBoissons[i].name;
		pNamePizza.innerHTML = nom;
		maBoisson.nom = nom;

		var pPricePizza = document.createElement("p");
		pPricePizza.id = "panierPriceBoisson"+ i;
		pPricePizza.className = "panierPricePizza";
		//add price
		var prix = document.getElementById("quantityBoisson" + i).value * allBoissons[i].price;//€
		pPricePizza.innerHTML = prix + "€";
		maBoisson.prix = prix;

		div1.appendChild(pNbrPizza);
		div1.appendChild(pNamePizza);
		div1.appendChild(pPricePizza);
		commande.appendChild(div1);


		var div2 = document.createElement("div");
		div2.className +="row";
		var div2Before = document.createElement("div");
		div2Before.className +="col-2";
		var psizeBoisson = document.createElement("p");
		psizeBoisson.id = "paniersizeBoisson" + i;
		psizeBoisson.className += "col-10 paniersizeBoisson";
		//add size
		var taille = document.getElementById("sizeBoisson" + i).value;
		psizeBoisson.innerHTML = taille;
		maBoisson.taille = taille;

		monPanier.push(maBoisson);
		div2.appendChild(div2Before);
		div2.appendChild(psizeBoisson);
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

		panierTotalPrice.innerHTML = parseFloat(panierTotalPrice.innerHTML) + parseFloat(pTotalPrice.innerHTML) + "€";
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
	window.location.href = "LivraisonAfter.html"+ window.location.search + urlPanier;
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
	console.log("AIVIFLEGZFUQLUIFBQS --->" + urlPanier);
	window.location.href = "TexMex.html" + window.location.search + urlPanier;
}

var pagePizza = document.getElementById("goPizzasPage");
var input = document.createElement("input");