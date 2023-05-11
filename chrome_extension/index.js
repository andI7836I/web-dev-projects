let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const delBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// localStorage.setItem("myLeads", "www.example.com")
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

inputEl.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    inputBtn.click();
  }
});

delBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
})

// function renderLeads(){
//     let listItems = ""
//     for (i in myLeads){
//         // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
//         listItems += `
//             <li>
//                 <a target='_blank' href='${myLeads[i]}'>
//                     ${myLeads[i]}
//                 </a>
//             </li>
//         `
//     }
//     ulEl.innerHTML = listItems 
//     }
function renderLeads(){
    let listItems = "";
    for (let i in myLeads){
        let url = myLeads[i];
        if (!isAbsoluteURL(url)) {
            url = "http://" + url;
        }
        listItems += `
            <li>
                <a target='_blank' href='${url}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}

function isAbsoluteURL(url) {
    const pattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return pattern.test(url);
}