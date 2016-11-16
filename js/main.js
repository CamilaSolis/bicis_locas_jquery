function validateForm(){
	var valnom = $('#name').val();
	var valape = $('#lastname').val();
	var valemail = $('#input-email').val();
	var valpass = $('#input-password').val();
	var valbici = $('select');

	//Nombre
	function nom(){
		if( valnom == null || valnom.length == 0 || /^\s+$/.test(valnom) ) {
			var container = $('.name-container');
			var nodoNom = "<span>¡¡No olvide ingresar su nombre!!</span>";
			container.append(nodoNom);
			return false;
			
		}	else if (/^[A-Za-z]*$/.test(valnom) == false || valnom.substring(0,1) == valnom.substring(0,1).toUpperCase() == false )  {
			var container = $('.name-container');  
			var nodoNom = "<span>Su nombre no puede tener numeros y debe comenzar con mayuscula</span>";
			container.append(nodoNom);
			return true;
		}
	}
	nom();

	//Apellido
	function apellido(){
		if( valape == null || valape.length == 0 || /^\s+$/.test(valape) ) {
			var container = $('.lastname-container');
			var nodoNom = "<span>¡¡No olvide ingresar su apellido!!</span>";
			container.append(nodoNom);
			return false;
		}
		else if (/^[A-Za-z]*$/.test(valape) == false || valape.substring(0,1) == valape.substring(0,1).toUpperCase() == false){  
			var container = $('.lastname-container');
			var nodoNom = "<span>Su apellido no puede tener numeros y debe comenzar con mayuscula</span>";
			container.append(nodoNom);
			return true;
		} 
	}
	apellido();


	//Email
	function email(){
		if( !(/\S+@\S+\.\S+/.test(valemail)) ) {
			var container = $('.email-container');
			var nodoNom = "<span>Correo no valido</span>";
			container.append(nodoNom);
			return false;
		}
	}
	email();

	//Password
	function password(){
		if( valpass == null || valpass.length < 6 || /^\s+$/.test(valpass)) {
			var container = $('#input-password').parent();
			var nodoNom = "<span>Su password debe tener minimo 6 caracteres</span>";
			container.append(nodoNom);
			return false;
		}
		else if(valpass === "password" || valpass==="123456" || valpass==="098754") {
			var container = $('#input-password').parent();
			var nodoNom = "<span>Su password no puede ser 'password', '123456' ni '098754'</span>";
			container.append(nodoNom);
			return true;
		}
	}
	password();

	//Tipo de Bici
	function bici(){
		var modelo = valbici.value;
        var container = $('select.form-control').parent()
		var nodoNom = "<span>Elija su tipo de bici</span>";
		container.append(nodoNom);
		return false;
		return modelo == 'Urbana' || modelo == 'Treking' || modelo == 'Eléctrica' || modelo == 'Estática';
	}
	bici();
}

//validateForm();
