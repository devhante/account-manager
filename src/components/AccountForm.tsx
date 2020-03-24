import React from 'react';
import RootStore from '../stores/root';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';
import './AccountForm.css'

interface IProps {
    root?: RootStore;
}

@inject('root')
@observer
export default class AccountForm extends React.Component<IProps> {
    @observable private id = '';
    @observable private password = '';
    @observable private name = '';
    @observable private position = '';
    @observable private isUsing = 'true';
    
    @action
    private handleChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.id = event.currentTarget.value;
    }

    @action
    private handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.password = event.currentTarget.value;
    }

    @action
    private handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.name = event.currentTarget.value;
    }

    @action
    private handleChangePosition = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.position = event.currentTarget.value;
    }

    @action
    private handleChangeisUsing = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.isUsing = event.currentTarget.value
    }

    public render() {
        return (
            <form className="form">
                <div>
                    <label className="formLabel">
                        <div>ID</div>
                        <input type="text" value={this.id} onChange={this.handleChangeId} />
                    </label>
                </div>
                <div>
                    <label className="formLabel">
                        <div>PASSWORD</div>
                        <input type="text" value={this.password} onChange={this.handleChangePassword} />
                    </label>
                </div>
                <div>
                    <label className="formLabel">
                        <div>사원명</div>
                        <input type="text" value={this.name} onChange={this.handleChangeName} />
                    </label>
                </div>
                <div>
                    <label className="formLabel">
                        <div>직급</div>
                        <input type="text" value={this.position} onChange={this.handleChangePosition} />
                    </label>
                </div>
                <div>
                    <label className="formLabel">
                        <div>사용여부</div>
                        <input type="radio" name="isUsing" value={this.isUsing} onChange={this.handleChangeisUsing} />
                    </label>
                </div>
            </form>
        );
    }
}