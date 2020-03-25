import { observable, action } from "mobx";
import RootStore from "./root";

export default class FormStore {
    @observable public isEnabled = false;
    @observable public id: string;
    @observable public password: string;
    @observable public name: string;
    @observable public position: string;
    @observable public isUsing: boolean;
    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.id = '';
        this.password = '';
        this.name = '';
        this.position = '';
        this.isUsing = true;
    }

    @action
    public openForm = (id: string, password: string, name: string, position: string, isUsing: boolean) => {
        this.id = id;
        this.password = password;
        this.name = name;
        this.position = position;
        this.isUsing = isUsing;
        this.isEnabled = true;
    }

    @action
    public closeForm = () => {
        this.isEnabled = false;
        this.id = '';
        this.password = '';
        this.name = '';
        this.position = '';
        this.isUsing = true;
    }

    public openModifyForm = () => {
        if (this.rootStore.modifyStore.modifyingAccount.id !== '') {
            this.openForm(
                this.rootStore.modifyStore.modifyingAccount.id,
                this.rootStore.modifyStore.modifyingAccount.password,
                this.rootStore.modifyStore.modifyingAccount.name,
                this.rootStore.modifyStore.modifyingAccount.position,
                this.rootStore.modifyStore.modifyingAccount.isUsing
            );
        }
    }
}