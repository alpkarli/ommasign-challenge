export default class Page {
    template = `Template`;
    duration = 5000;
    transition = false;

	animate() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log("Animation Finished");
				resolve(true);
			}, this.duration);
		});
	}

	render() {
		return this.template;
	}
}