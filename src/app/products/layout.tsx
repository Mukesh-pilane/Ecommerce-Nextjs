import SideNavbar from "@/components/SideNavbar";


export const metadata = {
	title: "Product | Shoperz",
	description:
		"Product page. shows all products and also categorised products",
};
export default async function ProductLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
			<section className="flex-1">{children}</section>
	);
}
