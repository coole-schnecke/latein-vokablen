class vokabel {
    constructor(latein, deutsch, grammatik, wortart) {
        this.deutsch = deutsch;
        this.latein = latein;
        this.grammatik = grammatik;
        this.wortart = wortart;
    }
}

var l1w1 = new vokabel('catella', 'Hündchen', 'catellae f.', 'Substantiv');
var l1w2 = new vokabel('catella2', 'Hündchen2', 'catellae f.2', 'Substantiv2');
var l1w3 = new vokabel('catella3', 'Hündchen3', 'catellae f.3', 'Substantiv3');
var l1w4 = new vokabel('catella4', 'Hündchen4', 'catellae f.4', 'Substantiv4');
var l1w5 = new vokabel('catella5', 'Hündchen5', 'catellae f.5', 'Substantiv5');
var l1w6 = new vokabel('catella6', 'Hündchen6', 'catellae f.6', 'Substantiv6');
var l1w7 = new vokabel('catella7', 'Hündchen7', 'catellae f.7', 'Substantiv7');
var l1w8 = new vokabel('catella8', 'Hündchen8', 'catellae f.8', 'Substantiv8');
var l1w9 = new vokabel('catella9', 'Hündchen9', 'catellae f.9', 'Substantiv9');

var l1 = [l1w1, l1w2, l1w3, l1w4]
var l2 = [l1w5, l1w6, l1w7, l1w8, l1w9]
var zu_bearbeiten = []

function neue_vok_anzeigen(){
    if (zu_bearbeiten.length >= 1){
        var anzahl_übrige = zu_bearbeiten.length;
        document.getElementById("array_length").innerHTML= anzahl_übrige;
        var auswahl = Math.floor(Math.random() * anzahl_übrige);
        document.getElementById("vokabel").innerHTML = zu_bearbeiten[auswahl].deutsch;
        zu_bearbeiten.splice(auswahl,1);
    }else{
        document.getElementById("array_length").innerHTML = anzahl_übrige;
        document.getElementById("vokabel").innerHTML = "fertig";
    }
}

vok_l1_button_wert = 0
vok_l2_button_wert = 0

var buttonL1 = document.getElementById("button_l1");
var buttonL2 = document.getElementById("button_l2");

function vokl1_in_array(){
    if (vok_l1_button_wert == 0){
        buttonL1.style.color = "green";
        vok_l1_button_wert = 1;
    }else{
        buttonL1.style.color = "white";
        vok_l1_button_wert = 0;
    }
}

function vokl2_in_array(){
    if (vok_l2_button_wert == 0){
        buttonL2.style.color = "green";
        vok_l2_button_wert = 1;
    }else{
        buttonL2.style.color = "white";
        vok_l2_button_wert = 0;
    }
}

function variable_auf_eins(){
    vok_l1_button_wert = 0;
    buttonL1.style.color = "white";
    vok_l2_button_wert = 0;
    buttonL2.style.color = "white";
}

function starte(){
    if (vok_l1_button_wert == 1){
        zu_bearbeiten = zu_bearbeiten.concat(l1);    
    }
    if (vok_l2_button_wert == 1){
        zu_bearbeiten = zu_bearbeiten.concat(l2);    
    }
    variable_auf_eins();
}