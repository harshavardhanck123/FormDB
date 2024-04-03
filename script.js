document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let pincode = document.getElementById('pincode').value;
    let gender = document.getElementById('gender').value;
    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;
    let foodCheckboxes = document.getElementsByClassName('form-check-input');

    let selectedFoods = [];
    for (let i = 0; i < foodCheckboxes.length; i++) {
        if (foodCheckboxes[i].checked) {
            selectedFoods.push(foodCheckboxes[i].value);
        }
    }

    let food = selectedFoods.join(', '); 

    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${food}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;
    document.querySelector('.recordsTable tbody').appendChild(newRow);

    document.getElementById('myForm').reset();
});
