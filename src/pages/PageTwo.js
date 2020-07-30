import Page from "./Page";

class PageTwo extends Page {
    template = `
    <div class="flex-container">
        <div class="row-container animate__animated animate__slideInLeft">
            <div class="flex-content-container-top"> 
                <div class="product-text">
                    <h1 class="animate__animated animate__bounce">
                        TURKO<br/>SANDWICH
                    </h1>
                </div>
                
                <div class="text-container-60 animate__animated animate__backInDown">
                    <hr class="solid">
                    <p>
                    tavuk göğüs fileto, mısır irmiği ile süslemeli özel ekmeği, 
                    spicy sosu, domatesi ve doğranmış maruldan oluşan sandwich
                    </p>
                </div>
                <img class="img-container" src="/images/sndwch.png" />
            </div>
            <div class="flex-content-container-bottom">
                <p>50 TL</p>
            </div>
        </div>
        <div class="row-container animate__animated animate__slideInUp animate__delay-1s">
            <div class="flex-content-container-top"> 
                <div class="product-text">
                    <h1 class="animate__animated animate__bounce">
                        CHEESE<br/>CHEDDAR
                    </h1>
                </div>
                
                <div class="text-container-60 animate__animated animate__backInDown">
                    <hr class="solid">
                    <p>
                        büyük boy susamlı sandviç ekmeği, mayonez, doğranmış
                        marul, soğan halkaları, nefis barbekü sosu
                        ve 2 adet cheddar peyniri 
                    </p>
                </div>
                <img class="img-container" src="/images/hmbrgr-2.png" />
            </div>
            <div class="flex-content-container-bottom">
                <p>80 TL</p>
            </div>
        </div>
        <div class="row-container animate__animated animate__slideInRight animate__delay-2s">
        <div class="flex-content-container-top"> 
            <div class="product-text">
                <h1 class="animate__animated animate__bounce">
                    FÜME<br/>SANDWICH
                </h1>
            </div>
            
            <div class="text-container-60 animate__animated animate__backInDown">
                <hr class="solid">
                <p>
                    füme eti, barbekü sosu, cheddar peyniri ve 
                    çıtır kaplamalı soğanları ile nefis bir seçim
                </p>
            </div>
            <img class="img-container" src="/images/sndwch-2.png" />
            </div>
            <div class="flex-content-container-bottom">
                <p>70 TL</p>
            </div>
        </div>
    </div>
    `;
    transition = false;
    duration = 7000;
}

export default PageTwo;
