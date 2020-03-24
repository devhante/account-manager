import React from 'react';
import RootStore from '../stores/root';
import { inject, observer } from 'mobx-react';
import AccountItem from './AccountItem';
import './AccountList.css';

interface IProps {
    root?: RootStore;
}

@inject('root')
@observer
export default class AccountList extends React.Component<IProps> {
    // @action
    // private test_save = () => {
    //     const root = this.props.root as RootStore;
    //     root.accountStore.AccountList = [
    //         new AccountSerializer("000123", "1234", "조경욱", "사원", true),
    //         new AccountSerializer("000124", "6789", "테스트", "인턴", true),
    //     ]
    //     root.accountStore.save();
    // }

    // @action
    // private test_load = () => {
    //     const root = this.props.root as RootStore;
    //     console.log(root.accountStore.AccountList);
    //     root.accountStore.load();
    //     console.log(root.accountStore.AccountList);
    // }

    public render() {
        const root = this.props.root as RootStore;
        const list = root.accountStore.AccountList.map((item) => (
            <AccountItem info={item} />
        ));

        return (
            <table>
                <thead>
                    <tr>
                        <th className="id">사원ID</th>
                        <th className="password">PASSWORD</th>
                        <th className="name">사원명</th>
                        <th className="position">직급</th>
                        <th className="isUsing">사용여부</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        );
    }
}