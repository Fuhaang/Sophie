//Helper function
function setAttributes(el, attrs){
	for(var key in attrs){
		el.setAttribute(key, attrs[key]);
	}
}

//Real functions
function Pizza(picture, name, ingredients, size, base, price){
	this.picture = picture;
	this.name = name;
	this.ingredients = ingredients;
	this.size = size;
	this.base = base;
	this.price = price;
}

function Size(size){
	this.size = size;
}
var small = new Size(1);
var medium = new Size(2);
var large = new Size(3);


function Base(base){
	this.base = base;
}
var cremeFraiche = new Base("Base crème fraîche");
var sauceTomate = new Base("Base sauce tomate");



//Create Pizza's Supremes
var pizzaKebab = new Pizza("URBAN KEBAB.PNG", "KEBAB",
	"Sauce tomate, mozarella, viande kebab, merguez, oignons, sauce blanche kebab",
	medium, sauceTomate, 13);
var pizzaSavoyard = new Pizza("SAYOYARDE.PNG", "SAVOYARD",
	"Crème fraiche légère, mozarella, lardons fumés, pommes de terre, reblochon A O P de savoie",
	medium, cremeFraiche, 10);
var pizzaDaviola = new Pizza("DIAVOLA.PNG", "DAVIOLA",
	"Sauce tomate, mozzarella, boulette de boeuf, poivrons, oignons, piments",
	medium, cremeFraiche, 11);
var pizzaIndienne = new Pizza("INDIENNE.PNG", "INDIENNE",
	"Crème fraîche légère, mozzarella, oignons, poulet rôti, champignons, emmental",
	medium, cremeFraiche, 12);

var pizzaDaviolaPepperoni = new Pizza("DIAVOLA PEPPERONI.PNG", "DAVIOLA PEPPERONI",
	"Sauce tomate, mozzarella, oignons, pepperoni, piments, poivrons",
	medium, cremeFraiche, 12);
var pizzaGroovy = new Pizza("BACON GROOVY.PNG", "BACON GROOVY",
	"Crème fraiche légère, mozzarella, poulet rôti, oignons, bacon, sauce barbecue",
	medium, cremeFraiche, 12);
var pizzaHypnotika = new Pizza("HYPNOTIKA.PNG", "HYPNOTIKA",
	"Sauce tomate, mozzarella, crème fraîche, merguez, poulet rôti",
	medium, cremeFraiche, 12);
var pizzaForestiere = new Pizza("FORESTIÈRE.PNG", "FORESTIÈRE",
	"Crème fraiche, mozzarella, lardons fumés, oignons, jambon, origan, champignons",
	medium, cremeFraiche, 12);
//Create List of pizza's supremes
var pizzasSupreme = [pizzaKebab, pizzaSavoyard, pizzaDaviola, pizzaIndienne,
					pizzaDaviolaPepperoni, pizzaGroovy, pizzaHypnotika, pizzaForestiere];


//Create Pizza's Incontournables
var pizzaSteakCheese = new Pizza("CHEESE STEAK.PNG", "STEAK & CHEESE",
	"Sauce tomate, mozzarella, tomates, boulettes de boeuf, origan",
	medium, cremeFraiche, 12);
var pizzaReine = new Pizza("REINE.PNG", "REINE",
	"Sauce tomate, mozzarella, jambon, champignons",
	medium, cremeFraiche, 12);
var pizzaOrientale = new Pizza("ORIENTALE.PNG", "ORIENTALE",
	"Sauce tomate, mozzarella, merguez, poivrons mélangés, oignons",
	medium, cremeFraiche, 12);
var pizzaPecheur = new Pizza("PÊCHEUR.PNG", "PÊCHEUR",
	"Sauce tomate, mozzarella, oignons, thon, olives noires, crème fraiche",
	medium, cremeFraiche, 12);
//Create List of pizza's Incontournables
var pizzasIncontournable = [pizzaSteakCheese, pizzaReine, pizzaOrientale, pizzaPecheur];


//Create Pizza's VEGAN
var pizzaVeganMargherita = new Pizza("VEGAN MARGHERITA.PNG", "VEGAN MARGHERITA",
	"Sauce tomate, rapé vegan",
	medium, cremeFraiche, 12);
var pizzaVeganPeppina = new Pizza("VEGAN PEPPINA.PNG", "VEGAN PEPPINA",
	"Sauce tomate, rapé vegan, origan, olives noires, tomates fraîches, champignons",
	medium, cremeFraiche, 12);
//Create List of pizza's Incontournables
var pizzasVegan = [pizzaVeganMargherita, pizzaVeganPeppina];

//Create List of List with all Pizza's
var allPizzas = [pizzasSupreme, pizzasIncontournable, pizzasVegan];


