const Auth = {
    isAuthenticated: false,
    authenticate(cb) {
      return localStorage.getItem('user') || false; 
    },
    signout(cb) {
      localStorage.deleteItem('user')
      setTimeout(cb, 100);
    }
  };
export default Auth;