import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";

import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (<Card className="w-full max-w-sm">
    <CardHeader className="p-0 flex items-center justify-center w-full h-[300px] bg-gray-100">
  <Link href={`/product/${product.slug}`}>
    <Image
      src={product.images[0]}
      alt={product.name}
      width={300}
      height={300}
      className="w-[250px] h-[300px] object-contain"
      priority={true}
    />
  </Link>
</CardHeader>

    <CardContent className="p-4 grid gap-4 flex-1">
      <div className="text-xs">{product.author}</div>
      <Link href={`/product/${product.slug}`}>
        <h2 className="text-sm font-medium">{ product.name}</h2>
      </Link>
      <div className="flex-between gap-4">
        <p>{product.rating} Stars</p>
        {product.stock > 0 ? (
          <ProductPrice value={Number(product.price)}
           
          />
        ) : (
            <p className="text-destructive">Out Of Stock</p>
        ) }
      </div>
    </CardContent>
  </Card> );
}
 
export default ProductCard;