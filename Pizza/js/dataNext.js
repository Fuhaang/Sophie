var parameters = location.search.substring(1).split("&");

function Ville(){
	var firstIndex0 = parameters[0].indexOf("=");
	var lastIndex0 = parameters[0].length;

	return parameters[0].substring(firstIndex0 + 1, lastIndex0);
}
function NumRue(){
	var firstIndex1 = parameters[1].indexOf("=");
	var lastIndex1 = parameters[1].length;
	return parameters[1].substring(firstIndex1 + 1, lastIndex1);
}
function Rue(){
	var firstIndex2 = parameters[2].indexOf("=");
	var lastIndex2 = parameters[2].length;
	return parameters[2].substring(firstIndex2 + 1, lastIndex2);
}
function Scale(){
	var firstIndex3 = parameters[3].indexOf("=");
	var lastIndex3 = parameters[3].length;
	return parameters[3].substring(firstIndex3 + 1, lastIndex3);
}
function AddItem(item){
	item[0] = item[0].split("=");
	var commande = document.getElementById("PanierItems");

	var thisItem = document.createElement("div");
	thisItem.setAttribute("id", item[0]);

	var div1 = document.createElement("div");
	div1.className += "row";

	var pNbrPizza = document.createElement("p");
	pNbrPizza.className +="col-2";

	//add quantity
	var quantitee = item[1][0];
	pNbrPizza.innerHTML = quantitee;

	//add name
	var pNamePizza = document.createElement("p");
	pNamePizza.className += "col-7 panierNamePizza";
	for(var i = 0; i < item[1][1].length; i++){
		if(item[1][1][i] == "%"){
			item[1][1] = item[1][1].replace("%20", " ");
			item[1][1] = item[1][1].replace("%27", "'");
			item[1][1] = item[1][1].replace("%C3%88", "È");
			item[1][1] = item[1][1].replace("%C3%8A", "Ê");
		}
	}
	pNamePizza.innerHTML = item[1][1];

	//add price
	var pPricePizza = document.createElement("p");
	pPricePizza.innerHTML = item[1][2] + "€";

	//Add all on div1
	div1.appendChild(pNbrPizza);
	div1.appendChild(pNamePizza);
	div1.appendChild(pPricePizza);
	thisItem.appendChild(div1);
	//commande.appendChild(div1);

	//more info size
	var div2 = document.createElement("div");
	div2.className +="row";
	var div2Before = document.createElement("div");
	div2Before.className +="col-2";
	var pSizePizza = document.createElement("p");
	pSizePizza.className += "col-10 panierSizePizza";

	//add size
	pSizePizza.innerHTML = item[1][3];

	//Add all on div2
	div2.appendChild(div2Before);
	div2.appendChild(pSizePizza);
	thisItem.appendChild(div2);
	//commande.appendChild(div2);

	if(item[1].length > 4){
		//more info base
		var div3 = document.createElement("div");
		div3.className +="row";
		var div3Before = document.createElement("div");
		div3Before.className +="col-2";
		var pBasePizza = document.createElement("p");
		pBasePizza.className += "col-10 panierBasePizza";
		//add base
		pBasePizza.innerHTML = item[1][4];

		div3.appendChild(div3Before);
		div3.appendChild(pBasePizza);
		thisItem.appendChild(div3);
		//commande.appendChild(div3);
	}

	commande.appendChild(thisItem);
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
function SeeItem(){
	var i = 4;
	var panier = document.getElementById("PanierItems");
	while(parameters[i]){
		var item = parameters[i].split("=");
		console.log("this item ----------------------------> " + item);

		item[1] = item[1].split("|");
		console.log("this id item --> " + item[0]);
		console.log("this quantity item --> " + item[1][0]);
		console.log("this name item --> " + item[1][1]);
		console.log("this price item --> " + item[1][2]);
		console.log("this size item --> " + item[1][3]);
		console.log("this base item --> " + item[1][4]);
		console.log("________________\n\n");

		AddItem(item);
		i++;
	}
}
function SeeAddress(ville, numRue, rue){
	for (var i = 0; i < rue.length; i++) {
		if(rue[i] == '+'){
			rue = rue.replace("+", " ");
		}
		if(rue[i] == '%'){
			rue = rue.replace("%2B", " ");
			rue = rue.replace("%252B", " ");
			rue = rue.replace("%25252B", " ");
		}
	}
	//Add data livraison
	var livrable = document.getElementById("numRueRueVille");
	livrable.innerHTML = numRue + " " + rue + " " + ville;
}
/* Use that when navBar is used*/
function navBar(){
	if(document.getElementById("pNbrue") != null){
		document.getElementById("pNbrue").value = numRue;
		document.getElementById("prue").value = rue;
		document.getElementById("pville").value = ville;
		document.getElementById("pscales").value = scale;

		document.getElementById("tNbrue").value = numRue;
		document.getElementById("true").value = rue;
		document.getElementById("tville").value = ville;
		document.getElementById("tscales").value = scale;

		document.getElementById("bNbrue").value = numRue;
		document.getElementById("brue").value = rue;
		document.getElementById("bville").value = ville;
		document.getElementById("bscales").value = scale;
	}
}
function nextPage(){
	/*
	document.getElementById("lNbrue").value = numRue;
	document.getElementById("lrue").value = rue;
	document.getElementById("lville").value = ville;
	document.getElementById("lscales").value = scale;*/
	
	if(document.getElementById("panierNbrPizza") != null){
		document.getElementById("panierNbrPizza").value = panierNbrPizza;
	}
}

var ville = Ville();
var numRue = NumRue();
var rue = Rue();
var scale = Scale();
SeeAddress(ville, numRue, rue);
SeeItem();

navBar();

nextPage();