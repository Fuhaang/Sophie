var parameters = location.search.substring(1).split("&");
console.log(parameters);
console.log(parameters[0]);

var firstIndex0 = parameters[0].indexOf("=");
var lastIndex0 = parameters[0].length;
var ville = parameters[0].substring(firstIndex0 + 1, lastIndex0);

var firstIndex1 = parameters[1].indexOf("=");
var lastIndex1 = parameters[1].length;
var numRue = parameters[1].substring(firstIndex1 + 1, lastIndex1);

var firstIndex2 = parameters[2].indexOf("=");
var lastIndex2 = parameters[2].length;
var rue = parameters[2].substring(firstIndex2 + 1, lastIndex2);


var firstIndex3 = parameters[3].indexOf("=");
var lastIndex3 = parameters[3].length;
var scale = parameters[3].substring(firstIndex3 + 1, lastIndex3);


for (var i = 0; i < rue.length; i++) {
	if(rue[i] == '+'){
		rue = rue.replace("+", " ");
	}
}


console.log("!!numRue = " + numRue);
console.log("!!rue = " + rue);
console.log("!!ville = " + ville);


//Add data livraison
var livrable = document.getElementById("numRueRueVille");
livrable.innerHTML = numRue + " " + rue + " " + ville;

//Add Adresse to livraison
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

document.getElementById("lNbrue").value = numRue;
document.getElementById("lrue").value = rue;
document.getElementById("lville").value = ville;
document.getElementById("lscales").value = scale;