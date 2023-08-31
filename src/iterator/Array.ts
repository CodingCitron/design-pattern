import Aggregator from "./Aggregator";
import ArrayIterator from "./ArrayIterator";
import Item from "./Item";
import Iterator from "./Iterator"

class Array implements Aggregator<Item> {
    private items: Item[]

    constructor(items: Item[]) {
        this.items = items
    }

    public getItem (index: number) {
        return this.items[index]
    }

    public get count() {
        return this.items.length
    }

    iterator(): Iterator<Item> {
        return new ArrayIterator(this)
    }
}

export default Array