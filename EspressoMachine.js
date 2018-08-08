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



// ****** Underlying API ******
function run(awake, sleep, pull, steam, water, boilers, light, dashboard) {
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

    // run pre-infusion
      // not sure what this is going to be yet
    // pull the shot
      // not sure what this is going to be yet
  }

  /*
    default shot - standard
    if(steam)
      // run steam
        - default hard coded temp
        - default hard coded pressure

    if(water)
      // run water
        - default temp
  */
}



