// Auth class
class Auth {
    // Static method to log in a user
    static login(user) {
        const token = Auth.generateToken();
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
    }

    // Static method to log out a user
    static logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    // Static method to generate a token
    static generateToken() {
        return Math.random().toString(36).substr(2);
    }

    // Static method to check if user is authenticated
    static isAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    // Static method to get the logged-in user
    static getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default Auth