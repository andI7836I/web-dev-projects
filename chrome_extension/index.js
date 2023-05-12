let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const delBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// localStorage.setItem("myLeads", "www.example.com")
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    render(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

inputEl.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    inputBtn.click();
  }
});

delBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
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
function render(leads){
    let listItems = "";
    for (let i in leads){
        let url = leads[i];
        if (!isAbsoluteURL(url)) {
            url = "http://" + url;
        }
        listItems += `
            <li>
                <a target='_blank' href='${url}'>
                    ${leads[i]}
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