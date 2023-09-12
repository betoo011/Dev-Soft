import { products as initialProducts } from '../data/products.json'
import { HeaderFilters } from './HeaderFilters';
import { Products } from './Products'
import { useState } from 'react'
import { useParams } from 'react-router-dom';

function useFilters(setGender) {
    const genero = setGender

    const { categoria } = useParams();
    console.log(categoria);

    const [filters, setFilters] = useState({
        genero: genero,
        category: categoria,
        minPrice: 0
    });

    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice && product.gender === filters.genero &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        })
    }
    console.log(filters)
    return { filterProducts, setFilters }
   
    
}

export function ProductList({gender}) {
    
    const setGender = gender
    console.log(setGender)
    

    const [products] = useState(initialProducts)

    const {filterProducts, setFilters} = useFilters(setGender)

    const filteredProducts = filterProducts(products)

    return (

        <>


            <HeaderFilters changeFilters={setFilters} />
            <Products products={filteredProducts} />

        </>


    )
}
export default ProductList