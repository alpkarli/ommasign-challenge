import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import Transition from "./pages/Transition";

const routes = {
	"/": new Home(),
	"/1": new PageOne(),
	"/2": new PageTwo(),
	"/3": new PageThree(),
	"/Transition": new Transition(),
};

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes["/"].render();

let currentPage = 1;
const pageNumber = 3;

setTimeout(() => {
	changePage();
}, 0);

const changePage = () => {
	let pathName = `/${currentPage}`;
	onNavigate(pathName);
	waitAnim(pathName).then(() => {
		changePageNum();
		checkTransition(pathName) ? withTransition(pathName) : withoutTransition();
	})
}

const changePageNum = () => {
	currentPage === pageNumber ? (currentPage = 1) : currentPage++;
};

const waitAnim = (pathname) => {
	return routes[pathname]
		.animate();
}

const checkTransition = (pathName) => {
	return routes[pathName].transition;
}

const withTransition = () => {
	let transitionPath = '/Transition';
	setTimeout(() => {
		changePage();
	}, routes[transitionPath].duration);
	onNavigate(transitionPath);
}

const withoutTransition = () => {
	changePage();
}

const onNavigate = (pathName) => {
	window.history.pushState({}, pathName, window.location.origin + pathName);
	rootDiv.innerHTML = routes[pathName].render();
};

window.onpopstate = () => {
	rootDiv.innerHTML = routes[window.location.pathname].render();
};

