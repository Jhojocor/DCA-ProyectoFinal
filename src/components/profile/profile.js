class Profile extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <h2>hola de prueba</h2>
        `
    }
}

customElements.define('app-profile', Profile)