//
/**
 * If user is using a touch interface, add a 'touch' class to the body tag
 * @param {HTMLElement} node
 */
export function detectTouch(node) {
	window.addEventListener(
		'touchstart',
		function touched() {
			document.body.classList.add('touch');
			window.removeEventListener('touchstart', touched, false);
		},
		false
	);
}

/**
 * @param {HTMLElement} node
 * @typedef {Object} IntersectionObserverOptions - Options to pass to the IntersectionObserver API
 * @property {HTMLElement} [root]
 * @property {string} [rootMargin]
 * @property {number} [threshold]
 * @param {{ once?: boolean, cooldown?: number, options?: IntersectionObserverOptions, delay?: number, update?: *} | null } [config]
 */

export function intersectionObserver(node, config) {
	if (config === null) return;

	let supported = 'IntersectionObserver' in window;

	if (supported) {
		const onIntersection = (entry) => {
			node.dispatchEvent(new CustomEvent('intersection', { detail: entry }));
		};

		let timeout = null;

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting === true) {
				onIntersection(entries[0]);
				if (config.once) return observer.unobserve(node);
				if (config.cooldown) {
					observer.unobserve(node);
					if (timeout) clearTimeout(timeout);
					timeout = setTimeout(() => {
						observer.observe(node);
					}, config.cooldown);
				}
			}
		}, config.options);

		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(
			() => {
				observer.observe(node);
			},
			config.delay ? config.delay : 0
		);

		return {
			update: (update) => {
				console.log('update parameter changed');
				if (timeout) clearTimeout(timeout);
				observer.unobserve(node);
				observer.observe(node);
			},
			destroy: () => observer.unobserve(node)
		};
	}
	return;
}
