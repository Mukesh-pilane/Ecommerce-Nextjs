import CartButton from "@/components/CartButton";
import PurchaseButton from "@/components/PurchaseButton";
import ProductRating from "@/components/Rating";
import ProductSlider from "@/components/ProductSlider";
import { TProduct } from "@/types";

const url = process.env.VERCEL_URL!;

type Props = {
	product: TProduct;
};

const getSingleProduct = async (slug: string): Promise<TProduct> => {
	const response = await fetch(`${url}/api/products/${slug}`, {
		cache: "no-store",
	});

	return await response.json();
};

const ProductDetails = ({ product }: Props) => {
	return (
		<section className=" pt-12 ">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-4 lg:gap-8">
				<div className="border rounded-md w-full h-[600px]">
					<ProductSlider slides={product.slides} />
				</div>
				<div className="space-y-5 flex flex-col justify-center">
					<h1>{product.title}</h1>
					<div className="flex justify-between">
						<p>
							<span className="text-3xl font-bold text-blue-500">${product.price}</span>
							{product.actualprice &&
							<>
							<span className="ml-2 text-sm text-slate-900 line-through">${product.actualprice}</span>
							<span className="ml-2 text-sm font-bold text-green-500 ">{product.off}% off</span>
							</>
							}
						</p>
						<ProductRating value={product.rating.rate!} />
					</div>
					<div>
						<p>
							<span className="text-2xl font-bold text-blue-500">{product.purchaseCount}</span> people have already grabbed it
						</p>
					</div>
					<div className="flex gap-2">
					<PurchaseButton pd={product} />
					<CartButton pd={product} />
					</div>
					<div className="pb-6">
						<h4>Product Description: </h4>
						<p>{product.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default async function SingleProduct({
	params,
}: {
	params: { slug: string };
}) {
	const product = await getSingleProduct(params.slug);

	return <ProductDetails product={product} />;
}
