const zbozi = ["Bagr -> 5,- Kč", "Traktor -> 3,- Kč", "Kombajn -> 4,- Kč", "Kultivátor -> 1,- Kč", "Vozík -> 2,- Kč"];
const kosik = [];
const kosik_section = document.getElementById("kosik");
const zbozi_section = document.getElementById("zbozi");
const cena = document.getElementById("cena");
let cena_value = 0
const input = document.getElementById("input");

function Vypis_zbozi(array, vystup){
    document.getElementById(vystup).innerHTML = "";
    for(let i=0;i<array.length;i++){
        document.getElementById(vystup).innerHTML += i+1 + ". " + array[i] + "<br>";
        console.log("Přidáno pole")
    }
}


function Add(){
    if(input.value == "Bagr"){
        kosik_section.innerHTML += zbozi[0] + "<br>";
        kosik.push(zbozi[0])
        cena_value = cena_value + 5;
        cena.innerHTML = "Celková cena je: " + cena_value  + ",- Kč";
    }

    else if((input.value == "Traktor") || (input.value == "1")){
        kosik_section.innerHTML += zbozi[1] + "<br>";
        kosik.push(zbozi[1])
        cena_value = cena_value + 3;
        cena.innerHTML = "Celková cena je: " + cena_value  + ",- Kč";
    }
    else if((input.value == "Kombajn") || (input.value == "1")){
        kosik_section.innerHTML += zbozi[2] + "<br>";
        kosik.push(zbozi[2])
        cena_value = cena_value + 4;
        cena.innerHTML = "Celková cena je: " + cena_value  + ",- Kč";
    }
    else if((input.value == "Kultivátor") || (input.value == "1")){
        kosik_section.innerHTML += zbozi[3] + "<br>";
        kosik.push(zbozi[3])
        cena_value = cena_value + 1;
        cena.innerHTML = "Celková cena je: " + cena_value  + ",- Kč";
    }
    else if((input.value == "Vozík") || (input.value == "1")){
        kosik_section.innerHTML += zbozi[4] + "<br>";
        kosik.push(zbozi[4])
        cena_value = cena_value + 2;
        cena.innerHTML = "Celková cena je: " + cena_value  + ",- Kč";
    }
    else{
        console.log("Neplatné zboží.")
    }
}

function Clear(){
    document.getElementById("kosik").innerHTML = "";
    cena_value = 0;
    cena.innerHTML = "Celková cena: " + cena_value + ",- Kč";
}

Vypis_zbozi(zbozi, "zbozi");