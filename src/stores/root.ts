import AccountStore from './account';
import FormStore from './form';
import ModifyStore from './modify';

export default class RootStore {
    public accountStore: AccountStore;
    public formStore: FormStore;
    public modifyStore: ModifyStore;

    constructor() {
        this.accountStore = new AccountStore(this);
        this.formStore = new FormStore(this);
        this.modifyStore = new ModifyStore(this);
    }
}