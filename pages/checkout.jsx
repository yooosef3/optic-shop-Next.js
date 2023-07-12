import BannerTemplate from "../components/shared/BannerTemplate";
import Checkout from '../components/checkout/Checkout';
import Head from 'next/head';
import React from 'react';
import { getSession } from "next-auth/react";

const checkout = () => {
    return (
        <>
      <Head>
        <title>پرداخت</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <BannerTemplate background="/images/the-top-10-most-popular-online-payment-solutions-5e9978d564973-760x400.webp" header="پرداخت" />
        <Checkout />
      </div>
    </>
    );
};

export default checkout;
// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       data: session.user,
//     },
//   };
// }