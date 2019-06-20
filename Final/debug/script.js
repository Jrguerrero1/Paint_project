const COLORS = ['green', 'red', 'blue', 'yellow', 'brown', 'maroon', 'orange', 'black', 'silver', 'purple', 'gray', 'aqua', 'lime', 'indigo', 'violet', 'pink', 'white'];

let currentColor = COLORS[0];


function modePage(){
    document.getElementById(currentColor).style.border = "3px solid gold";
   
     window.location.href = 'http://projects.cse.tamu.edu/jr1/Script/main/'; //redirect to http://www.xyz.com.

  
}
//gives current time for console logs on events
function currentTime () {
     var date = new Date();
     console.log(date)
    // document.getElementById("onscreen").innerHTML = date;
}
const selectColor = (event) => {
    let oldColor = currentColor;
    let colorCell = event.target;


    document.getElementById(oldColor).style.border = "none";
    colorCell.style.border = "3px solid gold";
    currentColor = colorCell.id;

    if(oldColor==currentColor){
         alert("Same color chosen");
    }
    // console for debug
    var colorobj = { old_color : oldColor, new_color : currentColor};
    console.log(colorobj);
    currentTime();    
   
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
    console.log(event.button);
    if (currentColor != cell.style.backgroundColor) {

        var colorin={old_color: cell.style.backgroundColor, new_color: currentColor};
        console.log(colorin);
        currentTime();   
        cell.style.backgroundColor = currentColor;
    } 
    
    else {
        ask=user(2);
        if(ask==true){
        let colorin={SameColor: currentColor};
        console.log(colorin);
        currentTime();    
        console.log('Setting to white background for cell');
        cell.style.backgroundColor = 'white';
    }
        else{
            console.log('Not reseting color by user choice');
        }
    }
}


function create() {
    currentTime();    
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
        console.log('Invalid');
        let message = document.getElementById('message');
        message.innerHTML = ' Please enter values between 1 and 100.';
        user(0);
        return;
    }

    else{
        alert("Setting canvas to \n Rows: " +rows+ "\n Columns: "+columns);
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


// Debugging and user user handling

function user(action) {
    
//resets drawing without user input 
    if(action==0){
        alert("Invalid input\n  0 or negative value entered ");


       

        [...document.getElementsByClassName('cell')].forEach(cell => {
            cell.style.backgroundColor = 'white';
        });
    }
if(action==1){
    
    
//resets drawing with user input 

    if (confirm('Reset drawing??')) {

        let r=document.getElementById('row').value;
        let c=document.getElementById('col').value;

         alert("Clearing screen\nResetting canvas to \n Rows: " +r+ "\n Columns: "+c);
        let message = document.getElementById('message');
        message.innerHTML = 'Enter your picture size!';


    

        [...document.getElementsByClassName('cell')].forEach(cell => {
            cell.style.backgroundColor = 'white';
        });
           }
            else {
               return false;
           }
}

    //asks if same block wants to be changed to preset

if(action==2){
    if(confirm("Same color on block change to preset?")){
        return true;
    }
    else{
        return false
    }


}
}
function reload () {
    //since browsers will not show custome msg, just needs a return
    return " "

}









