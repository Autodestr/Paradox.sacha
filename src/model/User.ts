export interface User {
    name: string,
    surname: string,
    id: number,
    cash?: string,
    age?: number
}

export enum Valuta {
Rub= "рублей",
    Dollar = "долларов",
    Yan = "юаней",
    Kop = "копеек",
    Tenge ="тенге"

}