var supremes = document.getElementById("LesSupremes");
var incontournables = document.getElementById("LesIncontournables");
var vegans = document.getElementById("LesVegans");

var allCategoriesPizza = [supremes, incontournables, vegans];

/* Example
// crée un nouvel élément div
  var newDiv = document.createElement("div");
  // et lui donne un peu de contenu
  var newContent = document.createTextNode('Hi there and greetings!');
  // ajoute le nœud texte au nouveau div créé
  newDiv.appendChild(newContent);
  
  // ajoute le nouvel élément créé et son contenu dans le DOM
  var currentDiv = document.getElementById('div1');
  document.body.insertBefore(newDiv, currentDiv);
*/
for( var j = 0; j < allPizzas.length; j++){

	for (var i = 0; i < allPizzas[j].length; i++) {
		if(i%4 == 0 && i != 0){
			var newLine = document.createElement("div");
			newLine.className +="col-lg-4 col-0";
			allCategoriesPizza[j].appendChild(newLine);
		}
		//Create div for one pizza
		var pizza = document.createElement("div");
		pizza.className +="onePizza col-lg-2 col-6"
		// Attribut style class id ...
		//setAttributes(pizza, {"style": "margin-top: 30px; width: 150px; background-color: red;"});
		/*pizza.setAttribute("style", "margin-top: 300px;");
		pizza.setAttribute("style", "background-color: red;");*/


		//Create balise img and add source
		var img = document.createElement("img");
		img.className +="choicePizzaPicture";
		img.setAttribute("width", "150px");
		img.src = "./images/images/pizza/" + allPizzas[j][i].picture;
		pizza.appendChild(img);

		//Create name of pizza
	  	var pName = document.createElement("p");
	  	pName.className +="nameOfPizza";

	  	//Debug
	  	console.log(allPizzas[j][i].name);

	  	//Add text in HTML
	  	pName.innerHTML = allPizzas[j][i].name;
	  	//Add my h1 on this div pizza
		pizza.appendChild(pName);

		//Create  description of pizza
		var pDescription = document.createElement("p");
		pDescription.className +="descriptionOfPizza";

		//Add text in HTML
		pDescription.innerHTML = allPizzas[j][i].ingredients;
		//Add my description on this div pizza
		pizza.appendChild(pDescription);

		//Add possibilities of personnalize
		var personalizeA = document.createElement("a");
		var personalizeP = document.createElement("p");
		personalizeP.innerHTML = "Personnaliser";
		personalizeA.appendChild(personalizeP);
		pizza.appendChild(personalizeA);

		/*-------LISTBOX SIZE-------*/
		//Add listBox with choice of pizza size
		var sizePizza = document.createElement("select");
		sizePizza.name ="size";
		sizePizza.className +="listbox";
		sizePizza.id = j + "size" + i;
		//Option size Medium
		var optionMedium = document.createElement("option");
		optionMedium.setAttribute("value", "medium");
		optionMedium.innerHTML = "Medium";
		sizePizza.appendChild(optionMedium);
		//Option size Small
		var optionSmall = document.createElement("option");
		optionSmall.setAttribute("value", "small");
		optionSmall.innerHTML = "Small";
		sizePizza.appendChild(optionSmall);
		//Option size Small
		var optionLarge = document.createElement("option");
		optionLarge.setAttribute("value", "large");
		optionLarge.innerHTML = "Large";
		sizePizza.appendChild(optionLarge);
		//AddThisListBlox
		pizza.appendChild(sizePizza);

		/*-------LISTBOX BASE-------*/
		//Add listBox with choice of base
		var basePizza = document.createElement("select");
		basePizza.name ="base";
		basePizza.className +="listbox";
		basePizza.id = j + "base" + i;
		basePizza.setAttribute("onchange", "changeBase(" + j +", " + i + ")")
		//Option base creme fraiche
		var optionCremeFraiche = document.createElement("option");
		optionCremeFraiche.setAttribute("value", "BaseCremeFraiche");
		optionCremeFraiche.innerHTML = "Base crème fraîche";
		basePizza.appendChild(optionCremeFraiche);
		//Option base tomate
		var optionTomate = document.createElement("option");
		optionTomate.setAttribute("value", "BaseTomate");
		optionTomate.innerHTML = "Base sauce tomate";
		basePizza.appendChild(optionTomate);
		//AddThisListBloc
		pizza.appendChild(basePizza);

		/*-------LISTBOX QUANTITY-------*/
		//Add listBox with choice of number pizza's
		var divQuantity = document.createElement("div");
		divQuantity.className+="row";
		var quantityPizza = document.createElement("select");
		quantityPizza.name="quantity";
		quantityPizza.id= j + "quantity" + i;
		quantityPizza.className +="listboxQuant col-5";
		quantityPizza.setAttribute("onchange", "changePrice(" + j +", " + i + ")")
		//Option number 0
		var option0 = document.createElement("option");
		option0.setAttribute("value", "0");
		option0.innerHTML = "0";
		quantityPizza.appendChild(option0);
		//Option number 1
		var option1 = document.createElement("option");
		option1.setAttribute("value", "1");
		option1.innerHTML = "1";
		quantityPizza.appendChild(option1);
		//Option number 2
		var option2 = document.createElement("option");
		option2.setAttribute("value", "2");
		option2.innerHTML = "2";
		quantityPizza.appendChild(option2);
		//Option number 3
		var option3 = document.createElement("option");
		option3.setAttribute("value", "3");
		option3.innerHTML = "3";
		quantityPizza.appendChild(option3);
		//Option number 4
		var option4 = document.createElement("option");
		option4.setAttribute("value", "4");
		option4.innerHTML = "4";
		quantityPizza.appendChild(option4);
		//Option number 5
		var option5 = document.createElement("option");
		option5.setAttribute("value", "5");
		option5.innerHTML = "5";
		quantityPizza.appendChild(option5);
		//AddThisListBloc
		divQuantity.appendChild(quantityPizza);

		/*-------PRICE-------*/
		var price = document.createElement("p");
		price.className +="pizzaPrice col-5";
		price.id = j + "price" + i;
		console.log(quantityPizza.value);
		price.innerHTML = allPizzas[j][i].price * quantityPizza.value + "€";//€
		divQuantity.appendChild(price);
		pizza.appendChild(divQuantity);

		/*--------ADD---------*/
		var divRowAjouter = document.createElement("div");
		divRowAjouter.className +="row";
		var divColBeforeAjouter = document.createElement("div");
		divColBeforeAjouter.className +="col-2";
		var buttonAjouter = document.createElement("button");
		buttonAjouter.className +="addThisPizza col-8";
		buttonAjouter.id = j + "addThisPizza" + i;
		buttonAjouter.innerHTML = "AJOUTER";
		buttonAjouter.setAttribute("onclick", "Add(" + j +", " + i + ")");
		divRowAjouter.appendChild(divColBeforeAjouter);
		divRowAjouter.appendChild(buttonAjouter);
		pizza.appendChild(divRowAjouter);


		//Add this pizza on pizzas div
		allCategoriesPizza[j].appendChild(pizza);


	}
}



