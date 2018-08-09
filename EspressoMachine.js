/*
  Some really awful code
*/


// ****** UI ****** - some fake React code that doesn't work yet
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
  const tank = {
    hasWater: true
  }

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

  if(steam) {
    steam.warmTo(160);
    steam.pressure(100)
  }

  if(water)
    if(tank.hasWater) {
      water.warmTo(60);
    }
}

const boilers = [
  {
    warmUp: null,
    off: null
  },
  {
    warmUp: null,
    off: null
  }
]

const water = {
  warmTo: (temp) => {}
}

const steam = {
  warmTo: (temp) => {

  },
  pressure:  null
}

function drawShot(temp, time){

}

function infusion(time){

}

// example of running this code:
run(true, true, steam, water, boilers, dashboard);



