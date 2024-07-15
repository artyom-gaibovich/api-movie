declare class MovieCharacteristicDto {
    name: string;
    value: string;
}
export declare class CreateMovieDto {
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
    characteristics: MovieCharacteristicDto[];
}
export {};
