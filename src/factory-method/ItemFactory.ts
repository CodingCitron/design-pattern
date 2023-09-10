import Bow from "./Bow";
import Factory, { ItemName } from "./Factory";
import Item from "./Item";
import Shield from "./Shield";
import Sword from "./Sword";

class ItemCount {
    private _currentCount = 0

    constructor(private _maxCount: number) {}

    get maxCount() {
        return this._maxCount
    }

    isCraeteTable(): boolean {
        return this._currentCount < this.maxCount
    }

    increaseCount(): void {
        if(this.isCraeteTable()) this._currentCount++
    }
}

export default class ItemFactory extends Factory {
    private repository = new Map<ItemName, ItemCount>()

    constructor() {
        super()
   
        this.repository.set('sword', new ItemCount(3))
        this.repository.set('shield', new ItemCount(5))
        this.repository.set('bow', new ItemCount(2))
    }

    protected isCreateTable(name: ItemName): boolean {
        const itemCount = this.repository.get(name)
        return itemCount!.isCraeteTable()
    }

    protected createItem(name: ItemName): (Item | null) {
        let result: Item | null = null

        if(name === 'sword') result = new Sword()
        else if(name === 'shield') result = new Shield()
        else if(name === 'bow') result = new Bow()

        return result
    }

    protected postProcessItem(name: ItemName): void {
        const itemCount = this.repository.get(name)
        itemCount!.increaseCount()
    }
}