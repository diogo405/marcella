/**
 * Marcella
 * A js that saves user's form to session storage
 * https://github.com/diogo405/marcella
 * 
 * Author: Diogo Goncalves
 */
class Marcella {
	
	constructor() {
		if (!this.checkSupport()) {
			console.log('Marcella > session storage is not supported by this browser');
			return;
		}
		this.selector = '.js-marcella';
		this.loadData();
		this.bindFields();
	}

	get fields() { return Array.from(document.querySelectorAll(this.selector)); }

	checkSupport() {
		return window.sessionStorage;
	}

	loadData() {
		this.fields.forEach(field => {
			let key = field.name;
			let savedValue = window.sessionStorage.getItem(key);
			if (savedValue) {
				document.querySelector(`*[name="${field.name}"]`).value = savedValue;
			}
		});
	}

	bindFields() {
		this.fields.forEach(field => {
			field.addEventListener('blur', function() {
				let key = this.name;
				let value = this.value;
				window.sessionStorage.setItem(key, value);
				console.log('Marcella > field saved', this.outerHTML, value);
			});
		})
	}
}