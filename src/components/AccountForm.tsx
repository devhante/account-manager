import React from 'react';
import RootStore from '../stores/root';
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';
import './AccountForm.css'
import { AccountSerializer } from '../serializer';

interface IProps {
    root?: RootStore;
}

@inject('root')
@observer
export default class AccountForm extends React.Component<IProps> {
    private root = this.props.root as RootStore;

    private handleClickAddButton = () => {
        this.root.modifyStore.setModifyingAccount(new AccountSerializer());
        this.root.formStore.openForm('', '', '', '', true);
    }

    @action
    private handleClickSaveButton = () => {
        if (this.root.formStore.id === '') {
            alert("ID를 입력해 주세요.");
            return;
        } else if (this.root.formStore.id.length > 6) {
            alert("ID를 6자리 이내로 입력해 주세요.")
            return;
        } else if (this.root.formStore.password === '') {
            alert("비밀번호를 입력해 주세요.")
            return;
        } else if (this.root.formStore.name === '') {
            alert("사원명을 입력해 주세요.")
        } else if (this.root.modifyStore.modifyingAccount.id !== '') {
            this.root.accountStore.modify(
                this.root.formStore.id,
                this.root.formStore.password,
                this.root.formStore.name,
                this.root.formStore.position,
                this.root.formStore.isUsing
            );
        } else if (this.root.accountStore.isExistId(this.root.formStore.id)) {
            alert("이미 등록된 아이디입니다. 확인해 주세요.")
        } else {
            this.root.accountStore.add(new AccountSerializer(
                this.root.formStore.id,
                this.root.formStore.password,
                this.root.formStore.name,
                this.root.formStore.position,
                this.root.formStore.isUsing
            ));
            this.root.accountStore.save();
        }
        this.root.modifyStore.setModifyingAccount(new AccountSerializer());
        this.root.formStore.closeForm()
    }

    @action
    private handleClickDeleteButton = () => {
        if (window.confirm("정말 삭제하시겠습니까? 삭제 후 복구되지 않습니다.") === true) {
            if (this.root.modifyStore.modifyingAccount.id !== '') {
                this.root.accountStore.delete(this.root.formStore.id);
            }
            this.root.modifyStore.setModifyingAccount(new AccountSerializer());
            this.root.formStore.closeForm();
        }
    }

    @action
    private handleClickCancelButton = () => {
        this.root.modifyStore.setModifyingAccount(new AccountSerializer());
        this.root.formStore.closeForm();
    }

    @action
    private handleChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.root.formStore.id = event.currentTarget.value;
    }

    @action
    private handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.root.formStore.password = event.currentTarget.value;
    }

    @action
    private handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.root.formStore.name = event.currentTarget.value;
    }

    @action
    private handleChangePosition = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.root.formStore.position = event.currentTarget.value;
    }

    @action
    private handleChangeisUsing = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.root.formStore.isUsing = event.currentTarget.value === "true"
    }

    public render() {
        return (
            <React.Fragment>
                <div className="button addButton" onClick={this.handleClickAddButton}>신규등록</div>
                {this.root.formStore.isEnabled ?
                <form className="form">
                    <div>
                        <label className="formLabel">
                            <div>ID</div>
                            {this.root.modifyStore.modifyingAccount.id === '' ?
                            <React.Fragment>
                                <input type="text" value={this.root.formStore.id} onChange={this.handleChangeId} />
                                <div className='idText'>*6자리 이내</div>
                            </React.Fragment> :
                            <input type="text" value={this.root.formStore.id} onChange={this.handleChangeId} disabled />}
                        </label>
                    </div>
                    <div>
                        <label className="formLabel">
                            <div>PASSWORD</div>
                            <input type="text" value={this.root.formStore.password} onChange={this.handleChangePassword} />
                        </label>
                    </div>
                    <div>
                        <label className="formLabel">
                            <div>사원명</div>
                            <input type="text" value={this.root.formStore.name} onChange={this.handleChangeName} />
                        </label>
                    </div>
                    <div>
                        <label className="formLabel">
                            <div>직급</div>
                            <input type="text" value={this.root.formStore.position} onChange={this.handleChangePosition} />
                        </label>
                    </div>
                    <div>
                        <label className="formLabel">
                            <div>사용여부</div>
                            <input type="radio" name="isUsing" value="true" checked={this.root.formStore.isUsing} onChange={this.handleChangeisUsing} />Y
                            <input type="radio" name="isUsing" value="false" checked={!this.root.formStore.isUsing} onChange={this.handleChangeisUsing} />N
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