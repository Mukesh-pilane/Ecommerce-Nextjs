import Link from "next/link";
import type { Stripe } from 'stripe'
import { stripe } from '@/lib/stripe'

export const metadata = {
	title: "Success | Shoperz",
	description:
		"It will show the success page after doing successful payment method",
};

function PrintObject({
	content,
  }: {
	content: Stripe.PaymentIntent | Stripe.Checkout.Session
  }): JSX.Element {
	const formattedContent: string = JSON.stringify(content, null, 2)
	return <pre>{formattedContent}</pre>
  }



export default async function SuccessPage({
	searchParams,
  }: {
	searchParams: { session_id: string }
  }){
	

	const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ['line_items', 'payment_intent'],
    })

  const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent
  return (
    <section className="grid place-items-center ">
      <div className="mt-20">
        <h1>Your payment was successful</h1>
		<PrintObject content={checkoutSession} />

        <h4 className="italic">
          Thanks for showing interest in our products
        </h4>
        <h5 className="italic">Have a wonderful day!</h5>

        <button className="border border-blue-500 px-4 py-2 rounded mt-8 capitalize group bg-blue-500 font-medium">
          <Link href='/'>go back to home</Link>
          <span className="group-hover:inline-flex  hidden">
            &rarr;
          </span>{" "}
        </button>
      </div>
    </section>
  );
}
