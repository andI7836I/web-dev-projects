import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
    databaseURL: ""
}
const addBtn = document.getElementById("add-button")
const inputEl = document.getElementById("input-field")
addBtn.addEventListener("click", function(){
    let inputValue = inputEl.value
    console.log(inputValue)
})