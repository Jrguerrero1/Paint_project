// start of new variables
var button_random = 0;
var button_animate = 0;
var random_colors_switch = 0;
var animate_init = setInterval(animateGrid, 500);
var pause = 0;
var random_init = setInterval(randomize, 500);

var to_draw;
var screen_input = [];
var output_string = '';
var speedValue = 500;
var stopSpeed = '6'; // stop speed will be saved when pause is called
var animation_end = false;
var counter = 0;
var number_frames;

let DEBUG_FLAG = false;
//end of new variables
//

let log = console.log;
window.console = {
  log: function(text) {
    if (DEBUG_FLAG) {
      log(...arguments);
    }
  }
}

//code given from project 1
function debug() {
  setTimeout(test_1, 0);
  setTimeout(drawTAMU, 10000);
  setTimeout(drawFlower, 15000);
  setTimeout(drawChecker, 5000);
  setTimeout(test_3, 25000);
  removeOldTable();
}
function test_1() {
  console.log('Creating debug example 1: 20X20');
  document.getElementById('length').value = 20;
  document.getElementById('width').value = 20;
  processInput();
  console.log('Creating debug example 2: 50X50');
  document.getElementById('length').value = 50;
  document.getElementById('width').value = 50;
  processInput();
}
function test_3() {
  console.log('Creating debug example 3: Invalid input');
  console.log('Setting length to -50...');
  document.getElementById('length').value = -50;
  console.log('Setting width to 50...');
  document.getElementById('width').value = 50;
  processInput();
  console.log('Setting length to 256...');
  document.getElementById('length').value = 256;
  console.log('Setting width to 256...');
  document.getElementById('width').value = 256;
  console.log('Setting length to "howdy"...');
  document.getElementById('length').value = 'howdy';
  console.log('Setting width to "howdy"...');
  document.getElementById('width').value = 'howdy';
  processInput();
}
//Creates a table of size length x width specified by the user
function processInput() {
  //Get all input values
  var length = 8;
  var width = 16;
  var myTable = document.getElementById('grid');
  myTable.style.display = 'block';

  //validate user input and remove old table
  if (!validateInput(length, width)) {
    return false;
  }
  removeOldTable();
  //Add rows and columns to the table
  for (var i = 0; i < length; i++) {
    var node = document.createElement('TR');
    for (var j = 0; j < width; j++) {
      var cell = document.createElement('TD');
      cell.style.backgroundColor = 'white';
      cell.row = i;
      cell.col = j;
      cell.style.backgroundColor = 'white';
      cell.style.backgroundColor = 'white';

      cell.addEventListener('click', clickedCell, false);
      node.appendChild(cell);
    }
    myTable.appendChild(node);
  }
  myTable.style.display = 'block';
}

//Check if the input is a number, if not alert the user
function validateInput(length, width) {
  if (length < 1 || width < 1) {
    alert('Input must be greater than 0');
    return false;
  } else if (isNaN(length) || isNaN(width)) {
    alert('Input must be an numerical value');
    return false;
  } else if (length > 255 || width > 255) {
    alert('Input must be no greater than 255');
    return false;
  } else {
    return true;
  }
}

//Erase old table
function removeOldTable() {
  var myTable = document.getElementById('grid');
  while (myTable.firstChild != null) {
    myTable.removeChild(myTable.firstChild);
  }
}

//handler function to toggle color of clicked cell
function clickedCell(e) {
  let color = document.querySelector('input[type="color"]').value;

  var row = e.target.row + 1;
  //change of function to grab cell clicked and passes to varible screen_input
  //code change for Project 2
  var a;

  if (row == 1) {
    a = 0 + e.target.col;
  }
  if (row == 2) {
    a = 16 + e.target.col;
  }
  if (row == 3) {
    a = 32 + e.target.col;
  }
  if (row == 4) {
    a = 48 + e.target.col;
  }
  if (row == 5) {
    a = 64 + e.target.col;
  }
  if (row == 6) {
    a = 80 + e.target.col;
  }
  if (row == 7) {
    a = 96 + e.target.col;
  }
  if (row == 8) {
    a = 112 + e.target.col;
  }
  // console.log(a);

  if (this.style.backgroundColor == 'white') {
    this.style.backgroundColor = color;
  } else {
    this.style.backgroundColor = 'white';
  }
  if (
    !output_string.includes(
      a.toString() +
        ' ' +
        e.target.style.backgroundColor.replace(/\s+/g, '') +
        '\n'
    )
  ) {
    output_string +=
      a.toString() +
      ' ' +
      e.target.style.backgroundColor.replace(/\s+/g, '') +
      '\n';
  }
  let cellInfo = {
    loc: a,
    color: e.target.style.backgroundColor,
    offset: 0
  };
  console.log(cellInfo);
  screen_input.push(cellInfo);
  outputDrawingCoord();
}
// end of new code made for Project 2 for this function
//Resets all grid cells to a white background

