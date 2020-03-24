import { observable } from 'mobx';
import { ManagerSerializer} from '../serializer';
import RootStore from './root';

export default class ManagerStore {
    @observable public ManagerList: ManagerSerializer[] = [];
    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
}