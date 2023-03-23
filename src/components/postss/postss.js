class Postss extends HTMLElement{
    static get observedAttributes(){
        return["pictureprofile", "user", "ubi", "content", "likes", "description", "coments", "date"];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles/postss.css">

        <div class="container">
                <section class="infoContainer">
                    <div class="userInfo">   
                        <img src="${this.pictureprofile}" class="profileImg">            
                        <div class="username"><h2>${this.user} <br> <span>${this.ubi}</span></h2></div>
                    </div>
                    <div class="postOptions"><p>•••</p></div>
                </section>
                <div class="imgPost"><img src="${this.content}"></div>
                <section class="icons">
                    <div class="IgIcons">
                        <img src="https://pbs.twimg.com/media/FrsEchKWwAEIRjr?format=png&name=120x120">
                        <img src="https://pbs.twimg.com/media/FrsEchHWcAMxoOi?format=png&name=120x120">
                        <img src="https://pbs.twimg.com/media/FrsEhGkX0AI7Gge?format=png&name=120x120">
                    </div>
                    <div class="carousel">
                        <div class="grayCircle"></div>
                        <div class="grayCircle"></div>
                        <div class="blueCircle"></div>
                        <div class="grayCircle"></div>
                        <div class="grayCircle"></div>
                    </div>
                    <div class="saveIcon">
                        <img src="https://pbs.twimg.com/media/FrsEhGIWAAk_bF4?format=png&name=120x120">
                    </div>
                </section>
                <h4 class="counter">${this.likes} likes</h4>
                <div class="description">
                    <h4 class="desUser">${this.user}</h4>
                    <h4 class="desMess">${this.description}</h4>
                </div>
                <h5>${this.coments}</h5>
                <h6>${this.date}</h6>
            </div>
        `
    }
}

customElements.define('app-postss', Postss)