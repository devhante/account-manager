import React from 'react';
import RootStore from '../stores/root';
import { AccountSerializer } from '../serializer';
import './AccountItem.css';
import { inject, observer } from 'mobx-react';

interface IProps {
    info: AccountSerializer;
    root?: RootStore;
}

@inject('root')
@observer
export default class AccountItem extends React.Component<IProps> {
    private root = this.props.root as RootStore;

    private handleClick = (event: React.MouseEvent) => {
        this.root.modifyStore.setModifyingAccount(this.props.info);
    }

    public render() {
        let modifying = false;
        if(this.root.modifyStore.modifyingAccount.id === this.props.info.id) {
            modifying = true;
        }

        return (
            <tr onClick={this.handleClick} className={modifying ? 'modifying' : ''}>
                <td>{this.props.info.id}</td>
                <td>{this.props.info.password}</td>
                <td>{this.props.info.name}</td>
                <td>{this.props.info.position}</td>
                <td>{this.props.info.isUsing ? 'Y' : 'N'}</td>
            </tr>
        );
    }
}