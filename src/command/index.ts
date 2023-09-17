import '../../public/css/command.css'
import BoxCommand from './BoxCommand'
import CircleCommand from './CircleCommand'
import ClearCommand from './ClearCommand'
import PlayCommand from './PlayCommand'
import TextCommand from './TextCommand'

const domCanvas = document.querySelector('canvas') as HTMLCanvasElement
const domDraw = document.querySelector('.draw') as HTMLElement
const domPlay = document.querySelector('.play') as HTMLElement

const cmdClear = new ClearCommand(domCanvas)
const cmdCircle1 = new CircleCommand(domCanvas, 50, 150, 40)
cmdCircle1.setFillColor('#ee4040').setStrokeColor('#ee4040')

const cmdText = new TextCommand(domCanvas, 200, 200, 40, 'Design Patterns')
cmdText.setStrokeColor('#458de5')

const cmdCircle2 = new CircleCommand(domCanvas, 355, 240, 30)
cmdCircle2.setFillColor('#ff884d').setStrokeColor('#ff884d')

const cmdBox = new BoxCommand(domCanvas, 40, 165, 320, 65)
cmdBox.setFillColor('#4dc4FF').setStrokeColor('#4dc4ff')

domDraw.addEventListener('click', () => {
    cmdClear.run()
    cmdCircle1.run()
    cmdBox.run()
    cmdCircle2.run()
    cmdText.run()
})

const playCommand = new PlayCommand(domCanvas)
playCommand.addCommand(cmdClear)
playCommand.addCommand(cmdCircle1)
playCommand.addCommand(cmdBox)
playCommand.addCommand(cmdCircle2)
playCommand.addCommand(cmdText)

domPlay.addEventListener('click', () => {
    playCommand.run()
})