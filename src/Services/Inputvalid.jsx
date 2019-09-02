const validEmailRegex = RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

const Validate = (target,errors) => {
    let name = target.name,
      value = target.value;

    switch (name) {
        case 'email':
          errors.email =
            validEmailRegex.test(value)
              ? ''
              : 'Email is not valid!';
          break;
        case 'password':
          errors.password =
            value.length < 8
              ? 'Password must be 8 characters long!'
              : '';
          break;
        default:
          errors[name] =
          value!== ''
            ? ''
            : "Field can't be empty";
          break;
      }
      

     return errors
}

export default Validate;