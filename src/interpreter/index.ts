import '../../public/css/interpreter.css'
import BeginExpression from './BeginExpression'
import Context from "./Context"

/* const script = 'BEGIN FRONT LOOP 2 BACK RIGHT END BACK END'
const context = new Context(script)

while(true) {
    const keyword = context.getCurrentKeywrod()
    if(keyword === null) break

    console.log(keyword)
    context.readNextKeyword()
} */

const script = 'BEGIN FRONT LOOP 3 LOOP 2 RIGHT FRONT END LOOP 3 LEFT END BACK RIGHT END BACK END'
console.log(script)

const context = new Context(script)
const expression = new BeginExpression()

if(expression.parse(context)) {
    console.log(expression.getDescription())
    expression.run()
} else {
    console.log('ERROR')
}