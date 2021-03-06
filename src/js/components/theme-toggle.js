// For syntax highlighting only
const html = String.raw;

class ThemeToggle extends HTMLElement {
	constructor() {
		super();

		this.STORAGE_KEY = 'user-color-scheme';
		this.COLOR_MODE_KEY = '--color-mode';
	}

	connectedCallback() {
		this.render();
	}

	getCSSCustomProp(propKey) {
		let response = getComputedStyle(document.documentElement).getPropertyValue(propKey);

		// Tidy up the string if there’s something to work with
		if (response.length) {
			response = response.replace(/\'|"/g, '').trim();
		}

		// Return the string response by default
		return response;
	}

	applySetting(passedSetting) {
		let currentSetting = passedSetting || localStorage.getItem(this.STORAGE_KEY);

		if (currentSetting) {
			document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
			this.setButtonLabelAndStatus(currentSetting);
		} else {
			this.setButtonLabelAndStatus(this.getCSSCustomProp(this.COLOR_MODE_KEY));
		}
	}

	toggleSetting() {
		let currentSetting = localStorage.getItem(this.STORAGE_KEY);

		switch (currentSetting) {
			case null:
				currentSetting =
					this.getCSSCustomProp(this.COLOR_MODE_KEY) === 'dark' ? 'light' : 'dark';
				break;
			case 'light':
				document.getElementById("avatar").classList.remove("light");
				document.querySelector("body").classList.remove("light");
				document.querySelector("header .nav").classList.remove("light");
				document.querySelector("footer .nav").classList.remove("light");
				currentSetting = 'dark';
				break;
			case 'dark':
				document.getElementById("avatar").classList.add("light");
				document.querySelector("body").classList.add("light");
				document.querySelector("header .nav").classList.add("light");
				document.querySelector("footer .nav").classList.add("light");
				currentSetting = 'light';
				break;
		}

		localStorage.setItem(this.STORAGE_KEY, currentSetting);

		return currentSetting;
	}

	setButtonLabelAndStatus(currentSetting) {
		this.modeToggleButton.innerText = `${
      currentSetting === 'dark' ? 'Light' : 'Dark'
    } theme`;
		this.modeStatusElement.innerText = `Color mode is now "${currentSetting}"`;
	}

	render() {
		this.innerHTML = html `
      <div class="[ theme-toggle ] [ md:ta-right gap-top-500 ]">
        <div role="status" class="[ visually-hidden ][ js-mode-status ]"></div>
        <button class="[ button ] [ font-base text-base weight-bold ] [ js-mode-toggle ]">
          Dark theme
        </button>
      </div>
    `;

		this.afterRender();
	}

	afterRender() {
		this.modeToggleButton = document.querySelector('.js-mode-toggle');
		this.modeStatusElement = document.querySelector('.js-mode-status');

		this.modeToggleButton.addEventListener('click', evt => {
			evt.preventDefault();

			this.applySetting(this.toggleSetting());
		});

		this.applySetting();
	}
}

if ('customElements' in window) {
	customElements.define('theme-toggle', ThemeToggle);
}

export default ThemeToggle;