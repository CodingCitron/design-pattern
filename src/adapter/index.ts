import Animal from "./Animal";
import Cat from "./Cat";
import Dog from "./Dog";
import TigerAdapter from "./TigerAdapter";

const list = new Array<Animal>()

list.push(new Dog('댕이'))
list.push(new Cat('냥이'))
list.push(new Cat('성공'))
list.push(new TigerAdapter('타이온'))

list.forEach(animal => {
    animal.sound()
})