import { observable, action } from "mobx";
import RootStore from "./root";
import { AccountSerializer } from "../serializer";

export default class ModifyStore {
    @observable public modifyingAccount: AccountSerializer;
    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.modifyingAccount = new AccountSerializer();
    }

    @action
    public setModifyingAccount = (value: AccountSerializer) => {
        this.modifyingAccount = value;
        if(this.modifyingAccount.id !== '') {
            this.rootStore.formStore.openForm(
                this.modifyingAccount.id,
                this.modifyingAccount.password,
                this.modifyingAccount.name,
                this.modifyingAccount.position,
                this.modifyingAccount.isUsing
            );
        }
    }
}