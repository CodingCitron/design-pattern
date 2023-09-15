import '../../public/css/chain-of-responsibility.css'
import DomainHandler from './DomainHandler'
import PortHandler from './PortHandler'
import ProtocolHandler from './ProtocolHandler'

const handler = new ProtocolHandler()
const handler2 = new PortHandler()
const handler3 = new DomainHandler()

handler.setNext(handler2).setNext(handler3)

const domInput = document.querySelector('#url') as HTMLInputElement
const domBtn = document.querySelector('#btn') as HTMLButtonElement

domBtn.addEventListener('click', e => {
    const url = domInput.value
    handler.run(url)
})