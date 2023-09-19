import Player from "./Player";
import StandUpState from "./StandUpState";
import State from "./State";

export default class SitDownState extends State {
    constructor(player: Player) {
        super(player)
    }

    standUp(): void {
        this.player.setState(new StandUpState(this.player))
        this.player.talk('인나자...')
    }

    sitDown(): void {
        this.player.talk('언제까지 앉아있어... 쥐나겠다.')
    }

    walk(): void {
        this.player.setState(new StandUpState(this.player))
        this.player.talk('앉아서 어떻게 걸어? 일단 설께...')
    }

    run(): void {
        this.player.setState(new StandUpState(this.player))
        this.player.talk('앉아서 어떻게 뛰어!? 일단 서자!')
    }

    getDesciption(): string {
        return '앉아있음'    
    }
}