class Card extends HTMLElement{
    constructor(){
        super();

        let card= document.createElement('div')
        card.className="card"
        let signs = ['♣','♦','♥','♠']
        let tipus = Number(this.getAttribute('data-sign'))

        let sign=document.createElement('div')
        sign.classList.add('sign')

        sign.innerHTML=signs[tipus]

        if (tipus==1 || tipus==2) card.classList.add('red')

        let num = Number(this.getAttribute('data-value'))

        let number =document.createElement('div')
        number.classList.add('number')
        number.innerHTML=num

        let value =document.createElement('div')
        value.classList.add('value')
        value.appendChild(sign)
        value.appendChild(number)

        card.appendChild(value)
        card.appendChild(sign.cloneNode(true))
        card.appendChild(value.cloneNode(true))

        let stilus = document.createElement('link')
        stilus.setAttribute('rel','stylesheet')
        stilus.setAttribute('href','style.css')

        const shadow=this.attachShadow({mode:'open'})
        shadow.appendChild(stilus)
        shadow.appendChild(card)

    }
}
customElements.define('my-card',Card)