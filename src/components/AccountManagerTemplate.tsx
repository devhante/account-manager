import React from 'react';
import RootStore from '../stores/root';
import './AccountManagerTemplate.css';

interface IProps {
    list: JSX.Element;
    form: JSX.Element;
    root?: RootStore;
}

export default class AccountManagerTemplate extends React.Component<IProps> {
    public render() {
        const list = this.props.list as JSX.Element;
        const form = this.props.form as JSX.Element;

        return (
            <div className="account-manager-template">
                <div className="list-wrapper">
                    {list}
                </div>
                <div className="form-wrapper">
                    {form}
                </div>
            </div>
        )
    }
}