import SumStrategy from "./SumStrategy";

export default class SumPrinter {
    print(startegy: SumStrategy, N: number, domOutput: Element) {
        const value = startegy.get(N)
        domOutput.innerHTML = `1 ~ ${N} 까지의 총합 = ${value}`
    }
}