						
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

function Size(size){
	this.size = size;
}
var piece2 = new Size(1);
var piece4 = new Size(2);
var piece6 = new Size(3);
var piece8 = new Size(4);


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
	img.setAttribute("width", "150px");
	img.setAttribute("height", "100px");
	img.setAttribute("position", "center");
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
	sizeTexMex.id = "size" + i;
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
	quantityTexMex.id= "quantity" + i;
	quantityTexMex.className +="listboxQuant col-5";
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
	price.id = "price" + i;
	price.innerHTML = texMex[i].price * quantityTexMex.value + "€";//€
	divQuantity.appendChild(price);
	thistex.appendChild(divQuantity);

	/*--------ADD---------*/
	var divRowAjouter = document.createElement("div");
	divRowAjouter.className +="row";
	var buttonAjouter = document.createElement("button");
	buttonAjouter.className +="addThisPizza col-8";
	buttonAjouter.id = "addThisPizza" + i;
	buttonAjouter.innerHTML = "AJOUTER";
	buttonAjouter.setAttribute("onclick", "Add(" + i + ")");
	divRowAjouter.appendChild(buttonAjouter);
	thistex.appendChild(divRowAjouter);

	//Add this pizza on pizzas div
	texs.appendChild(thistex);

}




//EVENT CHANGE NUMBER OF PIZZA (CHANGE PRICE)
function changePrice(i){
	var nbr = document.getElementById("quantity" + i).value;
	console.log("nbr of " + i + " ===> " + nbr);
	document.getElementById("price" + i).innerHTML = texMex[i].price * nbr + "€"; //€
}



function Add(i){
	if(document.getElementById("quantity" + i).value != 0){

		var commande = document.getElementById("PanierItems");


		var div1 = document.createElement("div");
		div1.className += "row";

		var pNbrPizza = document.createElement("p");
		pNbrPizza.id = "panierNbrPizza";
		pNbrPizza.className += "col-2";
		//add quantity
		pNbrPizza.innerHTML = document.getElementById("quantity" + i).value + "x";

		var pNamePizza = document.createElement("p");
		pNamePizza.id = "panierNamePizza";
		pNamePizza.className += "col-7";
		//add name
		pNamePizza.innerHTML = texMex[i].name;

		var pPricePizza = document.createElement("p");
		pPricePizza.id = "panierPricePizza";
		//add price
		pPricePizza.innerHTML = document.getElementById("quantity" + i).value * texMex[i].price + "€";//€


		div1.appendChild(pNbrPizza);
		div1.appendChild(pNamePizza);
		div1.appendChild(pPricePizza);
		commande.appendChild(div1);


		var div2 = document.createElement("div");
		div2.className +="row";
		var div2Before = document.createElement("div");
		div2Before.className +="col-2";
		var psizeTexMex = document.createElement("p");
		psizeTexMex.id = "paniersizeTexMex";
		psizeTexMex.className += "col-10";
		//add size
		psizeTexMex.innerHTML = document.getElementById("size" + i).value;
		
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

		panierTotalPrice.innerHTML = parseInt(panierTotalPrice.innerHTML) + parseInt(pTotalPrice.innerHTML) + "€";
	}
}



var pagePizza = document.getElementById("goPizzasPage");
var input = document.createElement("input");