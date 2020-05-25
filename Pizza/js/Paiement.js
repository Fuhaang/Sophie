function Price(){
	var parameters = location.search.substring(1).split("&");
	var price = parameters[parameters.length - 1];
	console.log(price);

	for(var i = 0; i < price.length; i++){
		if(price[i] == "%"){
			price = price.replace("%E2%82%AC", "€");
		}
	}
	var totalPrice = document.getElementById("validateAndBuy");
	totalPrice.innerHTML = "VALIDER ET PAYER " + price;
}
Price();