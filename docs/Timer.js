export default class Timer {

    constructor() {

        this.time = 0;
        this.speed = 0;
        this.isUpdate = true;

        this.reset();
        
    }

    getTime() {

        return this.time;

    }

    reset() {

        this.isUpdate = true;
        this.time = 0;
        this.speed = .1;

    }

    stop() {

        this.isUpdate = false;

    }

    update() {

        this.time += this.speed;

    }

    setSpeed(value) {

        this.speed = value;

    }

    start() {
        
        if(this.isUpdate) this.isUpdate = true;
        
    }

}