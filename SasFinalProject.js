let prompt = require(`prompt-sync`)()
const candidats = [
  { cin: "AB123456", nom: "Boushaba", prenom: "Soufiane", partiPolitique: "Indépendant", age: 40,
    electeurs: [] },
  { cin: "CD234567", nom: "El Amrani", prenom: "Fatima Zahra", partiPolitique: "PJD", age: 35,
    electeurs: ["AB123456", "GH456789", "KL678901"] },
  { cin: "EF345678", nom: "Chraibi", prenom: "Younes", partiPolitique: "RNI", age: 45,
    electeurs: [] },
  { cin: "GH456789", nom: "Bennani", prenom: "Salma", partiPolitique: "PAM", age: 29,
    electeurs: ["IJ567890"] },
  { cin: "IJ567890", nom: "Ouahbi", prenom: "Karim", partiPolitique: "Istiqlal", age: 52,
    electeurs: [] },
  { cin: "KL678901", nom: "Ziani", prenom: "Nadia", partiPolitique: "Indépendant", age: 33,
    electeurs: [] },
  { cin: "MN789012", nom: "Tazi", prenom: "Hamza", partiPolitique: "USFP", age: 60,
    electeurs: ["QR901234"] },
  { cin: "OP890123", nom: "Idrissi", prenom: "Meryem", partiPolitique: "PJD", age: 27,
    electeurs: [] },
  { cin: "QR901234", nom: "Berrada", prenom: "Omar", partiPolitique: "RNI", age: 38,
    electeurs: ["CD234567", "EF345678", "MN789012"] },
  { cin: "ST012345", nom: "Fassi", prenom: "Khadija", partiPolitique: "PAM", age: 31,
    electeurs: [] },
];
while (true) {
    console.log(`============================================================
== Gestion des Élections et Listes Électorales au Maroc ===
============================================================`)
    console.log(`         1. Ajouter un nouveau candidat
         2. Ajouter plusieurs candidats à la fois
         3. Afficher la liste des candidats
         4. Voter pour un candidat 
         5. Modifier les informations d'un candidat
         6. Supprimer un candidat
         7. Rechercher des candidats
         8. Statistiques de l'élection
         9. Exit`)
    let ask = Number(prompt("your choice : "))
    if (ask === 9) {
        console.log("good by ")
        break
    } else if (ask === 1) {
        console.clear()
        ajouter()
    } else if (ask === 2) {
        console.clear()
        plusieurs()
    } else if (ask === 3) {
        console.clear()
        afficher()
    } else if (ask === 4) {
        console.clear()
        vote()
    } else if (ask === 5) {
        console.clear()
        modifi()
    } else if (ask == 6) {
        sumprim()
    } else if (ask === 7) {
        serch()
    } else if (ask === 8) {
        console.clear()
        Stati()
    } else {
        console.log("that is not option")
    }
}
function ajouter() {
    let ask2 = prompt("your cin :")
    let ask3 = prompt("le nom :")
    let ask4 = prompt("le prenom  :")
    let ask5 = prompt("Parti politique :")
    let ask6 = Number(prompt("your Age :"))
    let s = false
    if (ask6 > 18) {
        for (let i = 0; i < candidats.length; i++) {
            if (ask2 === candidats[i].cin) {
                console.log("you cant creat new cant you have ol ready")
                s = true
                return
            }
        }

        
    } else {
        console.log("you not -18")
    } if (s === false) {
        let obje = {
            cin: ask2,
            nom: ask3,
            prenom: ask4,
            partiPolitique: ask5,
            age: ask6,
            electeurs: []
        }
        candidats.push(obje)
        console.log("evri think is good wlcome ")
    }

}

function plusieurs() {
    let ask8 = Number(prompt("how much candidats : "))
    if (ask8 > 0) {
        for (let i = 0; i < ask8; i++) {
            ajouter()
        }
    } else {
        console.log("you need mor 0")
    }

}
function afficher() {
    console.log(`1.afficher simpel
2.Trier les candidats par nombre de votes (ordre décroissant pour voir les gagnants)
3.Filtrer et afficher uniquement les candidats d'un parti politique spécifique. `)
    let ra = Number(prompt("your choice : "))
    if (ra === 1) {
        for (let i = 0; i < candidats.length; i++) {
            console.log(`cin : ${candidats[i].cin}
            |nom : ${candidats[i].nom}
            |prenom : ${candidats[i].prenom}
            |partiPolitique : ${candidats[i].partiPolitique}
            |age : ${candidats[i].age}
            _________`)
        }
    } else if (ra === 2) {

        for (let i = 0; i < candidats.length; i++) {
            for (let x = i + 1; x < candidats.length; x++) {
                if (candidats[i].electeurs.length < candidats[x].electeurs.length) {
                    let s = candidats[i]
                    candidats[i] = candidats[x]
                    candidats[x] = s

                }
            }
            console.log(`cin : ${candidats[i].cin}
            |nom : ${candidats[i].nom}
            |prenom : ${candidats[i].prenom}
            |partiPolitique : ${candidats[i].partiPolitique}
            |age : ${candidats[i].age}
            |le nombre de candidats  : ${candidats[i].electeurs}
            |Total : ${candidats[i].electeurs.length}
            _________`)
        }

    }

    else if (ra === 3) {
        serch()
    } else {
        console.log("-----------that is not option------------- ")
    }
}

