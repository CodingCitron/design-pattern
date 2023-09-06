import Strings from './Strings'
import '../../public/css/index.css'
import SideDecorator from './SideDecorator'
import LineNumberDecorator from './LineNumberDecorator'
import BoxDecorator from './BoxDecorator'

const strs = new Strings()

strs.add('Hello!')
strs.add('My name is Park Sang-Min')
strs.add('I am a Frontend Developer')
strs.add('Design-Pattern is Powerful tool')

const domPre = document.querySelector('pre') as HTMLElement
// strs.print(domPre as HTMLElement)

const d1 = new SideDecorator(strs, '"')
// d1.print(domPre)

const d2 = new LineNumberDecorator(d1)
// d2.print(domPre)

const d3 = new BoxDecorator(d2)
d3.print(domPre)