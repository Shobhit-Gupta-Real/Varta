export const validateUser = (username) =>{
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const message = 'Enter Valid Username!'
    if (usernameRegex.test(username)) {
        return { isValid: true, message: '' };
      } else {
        return { isValid: false, message: message };
      }
}

export const validEmail = (email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const message = 'Enter Valid Email!'
    if (emailRegex.test(email)) {
        return { isValid: true, message: '' };
      } else {
        return { isValid: false, message: message };
      }
}