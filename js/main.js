function getAndUpdate() {
    console.log("Updating List...");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = [];
        itemsJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    }
    else {
        itemsJsonArrayStr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArrayStr);
        itemsJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }
    update();
}


function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }
    else {
        itemsJsonArrayStr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArrayStr);
    }

    let tblbody = document.getElementById("tblbody");
    let str = "";
    itemsJsonArray.forEach((element,index) => {
        str += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-sm btn-primary" onClick="Out(${index})">Delete</button></td>
            </tr>
        `;
    });
    tblbody.innerHTML = str;
}

add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();

function Out(itemIndex) {
    console.log("Delete", itemIndex);
    itemsJsonArrayStr = localStorage.getItem('itemsJson');
    itemsJsonArray = JSON.parse(itemsJsonArrayStr);

    itemsJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    update();
}