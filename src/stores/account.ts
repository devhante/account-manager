import { observable, action } from 'mobx';
import { AccountSerializer} from '../serializer';
import RootStore from './root';

export default class AccountStore {
    @observable public accountList: AccountSerializer[] = [];
    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.load();
    }

    @action
    public add = (value: AccountSerializer) => {
        this.accountList.push(value);
        this.save();
    }

    @action
    public delete = (id: string) => {
        for (let i = 0; i < this.accountList.length; i++) {
            if (this.accountList[i].id === id) {
                this.accountList.splice(i, 1);
                this.save();
                return;
            }
        }
    }

    @action
    public modify = (id: string, password: string, name: string, position: string, isUsing: boolean) => {
        for (let i = 0; i < this.accountList.length; i++) {
            if (this.accountList[i].id === id) {
                this.accountList[i].password = password;
                this.accountList[i].name = name;
                this.accountList[i].position = position;
                this.accountList[i].isUsing = isUsing;
                this.save();
                return;
            }
        }
    }

    public load = () => {
        if(localStorage.getItem('account') !== null) {
            let text: string = localStorage.getItem('account') as string;
            let json = JSON.parse(text);
            for(let item of json) {
                this.add(new AccountSerializer(item.id, item.password, item.name, item.position, item.isUsing));
            }
        }
    }
    
    public save = () => {
        console.log(this.accountList);
        localStorage.setItem('account', JSON.stringify(this.accountList));
    }

    public isExistId = (id: string) => {
        for(let item of this.accountList) {
            if(item.id === id) {
                return true;
            }
        }
        return false;
    }
}