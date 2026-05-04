import React, { useState, useMemo } from "react";

function FilteredProduct() {

    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const products = [
        { id: 1, name: "Laptop", price: 50000, inStock: true },
        { id: 2, name: "Phone", price: 20000, inStock: false },
        { id: 3, name: "Headphones", price: 2000, inStock: true },
    ];

    const FilteredProduct = useMemo(() => {
        const FilteredProduct = products
            .filter((products) => products.inStock)
            .filter((products) => products.name.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);

        return FilteredProduct;
    }, [products, search, sortOrder]);


    return (
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Product" />

            <button onClick={() => { setSortOrder("asc"); }}>ASC</button>
            <button onClick={() => { setSortOrder("desc"); }}>DESC</button>

            <ul>
                {FilteredProduct.map(product => (
                    <li key={product.id}>{product.name} - $ {product.price}</li>))}

            </ul>

        </div>
    );


}
export default FilteredProduct;