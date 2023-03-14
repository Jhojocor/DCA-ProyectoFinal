class CreatePost extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <h2>hola de prueba 2</h2>
        `
    }
}

customElements.define('app-createpost', CreatePost)