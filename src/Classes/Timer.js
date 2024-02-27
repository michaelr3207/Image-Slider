

class Timer {

    constructor(timerName, timeLength) {
        this.timerName = timerName;
        this.timeLength = timeLength;
    }

    getTimerName() {
        return this.timerName;
    }

    getTimerLength() {
        return this.timeLength;
    }

    setTimerName(name) {
        this.timerName = name;
    }

    setTimerLength(length) {
        this.timeLength = length;
    }

}

export {Timer};