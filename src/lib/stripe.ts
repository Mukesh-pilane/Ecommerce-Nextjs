import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_WEBHOOK_SECRET as string, {
	// https://github.com/stripe/stripe-node#configuration
	apiVersion: '2023-08-16',
	appInfo: {
	  name: 'nextjs-with-stripe-typescript-demo',
	  url: 'http://localhost:3000',
	},
  })