function vote() {
    let clcin = prompt("What's your CIN : ")
    let f = false
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].electeurs.includes(clcin)) {
            console.log("you deja voter ")
            return
        }
    }
    let cinCandidat = prompt("CIN du candidat : ")
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cinCandidat) {
            f = true
            candidats[i].electeurs.push(clcin)
            console.log("ok evri think good")
            return
        }
    }
    if (f === false) {
        console.log("we dont find thats candidats")
    }

}
function modifi() {
    let saak = prompt("what the cin : ")
    let d = false
    for (let i = 0; i < candidats.length; i++) {
        if (saak === candidats[i].cin) {
            d = true
            console.log(`1: Modifier le parti politique d'un candidat
2: Modifier l'âge d'un candidat. `)
            let saak2 = Number(prompt("your choix : "))
            if (saak2 === 1) {
                let l = true
                let sakk = prompt("the new politique : ")
                for (let j = 0; j < candidats.length; j++) {
                    if (candidats[j].partiPolitique === sakk) {
                        l = false
                        console.log("that partiPolitique ol redy used")
                    }
                }
                if (l === true) {
                    candidats[i].partiPolitique = sakk
                    console.log(`ok MR : ${candidats[i].nom} evri thinck is good `)
                }
            } else if (saak2 === 2) {
                let saak3 = Number(prompt("your new age : "))
                if (saak3 > 0) {
                    candidats[i].age = saak3
                } else {
                    console.log("you cant be -18")
                }
            } else {
                console.log("-----------that is not option------------- ")
            }
        }
    }
    if (d === false) {
        console.log("we dont find thats user")
    }
}
function sumprim() {
    let sak = prompt("the cin : ")
    for (let i = 0; i < candidats.length; i++) {
        if (sak === candidats[i].cin) {
            let akse = prompt("are you chour yes/no : ")
            if (akse === "yes") {
                let soso = candidats[i]
                let varu = candidats.indexOf(soso)
                candidats.splice(varu, 1)
            } else if (aske === " no") {
                console.loc("ok bienvenu")
            } else {
                console.log("that is not option just yes/no")
            }
        }
    }
}

function serch() {
    let ask20 = prompt("naim : ")
    let ask21 = prompt("prenom : ")
    let r = false
    for (let i = 0; i < candidats.length; i++) {
        if (ask20 === candidats[i].nom && ask21 === candidats[i].prenom) {
            s = true
            console.log(`cin : ${candidats[i].cin}
            |nom : ${candidats[i].nom}
            |prenom : ${candidats[i].prenom}
            |partiPolitique : ${candidats[i].partiPolitique}
            |age : ${candidats[i].age}
            |elsectrous : ${candidats[i].electeurs}`)
        }
    }
    if (r === false) {
        console.log("we dont find that user")
    }
}
function Stati() {
    console.log(`1: Afficher le nombre total de candidats. 
2 :Afficher le nombre total de votes exprimés dans toute l'élection
3: Afficher le Top 3 des candidats ayant le plus de votes. 
4: Afficher le nombre de candidats par parti politique`)
    let bb = 0
    let choi = Number(prompt("your choice : "))
    if (choi === 1) {
        let k = 0
        for (let i = 0; i < candidats.length; i++) {
            k++
        }
        console.log(`le total de candidats.: ${k}`)
    } else if (choi === 2) {
        for (let i = 0; i < candidats.length; i++) {
            for (let s = 0; s < candidats[i].electeurs.length; s++) {
                bb++
                console.log(candidats[i].electeurs)
            }
        }
        console.log(`total electeurs ${bb}`)
    } else if (choi === 3) {
        for (let i = 0; i < 3; i++) {
            for (let x = i + 1; x < candidats.length; x++) {
                if (candidats[i].electeurs.length < candidats[x].electeurs.length) {
                    let s = candidats[i]
                    candidats[i] = candidats[x]
                    candidats[x] = s

                }
            }
            console.log(`cin : ${candidats[i].cin}
            |nom : ${candidats[i].nom}
            |prenom : ${candidats[i].prenom}
            |partiPolitique : ${candidats[i].partiPolitique}
            |age : ${candidats[i].age}
            |le nombre de candidats  : ${candidats[i].electeurs}
            |Total : ${candidats[i].electeurs.length}
            _________`)
        }
    } else if (choi === 4) {
        for (let i = 0; i < candidats.length; i++) {
            console.log(`naim : ${candidats[i].nom}
prenom : ${candidats[i].prenom}
le nombre de candidats  : ${candidats[i].electeurs} 
Total : ${candidats[i].electeurs.length}
 _____________________________`)
        }
    }
    else {
        console.log("thats is not option ")
    }
}
