import Link from "next/link";
import { Product } from "../sanity.types";
import Image from "next/image";
import { imageUrl } from "../lib/imageUrl";

function ProductThumb({ product }: { product: Product }) {
    const isOutOfStock = product.stock != null && product.stock <= 0;

    return (
        <Link
            href={`/product/${product.slug?.current}`}
            className={`group flex flex-col bg-white rounded-lg border border-[#a5b2a4] shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
        >

            <div className="relative aspect-square w-full h-full overflow-hidden">
                {product.image && (
                    <Image
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        src={imageUrl(product.image).url()}
                        alt={product.name || "Product image"}
                        fill
                        sizes="(max-width: 668px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />
                )}
                {isOutOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <span className="text-white font-bold text-lg">Out of Stock</span>
                    </div>
                )}
            </div>

            <div className="p-4">
                <h2 className="text-lg font-semibold text-[#223b33] truncate">
                    {product.name}
                </h2>

                <p className="mt-2 text-sm text-[#2e5745] line-clamp-2">
                    {product.description?.map((block) =>
                        block._type === "block" ? block.children?.map((child) => child.text).join("") : ""
                    )
                        .join(" ") || "No description available"}
                </p>
                <p className="mt-2 text-lg font-bold text-[#223b33]">
                    ₱{product.price?.toFixed(2)}
                </p>
            </div>
        </Link>
    )
}

export default ProductThumb;

// 2:16:28 / 5:11:14