import Page from "./Page";

class PageThree extends Page {
	template = `
    <h1 class="animate__animated animate__wobble">P3</h1>
    `;
    transition = true;
    duration = 6000;
}

export default PageThree;
