"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prdouctRepository = void 0;
const db = {
    products: [
        { title: 'lol', id: 1 },
        { title: 'hell', id: 2 }
    ]
};
exports.prdouctRepository = {
    readProduct() {
        return db.products;
    },
    sendProduct(title) {
        const newProduct = {
            title: title,
            id: +(new Date())
        };
        db.products.push(newProduct);
        return 201;
    },
    updateProduct(title, id) {
        const thisProduct = db.products.find(c => c.id === id);
        if (!thisProduct)
            return 404;
        thisProduct.title = title;
        return 201;
    },
    readQueryProduct(title) {
        let foundProduct = db.products;
        if (title) {
            foundProduct = foundProduct.filter(c => c.title.includes(title));
        }
        return foundProduct;
    }
};
