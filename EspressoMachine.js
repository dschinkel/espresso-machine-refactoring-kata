/*
  Some really awful code
*/

const boilers = [
  {
    warmUp: null
  },
  {
    warmUp: null
  }
]

// ****** UI ******
const dashboard = {
  on: () => {
    return "<Dashboard on />"
  },
  sleep: () => {
    "<Dashboard sleep />"
  }
}

// ****** Underlying API ******
function run(awake, sleep, pull, steam, water, boilers, dashboard) {
  if (awake) {
    boilers[0].warmUp();
    boilers[1].warmUp();
    dashboard.on();
    return dashboard;
  }

  if (sleep){
    dashboard.sleep();
    boilers[0].off();
    boilers[1].off();
  }

  if(pull){
    let time = 10,
      temp = 165,
      time2 = 15;

    infusion(time);
    drawShot(temp, time2);
  }

  if(steam)
    steam.set(180, 100);

  if(water)
    water.set(160)
}

function drawShot(temp, time){

}

function infusion(time){

}

// example of running this code:
run(true, true, true, true, boilers, dashboard);



