/*
 pull()(note: pullShot() would be a better name)
    - this sets the courseness level
    - this kicks off the brewing.  The brewing is another nested if statement inside this pull shot

 dispenseSteam()

 dispenseWater()
    
  Also this is just a list of functions inside a file.  There really isn't a true module here.  It's just a bunch of functions
  grouped in a file that has no underlying structure to it really
*/

// all of the below is some really really bad code


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
  if(awake){
    boilers[0].warmUp();
    boilers[1].warmUp();
    dashboard.on();
    return dashboard; // we couple the UI to the API here (bad of course)
  }

  if(sleep)
    dashboard.sleep();
    boilers[0].off();
    boilers[1].off();
  /*
    default shot - standard



    if(pull)
      // setup pre-infusion
        - default length/time
            me: this is really a setting that needs to be tweak-able to allow different shot types

      // set up shot
        - default hard coded shot temp
        - default hard coded shot pull time

     // run pre-infusion

     // pull the shot

    if(steam)
      // run steam
        - default hard coded temp
        - default hard coded pressure

    if(water)
      // run water
        - default temp
  */
}



