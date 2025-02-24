const inicioSesion = document.querySelector('#formSesion');
inicioSesion.addEventListener("submit", (e)=>{
    e.preventDefault();
    const usuario = document.querySelector('#usuarioinicio').value;
    const contrasena = document.querySelector('#contrainicio').value;

    if(usuario === '' || contrasena === ''){
        document.getElementById('error').innerHTML = 'Por favor, llene los campos.';
        return true;
    }
    else{
        signUp();   
    }
})

function signUp(){
    const usuarioIngre = document.querySelector('#usuarioinicio').value;
    const contraIngre = document.querySelector('#contrainicio').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioReg = usuarios.find(usuarios => usuarios.usuario === usuarioIngre);
    const contraReg = usuarios.find(usuarios => usuarios.contrasena === contraIngre);

    if(usuarioReg && contraReg){
        window.location.href="./CV.html";
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Usuario o contraseña incorrectos",
            text: "Por favor, verifique sus credenciales",
            confirmButtonText: "Aceptar"
        });
    }
}

function logOut(){
    location.assign("./index.html");
}