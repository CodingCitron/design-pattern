import Car from "./Car"

export default class CarBuilder {
    private engine?: string // 엔진 이름
    private airbag?: boolean // 에어백 여부
    private color?: string // 차량 색상
    private cameraSensor?: boolean // 카메라 센서 유무
    private AEB?: boolean // 자동급 제동장치 유무

    setEngine(v: string) {
        this.engine = v
        return this
    }

    setAirbag(v: boolean) {
        this.airbag = v
        return this
    }

    setColor(v: string) {
        this.color = v
        return this
    }

    setCameraSensor(v: boolean) {
        this.cameraSensor = v
        return this
    }

    setAEB(v: boolean) {
        this.AEB = v
        return this
    }

    build(): (Car | null) {
        if(this.engine === undefined) return null
        if(this.color === undefined) return null
        if(this.AEB === undefined) return null

        return new Car(this.engine, this.airbag, this.color, this.cameraSensor, this.AEB)
    }
}