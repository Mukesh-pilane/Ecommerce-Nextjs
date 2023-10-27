import { loadStripe } from "@stripe/stripe-js";

const key = process.env.NEXT_PUBLIC_PUBLISHED_KEY! as string;


const  makePayment = async (items: any) => {

    //stripe published key
    
    
    const stripe = await loadStripe(
        key
    );

    const response = await fetch("/api/checkout-payment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(items),
    });

    const session = await response.json();
    
    await stripe?.redirectToCheckout({
        sessionId: session.id,
    });
};

export default makePayment;