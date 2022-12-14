import styles from "./test.less";

function component() {
	const element = document.createElement("div");

	element.innerHTML = "yoo";

	element.className = styles.dashTest;

	if (module.hot) {
		module.hot.accept();
	}

	return element;
}

document.body.appendChild(component());
