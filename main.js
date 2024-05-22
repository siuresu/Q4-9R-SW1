function reset() {
	document.getElementById('usd').value = '';
	document.getElementById('euro').value = '';
	document.getElementById('pound').value = '';
	document.getElementById('cad').value = '';
	document.getElementById('rupee').value = '';
	document.getElementById('peso').value = '';
	document.getElementById('yen').value = '';
	document.getElementById('bitcoin').value = '';
}

function convertCurrency(currency) {
	var usd, euro, pound, cad, rupee, bitcoin, base;
		var currDict = {
			"usd" : 1.00,
			"euro" : 0.92284395,
			"pound" : 0.78579455,
			"cad" : 1.3677952,
			"rupee" : 83.273153,
			"peso" : 58.071355,
			"yen" : 156.53935,
			"bitcoin" : 0.0000143108
}

base = document.getElementById(currency).value;
	usd = base / currDict[currency] * currDict["usd"]
	euro = base / currDict[currency] * currDict["euro"];
	pound = base / currDict[currency] * currDict["pound"];
	cad = base / currDict[currency] * currDict["cad"];
	rupee = base / currDict[currency] * currDict["rupee"];
	peso = base / currDict[currency] * currDict["peso"];
	yen = base / currDict[currency] * currDict["yen"];
	bitcoin = base / currDict[currency] * currDict["bitcoin"];

		usd = usd.toFixed(2);
		euro = euro.toFixed(2);
		pound = pound.toFixed(2);
		cad = cad.toFixed(2);
		rupee = rupee.toFixed(2);
		peso = peso.toFixed(2);
		yen = yen.toFixed(2);
		bitcoin = bitcoin.toFixed(5);

if (event.keyCode === 13) {
	document.getElementById("usd").value = usd;
	document.getElementById("euro").value = euro;
	document.getElementById("pound").value = pound;
	document.getElementById("cad").value = cad;
	document.getElementById("rupee").value = rupee;
	document.getElementById("peso").value = peso;
	document.getElementById("yen").value = yen;
	document.getElementById("bitcoin").value = bitcoin;
}
}