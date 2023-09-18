export class Product {
    constructor(price, firm) {

        if(price === undefined) {
            throw new Error('price is undefined');
        }

        if(firm === undefined) {
            throw new Error('firm is undefined');
        }

      this._price = price;
      this._firm = firm;
    }

    get _price() {
        return this._price
    }

    set _price(value) {
        if (!Number.isInteger(Number(value))) {
            console.log("Ошибка в параметре: ", value);
            throw new Error("\n Цена за товар должна быть целым числом.");
        }
    }
  }


export class Mouse extends Product {
    constructor(style, count, price, firm) {
        if(style === 'undefined') {
            throw new Error('style is undefined');
        }

        if(count === undefined) {
            throw new Error('count is undefined');
        }
        super(price, firm)
        this._style = style;
        this._count = count; 
    }

    get _style() {
        return this._style
    }

    set _style(value) {
        if (value !== "шариковая" && value !== "лазерная") {
            console.log("Ошибка в параметре: ", value);
            throw new Error("Неверный тип мышки");
        }
    }

    get _count() {
        return this._count
    }

    set _count(value) {
        if (!Number.isInteger(Number(value))) {
            console.log("Ошибка в параметре: ", value);
            throw new Error("Количество мышек должно быть целым числом");
        }
    }
}

export class Keyboard extends Product {
    constructor(type, connector, price, firm) {
        if(type === undefined) {
            throw new Error('type is undefined');
        }

        if(connector === undefined) {
            throw new Error('connector is undefined');
        }

        super(price, firm)
        this._type = type;
        this._connector = connector;
    }

    get _type() {
        return this._type
    }

    set _type(value) {
        if ((value !== "мембранная" && value !== "купольная" && value !== "емкостная")) {
            console.log("Ошибка в параметре: ", value);
            throw new Error("Неверный тип клавиатурым");
        }
    }
}


export class Monitors extends Product {
    constructor(height, width, price, firm) {
        if(height === undefined) {
            throw new Error('height is undefined');
        }

        if(width === undefined) {
            throw new Error('width is undefined');
        }
        super(price, firm)
        this._height = height;
        this._width = width;
    }

    get _height() {
        return this._height
    }

    set _height(value) {
        if (!Number.isInteger(Number(value))) {
            console.log("Ошибка в параметре: ", value);
            throw new Error("Высота монитора должна быть целым числом.");
        }
    }

    get _width() {
        return this._width
    }

    set _width(value) {
        if (!Number.isInteger(Number(value))) {
            console.log("Ошибка в параметре: ", value);
            throw new Error("\n Ширина монитора должна быть целым числом.");
        }
    }
}