

function printall(){
    var brandx = document.getElementById("brand").value;
    var genericx = document.getElementById("generic").value;
    var stockx = document.getElementById("stock").value;
    var pricex = document.getElementById("price").value;

        document.getElementById("printbrand").innerHTML = brandx;
        document.getElementById("printgeneric").innerHTML = genericx;
        document.getElementById("printstock").innerHTML = stockx;
        document.getElementById("printprice").innerHTML = pricex;
}
