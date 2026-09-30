let prompt = require(`prompt-sync`)()

const candidats = [
    {
        cin: "AB123456",
        nom: "El Amrani",
        prenom: "Yassine",
        partiPolitique: "Parti Alpha",
        age: 35,
        electeurs: ["CD789012", "EF345678", "GH123456"]
    },
    {
        cin: "GH789012",
        nom: "Bennani",
        prenom: "Sara",
        partiPolitique: "Parti Beta",
        age: 42,
        electeurs: ["IJ901234", "KL567890"]
    },
    {
        cin: "KL345678",
        nom: "Alaoui",
        prenom: "Omar",
        partiPolitique: "Parti Gamma",
        age: 29,
        electeurs: ["T332083", "T223344", "AB987654", "CD456789"]
    },
    {
        cin: "MN901234",
        nom: "Fassi",
        prenom: "Salma",
        partiPolitique: "Parti Delta",
        age: 38,
        electeurs: ["OP567890", "QR123456", "ST789012"]
    },
    {
        cin: "UV567890",
        nom: "Tazi",
        prenom: "Hamza",
        partiPolitique: "Parti Alpha",
        age: 51,
        electeurs: ["WX345678"]
    },
    {
        cin: "AA112233",
        nom: "Bouzid",
        prenom: "Mehdi",
        partiPolitique: "Parti Beta",
        age: 33,
        electeurs: ["BC123456", "DE654321", "FG987654"]
    },
    {
        cin: "BB223344",
        nom: "Chakir",
        prenom: "Imane",
        partiPolitique: "Parti Gamma",
        age: 27,
        electeurs: ["HI111222", "JK333444"]
    },
    {
        cin: "CC334455",
        nom: "Naciri",
        prenom: "Ayoub",
        partiPolitique: "Parti Delta",
        age: 45,
        electeurs: ["LM555666", "NO777888", "PQ999000", "RS123123", "TU456456"]
    },
    {
        cin: "DD445566",
        nom: "Mansouri",
        prenom: "Nadia",
        partiPolitique: "Indépendant",
        age: 39,
        electeurs: ["VW222333"]
    },
    {
        cin: "EE556677",
        nom: "Berrada",
        prenom: "Anas",
        partiPolitique: "Parti Alpha",
        age: 31,
        electeurs: ["XY444555", "ZA666777"]
    },
    {
        cin: "FF667788",
        nom: "Tahiri",
        prenom: "Lina",
        partiPolitique: "Parti Beta",
        age: 28,
        electeurs: ["BC888999", "DE111333", "FG222444", "HI555666"]
    },
    {
        cin: "GG778899",
        nom: "Cherkaoui",
        prenom: "Rachid",
        partiPolitique: "Parti Gamma",
        age: 47,
        electeurs: ["JK777888"]
    },
    {
        cin: "HH889900",
        nom: "Idrissi",
        prenom: "Meryem",
        partiPolitique: "Parti Delta",
        age: 36,
        electeurs: ["LM111222", "NO333444", "PQ555666"]
    },
    {
        cin: "JJ990011",
        nom: "Kettani",
        prenom: "Reda",
        partiPolitique: "Indépendant",
        age: 52,
        electeurs: ["RS777888", "TU999000"]
    },
    {
        cin: "KK101112",
        nom: "Ouazzani",
        prenom: "Hajar",
        partiPolitique: "Parti Alpha",
        age: 30,
        electeurs: ["VW123456", "XY789012", "ZA345678"]
    },
    {
        cin: "LL121314",
        nom: "Filali",
        prenom: "Zakaria",
        partiPolitique: "Parti Beta",
        age: 41,
        electeurs: ["BC456789", "DE789123"]
    },
    {
        cin: "MM131415",
        nom: "Rami",
        prenom: "Khadija",
        partiPolitique: "Parti Gamma",
        age: 34,
        electeurs: ["FG321654", "HI987321", "JK654987", "LM321987"]
    },
    {
        cin: "NN151617",
        nom: "Belkadi",
        prenom: "Soufiane",
        partiPolitique: "Parti Delta",
        age: 49,
        electeurs: ["NO123789"]
    },
    {
        cin: "PP171819",
        nom: "El Mansouri",
        prenom: "Chaimae",
        partiPolitique: "Indépendant",
        age: 26,
        electeurs: ["PQ456123", "RS789456", "TU321654"]
    },
    {
        cin: "QQ192021",
        nom: "Slaoui",
        prenom: "Ilyas",
        partiPolitique: "Parti Alpha",
        age: 44,
        electeurs: ["VW987654", "XY654321", "ZA123987", "BC789321"]
    }
]

