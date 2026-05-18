import React, {
    useState,
    useCallback,
    useMemo
} from "react";

function Products() {

    const [search, setSearch] = useState("");

    const [products, setProducts] = useState([
        { id: 1, name: "Laptop" },
        { id: 2, name: "Phone" },
        { id: 3, name: "Mouse" },
        { id: 4, name: "Headphone" },
        { id: 5, name: "Keyboard" },
    ]);

    const handleDelete = useCallback((id) => {

        setProducts(prev =>
            prev.filter(product => product.id !== id)
        );

    }, []);

    const ProductList = useMemo(() => {

        console.log("ProductList Rendered");

        return (
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        {product.name}

                        <button
                            onClick={() => handleDelete(product.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        );

    }, [products, handleDelete]);

    return (
        <div>

            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
            />
            {ProductList}

        </div>
    );
}

export default Products;