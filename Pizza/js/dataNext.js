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



var ville = Ville();
var numRue = NumRue();
var rue = Rue();
var scale = Scale();
SeeAddress(ville, numRue, rue);




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
navBar();


function nextPage(){
	document.getElementById("lNbrue").value = numRue;
	document.getElementById("lrue").value = rue;
	document.getElementById("lville").value = ville;
	document.getElementById("lscales").value = scale;
	
	if(document.getElementById("panierNbrPizza") != null){
		document.getElementById("panierNbrPizza").value = panierNbrPizza;
	}
}
nextPage();