let boxItem = document.querySelector('#boxes'); 
let nameInput = document.querySelector('#name-input');
let dateInput = document.querySelector('#date-input');
let currencyInput = document.querySelector('#currency-input');
let button = document.querySelector('.btn');
let tbody = document.querySelector('#expense-table');


button.addEventListener('click', addBoxItem);
let tdNumber = 1; 
function addBoxItem() {

    let tr = document.createElement('tr');

    let th = document.createElement('th');
    let thText =document.createTextNode(tdNumber);
    tdNumber = tdNumber + 1; 
    th.appendChild(thText);
    th.setAttribute("id", tdNumber);
    tr.appendChild(th);

    let td1 = document.createElement('td');
    td1.innerText = nameInput.value;
    nameInput.value = ""; 
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerText = dateInput.value;
    dateInput.value = "";
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerText = currencyInput.value;
    currencyInput.value = ""; 
    tr.appendChild(td3);
    tbody.appendChild(tr);

    let btnSecond = document.createElement('button');
    btnSecond.className = "table-button";
    let textBtn = document.createTextNode('X');
    btnSecond.appendChild(textBtn);
    td3.appendChild(btnSecond);

    btnSecond.addEventListener('click', removeBoxItem)

    function removeBoxItem() {
        tr.remove()
    }

   }