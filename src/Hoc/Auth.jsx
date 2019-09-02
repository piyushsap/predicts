const Auth = {
    isAuthenticated: false,
    isAdmin: false,
    authenticate(cb) {
      return localStorage.getItem('user') || false; 
    },
    adminAuth(cb) {
      if(localStorage.getItem('userID')==='-LnMxjVfBeDinWZeqL87')
        return true; 
    },
    signout(cb) {
      localStorage.deleteItem('user')
      setTimeout(cb, 100);
    }
  };
export default Auth;