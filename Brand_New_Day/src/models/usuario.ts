import { Rol } from "./rol";
import { Estado } from "./estado_Usuario";

export interface Usuario{
    id:number;
    nombre:string;
    rol:Rol;
    estado:Estado;
}