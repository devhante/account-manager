import React from 'react';
import AccountManagerTemplate from './AccountManagerTemplate';
import AccountList from './AccountList';
import AccountForm from './AccountForm';
import RootStore from '../stores/root';

interface IProps {
    root?: RootStore;
}

export default class AccountManager extends React.Component<IProps> {
    public render() {
        return <AccountManagerTemplate list={<AccountList />} form={<AccountForm />} />;
    }
}