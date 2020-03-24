import React from 'react';
import RootStore from '../stores/root';
import { AccountSerializer } from '../serializer';

interface IProps {
    info: AccountSerializer;
    root?: RootStore;
}

export default class AccountItem extends React.Component<IProps> {
    public render() {
        return (
            <tr>
                <td>{this.props.info.id}</td>
                <td>{this.props.info.password}</td>
                <td>{this.props.info.name}</td>
                <td>{this.props.info.position}</td>
                <td>{this.props.info.isUsing ? 'Y' : 'N'}</td>
            </tr>
        );
    }
}