import DigitFactory from "./DigitFactory";
import Number from "./Number";
import '../../public/css/flyweight.css'

const factory = new DigitFactory()
const domTarget = document.querySelector('#tmp')

let value = 434331

setInterval(() => {
    const number = new Number(factory, value++)
    number.put(domTarget!)
}, 100)
