import Auth from './auth.js';

class Store {
    constructor() {
        this.auth = Auth;
    }
}

export default new Store();
