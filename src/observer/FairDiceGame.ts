import DiceGame from "./DiceGame";

export default class FairDiceGame extends DiceGame {
    play(): number {
        const n = Math.floor(Math.random() * 6) + 1
        this.players.forEach(players => {
            players.update(n)
        })
        
        return n
    }
}