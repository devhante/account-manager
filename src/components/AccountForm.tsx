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
    @observable private isEnabledForm = false;
    @observable private id = '';
    @observable private password = '';
    @observable private name = '';
    @observable private position = '';
    @observable private isUsing = true;
    
    @action
    private closeForm = () => {
        this.isEnabledForm = false;
        this.id = '';
        this.password = '';
        this.name = '';
        this.position = '';
        this.isUsing = true;
    }

    @action
    private handleClickAddButton = () => {
        this.isEnabledForm = true;
    }

    @action
    private handleClickSaveButton = () => {
        if (this.id === '') {
            alert("ID를 입력해 주세요.");
            return;
        } else if (this.id.length > 6) {
            alert("ID를 6자리 이내로 입력해 주세요.")
            return;
        } else if (this.password === '') {
            alert("비밀번호를 입력해 주세요.")
            return;
        } else if (this.name === '') {
            alert("사원명을 입력해 주세요.")
        } else {
            this.props.root?.accountStore.add(this.id, this.password, this.name, this.position, this.isUsing);
        }
        this.closeForm()
    }

    @action
    private handleClickDeleteButton = () => {
        if (window.confirm("정말 삭제하시겠습니까? 삭제 후 복구되지 않습니다.") === true) {
            this.closeForm();
        }
    }

    @action
    private handleClickCancelButton = () => {
        this.closeForm();
    }

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
        this.isUsing = event.currentTarget.value === "true"
    }

    public render() {
        return (
            <React.Fragment>
                <div className="button addButton" onClick={this.handleClickAddButton}>신규등록</div>
                {this.isEnabledForm ?
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
                            <input type="radio" name="isUsing" value="true" checked={this.isUsing} onChange={this.handleChangeisUsing} />Y
                            <input type="radio" name="isUsing" value="false" checked={!this.isUsing} onChange={this.handleChangeisUsing} />N
                        </label>
                    </div>
                    <div className="formButtons">
                        <div className="button saveButton" onClick={this.handleClickSaveButton}>저장</div>
                        <div className="button deleteButton" onClick={this.handleClickDeleteButton}>삭제</div>
                        <div className="button cancelButton" onClick={this.handleClickCancelButton}>취소</div>
                    </div>
                </form>
                : <React.Fragment />}
            </React.Fragment>
        );
    }
}