import { Gasto } from '../../app/models/gasto';

export function gasto(): Gasto[] {
    return [
        {
            id: 1,
            tipo: "Salud",
            ruc: "171345672001",
            valor: 1000
        },
        {
            id: 2,
            tipo: "Educación",
            ruc: "171345672002",
            valor: 1500
        },
        {
            id: 3,
            tipo: "Vestimenta",
            ruc: "171345672003",
            valor: 800
        },
        {
            id: 4,
            tipo: "Vivienda",
            ruc: "171345672004",
            valor: 1200
        },
        {
            id: 5,
            tipo: "Alimentación",
            ruc: "171345672005",
            valor: 600
        },
        {
            id: 6,
            tipo: "Salud",
            ruc: "171345672006",
            valor: 500
        },
        {
            id: 7,
            tipo: "Educación",
            ruc: "171345672007",
            valor: 700
        },
        {
            id: 8,
            tipo: "Vestimenta",
            ruc: "171345672008",
            valor: 400
        },
        {
            id: 9,
            tipo: "Vivienda",
            ruc: "171345672009",
            valor: 900
        },
        {
            id: 10,
            tipo: "Alimentación",
            ruc: "171345672010",
            valor: 300
        }
    ];
}
