(()=>{"use strict";class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n        <h2>hola</h2>\n        ")}}customElements.define("app-button",s);class e extends HTMLElement{static get observedAttributes(){return["img","name","user"]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n        <link rel="stylesheet" href="./styles/suggest.css">\n        <section class="suggestProfile">\n            <img class="img" src="xd">\n            <h3>xd<br> <span>xd</span></h3>\n        </section>\n        ')}}customElements.define("app-profile",e);class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n        <h2>hola de prueba 2</h2>\n        ")}}customElements.define("app-createpost",t);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n        <h2>holasss</h2>\n        ")}}customElements.define("app-login",n);class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n        <section class="Register">\n        <link rel="stylesheet" href="./styles/Register.css">\n            <img class="Logo" src="https://pbs.twimg.com/media/FrsDBPnXgAEPTV7?format=png&name=240x240">\n            <h3>Registrate para ver fotos y videos de tus amigos</h3>\n            <button>Log in with Facebook</button>\n            <h3>OR</h3>\n            <app-form></app-form>\n            <p id="Terms">By signing up, you agree to our <b>Terms, Data Policy</b> and <b>Cookies Policy</b></p>\n        </section>\n        <section class="GoLogin">\n            <p>Have an account? <t>Enter</t></p>\n        </section>\n        <section class="Download">\n            <p>Download the app</p>\n            <img class="Store" src="https://pbs.twimg.com/media/FvV8gUOXoAAhaBq?format=jpg&name=large">\n            <img class="Store" src="https://pbs.twimg.com/media/FvV8gUjXsAEc2ht?format=jpg&name=large">\n        </section>\n        <section>\n            <p class="GreySmall">Icesi · About · Blog · Jobs · Help · API  Privacy · Terms · Top Accounts · Hashtags · Locations · TalkiAbout Lite · Contact Uploading & Non-Users · Dance · Food & Drink · Home & Garden · Music · Visual Arts</p>\n            <p class="GreySmall">English ˅  ·  © 2023 TalkiAbout from Icesi</p>\n        </section>\n        ')}}customElements.define("app-register",o);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n        <h2>Form hexo</h2>\n        ")}}customElements.define("app-form",i);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){var s;this.render();const e=null===(s=this.shadowRoot)||void 0===s?void 0:s.querySelector("button");null==e||e.addEventListener("click",(()=>{const s=new CustomEvent("create-post",{composed:!0});this.dispatchEvent(s)}))}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n            <link rel="stylesheet" href="./styles/nav.css">\n            <link rel="preconnect" href="https://fonts.googleapis.com">\n            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">\n            <section>\n                <section class="Options">\n                    <img class="Logo" src="https://pbs.twimg.com/media/FrsDBPnXgAEPTV7?format=png&name=240x240">\n\n                    <div class="IconText">\n                        <img src="https://pbs.twimg.com/media/FrsEepdXsAEo2-Z?format=png&name=120x120">\n                        <h3>Home</h3>\n                    </div>\n                    <div class="IconText">\n                        <img src="https://pbs.twimg.com/media/FrsEhGdX0AAJQiZ?format=png&name=120x120">\n                        <h3>Search</h3>\n                    </div>\n                    <div class="IconText">\n                        <img src="https://pbs.twimg.com/media/FrsEchHWcAMxoOi?format=png&name=120x120">\n                        <h3>Messages</h3>\n                    </div>\n                    <div class="IconText">\n                        <img src="https://pbs.twimg.com/media/FrsEeraXgAMNizS?format=png&name=120x120">\n                        <h3>Notifications</h3>\n                    </div>\n                    <div class="IconText">\n                        <button type="submit" style="border: 0; margin: 0; padding: 0; display: flex">\n                            <img src="https://pbs.twimg.com/media/FrsEchQXsAAX_KM?format=png&name=120x120">\n                            <h3>New</h3>\n                        </button>\n                    </div>\n                    <div class="IconText">\n                        <img class="ProfilePic" src="https://pbs.twimg.com/media/FrsEer6XsAE7aO0?format=png&name=120x120">\n                        <h3>Profile</h3>\n                    </div>\n                </section>\n\n                <section class="End">\n                    <div class="IconText">\n                        <img src="https://pbs.twimg.com/media/FrsEerWWwAIOOnV?format=png&name=120x120">\n                        <h3>Settings</h3>\n                    </div>\n                </section>\n            </section>')}}customElements.define("my-nav",a);class r extends HTMLElement{static get observedAttributes(){return["img","name"]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n        <link rel="stylesheet" href="./styles/storie.css">\n            <section class="storie1">\n                <img class="imgPrueba" src="xd" alt="PicStories">\n                <p>xd</p>\n            </section>\n        ')}}var c;customElements.define("app-storie",r),function(s){s.pictureprofile="pictureprofile",s.user="user",s.ubi="ubi",s.content="content",s.likes="likes",s.description="description",s.coments="coments",s.date="date"}(c||(c={}));class p extends HTMLElement{static get observedAttributes(){return Object.keys({pictureprofile:null,user:null,ubi:null,content:null,likes:null,description:null,coments:null,date:null})}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}attributeChangedCallback(s,e,t){this[s]=t,this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="./styles/postss.css">\n            <div class="container">\n            <div class="infoContainer">\n                <div class="userInfo">   \n                    <img src="${this.pictureprofile}" class="profileImg">            \n                    <div class="username"><h2>${this.user} <br> <span>${this.ubi}</span></h2></div>\n                </div>\n                    <div class="postOptions"><p>•••</p></div>\n            </div>\n        <div class="imgPost"><img src="${this.content}"></div>\n        <div class="icons">\n        <div class="IgIcons">\n            <img src="https://pbs.twimg.com/media/FrsEchKWwAEIRjr?format=png&name=120x120">\n            <img src="https://pbs.twimg.com/media/FrsEchHWcAMxoOi?format=png&name=120x120">\n            <img src="https://pbs.twimg.com/media/FrsEhGkX0AI7Gge?format=png&name=120x120">\n        </div>\n        <div class="carousel">\n            <div class="grayCircle"></div>\n            <div class="grayCircle"></div>\n            <div class="blueCircle"></div>\n            <div class="grayCircle"></div>\n            <div class="grayCircle"></div>\n        </div>\n        <div class="saveIcon">\n            <img src="https://pbs.twimg.com/media/FrsEhGIWAAk_bF4?format=png&name=120x120">\n        </div></div>\n        <h4 class="counter">${this.likes}</h4>\n        <div class="description">\n            <h4 class="desUser">${this.user}</h4>\n            <h4 class="desMess">${this.description}</h4>\n        </div>\n        <h5>${this.coments}</h5>\n        <h6>${this.date}</h6>\n        </div>`)}}customElements.define("my-post",p);class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n        <link rel="stylesheet" href="./styles/nav.css">\n        <link rel="stylesheet" href="./styles/storie.css">\n        <link rel="stylesheet" href="./styles/postss.css">\n        <link rel="stylesheet" href="./styles/suggest.css">\n\n        <section id="mainContenedor">\n\n        <section id="NavBar">\n            <img class="Logo" src="https://pbs.twimg.com/media/FrsDBPnXgAEPTV7?format=png&name=240x240">\n            <div class="section">\n                <app-nav img="https://pbs.twimg.com/media/FrsEepdXsAEo2-Z?format=png&name=120x120" text="Home"></app-nav>\n                <app-nav img="https://pbs.twimg.com/media/FrsEhGdX0AAJQiZ?format=png&name=120x120" text="Search"></app-nav>\n                <app-nav img="https://pbs.twimg.com/media/FrsEchHWcAMxoOi?format=png&name=120x120" text="Messages"></app-nav>\n                <app-nav img="https://pbs.twimg.com/media/FrsEeraXgAMNizS?format=png&name=120x120" text="Notifications"></app-nav>\n                <app-nav img="https://pbs.twimg.com/media/FrsEchQXsAAX_KM?format=png&name=120x120" text="New"></app-nav>\n                <app-nav img="https://pbs.twimg.com/media/FrsEer6XsAE7aO0?format=png&name=120x120" text="Profile"></app-nav>\n            </div>\n            <div class="End">\n                <app-nav img="https://pbs.twimg.com/media/FrsEerWWwAIOOnV?format=png&name=120x120" text="Settings"></app-nav>\n            </div>\n        </section>\n\n        <section class="arreglo">\n        <article class="container1">\n            <app-storie name="Cristiano" img="https://img.olympicchannel.com/images/image/private/f_auto/t_1-1_300/primary/pcxgwhoweqzzhiuqbwqw"></app-storie>\n            <app-storie name="Neymar Jr" img="https://img.lalr.co/cms/2017/09/01141420/NeymarJR.jpg?size=sm&ratio=sq&f=jpg"></app-storie>\n            <app-storie name="Anuel" img="https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/31/a3/4e/31a34e1a-6b2d-27d7-110d-0db9a9aa42c5/pr_source.png/375x375bb.jpg"></app-storie>\n            <app-storie name="Mora" img="https://pbs.twimg.com/profile_images/1509033228874694659/KjCCiVZI_400x400.jpg"></app-storie>\n        </article>\n        <app-postss pictureprofile="https://anime.atsit.in/es/wp-content/uploads/2023/01/quien-es-dark-deku-y-que-tan-fuerte-es-en-comparacion-con-otros-personajes-de-mha.jpg" user="Jhojocor" ubi="cali, valle" content="https://i.pinimg.com/originals/b6/97/45/b69745e6dde3a0c1065c9d08d8c830be.jpg" likes="50" description="En el concierto de rojuu" coments="Rojuu foreva" date="Friday"></app-postss>\n        <app-postss pictureprofile="https://www.elcolombiano.com/binrepository/660x645/0c0/780d565/none/11101/CPLQ/w660-689207-feidremixexclusivo_41960947_20230317123656.jpg" user="dilancano_" ubi="cali, valle" content="https://www.eluniverso.com/resizer/qGzhwh-7GEsvNWXj_OMmCI5EN2o=/636x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/PKSIMOCBHZB7FP4QRQTMHYXYJY.jpg" likes="222" description="La buena fai" coments="viva el ferxxo mor" date="today"></app-postss>\n        <app-postss pictureprofile="https://www.elcolombiano.com/binrepository/660x645/0c0/780d565/none/11101/CPLQ/w660-689207-feidremixexclusivo_41960947_20230317123656.jpg" user="dilancano_" ubi="cali, valle" content="https://caracoltv.brightspotcdn.com/dims4/default/b7ef876/2147483647/strip/false/crop/1500x1000+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F94%2F2b%2F206da0a64bd2b69fa432deaa9206%2Ffeid-bogota-mor-movistar-arena.jpg" likes="1550" description="En el concierto de ferxxo" coments="#ferxxo" date="Friday"></app-postss>\n        </section>\n\n        <section class="suggestBoxContainer">\n        <app-profile name="Dilan" user="DilanCan0" img="https://www.elcolombiano.com/binrepository/660x645/0c0/780d565/none/11101/CPLQ/w660-689207-feidremixexclusivo_41960947_20230317123656.jpg"></app-profile>\n            <section class="suggestText">\n                <h2>Suggestions for you</h2>\n                <h3>View all</h3>\n            </section>\n            <app-suggest img="https://files.antena2.com/antena2/public/podcast/field/images/cali.png?VersionId=aj1whX6TUlTagS068GaKAm6BXZZsuaKR" name="Deportivo cali" follow="Jhojocor" number="42"></app-suggest>\n            <app-suggest img="https://upload.wikimedia.org/wikipedia/commons/a/ad/Arc%C3%A1ngel_%22La_Entrevista%22_-_A_solas_con_Tony_Dandrades.jpg" name="Arcangel" follow="Santygr21" number="12"></app-suggest>\n            <app-suggest img="https://thumbs.dreamstime.com/b/fondo-negro-vectorial-del-logotipo-de-nike-marca-para-uso-impreso-ropa-deportiva-y-fitness-183282388.jpg" name="Nike" follow="Ferxxo" number="100"></app-suggest>\n        </section>\n\n        </section>\n\n\n        ')}}customElements.define("app-container",m)})();