import Orders from '../components/orders/Orders';
import React from 'react';
import { getSession } from "next-auth/react";

const orders = () => {
    return (
        <Orders />
    );
};

export default orders;

export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  
    return {
      props: {
        data: session.user,
      },
    };
  }