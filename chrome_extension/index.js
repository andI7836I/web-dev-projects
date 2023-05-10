let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let listItems = ""

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
})

for (i in myLeads){
    ulEl.innerHTML +=
    listItems += "<li>" + myLeads[i] + "</li>"
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}
ulEl.innerHTML = listItems