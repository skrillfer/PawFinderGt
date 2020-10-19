export default {
    name: {required: {value: true, message: 'Nombre es requerido.'}},
    address: {required: {value: true, message: 'Direccion es requerido.'}},
    celular: {required: {value: true, message: 'Celular es requerido.'}},
    shelterName: {required: {value: true, message: 'Nombre del refugio es requerido.'}},
    email: {
      required: {value: true, message: 'Email es requerido.'},
      pattern: {
        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Invalid Email Format',
      },
    },
    password: {
      required: {value: true, message: 'Password es requerido.'},
    },
    repeatPassword: {
      required: {value: true, message: 'Confirmar password es requerido.'},
    },
  };