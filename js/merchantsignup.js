function showDetails(){
    var y = document.getElementsByTagName("input");
    var user = "User Details\nUsername: " + y[0].value +
                "\nFirst Name: " + y[1].value +
                "\nLast Name: " + y[2].value +
                "\nMobile Number: " + y[4].value +
                "\nEmail ID: " + y[5].value;
    var shop = "\nShop Details\nShop name: " + y[6].value +
                "\nShop Category: " + y[7].value +
                "\nAddress: " + y[8].value +
                "\nCity: " + y[9].value +
                "\nState: " + y[10].value +
                "\nOpening Time: " + y[11].value +
                "\nClosing Time: " + y[12].value +
                "\nDefault Money: " + y[13].value;
    alert(user + "\n" + shop);
}

function showUpdate(){
    var y = document.getElementsByTagName("input");
    var len = y.length - 3;
    var text = "";
    for(var i = 0; i < len; i++){
        if(y[i].value != ""){
            text +=  y[i].name + ": " + y[i].value + "\n";
        }
    }
    alert(text);
}