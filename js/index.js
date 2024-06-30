const Singupform = document.querySelector('#Singupform')
Singupform.addEventListener('submit', (e)=>{

    e.preventDefault()
    const Usuario = document.querySelector('#Usuario').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const cedula = document.querySelector('#cedula').value;
    const textarea = document.querySelector('#textarea').value;
    const genero = document.querySelector('#genero').value;
    const fechadenacimiento = document.querySelector('#fechadenacimiento').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    
    const elusuarioregistrado = usuarios.find(usuario => usuario.Usuario === Usuario );

    if(elusuarioregistrado){
        return Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Usuario registrado!",
            showConfirmButton: false,
          });
    }

    usuarios.push({Usuario: Usuario, email: email, password: password, nombre: nombre, apellido: apellido, cedula: cedula, textarea: textarea, genero:genero, fechadenacimiento: fechadenacimiento,})
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "¡Registrado con exito!",
        showConfirmButton: false,
      });
    window.location.href='../login.html'

})
