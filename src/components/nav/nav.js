class Nav extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <h2>Navegando ando</h2>
        `
    }
}

customElements.define('app-nav', Nav)