
const form = document.querySelector("#issueForm");
const tableBody = document.querySelector("#issuesTable tbody");

const filterType = document.querySelector("#filterType");
const filterStatus = document.querySelector("#filterStatus");

let issues = [];

form.addEventListener("submit", function(e){

e.preventDefault();

const deliveryId = document.querySelector("#deliveryId").value;
const customerName = document.querySelector("#customerName").value;
const issueType = document.querySelector("#issueType").value;
const notes = document.querySelector("#notes").value;

const priority = document.querySelector('input[name="priority"]:checked');

if(!priority){
alert("Please select priority");
return;
}

const issue = {
deliveryId,
customerName,
issueType,
priority: priority.value,
status:"Open"
};

issues.push(issue);

addRow(issue);

form.reset();

});


function addRow(issue){

const row = document.createElement("tr");

row.innerHTML = `
<td>${issue.deliveryId}</td>
<td>${issue.customerName}</td>
<td>${issue.issueType}</td>
<td>${issue.priority}</td>
<td class="status">${issue.status}</td>
<td>
<button class="resolve">Resolve</button>
<button class="delete">Delete</button>
</td>
`;

tableBody.appendChild(row);

}


tableBody.addEventListener("click",function(e){

const row = e.target.closest("tr");

if(e.target.classList.contains("resolve")){

row.querySelector(".status").textContent = "Resolved";
row.classList.add("resolved");
e.target.disabled = true;

}

if(e.target.classList.contains("delete")){

const confirmDelete = confirm("Delete this issue?");
if(confirmDelete){
row.remove();
}

}

});


filterType.addEventListener("change",filterRows);
filterStatus.addEventListener("change",filterRows);


function filterRows(){

const type = filterType.value;
const status = filterStatus.value;

const rows = tableBody.querySelectorAll("tr");

rows.forEach(row=>{

const rowType = row.children[2].textContent;
const rowStatus = row.children[4].textContent;

let show = true;

if(type !== "All" && rowType !== type){
show = false;
}

if(status !== "All" && rowStatus !== status){
show = false;
}

row.style.display = show ? "" : "none";

});

}
