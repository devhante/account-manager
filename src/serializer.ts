export class ManagerSerializer {
    public id: number;
    public password: number;
    public name: string;
    public position: string;
    public isUsing: boolean;

    constructor(id: number, password: number, name: string, position: string, isUsing: boolean) {
        this.id = id;
        this.password = password;
        this.name = name;
        this.position = position;
        this.isUsing = isUsing;  
    }
}