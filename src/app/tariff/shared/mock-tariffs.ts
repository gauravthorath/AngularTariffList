import { Tariff } from "./tariff.model";

export const TARIFFS: Tariff[] = [
    { id: 1, name: 'tariff 1', downloadSpeed: 12, uploadSpeed: 6, benefits: ['Benefit1', 'Benefit6' , 'Benefit11'], cost: 123.45},
    { id: 2, name: 'tariff 2', downloadSpeed: 21, uploadSpeed: 4, benefits: ['Benefit2', 'Benefit7' , 'Benefit12'], cost: 223.45},
    { id: 3, name: 'tariff 3', downloadSpeed: 34, uploadSpeed: 7, benefits: ['Benefit3', 'Benefit8' , 'Benefit13'], cost: 333.45},
    { id: 4, name: 'tariff 4', downloadSpeed: 32, uploadSpeed: 5, benefits: ['Benefit4', 'Benefit9' , 'Benefit14'], cost: 123.35},
    { id: 5, name: 'tariff 5', downloadSpeed: 12, uploadSpeed: 2, benefits: ['Benefit5', 'Benefit10' , 'Benefit15'], cost: 144.45},
];
