class Postss extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <h2>es un post</h2>
        `
    }
}

customElements.define('app-postss', Postss)