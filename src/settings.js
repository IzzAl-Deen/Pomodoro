    
export function getSettings() {
        let workDuration = parseInt(document.getElementById('work-duration').value, 10);
        let breakDuration = parseInt(document.getElementById('break-duration').value, 10);
        if(workDuration < 1){ workDuration = 1;}
        if(breakDuration < 1){breakDuration= 1;}

    return { workDuration, breakDuration };
}