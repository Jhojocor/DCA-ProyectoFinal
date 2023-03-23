import "./components/index.js"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles/nav.css">
        <link rel="stylesheet" href="./styles/storie.css">
        <link rel="stylesheet" href="./styles/postss.css">

        <section id="mainContenedor">

        <section id="NavBar">
            <img class="Logo" src="https://pbs.twimg.com/media/FrsDBPnXgAEPTV7?format=png&name=240x240">
            <div class="section">
                <app-nav img="https://pbs.twimg.com/media/FrsEepdXsAEo2-Z?format=png&name=120x120" text="Home"></app-nav>
                <app-nav img="https://pbs.twimg.com/media/FrsEhGdX0AAJQiZ?format=png&name=120x120" text="Search"></app-nav>
                <app-nav img="https://pbs.twimg.com/media/FrsEchHWcAMxoOi?format=png&name=120x120" text="Messages"></app-nav>
                <app-nav img="https://pbs.twimg.com/media/FrsEeraXgAMNizS?format=png&name=120x120" text="Notifications"></app-nav>
                <app-nav img="https://pbs.twimg.com/media/FrsEchQXsAAX_KM?format=png&name=120x120" text="New"></app-nav>
                <app-nav img="https://pbs.twimg.com/media/FrsEer6XsAE7aO0?format=png&name=120x120" text="Profile"></app-nav>
            </div>
            <div class="End">
                <app-nav img="https://pbs.twimg.com/media/FrsEerWWwAIOOnV?format=png&name=120x120" text="Settings"></app-nav>
            </div>
        </section>

        <section class="arreglo">
        <article class="container1">
            <app-storie name="Cristiano" img="https://img.olympicchannel.com/images/image/private/f_auto/t_1-1_300/primary/pcxgwhoweqzzhiuqbwqw"></app-storie>
            <app-storie name="Neymar Jr" img="https://img.lalr.co/cms/2017/09/01141420/NeymarJR.jpg?size=sm&ratio=sq&f=jpg"></app-storie>
            <app-storie name="Anuel" img="https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/31/a3/4e/31a34e1a-6b2d-27d7-110d-0db9a9aa42c5/pr_source.png/375x375bb.jpg"></app-storie>
            <app-storie name="Mora" img="https://pbs.twimg.com/profile_images/1509033228874694659/KjCCiVZI_400x400.jpg"></app-storie>
        </article>
        <app-postss pictureprofile="https://anime.atsit.in/es/wp-content/uploads/2023/01/quien-es-dark-deku-y-que-tan-fuerte-es-en-comparacion-con-otros-personajes-de-mha.jpg" user="Jhojocor" ubi="cali, valle" content="https://i.pinimg.com/originals/b6/97/45/b69745e6dde3a0c1065c9d08d8c830be.jpg" likes="50" description="En el concierto de rojuu" coments="Rojuu foreva" date="Friday"></app-postss>
        <app-postss pictureprofile="https://yt3.ggpht.com/GUW78kIdMM2mVjl-c1rkSD8DqNYSRZAfTUTie3j4xKFN6agTpdb9UiMDGwQB2yuoDpKB1a8QNn8=s900-c-k-c0x00ffffff-no-rj" user="dilancano_" ubi="cali, valle" content="https://www.eluniverso.com/resizer/qGzhwh-7GEsvNWXj_OMmCI5EN2o=/636x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/PKSIMOCBHZB7FP4QRQTMHYXYJY.jpg" likes="222" description="La buena fai" coments="viva el ferxxo mor" date="today"></app-postss>
        <app-postss pictureprofile="https://yt3.ggpht.com/GUW78kIdMM2mVjl-c1rkSD8DqNYSRZAfTUTie3j4xKFN6agTpdb9UiMDGwQB2yuoDpKB1a8QNn8=s900-c-k-c0x00ffffff-no-rj" user="dilancano_" ubi="cali, valle" content="https://caracoltv.brightspotcdn.com/dims4/default/b7ef876/2147483647/strip/false/crop/1500x1000+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F94%2F2b%2F206da0a64bd2b69fa432deaa9206%2Ffeid-bogota-mor-movistar-arena.jpg" likes="1550" description="En el concierto de ferxxo" coments="#ferxxo" date="Friday"></app-postss>
        </section>

        </section>


        `
        //hechos los componentes
    }
}

customElements.define('app-container', AppContainer)