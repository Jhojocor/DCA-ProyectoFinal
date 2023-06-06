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
            <div class="imgPost"><img src="${this.content}"></div>
            </div>`
        }
    }
}

customElements.define("my-post", MyPost);
export default MyPost;