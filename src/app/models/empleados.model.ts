export class Empleados{
    nombre:string;
    apellido:string;
    email:string;
    edad:number;
    password:string;
    departamento:string;
    imagen:string;

    constructor(pnombre:string,papellido:string, pemail:string,pedad:number, ppasword:string,pdepartamento:string, pimagen:string){
        this.nombre=pnombre;
        this.apellido=papellido;
        this.email=pemail;
        this.edad=pedad;
        this.password=ppasword;
        this.departamento=pdepartamento;
        this.imagen=pimagen;
        
    }
}