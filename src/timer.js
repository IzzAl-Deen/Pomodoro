import { playNotificationSound } from "./notification";

export class Timer{
    constructor(worktime,breaktime){
        this.worktime = worktime * 60;
        this.breaktime = breaktime * 60;
        this.running = false;
        this.isWorktime = true;
        this.time = null;
        this.timeleft = this.worktime;
        this.counter = 0;
    }

    start(recursion){
        if(!this.running){
            this.running = true;
            this.time = setInterval(()=>{
                this.timeleft--;
                if(this.timeleft <= 0){
                    this.counter++;
                    playNotificationSound();
                    this.switch();
                    recursion();
                }
            },1000)
        }
    }

    pause(){
        clearInterval(this.time);
        this.running = false;
    }


    reset(){
        this.pause();
        this.timeleft = this.isWorktime ? this.worktime : this.breaktime;
    }


    switch(){
        if(this.counter === 8){
            this.breaktime = this.breaktime * 3;
            this.counter = 0;
        }

        this.isWorktime = !this.isWorktime;
        this.timeleft = this.isWorktime ? this.worktime : this.breaktime;
    }

    mswitch(){
        this.switch();
        this.reset();
    }

}