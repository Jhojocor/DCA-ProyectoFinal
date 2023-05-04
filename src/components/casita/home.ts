export default class Home extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML = `
        <h2>Esto es un home</h2>
        `}
    }
}

customElements.define('app-home', Home)