import '../../public/css/facade.css'
// import Cache from './Cache'
// import DBMS from './DBMS'
// import Message from './Message'
// import Row from './Row'

import Facade from "./Facade"

// const dbms = new DBMS()
// const cache = new Cache()

const domInput = document.querySelector('input') as HTMLInputElement
const domButton = document.querySelector('button') as HTMLButtonElement
const domResult = document.querySelector('.result') as HTMLElement

const facade = new Facade()

domButton.addEventListener('click', () => {
    const name = domInput.value

    facade.queryName(
        name, 
        () => {
            domInput.value = '(조회 중...)'
            domButton.disabled = true
        },
        () => {
            domInput.value = name
            domButton.disabled = false
        },
        domResult
    )
/* 
    const row = cache.get(name)

    if(!row) {
        domInput.value = '(조회 중...)'
        domButton.disabled = true

        dbms.query(name, row => {
            domInput.value = name
            domButton.disabled = false

            if(row) {
                cache.put(row)
            }

            const message = new Message(row as Row)
            message.print(domResult)
        })
    } else {
        const message = new Message(row)
        message.print(domResult)

    } */
})