const couleurs = {
    reset: "\x1b[0m",
    rouge: "\x1b[31m",
    vert: "\x1b[32m",
    jaune: "\x1b[33m",
    bleu: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    gras: "\x1b[1m",
};

while (true) {
    console.log(colorer(`    =========================================================
    == Gestion des Élections et Listes Électorales au Maroc =
    =========================================================` , couleurs.bleu))

    console.log(colorer(`
         _____________________________________________
         |_N_]______________element__________________|
         [_1_]_Ajouter un nouveau candidat___________|
         [_2_]_Ajouter plusieurs candidats à la fois_|
         [_3_]_Afficher la liste des candidats_______|
         [_4_]_Voter pour un candidat________________|
         [_5_]Modifier les informations d'un candidat| 
         [_6_]_Supprimer un candidat_________________|
         [_7_]_Rechercher des candidats______________|
         [_8_]_Statistiques de l'élection____________|
         [_9_]_Exit__________________________________|
         `, couleurs.jaune))

    let ask = Number(prompt(colorer("your choice : ", couleurs.reset)))

    if (ask === 9) {
        console.log(colorer("IT WAS GOOD SEEING YOU ! ", couleurs.vert))
        break
    }

    switch (ask) {
        case 1:
            ajouter()
            break
        case 2:
            plusieurs()
            break
        case 3:
            afficher()
            break
        case 4:
            vote()
            break
        case 5:
            modifi()
            break
        case 6:
            sumprim()
            break
        case 7:
            serch()
            break
        case 8:
            Stati()
            break
        default:
            console.log(colorer("PLEASE SELECT A VALID OPTION !", couleurs.rouge))
            break
    }
}

function ajouter() {
    let ask2 = prompt(colorer("PLEASE ENTER YOUR CIN :", couleurs.cyan))
    let ask3 = prompt(colorer("PLEASE ENTER YOUR FIRST NAME :", couleurs.cyan))
    let ask4 = prompt(colorer("PLEASE ENTER YOUR LAST NAME  :", couleurs.cyan))
    let ask5 = prompt(colorer("PLEASE ENTER YOUR POLITIC ORIENTATION :", couleurs.cyan))

    if (ask5 === "" || ask5 === " ") {
        ask5 = "Indépendant"
    }

    let ask6 = Number(prompt(colorer("PLEASE ENTER YOUR AGE :", couleurs.cyan)))
    let s = false

    if (ask6 >= 18 && ask6 < 65) {

        for (let i = 0; i < candidats.length; i++) {
            if (ask2 === candidats[i].cin) {
                console.log(colorer("-OUPS...! THIS CANDIDAT ALREADY EXISTS", couleurs.rouge))
                s = true
                return
            }
        }

    } else if (ask6 <= 18 || ask6 > 65) {

        console.log(colorer("YOU NEED TO BE OLDER THAN 18 AND YOUNGER THAN 65", couleurs.rouge))
        s = true
    
    } else {
        console.log(colorer("PLEASE SELECT A VALID OPTION", couleurs.rouge))
        s = true
    }

    if (s === false) {

        let obje = {
            cin: ask2,
            nom: ask3,
            prenom: ask4,
            partiPolitique: ask5,
            age: ask6,
            electeurs: []
        }

        candidats.push(obje)

        console.log(colorer(`HELLO MR ${ask3}`, couleurs.vert))
    }
}
function plusieurs() {
    let ask8 = Number(prompt(colorer("HOW MANY CANDIDATS DO YOU WANT TO ADD ? : ", couleurs.cyan)))
    if (ask8 > 0) {

        for (let i = 0; i < ask8; i++) {
            ajouter()
        }
    } else if (ask8 <= 0) {

        console.log(colorer("THE VALUE CHOOSEN MUST BE GREATER THAN 0", couleurs.rouge))
    } else {
        console.log(colorer("PLEASE SELECT A VALID OPTION !", couleurs.rouge))
    }
}
function afficher() {
    console.log(colorer(`
   _____________________________________________________________________________________________________
   |[_1_]_afficher simpel______________________________________________________________________________|
   |[_2_]_Trier les candidats par nombre de votes (ordre décroissant pour voir les gagnants____________|
   |[_3_]_Filtrer et afficher uniquement les candidats d'un parti politique spécifique_________________|
        `, couleurs.jaune))

    let ra = Number(prompt(colorer("PLEASE SELECT AN OPTION : ", couleurs.cyan)))

    if (ra === 1) {

        for (let i = 0; i < candidats.length; i++) {

            console.log(colorer(`cin : ${candidats[i].cin}
            |FIRST NAME : ${candidats[i].nom}
            |LAST NAME : ${candidats[i].prenom}
            |POLITIC ORIENTATION : ${candidats[i].partiPolitique}
            |AGE : ${candidats[i].age}
            |NUMBER OF VOTES : ${candidats[i].electeurs.length}
            |ELECTEURS : ${candidats[i].electeurs}
            _________________________` , couleurs.gras))
        }
    } else if (ra === 2) {

        let listeTriee = [...candidats]

        for (let i = 0; i < listeTriee.length; i++) {

            for (let x = 0; x < listeTriee.length - 1 - i; x++) {

                if (listeTriee[x].electeurs.length < listeTriee[x + 1].electeurs.length) {

                    let s = listeTriee[x]
                    listeTriee[x] = listeTriee[x + 1]
                    listeTriee[x + 1] = s
                }
            }
        }

        console.log(colorer(`Candidats triés par nombre de votes :`, couleurs.vert))
        for (let i = 0; i < listeTriee.length; i++) {
            console.log(colorer(`                      ------number ${i + 1}° ------`, couleurs.vert))
            console.log(colorer(`cin : ${listeTriee[i].cin}
        |FIRST NAME : ${listeTriee[i].nom}
        |LAST NAME : ${listeTriee[i].prenom}
        |POLITIC ORIENTATION : ${listeTriee[i].partiPolitique}
        |AGE : ${listeTriee[i].age}
        |NUMBER OF VOTES : ${listeTriee[i].electeurs}
        |TOTAL : ${listeTriee[i].electeurs.length}
        _________________________________________`, couleurs.gras))
        }
    } else if (ra === 3) {
        let parti = prompt(colorer("WHATS YOUR POLITIC ORIENTATION : ", couleurs.cyan))
        let trouve = false

        for (let i = 0; i < candidats.length; i++) {

            if (parti.toLowerCase() === candidats[i].partiPolitique.toLowerCase()) {

                trouve = true

                console.log(colorer(`cin : ${candidats[i].cin}
            _____________________________________________________
            |FIRST NAME :          | ${candidats[i].nom}               
            |LAST NAME :       | ${candidats[i].prenom}            
            |POLITIC ORIENTATION :| ${candidats[i].partiPolitique}    
            |AGE :          | ${candidats[i].age}               
            |TOTAL :        | ${candidats[i].electeurs.length}  
            |_______________|___________________________________`, couleurs.gras))
            }
        }

        if (trouve === false) {
            console.log(colorer("OUPS.../ WE COULDNT FIND THIS POLITIC ORIENTATION", couleurs.rouge))
        }

    } else {

        console.log(colorer("-----------PLEASE SELECT A VALID OPTION------------- ", couleurs.rouge))
    }
}

