function validar() {
    var nome = form1.nome.value;
    var email = form1.email.value;
    if (nome == "") {
    alert('Preencha o campo com seu nome');
    form1.nome.focus();
    return false;
    }
    if (email == "") {
        alert('preencha o campo com seu email');
        form1.email.focus();
        return false;
    }
 }



