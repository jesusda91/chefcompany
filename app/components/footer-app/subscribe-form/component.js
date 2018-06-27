/* global swal */
import Component from '@ember/component';
import { match } from '@ember/object/computed';
export default Component.extend({

	classNames: ["row"],

	documentTypes: Object.freeze(["CEDULA DE CIUDADANIA", "PASAPORTE", "CEDULA EXTRANJERA", "NIT", "TARJETA DE IDENTIDAD"]),

	isEmailValid: match('email', /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/),

	actions: {
		onSubscribe() {
			const { name, email, document, phone, documentType, allRights } = this;
			const isEmailValid = this.get("isEmailValid");
			if (!isEmailValid) {
				return swal(
					'Error!',
					'El correo electronico ingresado no es valido',
					'error'
				)
			}
			if (name && email && document && phone && documentType && allRights) {
				this.blankFields();
				return swal(
					'Exito!',
					'Te has suscrito satisfactoriamente!',
					'success'
				)
			}
			return swal(
				'Error!',
				'Todos los campos son requeridos!',
				'error'
			);

		}
	},

	blankFields() {
		this.set("name", null);
		this.set("email", null);
		this.set("document", null);
		this.set("phone", null);
		this.set("documentType", null);
		this.set("allRights", null);
	}
});
