import { getSettings } from "./settings";


export class UI{
    constructor(timer){
        this.timer = timer;
        this.timerDisplay = document.getElementById('timer');
        this.startButton = document.getElementById('start');
        this.pauseButton = document.getElementById('pause');
        this.resetButton = document.getElementById('reset');
        this.switchButton = document.getElementById('switch');

        this.status = document.getElementById('status');

        this.workinput = document.getElementById('work-duration');
        this.breakinput = document.getElementById('break-duration');
        

        this.workinput.addEventListener('change', () => this.updateTimerSettings());
        this.breakinput.addEventListener('change', () => this.updateTimerSettings());

        this.switchButton.addEventListener('click' , ()=>{
            this.mswitchmode();
          })
    }

    updateUI(){
        const minutes = Math.floor(this.timer.timeleft / 60);
        const seconds = this.timer.timeleft % 60;
        if(this.timer.isWorktime){
            this.status.innerHTML = "Work Time";
        }
        else{
            this.status.innerHTML = "Break Time";
        }

        this.timerDisplay.textContent = `${minutes} : ${seconds.toString().padStart(2,'0')}`;
    }

    updateTimerSettings() {
        const { workDuration, breakDuration } = getSettings();
        this.timer.worktime = workDuration * 60;
        this.timer.breaktime = breakDuration * 60;

        if (!this.timer.running) {
          this.timer.reset();
          this.updateUI();
        }
      }
    
      mswitchmode(){
        this.timer.mswitch();
        this.updateUI();
      }

    bind(){
        this.startButton.addEventListener('click', ()=>{
            this.timer.start(()=>this.updateUI());
        });

        this.pauseButton.addEventListener('click', ()=>{
            this.timer.pause();
        });

        this.resetButton.addEventListener('click', ()=>{
            this.timer.reset();
            this.updateUI();
        });

       
    }

}