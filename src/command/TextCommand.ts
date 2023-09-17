import Command from "./Command";
import Draw from "./Draw";

export default class TextCommand extends Draw implements Command {
    constructor(canvas: HTMLCanvasElement, private x: number, private y: number, private size: number, private text: string) {
        super(canvas)
    }

    run() {
        const context = this.canvas.getContext('2d') as CanvasRenderingContext2D

        context.font = `${this.size}px arial`
        context.textAlign = 'center'
        context.textBaseline = 'middle'

        context.fillStyle = this.fillColor
        context.strokeStyle = this.strokeColor

        context.fillText(this.text, this.x, this.y)
        context.strokeText(this.text, this.x, this.y)
    }
}