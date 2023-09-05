export default class Tiger {
    private _name: string | null = null

    get name (): string {
        return this._name || '' 
    }

    set name (value: string) {
        this._name = value
    }

    roar(): string {
        return `으르렁~`
    }
}