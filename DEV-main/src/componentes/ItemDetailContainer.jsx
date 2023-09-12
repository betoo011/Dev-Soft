import { useState, useEffect } from 'react'
import React from 'react';
import ProductView from './ProductView';


export const ItemDetailContainer = (id, img, name, price) => {
    const [data, setData] = useState({});

    const item = { id: id, img: img, name: name, price: price };

    console.log(item)

    useEffect(() => {

        const getData = new Promise((resolve => {
            setTimeout(() => {
                resolve(item);

            }, 1000);
        }));

        getData.then(res => setData(res));
    }, [])

    return (
        <ProductView data={data} />
    );
}

export default ItemDetailContainer