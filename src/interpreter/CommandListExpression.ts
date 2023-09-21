import Context from "./Context";
import Expression from "./Expression";
import LoopCommandExpession from "./LookCommandExpression";
import ActionComandExpression from "./ActionCommandExpression";
import CommandExpression from "./CommandExpression";

export default class CommandListExpression implements Expression {
    private commands = new Array<CommandExpression>()

    parse(context: Context): boolean {
        while(true) {
            const currentKeyword = context.getCurrentKeywrod()
            console.log(currentKeyword)
            if(currentKeyword === null) {
                return false
            } else if(currentKeyword === 'END') {
                context.readNextKeyword()
                break
            } else {
                let command: (CommandExpression | null) = null

                if(LoopCommandExpession.checkValidKeyword(currentKeyword)) {
                    command = new LoopCommandExpession(currentKeyword)
                } else if (ActionComandExpression.checkValidKeyword(currentKeyword)) {
                    command = new ActionComandExpression(currentKeyword)
                }

                if(command !== null) {
                    if(command.parse(context)) {
                        this.commands.push(command)
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            }
        }

        return true
    }

    run(): boolean {
        const cntCommands = this.commands.length

        for(let i = 0; i < cntCommands; i++) {
            const bOK = this.commands[i].run()

            if(!bOK) return false
        }

        return true
    }

    getDescription(): string {
        return "{" + this.commands.map(command => command.getDescription()).join(", ") + "}"
    }
}