function resetGrid() {
  document.querySelector('#out_Area').value = '';
  var grid = document.getElementsByTagName('td');
  for (var i = 0; i < grid.length; i++) {
    grid[i].style.backgroundColor = 'white';
  }
  //below code added for Project 2
  //When resetGrid is called then the screen and variables will be reset for the user
  screen_input.length = 0;
  button_animate = 0;
  button_random = 0;
}

function drawTAMU() {
  document.getElementById('length').value = 25;
  document.getElementById('width').value = 25;
  processInput();
  var grid = document.getElementsByTagName('td');
  var shaded = [
    574,
    549,
    524,
    473,
    448,
    422,
    397,
    372,
    346,
    370,
    394,
    368,
    342,
    366,
    391,
    416,
    440,
    465,
    490,
    514,
    539,
    564,
    498,
    330,
    355,
    379,
    381,
    404,
    406,
    428,
    432,
    453,
    454,
    455,
    456,
    457,
    477,
    483,
    502,
    508,
    526,
    534,
    551,
    559,
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    138,
    139,
    140,
    141,
    142,
    143,
    156,
    162,
    168,
    181,
    187,
    193,
    206,
    212,
    218,
    237,
    262,
    287,
    312,
    337,
    362,
    387,
    412,
    437,
    462,
    487,
    512,
    537,
    562
  ];
  for (var i = 0; i < grid.length; i++) {
    if (shaded.indexOf(i) != -1) {
      grid[i].style.backgroundColor = '#73212D';
    } else {
      grid[i].style.backgroundColor = 'white';
    }
  }
}

function drawFlower() {
  document.getElementById('length').value = 50;
  document.getElementById('width').value = 50;
  processInput();
  var grid = document.getElementsByTagName('td');
  var green = [2475];
  var yellow = [1176];

  for (var i = 25; i > 0; i--) {
    green.unshift(green[0] - 50);
  }
  green.unshift(2474);
  for (var i = 25; i > 0; i--) {
    green.unshift(green[0] - 50);
  }
  green.unshift(2473);
  for (var i = 25; i > 0; i--) {
    green.unshift(green[0] - 50);
  }

  for (var i = 5; i > 0; i--) {
    yellow.unshift(yellow[0] - 50);
  }
  yellow.unshift(1175);
  for (var i = 4; i > 0; i--) {
    yellow.unshift(yellow[0] - 50);
  }
  yellow.unshift(1174);
  for (var i = 5; i > 0; i--) {
    yellow.unshift(yellow[0] - 50);
  }
  yellow.unshift(1173);
  for (var i = 4; i > 0; i--) {
    yellow.unshift(yellow[0] - 50);
  }
  yellow.unshift(1172);
  for (var i = 5; i > 0; i--) {
    yellow.unshift(yellow[0] - 50);
  }

  for (var i = 0; i < grid.length; i++) {
    if (green.indexOf(i) != -1) {
      grid[i].style.backgroundColor = 'green';
    } else if (yellow.indexOf(i) != -1) {
      grid[i].style.backgroundColor = 'red';
    } else {
      grid[i].style.backgroundColor = '#E0FFF6';
    }
  }
}

