import { TProduct } from "@/types";
import { NextResponse } from "next/server";

const key = process.env.STRIPE_WEBHOOK_SECRET! as string;
const url = process.env.VERCEL_URL! as string;
const stripe = require("stripe")(
	key
);

export async function POST(req: Request) {
	const products = await req.json();

	const lineItems = products.map((pd: TProduct) => {
		return {
			price_data: {
				currency: "usd",
				product_data: {
					name: pd.title,
				},
				unit_amount: pd.price * 100,
			},
			quantity: pd.productQuantity,
		};
	});

	try {
		const session:any = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: lineItems,
			mode: "payment",
			success_url: `${process.env.VERCEL_URL!}/success?session_id={CHECKOUT_SESSION_ID}`, //"http://localhost:3000/success",
			cancel_url: `${process.env.VERCEL_URL!}/cancel?session_id={CHECKOUT_SESSION_ID}`,
		});
		return NextResponse.json({ id: session.id });
	} catch (error) {
		return NextResponse.json("Internal server error", { status: 500 });
	}
}
