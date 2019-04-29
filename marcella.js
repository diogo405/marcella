/**
 * Marcella
 * A js that saves user's form
 * https://github.com/diogo405/marcella
 * 
 * Author: Diogo Goncalves
 */
class Marcella {
	
	constructor(form) {
		if (!this.checkSupport()) {
			console.log('Marcella > local storage is not supported by this browser');
			return;
		}

		this.form = form ? form : '';
		this.selector = '.js-marcella';
		this.loadData();
		this.bindFields();
	}

	get fields() { return Array.from(document.querySelectorAll(`${this.form} ${this.selector}`)); }

	checkSupport() {
		return window.localStorage;
	}

	loadData() {
		this.fields.forEach(field => {
			let key = field.name;
			let savedValue = window.localStorage.getItem(key);
			if (savedValue) {
				document.querySelector(`${this.form} *[name="${field.name}"]`).value = savedValue;
			}
		});
	}

	bindFields() {
		this.fields.forEach(field => {
			field.addEventListener('blur', function() {
				let key = this.name;
				let value = this.value;
				window.localStorage.setItem(key, value);
				console.log('Marcella > field saved', this.outerHTML, value);
			});
		})
	}
}