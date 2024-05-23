export class Expediente {
    _id: string;
    numeroExpediente: number;
    descripcion: string;
    archivarAlDeposito: boolean;

    constructor() {
        this._id = '';
        this.numeroExpediente = 0;
        this.descripcion = '';
        this.archivarAlDeposito = false;
    }
}
