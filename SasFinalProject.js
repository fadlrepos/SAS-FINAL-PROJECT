let prompt = require(`prompt-sync`)()
const candidats = []
while (true) {
    console.log(`*************************************************************
** Gestion des Élections et Listes Électorales au Maroc **
*************************************************************`)
    console.log(`         1. Ajouter un nouveau candidat
         2. Ajouter plusieurs candidats à la fois
         3. Afficher la liste des candidats
         4. Voter pour un candidat 
         5. Modifier les informations d'un candidat
         6. Supprimer un candidat
         7. Rechercher des candidats
         8. Statistiques de l'élection
         9. Exit`)
    let ask = Number(prompt("PLEASE CHOOSE A NUMBER (1-9) : "))
    if (ask === 9) {
        console.log("IT WAS GOOD SEEING YOU...!")
        break
    } else if (ask === 1) {
        ajouter()
    } else if (ask === 2) {
        plusieurs()
    } else if (ask === 3) {
        afficher()
    } else if (ask === 4) {

    } else if (ask === 5) {

    } else if (ask == 6) {

    } else if (ask === 7) {

    } else if (ask === 8) {

    } else {
        console.log("Please Select a valid option !")
    }
}
function ajouter() {
    let ask2 = prompt("ENTER YOUR CIN :")
    let ask3 = prompt("ENTER YOUR FIRST NAME :")
    let ask4 = prompt("ENTER YOUR LAST NAME  :")
    let ask5 = prompt("ENTER YOUR POLITICAL ORIENTATION :")
    let ask6 = Number(prompt("ENTER YOUR AGE  :"))
    let object = {
        cin: ask2,
        nom: ask3,
        prenom: ask4,
        parti: ask5,
        age : ask6,
        electeurs: []
    }
    candidats.push(object)
}
function plusieurs() {
    let ask8 = Number(prompt("HOW MUCH CANDIDATS D U WANT TO ADD ? : "))
    for (let i = 0; i < ask8; i++) {
        ajouter()
    }
}
function afficher() {
    for (let i = 0; i < candidats.length ; i++){
        console.log(`cin : ${candidats[i].cin}
            nom : ${candidats[i].nom}
            prenom : ${candidats[i].prenom}
            partiPolitique : ${candidats[i].parti}
            age : ${candidats[i].age}
            ______________________`)
            
    }
}