let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0

function increment(){
    count++
    countEl.innerText = count
}
// DOM = document object model (how u use js to modify a website)
function save(){
    // document.getElementById("save-el").innerText += ' ' + count + ' - ' 
    document.getElementById("save-el").textContent += count + ' - '
    console.log(count)
    document.getElementById("count-el").textContent = 0
    count = 0
}