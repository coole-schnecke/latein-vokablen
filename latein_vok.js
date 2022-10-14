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
var auswahl = 0

var deutsch_latein_wert = 0
var latein_deutsch_wert = 0

var richtung = 0

function deutsch_latein(){
    if (deutsch_latein_wert == 0){
        deutsch_latein_wert = 1;
        latein_deutsch_wert = 0;
        frage = "deutsch"
        antwort = "latein"
        document.getElementById("button_deutsch-latein").style.color = "green";
        document.getElementById("button_latein-deutsch").style.color = "white";
        farbe_start_button();
        richtung = 1
    }else{
        deutsch_latein_wert = 0
        document.getElementById("button_deutsch-latein").style.color = "white";
        farbe_start_button();
    }
}

function latein_deutsch(){
    if(latein_deutsch_wert == 0){
        latein_deutsch_wert = 1;
        deutsch_latein_wert = 0;
        frage = "latein";
        antwort = "deutsch";
        document.getElementById("button_deutsch-latein").style.color = "white";
        document.getElementById("button_latein-deutsch").style.color = "green";
        farbe_start_button();
        richtung = 0
    }else{
        latein_deutsch_wert = 0;
        document.getElementById("button_latein-deutsch").style.color = "white";
        farbe_start_button();
    }
}

function neue_vok_anzeigen(){
    if (zu_bearbeiten.length >= 1){
        grammatik_wert = 0;
        uebersetzung_wert = 0;
        document.getElementById("button_grammatik").innerHTML = "Grammatik zeigen";
        document.getElementById("grammatik").style.display = "none";
        document.getElementById("button_uebersetzung").innerHTML = "Übersetzung zeigen";
        document.getElementById("uebersetzung").style.display = "none";
        var anzahl_übrige = zu_bearbeiten.length;
        document.getElementById("array_length").innerHTML= anzahl_übrige;
        auswahl = Math.floor(Math.random() * anzahl_übrige);
        if (richtung == 0){
            document.getElementById("vokabel").innerHTML = zu_bearbeiten[auswahl].latein;
            document.getElementById("uebersetzung").innerHTML = zu_bearbeiten[auswahl].deutsch;
            document.getElementById("grammatik").innerHTML = zu_bearbeiten[auswahl].grammatik;
        }else{
            document.getElementById("vokabel").innerHTML = zu_bearbeiten[auswahl].deutsch;
            document.getElementById("uebersetzung").innerHTML = zu_bearbeiten[auswahl].latein;
            document.getElementById("grammatik").innerHTML = zu_bearbeiten[auswahl].grammatik;
        }
        zu_bearbeiten.splice(auswahl,1);
    }else{
        document.getElementById("array_length").innerHTML = anzahl_übrige;
        vokabel_abfrag_modus_beenden();
        document.getElementById("button_start").style.color = "white";
    }
}

var grammatik_wert = 0

function grammatik_anzeigen(){
    if(grammatik_wert == 0){
        document.getElementById("grammatik").style.display = "block";
        document.getElementById("button_grammatik").innerHTML = "Grammatik verbergen";
        grammatik_wert = 1;
    }else{
        document.getElementById("grammatik").style.display = "none";
        document.getElementById("button_grammatik").innerHTML = "Grammatik zeigen";
        grammatik_wert = 0;
    }
}

uebersetzung_wert = 0

function uebersetzung_anzeigen(){
    if(uebersetzung_wert == 0){
        document.getElementById("uebersetzung").style.display = "block";
        document.getElementById("button_uebersetzung").innerHTML = "Übersetzung verbergen";
        uebersetzung_wert = 1;
    }else{
        document.getElementById("uebersetzung").style.display = "none";
        document.getElementById("button_uebersetzung").innerHTML = "Übersetzung zeigen";
        uebersetzung_wert = 0;
    }
}

function vokabel_abfrag_modus_starten(){
    variablen_für_buttons_zurücksetzen();
    neue_vok_anzeigen();
    lektionen_unsichtbar();
    document.getElementById("button_deutsch-latein").style.color = "white";
    document.getElementById("button_latein-deutsch").style.color = "white";
    document.getElementById("button_latein-deutsch").style.color = "white";
    document.getElementById("button_deutsch-latein").style.color = "white";
    document.getElementById("button_deutsch-latein").style.display = "none";
    document.getElementById("button_latein-deutsch").style.display = "none";
    document.getElementById("button_start").style.display = "none";
    document.getElementById("vokabel").style.display = "block";
    document.getElementById("button_uebersetzung").style.display = "block";
    document.getElementById("button_grammatik").style.display = "block";
    document.getElementById("button_naechste_vok").style.display = "block";
    farbe_auswahl_weg();
}

function farbe_auswahl_weg(){
    document.getElementById("button_l1").style.color = "white";
    document.getElementById("button_l2").style.color = "white";
}

function lektionen_unsichtbar(){
    document.getElementById("button_l1").style.display = "none";
    document.getElementById("button_l2").style.display = "none";
}

function lektionen_sichtbar(){
    document.getElementById("button_l1").style.display = "inline-block";
    document.getElementById("button_l2").style.display = "inline-block";
}

function vokabel_abfrag_modus_beenden(){
    lektionen_sichtbar();
    document.getElementById("button_deutsch-latein").style.display = "inline-block";
    document.getElementById("button_latein-deutsch").style.display = "inline-block";
    document.getElementById("button_start").style.display = "inline-block";
    document.getElementById("vokabel").style.display = "none";
    document.getElementById("uebersetzung").style.display = "none";
    document.getElementById("grammatik").style.display = "none";
    document.getElementById("button_uebersetzung").style.display = "none";
    document.getElementById("button_grammatik").style.display = "none";
    document.getElementById("button_naechste_vok").style.display = "none";
    document.getElementById("button_start").style.color = "white";
}

vok_l1_button_wert = 0
vok_l2_button_wert = 0

var buttonL1 = document.getElementById("button_l1");
var buttonL2 = document.getElementById("button_l2");

function farbe_start_button(){
    let summe_button_werte = vok_l1_button_wert + vok_l2_button_wert;
    if (summe_button_werte >= 1 && deutsch_latein_wert + latein_deutsch_wert == 1){
        document.getElementById("button_start").style.color = "green";
    }else{
        document.getElementById("button_start").style.color = "white";
    }
}

function farbe_button_l1(){
    if (vok_l1_button_wert == 0){
        buttonL1.style.color = "green";
        vok_l1_button_wert = 1;
        farbe_start_button();
    }else{
        buttonL1.style.color = "white";
        vok_l1_button_wert = 0;
        farbe_start_button();
    }
}

function farbe_button_l2(){
    if (vok_l2_button_wert == 0){
        buttonL2.style.color = "green";
        vok_l2_button_wert = 1;
        farbe_start_button();
    }else{
        buttonL2.style.color = "white";
        vok_l2_button_wert = 0;
        farbe_start_button();
    }
}

function variablen_für_buttons_zurücksetzen(){
    vok_l1_button_wert = 0;
    vok_l2_button_wert = 0;
    deutsch_latein_wert = 0;
    latein_deutsch_wert = 0;
}

function starte(){
    let summe_button_werte = vok_l1_button_wert + vok_l2_button_wert
    if (summe_button_werte >= 1 && deutsch_latein_wert + latein_deutsch_wert == 1){
        if (vok_l1_button_wert == 1){
            zu_bearbeiten = zu_bearbeiten.concat(l1);    
        }
        if (vok_l2_button_wert == 1){
            zu_bearbeiten = zu_bearbeiten.concat(l2);    
        }
        vokabel_abfrag_modus_starten();
    }
}
