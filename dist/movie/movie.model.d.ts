import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
declare class MovieCharacteristic {
    name: string;
    value: string;
}
export interface MovieModel extends Base {
}
export declare class MovieModel extends TimeStamps {
    image: string;
    title: string;
    link: string;
    initialRating: number;
    price: number;
    oldPrice?: number;
    credit: number;
    description: string;
    advantages: string;
    disAdvantages?: string;
    categories: string[];
    tags: string[];
    characteristics: MovieCharacteristic[];
}
export {};
