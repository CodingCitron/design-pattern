import Image from "./Image";
import RealImage from "./RealImage";

export default class ProxyImage implements Image {
    private image: RealImage | null = null
    private domLayout: HTMLDivElement | null = null
    private domTitle: HTMLDivElement | null = null

    constructor(private title: string, private url: string, private parent: Element) {
        this.domLayout = document.createElement('div')
        this.domLayout.classList.add('layout')
        this.parent.append(this.domLayout)

        this.domTitle = document.createElement('div')
        this.domTitle.classList.add('title-proxy')
        this.domTitle.innerHTML = `<span>${this.title}</span><br/><span>Click to load</span>`
        this.domLayout.append(this.domTitle)
    }

    append() {
        if(this.image) return

        const domLayout = this.domLayout as HTMLDivElement 
        domLayout.addEventListener('click', () => {
            domLayout.style.border = 'none'
            domLayout.innerHTML = ''
            this.image = new RealImage(this.title, this.url, domLayout)
            this.image.append()
        })
    }
}