class Storie extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <h2>stories pa</h2>
        `
    }
}

customElements.define('app-storie', Storie)