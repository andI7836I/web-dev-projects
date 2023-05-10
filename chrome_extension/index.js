let myLeads = ["a;slkdfja;lsdkfja;slkd", "s;adlfkjas;dl"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
})

for (i in myLeads){
    ulEl.textContent = myLeads[i]
}