import Page from "./Page";

class Transition extends Page {
    template = `
    <div class="transition-container">
        <img src="/images/transition.png" />
        <h1 class="animate__animated animate__backInUp">BURGER</h1>
    </div>
    `;
    duration = 3000;
}

export default Transition;