function vote() {

    let clcin = prompt(colorer("PLEASE ENTER YOUR CIN : ", couleurs.cyan))

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].electeurs.includes(clcin)) {

            console.log(colorer("YOU HAVE ALREADY VOTED BEFORE YOU CANT VOTE AGAIN ", couleurs.rouge))
            return
        }
    }

    let cinCandidat = prompt(colorer("PLEASE ENTER CANDIDATS CIN : ", couleurs.cyan))

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].cin === cinCandidat) {

            candidats[i].electeurs.push(clcin)

            console.log(colorer("OPERATION DONE...", couleurs.vert))
            return
        }
    }

    console.log(colorer("SORRY WE CANT FIND THIS CANDIDAT", couleurs.rouge))
}

function modifi() {

    let saak = prompt(colorer("PLEASE ENTER YOUR CIN : ", couleurs.cyan))
    let d = false

    for (let i = 0; i < candidats.length; i++) {

        if (saak === candidats[i].cin) {

            d = true

            console.log(colorer(`1: Modifier le parti politique d'un candidat
2: Modifier l'âge d'un candidat. `, couleurs.jaune))

            let saak2 = Number(prompt(colorer("CHOOSE AN OPTION : ", couleurs.cyan)))

            if (saak2 === 1) {

                let sakk = prompt(colorer("TYPE IN THE NEW POLITIC ORIENTATION : ", couleurs.cyan))

                if (sakk === "") {
                    sakk = "Indépendant"
                }

                candidats[i].partiPolitique = sakk

                console.log(colorer(`ALRIHGT MR : ${candidats[i].nom} YOUR CHANGES ARE DONE ... `, couleurs.vert))

            } else if (saak2 === 2) {

                let saak3 = Number(prompt(colorer("NEW AGE : ", couleurs.cyan)))

                if (saak3 >= 18) {

                    candidats[i].age = saak3

                    console.log(colorer("AGE MODIFIED SUCCESFULLY", couleurs.vert))

                } else {

                    console.log(colorer("AGE MUST BE GREATER THAN 18", couleurs.rouge))
                }

            } else {

                console.log(colorer("-----------PLEASE SELECT A VALID OPTION------------- ", couleurs.rouge))
            }
        }
    }

    if (d === false) {
        console.log(colorer("OUPS WE WERENT ABLE TO FIND THIS USER", couleurs.rouge))
    }
}

