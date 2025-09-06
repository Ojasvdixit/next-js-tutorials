

"use client";

//! not-found is the naming convention in nextjs to show customize not found page 

import { usePathname } from "next/navigation"


//! it will find most specific not-found page rather than outer one global page

//? Not found page do not accept value as props 

//@ so we will use usePathName hook to show dynamic error meassage for different reivew and products


//! You're importing a component that needs `usePathname`. In Next.js components in the App Router are Server Components (run on the server). React hooks like useState, useEffect, or Next.js hooks like usePathname only work in Client Components.

//! 'Use client This tells Next.js: “Render this component on the client side so it can use hooks.”

export default function NotFound() {

  const pathName = usePathname();
  const productid = pathName.split('/')[2];
  const reviewid = pathName.split('/')[4];

  return (
    <>
      <div>
        <h1>Review {reviewid} not found for Product {productid}</h1>
      </div>
    </>
  );

}