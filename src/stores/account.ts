import { observable } from 'mobx';
import { ManagerSerializer} from '../serializer';
import RootStore from './root';

export default class AccountStore {
    @observable public AccountList: AccountSerializer[] = [];
    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
}