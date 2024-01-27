type DbType = {
    title: string,
    id: number
}

const db: {products: DbType[]} = {
    products: [
        {title: 'lol', id: 1},
        {title: 'hell', id: 2}
    ]
}

export const prdouctRepository = {
    readProduct () {
        return db.products
    },
    sendProduct (title: string) {
        const newProduct = {
            title: title,
            id: +(new Date())
        }
        db.products.push(newProduct)
        return 201
    },
    updateProduct (title: string, id: number) {
        const thisProduct = db.products.find(c => c.id === id)
        if (!thisProduct) return 404
        thisProduct.title = title
        return 201
    },
    readQueryProduct (title: string) {
        let foundProduct = db.products
        if (title) {
            foundProduct = foundProduct.filter(c => c.title.includes(title))
        }
        return foundProduct
    }
}