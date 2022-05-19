import { Data } from "@angular/router";

export interface Todo {
    id?: String;
    titulo: String;
    descricao: String;
    deadLine: Date;
    finalizada: Boolean;
}