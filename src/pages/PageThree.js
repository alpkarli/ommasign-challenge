import Page from "./Page";

class PageThree extends Page {
	template = `
    <div class="container-top container-blue">
        <div class="mid-container mid-container--justifiy-center">
            <div class="drink-container">
                <img src="/images/coffee.png" class="animate__animated animate__zoomInDown" />
                <p class="drink-text text-left animate__animated animate__rotateInDownLeft">BOL KÖPÜKLÜ KAHVE</p>
                <p class="price-text text-center animate__animated animate__bounceIn">12 TL</p>
            </div>
            <div class="drink-container"> 
                <img src="/images/soda.png" class="animate__animated animate__zoomInDown" />
                <p class="drink-text text-right animate__animated animate__rotateInDownRight">BUZ GİBİ LİMONATA</p>
                <p class="price-text text-center animate__animated animate__bounceIn">14 TL</p>
            </div>
        </div>
    </div>
    <div class="container-bottom">
    </div>
    `;
    transition = true;
}

export default PageThree;
