import { Administrador, UsuarioRegular } from "./clases/persona.js";
import Auth from "./clases/auth.js";

// Document Ready Function
document.addEventListener('DOMContentLoaded', () => {
    const formRegistro = document.getElementById('form-registro');
    const formLogin = document.getElementById('form-login');
    const formReserva = document.getElementById('form-reserva');
    const formAdminReserva = document.getElementById('form-admin-reserva');
    const containerRegisterForm = document.getElementById('register-container')
    const containerLoginForm = document.getElementById('login-container')
    const containerReservationForm = document.getElementById('create-reservation-container')
    const containerAdminReservationForm = document.getElementById('create-admin-reservation-container')
    
    containerRegisterForm.style.display = 'none'
    containerReservationForm.style.display = 'none'
    containerAdminReservationForm.style.display = 'none'
    

    console.log("Hola")

    // Event listener para registrar un nuevo usuario
    formRegistro.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const usuario = new UsuarioRegular(nombre, email);
        usuario.registrarse();
        Auth.login(usuario);
    });

    // Event listener para iniciar sesión
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email-login').value;
        const usuario = Auth.getUser();
        if (usuario && usuario.email === email) {
            console.log(`${usuario.nombre} ha iniciado sesión`);
            Auth.login(usuario);
        } else {
            console.log('Usuario no encontrado');
        }
    });

    // Event listener para crear una reserva (usuario regular)
    formReserva.addEventListener('submit', (e) => {
        e.preventDefault();
        const reserva = document.getElementById('reserva').value;
        const usuario = Auth.getUser();
        if (usuario) {
            const user = new UsuarioRegular(usuario.nombre, usuario.email);
            user.crearReserva(reserva);
        }
    });

    // Event listener para crear una reserva (administrador)
    formAdminReserva.addEventListener('submit', (e) => {
        e.preventDefault();
        const reservas = [
            { nombre: 'Juan', reserva: 'Reserva 1' },
            { nombre: 'Ana', reserva: 'Reserva 2' }
        ];
        const admin = Auth.getUser();
        if (admin) {
            const adminUser = new Administrador(admin.nombre, admin.email);
            adminUser.crearReservaParaVarios(reservas);
        }
    });
});