import Page from "./Page";

class PageOne extends Page {
    template = `
    <div class="container-top container-red">
        <div class="content-container"> 
            <h1 class="animate__animated animate__bounce">
                CHEESE CHEDDAR
            </h1>
            <div class="text-container-20 animate__animated animate__backInDown">
                <hr class="solid">
                    <p>
                    2 adet Hamburger eti, 3 katlı özel ekmeği, cheddar peyniri, <br />
                    salatalık turşusu, doğranmış marul ve soğan
                    </p>
                <hr class="solid">
            </div>
        </div>
        <div class="mid-container mid-container--justifiy-space">
            <img src="/images/hmbrgr.png" class="animate__animated animate__backInLeft" />
            <div class="prices-container animate__animated animate__backInRight">
                <div class="price-container"><span class="gram-container-m">(110gr)</span><span class="price-text">20 TL</span></div>
                <div class="price-container" style="margin-top:30px"><span class="gram-container-l">(170gr)</span><span class="price-text">30 TL</span></div>
            </div>
        </div>
    </div>
    <div class="container-bottom">
    </div>
    `;
    transition = true;
}

export default PageOne;
