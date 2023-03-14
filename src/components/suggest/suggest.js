class Suggest extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <h2>sugerido pa</h2>
        `
    }
}

customElements.define('app-suggest', Suggest)