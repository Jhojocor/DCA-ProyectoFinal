export default class Postss extends HTMLElement{
    static get observedAttributes(){
        return["pictureprofile", "user", "ubi", "content", "likes", "description", "coments", "date"];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    /*attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }*/

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles/postss.css">

        <div class="container">
                <section class="infoContainer">
                    <div class="userInfo">   
                        <img src="xd" class="profileImg">            
                        <div class="username"><h2>xd<br> <span>xd</span></h2></div>
                    </div>
                    <div class="postOptions"><p>•••</p></div>
                </section>
                <div class="imgPost"><img src="xd"></div>
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
                </section>xd likes</h4>
                <div class="description">
                    <h4 class="desUser">xd</h4>
                    <h4 class="desMess">xd</h4>
                </div>
                <h5>xd</h5>
                <h6>xd</h6>
            </div>
        `}
    }
}

customElements.define('app-postss', Postss)