export class AccountSerializer {
    public id: string;
    public password: string;
    public name: string;
    public position: string;
    public isUsing: boolean;

    constructor(id?: string, password?: string, name?: string, position?: string, isUsing?: boolean) {
        this.id = id || '';
        this.password = password || '';
        this.name = name || '';
        this.position = position || '';
        this.isUsing = isUsing || true;
    }
}