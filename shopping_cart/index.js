import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-6c11d-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")
addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(shoppingListInDB, inputValue)
    clearInput()
})

onValue(shoppingListInDB, function(snapshot){
    let itemsArray = Object.values(snapshot.val())
    clearShoppinglistEl()
    for (let i in itemsArray){
        let itemArray = itemsArray[i]
        appendItemTo(itemArray)
    }
})

function clearInput() {
    inputFieldEl.value = ""
}

function appendItemTo(itemValue){
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}
function clearShoppinglistEl(){
    shoppingListEl.innerHTML = ""
}