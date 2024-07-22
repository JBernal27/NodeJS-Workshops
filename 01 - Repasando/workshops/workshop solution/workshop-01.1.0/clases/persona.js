// Clase base Persona
class Persona {
    constructor(nombre, email) {
      this.nombre = nombre;
      this.email = email;
    }
  
    // Método para crear una reserva
    crearReserva(reserva) {
      console.log(`${this.nombre} ha creado una reserva: ${reserva}`);
    }
  }
  
  // Clase UsuarioRegular que extiende de Persona
  class UsuarioRegular extends Persona {
    constructor(nombre, email) {
      super(nombre, email);
    }
  
    // Método para registrarse como usuario regular
    registrarse() {
      console.log(`${this.nombre} se ha registrado como usuario regular`);
    }
  
    // Método para crear una reserva para este usuario
    crearReserva(reserva) {
      console.log(`${this.nombre} ha creado una reserva: ${reserva}`);
    }
  }
  
  // Clase Administrador que extiende de Persona
  class Administrador extends Persona {
    constructor(nombre, email) {
      super(nombre, email);
    }
  
    // Método para crear un usuario admin
    crearUsuarioAdmin(nombre, email) {
      console.log(`${nombre} ha sido creado como nuevo usuario admin con email: ${email}`);
    }
  
    // Método para crear una reserva para varios pasajeros
    crearReservaParaVarios(reservas) {
      reservas.forEach(reserva => {
        console.log(`Reserva creada para ${reserva.nombre}: ${reserva.reserva}`);
      });
    }
  
    // Método para eliminar una reserva
    eliminarReserva(reservaId) {
      console.log(`Reserva con ID ${reservaId} eliminada`);
    }
  
    // Método para actualizar una reserva
    actualizarReserva(reservaId, nuevaReserva) {
      console.log(`Reserva con ID ${reservaId} actualizada a: ${nuevaReserva}`);
    }
  }

export { Administrador, UsuarioRegular}