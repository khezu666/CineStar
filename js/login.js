const Loginform = document.querySelector('#Loginform')
Loginform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const Usuario = document.querySelector('#Usuario').Value;
    const password = document.querySelector('#password').Value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const validusuario = usuarios.find(usuarios => usuarios.Usuario === Usuario && usuarios.password === password);
    if(!validusuario){
        return Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: "¡Contraseña y/o Usuarios incorrectos!",
            footer: ''
          });
    }
    swal.fire(`Bienvenido ${validusuario.name}`);
    window.location.href = '../Informacion personal.html'
})