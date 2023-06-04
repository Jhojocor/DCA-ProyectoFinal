export enum AttributePost {
    "pictureprofile" = "pictureprofile",
    "user" = "user",
    "ubi" = "ubi",
    "content" = "content",
    "likes" = "likes",
    "description" = "description",
    "coments" = "coments",
    "date" = "date"
}

class MyPost extends HTMLElement {
    pictureprofile?: any;
    user?: string;
    ubi?: string;
    content?: any;
    likes?: string;
    propLikes = 0;
    description?: string;
    coments?: string;
    date?: string;

    static get observedAttributes(){
        const attrs: Record<AttributePost,null> = {
            pictureprofile: null,
            user: null,
            ubi: null,
            content: null,
            likes: null,
            description: null,
            coments: null,
            date: null
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: AttributePost, 
        oldValue: string | undefined, 
        newValue: string | undefined){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./styles/postss.css">
            <div class="container">
            <div class="infoContainer">
                <div class="userInfo">   
                    <img src="${this.pictureprofile}" class="profileImg">            
                    <div class="username"><h2>${this.user} <br> <span>${this.ubi}</span></h2></div>
                </div>
                    <div class="postOptions"><p>•••</p></div>
            </div>
        <div class="imgPost"><img src="${this.content}"></div>
        <div class="icons">
        <div class="IgIcons">
            <button type="submit" style="border: 0; margin: 0; padding: 0; display: flex">
                <img src="https://pbs.twimg.com/media/FrsEchKWwAEIRjr?format=png&name=120x120">
            </button>
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
        </div></div>
        <h4 class="counter">${this.propLikes} Likes</h4>
        <div class="description">
            <h4 class="desUser">${this.user}</h4>
            <h4 class="desMess">${this.description}</h4>
        </div>
        <h5>${this.coments}</h5>
        <h6>${this.date}</h6>
        </div>`
        }

        
        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click",()=>{
            if(this.propLikes === 0){
                this.propLikes += 1;
                this.render();
            }else{
                window.alert("¡Ya le diste like a esta publicación!");
            }
        });
    }
}

customElements.define("my-post", MyPost);
export default MyPost;