import ManagerStore from './manager';

export default class RootStore {
    public managerStore: ManagerStore;

    constructor() {
        this.managerStore = new ManagerStore(this);
    }
}