function sleep(milliseconds) {
  // https://www.phpied.com/sleep-in-javascript/
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function drawChecker() {
  document.getElementById('length').value = 100;
  document.getElementById('width').value = 100;
  processInput();
  var grid = document.getElementsByTagName('td');

  for (var i = 0; i < grid.length; i++) {
    if (i % 2) {
      grid[i].style.backgroundColor = 'green';
    } else if (i % 3) {
      grid[i].style.backgroundColor = 'orange';
    } else if (i % 5) {
      grid[i].style.backgroundColor = 'blue';
    } else if (i % 7) {
      grid[i].style.backgroundColor = 'red';
    } else if (i % 11) {
      grid[i].style.backgroundColor = 'yellow';
    } else {
      grid[i].style.backgroundColor = 'purple';
    }
  }
}

//////Changes/ New functions using old code

//Below code works in a 0,1,2 state
// 0 state is initial state
// 1 state is start
// 2 is used to check for a stop in function then reset back to 0

function toggleDebug() {
  DEBUG_FLAG = !DEBUG_FLAG;

  if (DEBUG_FLAG) {
    document.querySelector('#debug').value = 'Debug Mode {On}'
    console.log('NOW RUNNING IN DEBUG MODE');
    console.log('CERTAIN EVENTS WILL BE LOGGED TO CONSOLE');
  } else {
    document.querySelector('#debug').value = 'Debug Mode {Off}'
  }
}

function play() {
  // Function for play/paused
  pause++; //1 is pause
  //
  if (pause == 1) {
    speed('0');
  }
  if (pause == 2) {
    console.log('Play');
    speed(stopSpeed);
    pause = 0;
  }
}

// speed(action)
// used to change the speed of the current animation from the slider on screen
function speed(action) {
  // let actiom=stopSpeed.toString();
  switch (action) {
    case '0':
      clearInterval(animate_init);
      animate_init = setInterval(animateGrid, 100000000);
      random_init = setInterval(randomize, 100000000);
      break;
    case '1':
      speedValue = 1000;
      clearInterval(animate_init);
      animate_init = setInterval(animateGrid, speedValue);
      random_init = setInterval(randomize, speedValue);
      break;
    case '2':
      speedValue = 900;
      clearInterval(animate_init);
      clearInterval(randomize);
      animate_init = setInterval(animateGrid, speedValue);
      random_init = setInterval(randomize, speedValue);
      break;
    case '3':
      speedValue = 800;
      clearInterval(animate_init);
      clearInterval(randomize);
      animate_init = setInterval(animateGrid, speedValue);
      random_init = setInterval(randomize, speedValue);
      break;
    case '4':
      speedValue = 700;
      clearInterval(animate_init);
      clearInterval(randomize);
      animate_init = setInterval(animateGrid, speedValue);
      random_init = setInterval(randomize, speedValue);
      break;
    case '5':
      speedValue = 600;
      clearInterval(animate_init);
      clearInterval(randomize);
      animate_init = setInterval(animateGrid, speedValue);
      random_init = setInterval(randomize, speedValue);
      break;
    case '6':
      speedValue = 500;
      clearInterval(animate_init);
      clearInterval(randomize);
      animate_init = setInterval(animateGrid, speedValue);
      random_init = setInterval(randomize, speedValue);
      break;
    case '7':
      speedValue = 400;
      clearInterval(animate_init);
      clearInterval(randomize);
      animate_init = setInterval(animateGrid, speedValue);
      random_init = setInterval(randomize, speedValue);
      break;
    case '8':
      speedValue = 300;
      clearInterval(animate_init);
      clearInterval(randomize);
      animate_init = setInterval(animateGrid, speedValue);
      random_init = setInterval(randomize, speedValue);
      break;
    case '9':
      speedValue = 200;
      clearInterval(animate_init);
      clearInterval(randomize);
      animate_init = setInterval(animateGrid, speedValue);
      random_init = setInterval(randomize, speedValue);
      break;
    case '10':
      speedValue = 100;
      clearInterval(animate_init);
      clearInterval(randomize);
      animate_init = setInterval(animateGrid, speedValue);
      random_init = setInterval(randomize, speedValue);
      break;
    default:
      break;
  }
}

//function for user pressing random
// sets the state
function button_randomize() {
  button_random++;
  if (button_random > 2) {
    button_random = 0;
  }
}
//function to draw pre defined shapes

function select_shape(shape) {
  if (shape == 'square') {
    to_draw = tamu;
  }
}

//set repeat
function set_repeat(number) {
  counter = 0;
  number_frames = parseInt(number);
  if (parseInt(number) == 0) {
    number_frames = 10000;
  }
}

//function do say what animation will be selected
//sets the state
// prints to text area
function button_animation(select, loop) {
  const color = document.querySelector('#color-picker').value;

  if (select == 'Star') {
    //
    create_toScreen(star);
    to_draw = screen_input;
    output_string = star;
    outputDrawingCoord();
    number_frames = parseInt(loop);
  }
  if (select == 'Circle') {
    create_toScreen(circle.replace(/rgb\(0,0,0\)/g, color));
    to_draw = screen_input;
    output_string = circle.replace(/rgb\(0,0,0\)/g, color);
    outputDrawingCoord();
    number_frames = parseInt(loop);
  }
  if (select == 'Square') {
    create_toScreen(square.replace(/rgb\(0,0,0\)/g, color));
    to_draw = screen_input;
    output_string = square.replace(/rgb\(0,0,0\)/g, color);
    outputDrawingCoord();
    number_frames = parseInt(loop);
  }
  if (select == 'Smile') {
    create_toScreen(smile.replace(/rgb\(0,0,0\)/g, color));
    to_draw = screen_input;
    output_string = smile.replace(/rgb\(0,0,0\)/g, color);
    outputDrawingCoord();
    number_frames = parseInt(loop);
  }
  if (select == 'a') {
    to_draw = screen_input;
    number_frames = parseInt(loop);
  }

  button_animate++;
  if (button_animate > 2) {
    button_animate = 0;
  }
}
//function for setting state of randomize button
function randomize() {
  if (button_random == 1) {
    random_colors_switch = 1;
  } else random_colors_switch = 0;

  if (button_random == 1 && button_animate == 0) {
    processInput();
    var grid = document.getElementsByTagName('td');

    for (var i = 0; i < grid.length; i++) {
      nc = getRandomColor();
      grid[i].style.backgroundColor = nc;
    }
  }
  if (button_random == 2 && button_animate == 0) {
    clearInterval();
    button_random = 0;
    resetGrid();
    //if(to_draw.length>0)drawscreen_input();
  }
  //console.log(speedValue);
}
// can be used to create the
function create_toScreen(drawing) {
  //var drawing="102 red 100 red 84 rgb(0,0,0) 85 rgb(0,0,0) 86 rgb(0,0,0) ";
  var fromArea = drawing.split(/[\n\r\s]/g);
  for (var i = 0; i < fromArea.length; i = i + 2) {
    if (fromArea[i] > 128) {
      console.log('invalid input, there is a value more than the given grid');

      create_toScreen(invalid);
      break;
    }
    let cellInfo = {
      loc: parseInt(fromArea[i]),
      color: fromArea[i + 1],
      offset: 0
    };
    screen_input.push(cellInfo);
  }
  screen_input.pop();
  console.log(screen_input);
}

// function to generate a random color for interesting drawings
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function output() {
  // var x=output_string.length;
  // output_string = output_string.slice(0, x-1);

  return output_string;
}

function input(string) {
  resetGrid();

  screen_input.length = 0;
  create_toScreen(string);
  console.log(screen_input);
}
//This will animate the current screen to a right to left animation
// or if predefine shape is pressed then will animate that shape
function animateGrid(select) {
  let tempOut = '';
  if (counter == number_frames) {
    animation_end = true;
  }
  if (counter == 0) {
    animation_end = false;
  }
  if (button_animate == 1) {
    processInput();
    var grid = document.getElementsByTagName('td');
    if (!animation_end) {
      counter++;

      for (var i = 0; i < to_draw.length; i++) {
        let { loc } = to_draw[i];
        let { color } = to_draw[i];
        let { offset } = to_draw[i];
        var at = loc;
        // console.log(at);
        //is used for the the current screen to scroll
        if (at < 16 && loc + offset >= 15) {
          to_draw[i].loc = 0;
          to_draw[i].offset = 0;
        }
        else if (at < 32 && loc + offset >= 31) {
          to_draw[i].loc = 16;
          to_draw[i].offset = 0;
        }
        else if (at < 48 && loc + offset >= 47) {
          to_draw[i].loc = 32;
          to_draw[i].offset = 0;
        }
        else if (at < 64 && loc + offset >= 63) {
          to_draw[i].loc = 48;
          to_draw[i].offset = 0;
        }
        else if (at < 80 && loc + offset >= 79) {
          to_draw[i].loc = 64;
          to_draw[i].offset = 0;
        }
        else if (at < 96 && loc + offset >= 95) {
          to_draw[i].loc = 80;
          to_draw[i].offset = 0;
        }
        else if (at < 112 && loc + offset >= 111) {
          to_draw[i].loc = 96;
          to_draw[i].offset = 0;
        }
        else if (at < 128 && loc + offset >= 127) {
          to_draw[i].loc = 112;
          to_draw[i].offset = 0;
        } else {
          to_draw[i].offset = to_draw[i].offset + 1;
        }
        if (random_colors_switch == 1) {
          color = getRandomColor();
        }
          grid[
            to_draw[i].loc + to_draw[i].offset
          ].style.backgroundColor = color;
          console.log({
            loc: to_draw[i].loc,
            offset: to_draw[i].offset
          });
          // console.log('OUT', Number(to_draw[i].loc + offset) + ' ' +  color);
          // console.log(to_draw[i].offset);
        
      }
      // output_string = tempOut;
      //     outputDrawingCoord();
    }
    if (animation_end) {
      counter--;
      for (var i = 0; i < to_draw.length; i++) {
        let { loc } = to_draw[i];
        let { color } = to_draw[i];
        let { offset } = to_draw[i];
        var at = loc;
        // console.log(at);
        //is used for the the current screen to scroll
        if (at < 16 && loc + offset >= 15) {
          to_draw[i].loc = 0;
          to_draw[i].offset = 0;
        }
        else if (at < 32 && loc + offset >= 31) {
          to_draw[i].loc = 16;
          to_draw[i].offset = 0;
        }
        else if (at < 48 && loc + offset >= 47) {
          to_draw[i].loc = 32;
          to_draw[i].offset = 0;
        }
        else if (at < 64 && loc + offset >= 63) {
          to_draw[i].loc = 48;
          to_draw[i].offset = 0;
        }
        else if (at < 80 && loc + offset >= 79) {
          to_draw[i].loc = 64;
          to_draw[i].offset = 0;
        }
        else if (at < 96 && loc + offset >= 95) {
          to_draw[i].loc = 80;
          to_draw[i].offset = 0;
        }
        else if (at < 112 && loc + offset >= 111) {
          to_draw[i].loc = 96;
          to_draw[i].offset = 0;
        }
        else if (at < 128 && loc + offset >= 127) {
          to_draw[i].loc = 112;
          to_draw[i].offset = 0;
        } else {
          to_draw[i].offset = to_draw[i].offset - 1;
          
          // console.log(to_draw[i].offset);
        }
        if (random_colors_switch == 1) {
          color = getRandomColor();
        }
        grid[
          to_draw[i].loc + to_draw[i].offset
        ].style.backgroundColor = color;
      }
    }
  }
  if (button_animate == 2) {
    clearInterval();
    resetGrid();
    button_animate = 0;
  }
}

//random animation

// function animateGrid(select){

//       if(button_animate==1){
//       processInput();

//       var grid = document.getElementsByTagName("td");

//       for(var i = 0; i < to_draw.length; i++){
//         let { loc } = to_draw[i];
//         let { color } = to_draw[i];
//         let { offset } = to_draw[i];
//         var at= loc;
//                 // console.log(at);
//         //is used for the the current screen to scroll
//         if(at<16 && loc+offset>15){
//           to_draw[i].loc=0;;
//           to_draw[i].offset=0;
//         }
//         if(at<32 &&loc+offset>31){
//           to_draw[i].loc=16;
//           to_draw[i].offset=0;
//         }
//         if(at<48 &&loc+offset>47){
//           to_draw[i].loc=32;
//           to_draw[i].offset=0;
//         }
//         if(at<64 &&loc+offset>63){
//           to_draw[i].loc=48;
//           to_draw[i].offset=0;
//         }
//         if(at<80 &&loc+offset>79){

//           to_draw[i].loc=64;
//           to_draw[i].offset=0;

//         }
//         if(at<96 &&loc+offset>95){
//           to_draw[i].loc=80;
//           to_draw[i].offset=0;
//         }
//         if(at<112 &&loc+offset>111){
//           to_draw[i].loc=96;
//           to_draw[i].offset=0;
//         }
//         if(at<128 &&loc+offset>127){
//           to_draw[i].loc=112;
//           to_draw[i].offset=0;

//         }
//         else{
//           to_draw[i].offset=to_draw[i].offset+1;
//           if(random_colors_switch==1){
//             color=getRandomColor();
//           }
//                   grid[to_draw[i].loc+to_draw[i].offset].style.backgroundColor = color;

//           // console.log(to_draw[i].offset);
//         }
//       }

//   }
//   if(button_animate==2){
//       clearInterval();
//       resetGrid();
//       button_animate=0;
//     }

//   }

function drawscreen_input() {
  processInput();
  var grid = document.getElementsByTagName('td');

  var nc = getRandomColor();

  for (var i = 0; i < to_draw.length; i++) {
    const { loc } = to_draw[i];
    const { color } = to_draw[i];

    let cell = loc;

    grid[cell].style.backgroundColor = color;
  }
}

function main() {
  processInput();
}

main();
