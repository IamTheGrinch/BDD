function recherche() {
    var code_barre = document.getElementById('code_barre').value 
    var link = "https://world.openfoodfacts.org/api/v0/product/[ean].json" + code_barre + ".json"

    $.getJSON(link,
        function(data) {
            document.getElementById('status').innerHTML = "Status : " + data["status"]
            document.getElementById('brands_tags').innerHTML = "Nom de la marque : " + data["product"]["brands_tags"]
            document.getElementById('generic_name_fr').innerHTML = "Nom générique du produit : " + data["product"]["generic_name_fr"]
            document.getElementById('product_name_fr').innerHTML = "Nom du produit : " + data["product"]["product_name_fr"]
            document.getElementById('product_id').innerHTML = "Code-barres : " + data["product"]["id"]
            document.getElementById('product_img').src = data["product"]["image_url"]

            if (data["product"]["nutriscore_grade"] == 'a') document.getElementById('product_nutriscore').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Nutri-score-A.svg/2560px-Nutri-score-A.svg.png"
            else if (data["product"]["nutriscore_grade"] == 'b') document.getElementById('product_nutriscore').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Nutri-score-B.svg/2560px-Nutri-score-B.svg.png"
            else if (data["product"]["nutriscore_grade"] == 'c') document.getElementById('product_nutriscore').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Nutri-score-C.svg/2560px-Nutri-score-C.svg.png"
            else if (data["product"]["nutriscore_grade"] == 'd') document.getElementById('product_nutriscore').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Nutri-score-D.svg/2560px-Nutri-score-D.svg.png"
            else if (data["product"]["nutriscore_grade"] == 'e') document.getElementById('product_nutriscore').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Nutri-score-E.svg/1200px-Nutri-score-E.svg.png"
            else document.getElementById('product_nutriscore').src = "Nutriscore : " + (data["product"]["nutriscore_grade"])
        })
}
/* Je ne suis pas parvenu à faire fonctionner le bouton
var effacer = 1;

var  boutonsuppr =   document.getElementById("effacer").innerHTML(html);
liste.innerHTML += html  

document.getElementById("btn-suppr-" + produit.id).addEventListener("click", () => {
    let elem =  document.getElementById("effacer" + produit.id)
    liste.removeChild(elem)
})
*/
