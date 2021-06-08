export class Product {
    public id: string;
    public title: string;
    public description: string;
    public price: number;

    constructor(id: string, title: string, description: string, price: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
    };
}
