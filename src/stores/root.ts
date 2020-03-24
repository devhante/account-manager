import AccountStore from './account';

export default class RootStore {
    public accountStore: AccountStore;

    constructor() {
        this.accountStore = new AccountStore(this);
    }
}