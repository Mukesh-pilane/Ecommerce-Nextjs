import "./globals.css";
import { Nunito_Sans } from "next/font/google";


import "@stripe/stripe-js";

const nutino_sans = Nunito_Sans({ subsets: ["latin"] });

import Providers from "@/components/providers/Providers";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
	title: "Shoperz | Home",
	description: "Home or Landing page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`relative dark ${nutino_sans.className}`}
			suppressHydrationWarning
		>
			<body className="bg-slate-200 dark:bg-gray-700">
				<Providers>
					<Navbar />
					<main className="container mx-auto xl:px-0 mt-[200px] sm:mt-[250px] md:mt-[250px] lg:mt-[100px]	 xl:max-w-[1200px] min-h-[510px]">
						{children}
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
