import CommandListExpression from "./CommandListExpression";
import Context from "./Context";
import Expression from "./Expression";

export default class BeginExpression implements Expression {
    private expression?: CommandListExpression

    static checkValidKeyword(keyword: string): boolean {
        return keyword === 'BEGIN'
    }

    parse(context: Context): boolean {
        if(BeginExpression.checkValidKeyword(context.getCurrentKeywrod()!)) {
            context.readNextKeyword()
            this.expression = new CommandListExpression()
            return this.expression.parse(context)
        } else {
            return false
        }
    }

    run(): boolean {
        return this.expression!.run()
    }

    getDescription(): string {
        return `BEGIN ${this.expression!.getDescription()}`
    }
}