//EVENT CHANGE NUMBER OF PIZZA (CHANGE PRICE)
function changePrice(j, i){
	var nbr = document.getElementById(j + "quantity" + i).value;
	document.getElementById(j + "price" + i).innerHTML = allPizzas[j][i].price * nbr + "€"; //€
}
//EVENT CHANGE BASE OF PIZZA
function changeBase(j, i){
	var base = document.getElementById(j + "base" + i).value;
	console.log(base);
}



function Add(j, i){
	if(document.getElementById(j + "quantity" + i).value != 0){

		var commande = document.getElementById("PanierItems");


		var div1 = document.createElement("div");
		div1.className += "row";

		var pNbrPizza = document.createElement("p");
		pNbrPizza.id = "panierNbrPizza";
		pNbrPizza.className += "col-2";
		//add quantity
		pNbrPizza.innerHTML = document.getElementById(j + "quantity" + i).value + "x";

		var pNamePizza = document.createElement("p");
		pNamePizza.id = "panierNamePizza";
		pNamePizza.className += "col-7";
		//add name
		pNamePizza.innerHTML = allPizzas[j][i].name;

		var pPricePizza = document.createElement("p");
		pPricePizza.id = "panierPricePizza";
		//add price
		pPricePizza.innerHTML = document.getElementById(j + "quantity" + i).value * allPizzas[j][i].price + "€";//€


		div1.appendChild(pNbrPizza);
		div1.appendChild(pNamePizza);
		div1.appendChild(pPricePizza);
		commande.appendChild(div1);


		var div2 = document.createElement("div");
		div2.className +="row";
		var div2Before = document.createElement("div");
		div2Before.className +="col-2";
		var pSizePizza = document.createElement("p");
		pSizePizza.id = "panierSizePizza";
		pSizePizza.className += "col-10";
		//add size
		pSizePizza.innerHTML = document.getElementById(j + "size" + i).value;
		
		div2.appendChild(div2Before);
		div2.appendChild(pSizePizza);
		commande.appendChild(div2);


		var div3 = document.createElement("div");
		div3.className +="row";
		var div3Before = document.createElement("div");
		div3Before.className +="col-2";
		var pBasePizza = document.createElement("p");
		pBasePizza.id = "panierBasePizza";
		pBasePizza.className += "col-10";
		//add base
		pBasePizza.innerHTML = document.getElementById(j + "base" + i).value;
		
		div3.appendChild(div3Before);
		div3.appendChild(pBasePizza);
		commande.appendChild(div3);


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