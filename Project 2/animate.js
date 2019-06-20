//This will animate the current screen to a right to left animation
// or if predefine shape is pressed then will animate that shape
function animateGrid(select){
      var initial=to_draw;
      if(counter==number_frames){
        animation_end=true;
      }
      if(counter==0){
        animation_end=false;
      }
      if(button_animate==1){
      processInput();
      var grid = document.getElementsByTagName("td");
      console.log(counter);
      if(!animation_end){
              counter++;

      for(var i = 0; i < to_draw.length; i++){
        let { loc } = to_draw[i];
        let { color } = to_draw[i];
        let { offset } = to_draw[i];
        var at= loc;
                // console.log(at);
        //is used for the the current screen to scroll
        if(at<16 && loc+offset>15){
          to_draw[i].loc=0;;
          to_draw[i].offset=0;
        }
        if(at<32 &&loc+offset>31){
          to_draw[i].loc=16;
          to_draw[i].offset=0;
        }
        if(at<48 &&loc+offset>47){
          to_draw[i].loc=32;
          to_draw[i].offset=0;
        }
        if(at<64 &&loc+offset>63){
          to_draw[i].loc=48;
          to_draw[i].offset=0;
        }
        if(at<80 &&loc+offset>79){

          to_draw[i].loc=64;
          to_draw[i].offset=0;

        }
        if(at<96 &&loc+offset>95){
          to_draw[i].loc=80;
          to_draw[i].offset=0;
        }
        if(at<112 &&loc+offset>111){
          to_draw[i].loc=96;
          to_draw[i].offset=0;
        }
        if(at<128 &&loc+offset>127){
          to_draw[i].loc=112;
          to_draw[i].offset=0;

        }
        else{
          to_draw[i].offset=to_draw[i].offset+1;
          if(random_colors_switch==1){
            color=getRandomColor();
          }
                  grid[to_draw[i].loc+to_draw[i].offset].style.backgroundColor = color;          

          // console.log(to_draw[i].offset);
        }
      }

    }
    if(animation_end){
      counter--;
      for(var i = 0; i < to_draw.length; i++){
        let { loc } = to_draw[i];
        let { color } = to_draw[i];
        let { offset } = to_draw[i];
        var at= loc;
                // console.log(at);
        //is used for the the current screen to scroll
        if(at<16 && loc+offset>15){
          to_draw[i].loc=0;;
          to_draw[i].offset=0;
        }
        if(at<32 &&loc+offset>31){
          to_draw[i].loc=16;
          to_draw[i].offset=0;
        }
        if(at<48 &&loc+offset>47){
          to_draw[i].loc=32;
          to_draw[i].offset=0;
        }
        if(at<64 &&loc+offset>63){
          to_draw[i].loc=48;
          to_draw[i].offset=0;
        }
        if(at<80 &&loc+offset>79){

          to_draw[i].loc=64;
          to_draw[i].offset=0;

        }
        if(at<96 &&loc+offset>95){
          to_draw[i].loc=80;
          to_draw[i].offset=0;
        }
        if(at<112 &&loc+offset>111){
          to_draw[i].loc=96;
          to_draw[i].offset=0;
        }
        if(at<128 &&loc+offset>127){
          to_draw[i].loc=112;
          to_draw[i].offset=0;

        }
        else{
          to_draw[i].offset=to_draw[i].offset-1;
          if(random_colors_switch==1){
            color=getRandomColor();
          }
                  grid[to_draw[i].loc+to_draw[i].offset].style.backgroundColor = color;          

          // console.log(to_draw[i].offset);
        }
      }
      
    }

  }
  if(button_animate==2){
      clearInterval();
      resetGrid();
      button_animate=0;
    }
  
  }

