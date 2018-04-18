import { observable, action } from 'mobx';
import { bind } from 'decko';

class Auth {
    @observable
    is = {
        logged: !!localStorage.getItem('isLoggenIn')
    };

    @bind
    @action
    login() {
        this.is.logged = true;
    }

    @bind
    @action
    logout() {
        this.is.logged = false;
    }
}

export default new Auth();
