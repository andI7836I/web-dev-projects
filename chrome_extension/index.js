let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

inputEl.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    inputBtn.click();
  }
});

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