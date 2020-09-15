// Creare un oggetto che descriva uno studente con le seguenti proprietà:
//  nome, cognome e età. 
//  Stampare a schermo attraverso il for in tutte le proprietà.


var object = {
    "nome" : "Pasquale",
    "cognome" : "De Luca",
    "eta" : 23,
};

for ( var key in object) {
    console.log(key + " " + object[key])
};


// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere 
// un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
console.log(" ");
console.log("Esericizio 2")

    //copio template studente
    var source =$("#template").html();
    var template = Handlebars.compile(source);

    //array object studenti
    var studenti = [
        studente1 = {   "nome" : "Pasquale",
                        "cognome" : "De Luca",
                        "eta" : 23,
                    },
        studente2 = {   "nome" : "Giovanni",
                        "cognome" : "De Luca",
                        "eta" : 23,
                    },
        studente3 = {   "nome" : "Marco",
                        "cognome" : "De Luca",
                        "eta" : 23,
                    },
        studente4 = {   "nome" : "Giacomo",
                        "cognome" : "De Luca",
                        "eta" : 23,
                    },
    ];
    
    
    //stampo in console nomi e copgnomi degli alunni
    for (var i=0; i<studenti.length;i++) {
        for(var key in studenti[i]) {
            if(key != "eta") {
                console.log(key + ":" + studenti[i][key])
            }
        }
    };
    
    //richiamo funzione per stampare in html lista studenti
    getList();

function getList() {
    //stampo in html lista studenti
    for (var i = 0; i < studenti.length; i++) {
        var context = { nome: studenti[i]["nome"], cognome: studenti[i]["cognome"] };
        var html = template(context);
        
        $("#students").append(html);
    }
}

function insertStudent() {
    //inserimento nuovo studente al click sul bottone
    var name = prompt("Inserisci nome nuovo studente");
    var lastName = prompt("Inserisci cognome nuovo studente");
    var age = parseInt(prompt("Inserisci eta nuovo studente"));

    var studente = {
        "nome" : name,
        "cognome" : lastName,
        "eta" : age,
    };

    studenti.push(studente);
    //aggiungo questo nuovo studente alla lista
    var context = { nome: studenti[i]["nome"], cognome: studenti[i]["cognome"] };
    var html = template(context);
        
    $("#students").append(html);
}