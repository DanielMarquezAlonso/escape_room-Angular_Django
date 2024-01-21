export class Nivel1{
    constructor(
        public fondo:number,
        public direccion:string
    ){}

    public toString = () : String => {
        return this.direccion;
    }
    // public toString = () : String => {
    //     return this.fondo;
    // }


    
}