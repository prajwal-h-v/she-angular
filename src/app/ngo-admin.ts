export class NgoAdmin {
    ngoId: number;
    name: string;
    email: string;
    password: string;
    address: string;
    description:string;
    contact: string;
    isVerified: boolean;

    constructor(){
        this.ngoId = 0;
        this.name = '';
        this.email = '';
        this.password = '';
        this.address = '';
        this.description = '';
        this.contact = '';
        this.isVerified = false;
    }
}
