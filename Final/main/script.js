const COLORS = ['green', 'red', 'blue', 'yellow', 'brown', 'maroon', 'orange', 'black', 'silver', 'purple', 'gray', 'aqua', 'lime', 'indigo', 'violet', 'pink', 'white'];

let currentColor = COLORS[0];


function modePage(){
    document.getElementById(currentColor).style.border = "3px solid gold";
   
     window.location.href = 'http://projects.cse.tamu.edu/jr1/Script/debug/'; //redirect to http://www.xyz.com.

  
}
const selectColor = (event) => {
    let oldColor = currentColor;
    let colorCell = event.target;
    
    document.getElementById(oldColor).style.border = "none";
    colorCell.style.border = "3px solid gold";
    currentColor = colorCell.id;
}

// Create the color pallete
COLORS.forEach((color) => {
    let colorCell = document.createElement('td');
    colorCell.className = 'color-choice';
    colorCell.style.backgroundColor = color;
    colorCell.style.width = '25px';
    colorCell.style.height = '25px';
    colorCell.id = color;
    colorCell.addEventListener('click', selectColor);
    document.getElementById('color-list').appendChild(colorCell);
});

let dragging = false;   // Tracks status of mouse button

document.addEventListener('mousedown', function() {
    dragging = true;      // When mouse goes down, set dragging to true
});
document.addEventListener('mouseup', function() {
    dragging = false;      // When mouse goes down, set dragging to true
});

const colorInDrag = (event) => {
    if (dragging) {
        let cell = event.target;
        cell.style.backgroundColor = currentColor;
    }
}

const colorInClick = (event) => {

    let cell = event.target;
    
    if (currentColor != cell.style.backgroundColor) {
        cell.style.backgroundColor = currentColor;
    } else {
        cell.style.backgroundColor = 'white';
    }
}


function create() {
    
    let table = document.getElementById('cells');
    let row;
    
    // Make sure values are integers
    document.getElementById('row').value = 
        Math.round(document.getElementById('row').value);

    document.getElementById('col').value = 
        Math.round(document.getElementById('col').value);

    let rows = document.getElementById('row').value;
    let columns = document.getElementById('col').value;

    // Validate size params
    if (rows > 100 || rows < 1 || columns > 100 || columns < 1 || isNaN(rows) || isNaN(columns)) {
        let message = document.getElementById('message');
        message.innerHTML = ' Please enter values between 1 and 100.';
        return;
    }

    // Clear existing table
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    let message = document.getElementById('message');
    message.innerHTML = 'Change your picture size &darr;';
    
    table.style.width = '500px';
    table.style.height = '500px';
    
    for (i = 1; i <= rows; i++) {
        row = table.insertRow();

        for (j = 1; j <= columns; j++){
            let cell = row.insertCell();
            cell.style.backgroundColor = 'white';
            cell.className = 'cell';
            cell.addEventListener('mouseover', colorInDrag);
            cell.addEventListener('click', colorInClick);

        } 
    }
}

function reset() {
    let message = document.getElementById('message');
    message.innerHTML = 'Enter your picture size!';

    document.getElementById('row').value = '';
    document.getElementById('col').value = '';

    [...document.getElementsByClassName('cell')].forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

function reload () {
    //since browsers will not show custome msg, just needs a return
    return " "

}