						
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

function Size(size){
	this.size = size;
}
var cl25 = new Size(1);
var cl33 = new Size(2);
var cl50 = new Size(3);
var cl75 = new Size(4);


//Create Boisson's
var iceTea = new Boisson("8814267760670.png", "LIPTON ICE TEA", cl33, 1.80);
var oasisTropical = new Boisson("8814267760670.png", "OASIS TROPICAL", cl33, 1.80);
var orangina = new Boisson("8814267760670.png", "ORANGINA", cl33, 1.80);
var pepsi = new Boisson("8814267760670.png", "PEPSI", cl33, 1.80);
var sanPellegrino = new Boisson("8814267760670.png", "SAN PELLEGRINO", cl33, 1.80);
var jusOrange = new Boisson("8814267760670.png", "JUS D'ORANGE TROPICANA", cl33, 1.80);
var vittel = new Boisson("8814267760670.png", "VITTEL", cl33, 1.80);

//Create List of Boisson's
var allBoissons = [iceTea, oasisTropical, orangina, pepsi, sanPellegrino, jusOrange, vittel];

var listBoissons = document.getElementById("LesBoisson");

for (var i = 0; i < allBoissons.length; i++) {
	//Create div for one pizza
	var thisBoisson = document.createElement("div");
	thisBoisson.className +="onePizza col-lg-3 col-6"

	//Create balise img and add source
	var img = document.createElement("img");
	img.setAttribute("width", "150px");
	img.setAttribute("height", "80px");
	img.setAttribute("position", "center");
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
	sizeBoisson.id = "size" + i;
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
	quantityBoisson.id= "quantity" + i;
	quantityBoisson.className +="listboxQuant col-5";
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
	price.id = "price" + i;
	price.innerHTML = allBoissons[i].price * quantityBoisson.value + "€";//€
	divQuantity.appendChild(price);
	thisBoisson.appendChild(divQuantity);

	/*--------ADD---------*/
	var divRowAjouter = document.createElement("div");
	divRowAjouter.className +="row";
	var buttonAjouter = document.createElement("button");
	buttonAjouter.className +="addThisPizza col-8";
	buttonAjouter.id = "addThisPizza" + i;
	buttonAjouter.innerHTML = "AJOUTER";
	buttonAjouter.setAttribute("onclick", "Add(" + i + ")");
	divRowAjouter.appendChild(buttonAjouter);
	thisBoisson.appendChild(divRowAjouter);

	//Add this pizza on pizzas div
	listBoissons.appendChild(thisBoisson);

}




//EVENT CHANGE NUMBER OF PIZZA (CHANGE PRICE)
function changePrice(i){
	var nbr = document.getElementById("quantity" + i).value;
	console.log("nbr of " + i + " ===> " + nbr);
	document.getElementById("price" + i).innerHTML = allBoissons[i].price * nbr + "€"; //€
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
		pNamePizza.innerHTML = allBoissons[i].name;

		var pPricePizza = document.createElement("p");
		pPricePizza.id = "panierPricePizza";
		//add price
		pPricePizza.innerHTML = document.getElementById("quantity" + i).value * allBoissons[i].price + "€";//€


		div1.appendChild(pNbrPizza);
		div1.appendChild(pNamePizza);
		div1.appendChild(pPricePizza);
		commande.appendChild(div1);


		var div2 = document.createElement("div");
		div2.className +="row";
		var div2Before = document.createElement("div");
		div2Before.className +="col-2";
		var psizeBoisson = document.createElement("p");
		psizeBoisson.id = "paniersizeBoisson";
		psizeBoisson.className += "col-10";
		//add size
		psizeBoisson.innerHTML = document.getElementById("size" + i).value;
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



var pagePizza = document.getElementById("goPizzasPage");
var input = document.createElement("input");