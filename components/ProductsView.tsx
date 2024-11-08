import { Category, Product } from "../sanity.types";
import ProductGrid from "./ProductGrid";
import { CategorySelectorComponent } from "./ui/category-selector";

interface ProductsViewProps {
    products: Product[]; // assuming Product type is defined elsewhere
    categories: Category[]; // Set categories as an array of Category
};

const ProductsView = ({ products, categories }: ProductsViewProps) => {
    return (
        <div className="flex flex-col">
            {/* CATEGORIES */}
            <div className="w-full sm:w-[200px]">
                <CategorySelectorComponent categories={categories}/>
            </div> 

            {/* PRODUCTS */}
            <div className="flex-1">
                <div>
                    <ProductGrid products={products}/>

                    <hr  className="w-1/2 sm:w-3/4"/>
                </div>
            </div>
        </div>
    )
}

export default ProductsView;