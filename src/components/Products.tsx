import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import ProductRating from "./Rating";
type Props = {
	product: TProduct;
};
export default function Products({ product }: Props) {
	return (
		<>
			{/* <Link href={`/products/${product.id}`}>
				<div className="relative h-[400px]   rounded-md group overflow-hidden">
					<Image
						src={product.image}
						alt="product-image"
						className="z-0 h-full w-full  object-fill object-center rounded-md  group-hover:scale-110 duration-200 transition-all overflow-hidden "
						width={300}
						height={400}
						loading="lazy"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
					<div className="absolute bottom-4 left-0 px-3 w-full">
						<h3 className="text-white">{product.title}</h3>

						<div className="flex justify-between mt-2">
							<h4 className="text-blue-400">${product.price}</h4>
							<ProductRating value={product.rating.rate} />
						</div>
					</div>
				</div>
			</Link> */}

			<Link href={`/products/${product.id}`}>
				<div className="relative overflow-hidden rounded-lg bg-white shadow-md">
					<Image
						className="h-60 w-full rounded-t-lg object-contain"
						src={product.image}
						width={250}
						height={250}
						alt="product image" />
					{product.sex &&
					<>
					<span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
					<span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.off}% OFF</span>
					</>
					}

					<div className="mt-4 px-5 pb-5">
						<h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
						<div className="mt-2 mb-5 flex items-center justify-between">
							<p>
								<span className="text-3xl font-bold text-slate-900">${product.price}</span>
								{product.actualprice &&
									<span className="text-sm text-slate-900 line-through">${product.actualprice}</span>}
							</p>
							<div className="flex items-center">
								<ProductRating value={product.rating.rate} />
								<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating.rate}</span>
							</div>
						</div>
						{/* <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
						<svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
						Add to cart</a> */}
					</div>
				</div>
			</Link>		<Link href={`/products/${product.id}`}>
				<div className="relative overflow-hidden rounded-lg bg-white shadow-md">
					<Image
						className="h-60 w-full rounded-t-lg object-contain"
						src={product.image}
						width={250}
						height={250}
						alt="product image" />
					<span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
					<span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.off}% OFF</span>

					<div className="mt-4 px-5 pb-5">
						<h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
						<div className="mt-2 mb-5 flex items-center justify-between">
							<p>
								<span className="text-3xl font-bold text-slate-900">${product.price}</span>
								{product.actualprice &&
									<span className="text-sm text-slate-900 line-through">${product.actualprice}</span>}
							</p>
							<div className="flex items-center">
								<ProductRating value={product.rating.rate} />
								<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating.rate}</span>
							</div>
						</div>
						{/* <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
						<svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
						Add to cart</a> */}
					</div>
				</div>
			</Link>		<Link href={`/products/${product.id}`}>
				<div className="relative overflow-hidden rounded-lg bg-white shadow-md">
					<Image
						className="h-60 w-full rounded-t-lg object-contain"
						src={product.image}
						width={250}
						height={250}
						alt="product image" />
					<span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
					<span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.off}% OFF</span>

					<div className="mt-4 px-5 pb-5">
						<h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
						<div className="mt-2 mb-5 flex items-center justify-between">
							<p>
								<span className="text-3xl font-bold text-slate-900">${product.price}</span>
								{product.actualprice &&
									<span className="text-sm text-slate-900 line-through">${product.actualprice}</span>}
							</p>
							<div className="flex items-center">
								<ProductRating value={product.rating.rate} />
								<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating.rate}</span>
							</div>
						</div>
						{/* <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
						<svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
						Add to cart</a> */}
					</div>
				</div>
			</Link>		<Link href={`/products/${product.id}`}>
				<div className="relative overflow-hidden rounded-lg bg-white shadow-md">
					<Image
						className="h-60 w-full rounded-t-lg object-contain"
						src={product.image}
						width={250}
						height={250}
						alt="product image" />
					<span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
					<span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.off}% OFF</span>

					<div className="mt-4 px-5 pb-5">
						<h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
						<div className="mt-2 mb-5 flex items-center justify-between">
							<p>
								<span className="text-3xl font-bold text-slate-900">${product.price}</span>
								{product.actualprice &&
									<span className="text-sm text-slate-900 line-through">${product.actualprice}</span>}
							</p>
							<div className="flex items-center">
								<ProductRating value={product.rating.rate} />
								<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating.rate}</span>
							</div>
						</div>
						{/* <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
						<svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
						Add to cart</a> */}
					</div>
				</div>
			</Link>
			<Link href={`/products/${product.id}`}>
				<div className="relative overflow-hidden rounded-lg bg-white shadow-md">
					<Image
						className="h-60 w-full rounded-t-lg object-contain"
						src={product.image}
						width={250}
						height={250}
						alt="product image" />
					<span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
					<span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.off}% OFF</span>

					<div className="mt-4 px-5 pb-5">
						<h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
						<div className="mt-2 mb-5 flex items-center justify-between">
							<p>
								<span className="text-3xl font-bold text-slate-900">${product.price}</span>
								{product.actualprice &&
									<span className="text-sm text-slate-900 line-through">${product.actualprice}</span>}
							</p>
							<div className="flex items-center">
								<ProductRating value={product.rating.rate} />
								<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating.rate}</span>
							</div>
						</div>
						{/* <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
						<svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
						Add to cart</a> */}
					</div>
				</div>
			</Link>		<Link href={`/products/${product.id}`}>
				<div className="relative overflow-hidden rounded-lg bg-white shadow-md">
					<Image
						className="h-60 w-full rounded-t-lg object-contain"
						src={product.image}
						width={250}
						height={250}
						alt="product image" />
					<span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
					<span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.off}% OFF</span>

					<div className="mt-4 px-5 pb-5">
						<h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
						<div className="mt-2 mb-5 flex items-center justify-between">
							<p>
								<span className="text-3xl font-bold text-slate-900">${product.price}</span>
								{product.actualprice &&
									<span className="text-sm text-slate-900 line-through">${product.actualprice}</span>}
							</p>
							<div className="flex items-center">
								<ProductRating value={product.rating.rate} />
								<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating.rate}</span>
							</div>
						</div>
						{/* <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
						<svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
						Add to cart</a> */}
					</div>
				</div>
			</Link>		<Link href={`/products/${product.id}`}>
				<div className="relative overflow-hidden rounded-lg bg-white shadow-md">
					<Image
						className="h-60 w-full rounded-t-lg object-contain"
						src={product.image}
						width={250}
						height={250}
						alt="product image" />
					<span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
					<span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.off}% OFF</span>

					<div className="mt-4 px-5 pb-5">
						<h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
						<div className="mt-2 mb-5 flex items-center justify-between">
							<p>
								<span className="text-3xl font-bold text-slate-900">${product.price}</span>
								{product.actualprice &&
									<span className="text-sm text-slate-900 line-through">${product.actualprice}</span>}
							</p>
							<div className="flex items-center">
								<ProductRating value={product.rating.rate} />
								<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating.rate}</span>
							</div>
						</div>
						{/* <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
						<svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
						Add to cart</a> */}
					</div>
				</div>
			</Link>
			<Link href={`/products/${product.id}`}>
				<div className="relative overflow-hidden rounded-lg bg-white shadow-md">
					<Image
						className="h-60 w-full rounded-t-lg object-contain"
						src={product.image}
						width={250}
						height={250}
						alt="product image" />
					<span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
					<span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.off}% OFF</span>

					<div className="mt-4 px-5 pb-5">
						<h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
						<div className="mt-2 mb-5 flex items-center justify-between">
							<p>
								<span className="text-3xl font-bold text-slate-900">${product.price}</span>
								{product.actualprice &&
									<span className="text-sm text-slate-900 line-through">${product.actualprice}</span>}
							</p>
							<div className="flex items-center">
								<ProductRating value={product.rating.rate} />
								<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating.rate}</span>
							</div>
						</div>
						{/* <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
						<svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
						Add to cart</a> */}
					</div>
				</div>
			</Link>
		</>
	);
}
