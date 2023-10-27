import Products from "@/components/Products";
import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";

const url = process.env.API_URL as string;

//fetch product by category



type ServerResponse = {
	data: TProduct[];
	total: number;
};
const getProducts = async (category: string): Promise<ServerResponse> => {
	const response = await fetch(`${url}/api/products?category=${category}`, {
		cache: "no-store",
	});
	return await response.json();
};

const getSearch = async (search: string): Promise<ServerResponse> => {
	const response = await fetch(`${url}/api/products?search=${search}`, {
		cache: "no-store",
	});


	return await response.json();
}

export default async function ProductPage({
	searchParams,
}: {
	searchParams: { [key: string]: string };
}) {
	const products = searchParams.category
		? await getProducts(searchParams.category!)
		: await getSearch(searchParams.search!);
	
	
	return (
		<section className="py-2 ">
			<h2 className="capitalize mb-8">{searchParams.category ? searchParams.category : searchParams.search}</h2>
			{products.data.length==0 && 			<div className=" flex items-center">
				<div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
					<div className="w-full lg:w-1/2 mx-8">
						<div className="text-7xl text-blue-500 font-dark font-extrabold mb-8"> 404</div>
						<p className="text-2xl md:text-3xl font-light leading-normal mb-8">
							Sorry we couldn't find the page you're looking for
						</p>

						<Link href="/" className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-blue-600 active:bg-blue-500/80 hover:bg-blue-500/80">back to homepage</Link>
					</div>
					<div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
						<img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" className="" alt="Page not found" />
					</div>

				</div>
			</div>
			}
			<section className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
				{
					products.data?.map((product) => (
							<Products product={product} key={product.id} />
					))
				}
			</section>
		</section>
	);
}
