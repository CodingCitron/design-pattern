import Item from "./Item";

export default class Sword implements Item {
    use(): string {
        return '칼로 샥 베었다. 음메 잔인한가?'
    }
}