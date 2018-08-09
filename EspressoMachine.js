const light = {
  on: () => {},
  off: () => {}
}

const broilers = [
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

function drawShot(temp, time){

}

function infusion(time){

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

run(true, true, true, true, broilers, dashboard);



