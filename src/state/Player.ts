import StandUpState from "./StandUpState"
import State from "./State"

export default class Player {
    private speed: number = 0
    private state: State

    constructor(private domTalk: HTMLElement) {
        this.state = new StandUpState(this)
    }

    getSpeed() {
        return this.speed
    }

    setSpeed(speed: number) {
        this.speed = speed
    }

    getState() {
        return this.state
    }

    setState(state: State) {
        this.state = state
    }

    talk(msg: string) {
        this.domTalk.innerText = msg
    }
}