class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;


    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];

  }

  start(){
    this.interval = setInterval(this.update.bind(this), 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  update() {
    console.log(this.requests);
    this.floorUp();
  }


  _passengersEnter() { }
  _passengersLeave() { }

  floorUp() {
    if (this.floor === this.MAXFLOOR){
    this.stop();
    console.log(this.floor);
    console.log("Max floor");
    }

    else {
      this.floor++;
      console.log(this.floor);
      console.log("Going up...");
    }

  }

  floorDown() {
    if (this.floor !== 0) {
    this.floor--;
    console.log(this.floor);
    console.log("Going down...");
    }

    else {
      this.stop();
      console.log(this.floor);
      console.log("Ground level...");
    }
   }


  call(person) {
      this.requests.push(person);
   }

  log() {
      // console.log(`Direction: up | Floor: ${this.floor}`);
   }
}

module.exports = Elevator;
