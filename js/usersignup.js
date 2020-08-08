function showDetails(){
    var y = document.getElementsByTagName("input");
    var text = "Username: " + y[0].value +
                "\nFirst Name: " + y[1].value +
                "\nLast Name: " + y[2].value +
                "\nMobile Number: " + y[4].value +
                "\nEmail ID: " + y[5].value +
                "\nAddress: " + y[6].value +
                "\nCity: " + y[7].value +
                "\nState: " + y[8].value;
    alert(text);
}

