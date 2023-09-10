import Item from "./Item";

export type ItemName = 'sword' | 'shield' | 'bow'

export default abstract class Factory {
    protected abstract isCreateTable(name: ItemName): boolean
    protected abstract createItem(name: ItemName): (Item | null)
    protected abstract postProcessItem(name: ItemName): void

    create(name: ItemName): Item | null {
        const bCreateTable = this.isCreateTable(name)

        if(bCreateTable) {
            const item = this.createItem(name)
            this.postProcessItem(name)

            return item
        }

        return null
    }
}