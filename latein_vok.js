class vokabel {
    constructor(latein, deutsch, grammatik) {
        this.deutsch = deutsch;
        this.latein = latein;
        this.grammatik = grammatik;
    }
}

var fabeln1_1w1 = new vokabel('poenas dare', 'bestraft werden', ' ');
var fabeln1_1w2 = new vokabel('residere', 'sitzen', 'resideo, resedi, resessum');
var fabeln1_1w3 = new vokabel('abor', 'Baum', 'aboris f.');
var fabeln1_1w4 = new vokabel('invidere', 'invideo, invidi, invisum', 'beneiden');
var fabeln1_1w5 = new vokabel('incipere', 'incipio, coepi, inceptum', 'anfangen');
var fabeln1_1w6 = new vokabel('loqui', 'sprechen', 'loqui, loquor, locutus sum');
var fabeln1_1w7 = new vokabel('foret', 'entspricht "esset"', ' ');
var fabeln1_1w8 = new vokabel('emittere', 'verlieren', 'emitto, emisi, emissum');
var fabeln1_1w9 = new vokabel('dolosus', 'listig', '-a, -um');
var fabeln1_1w10 = new vokabel ('avidus', 'gierig', '-a, -um');
var fabeln1_1w11 = new vokabel ('vulpes', 'Fuchs', 'vulpis f.');
var fabeln1_1w12 = new vokabel ('corvus', 'Rabe', 'corvi m.');


var l1 = [fabeln1_1w1, fabeln1_1w2, fabeln1_1w3, fabeln1_1w4, fabeln1_1w5, fabeln1_1w6, fabeln1_1w7, fabeln1_1w8, fabeln1_1w9, fabeln1_1w10, fabeln1_1w11, fabeln1_1w12]
var l2 = []
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
    }else{
        deutsch_latein_wert = 0
        document.getElementById("button_deutsch-latein").style.color = "white";
        farbe_start_button();
    }
    if (richtung == 0){
        richtung = 1;
        
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
    }else{
        latein_deutsch_wert = 0;
        document.getElementById("button_latein-deutsch").style.color = "white";
        farbe_start_button();
    }
    if (richtung == 0){
        richtung = 0;
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
