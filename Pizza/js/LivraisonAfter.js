function dynamicNextPage(){
	var totalPrice = document.getElementById("panierTotalPrice").innerHTML;
	console.log("Paiement.html"+ window.location.search + "&" + totalPrice);
	window.location.href = "Paiement.html"+ window.location.search + "&" + totalPrice;
}

function dynamicPreviousPage(){
	window.location.href = "Boisson.html" + window.location.search;
}