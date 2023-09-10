import Item from "./Item";

export default class Bow implements Item {
    use(): string {
        return '화살로 멀리서 쐈다! 약오르지'
    }
}