function sumprim() {

    let sak = prompt(colorer("CIN : ", couleurs.cyan))

    for (let i = 0; i < candidats.length; i++) {

        if (sak === candidats[i].cin) {

            let akse = prompt(colorer("PLEASE SELECT  yes/no : ", couleurs.rouge))

            if (akse === "yes") {

                candidats.splice(i, 1)

                console.log(colorer("CANDIDAT DELETED SUCCESFULLY", couleurs.vert))
                return

            } else if (akse === "no") {

                console.log(colorer("YOUR WELCOME", couleurs.vert))
                return

            } else {

                console.log(colorer("PLEASE SELECT AN OPTION?  yes/no", couleurs.rouge))
                return
            }
        }
    }

    console.log(colorer("OUPS... CANT SEEM TO FIND THIS USER ", couleurs.rouge))
}

function serch() {

    let ask20 = prompt(colorer("NAME : ", couleurs.cyan))
    let r = false

    for (let i = 0; i < candidats.length; i++) {

        if (ask20.toLowerCase() === candidats[i].nom.toLowerCase()) {

            r = true

            console.log(colorer(`cin : ${candidats[i].cin}
            |nom : ${candidats[i].nom}
            |prenom : ${candidats[i].prenom}
            |partiPolitique : ${candidats[i].partiPolitique}
            |age : ${candidats[i].age}
            |elsectrous : ${candidats[i].electeurs}`, couleurs.gras))
        }
    }

    if (r === false) {
        console.log(colorer("SORRY CANT FIND THIS USER ", couleurs.rouge))
    }
}

function Stati() {

    console.log(colorer(`1: Afficher le nombre total de candidats. 
2 :Afficher le nombre total de votes exprimés dans toute l'élection
3: Afficher le Top 3 des candidats ayant le plus de votes. 
4: Afficher le nombre de candidats par parti politique`, couleurs.jaune))

    let choi = Number(prompt(colorer("PLEASE SELECT AN OPTION : ", couleurs.cyan)))

    if (choi === 1) {

        let k = 0

        for (let i = 0; i < candidats.length; i++) {
            k++
        }

        console.log(colorer(`THE TOTAL NUMBER OF CANDIDATS IS .: ${k}`, couleurs.vert))

    } else if (choi === 2) {

        let bb = 0

        for (let i = 0; i < candidats.length; i++) {
            bb += candidats[i].electeurs.length
        }

        console.log(colorer(`THE TOTAL NUMBER OF ELECTORS IS ${bb}`, couleurs.vert))

    } else if (choi === 3) {

        let listeTriee = [...candidats]

        for (let i = 0; i < listeTriee.length; i++) {
            for (let x = 0; x < listeTriee.length - 1 - i; x++) {
                if (listeTriee[x].electeurs.length < listeTriee[x + 1].electeurs.length) {
                    let s = listeTriee[x]
                    listeTriee[x] = listeTriee[x + 1]
                    listeTriee[x + 1] = s
                }
            }
        }
        let limite = 3
        if (listeTriee.length < 3) {
            limite = listeTriee.length
        }
        console.log(colorer(`Top 3 des candidats :`, couleurs.vert))
        for (let i = 0; i < limite; i++) {

            console.log(colorer(`cin : ${listeTriee[i].cin}
            |nom : ${listeTriee[i].nom}
            |prenom : ${listeTriee[i].prenom}
            |partiPolitique : ${listeTriee[i].partiPolitique}
            |age : ${listeTriee[i].age}
            |Total : ${listeTriee[i].electeurs.length}
            _________________________`, couleurs.gras))
        }
    } else if (choi === 4) {
        let partis = []
        for (let i = 0; i < candidats.length; i++) {
            let existe = false
            for (let x = 0; x < partis.length; x++) {
                if (partis[x] === candidats[i].partiPolitique) {
                    existe = true
                    break
                }
            }
            if (existe === false) {
                partis.push(candidats[i].partiPolitique)
            }
        }
        for (let i = 0; i < partis.length; i++) {
            let compteur = 0
            for (let x = 0; x < candidats.length; x++) {
                if (candidats[x].partiPolitique === partis[i]) {
                    compteur++
                }
            }
            console.log(colorer(`${partis[i]} : ${compteur} candidat(s)`, couleurs.vert))
        }
    } else {
        console.log(colorer("THATS IS NOT AN OPTION ", couleurs.rouge))
    }
}
function colorer(texte, code) {
    return code + texte + couleurs.reset
}













































