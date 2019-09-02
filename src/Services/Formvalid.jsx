const validateForm = (errors) => {
  let valid = false;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = true)
  );
  return valid;
}
export default validateForm;