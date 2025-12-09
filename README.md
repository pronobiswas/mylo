This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



For localhost you will need to create a .env file in the root directory with these values

RESEND_API_KEY --- This is for the quote form

NEXT_PUBLIC_MAINTENANCE_MODE --- This is for toggling middleware to bring up the maintenance page or not

You will need to put these env variables in Vercel or wherever it is hosted in prod if you use them.
