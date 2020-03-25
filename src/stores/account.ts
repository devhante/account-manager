import { observable, action } from 'mobx';
import { AccountSerializer} from '../serializer';
import RootStore from './root';

export default class AccountStore {
    @observable public AccountList: AccountSerializer[] = [];
    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.load();
    }

    @action
    public add = (id: string, password: string, name: string, position: string, isUsing: boolean) => {
        this.AccountList.push(new AccountSerializer(id, password, name, position, isUsing));
    }

    public load = () => {
        if(localStorage.getItem('account') !== null) {
            let text: string = localStorage.getItem('account') as string;
            let json = JSON.parse(text);
            for(let item of json) {
                this.add(item.id, item.password, item.name, item.position, item.isUsing);
            }
        }
    }
    
    public save = () => {
        localStorage.setItem('account', JSON.stringify(this.AccountList));
    }
}