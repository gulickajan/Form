function fnCalculateAge(){
    var userDateinput = document.getElementById("date").value;
    var birthDate = new Date(userDateinput);
    var age = document.getElementById("age").value;
    var difference = Date.now() - birthDate.getTime();
    var  ageDate = new Date(difference);
    var calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    var calAge = age / calculatedAge;
    if (calAge !== 1){
    document.getElementById("zlyAge").innerHTML =
        "Tvoj vek nie je " + age + ", ale " + calculatedAge + " podľa dátumu.";
    }else{
        document.getElementById("zlyAge").innerHTML = "";
    }
}

function zacPismeno1(){
    var meno = document.getElementById("fname").value;
    var velke = meno.charAt(0) !== meno.charAt(0).toUpperCase();
    if (velke){
        document.getElementById("zleM").innerHTML =
            "Meno sa musí začať veľkým písmenom";
    }else {
        document.getElementById("zleM").innerHTML = "";
    }
}

function zacPismeno2(){
    var meno = document.getElementById("lname").value;
    var velke = meno.charAt(0) !== meno.charAt(0).toUpperCase();
    if (velke){
        document.getElementById("zleP").innerHTML =
            "Priezvisko sa musí začať veľkým písmenom";
    } else {
    document.getElementById("zleP").innerHTML = "";
    }

}

function hiddenTextField(){
    var neprislo = document.getElementById("neprisloTo");
    if (!neprislo)
        document.getElementById("dalsie").style.display = "block";
    var prislo = document.getElementById("prisloTo");
    if (!prislo)
        document.getElementById("dalsie").style.display = "none";
}


