
//? Dynamic Routes 

// export default function ProductDetails(){
//   return <h1>Detail about product</h1>
// }




// export default async function ProductDetails({
//   params,
// }:{
//   params : { productid: string};
// }) {
//   const productID = params.productid;
//   return <h1>Detail about product : {productID}</h1>
// }


//! For fetching data -->

export default async function ProductDetails({
  params,
}:{
  params : Promise<{productid:string}>;
}) {
  const productID = (await params).productid
  return <h1>Detail about product : {productID}</h1>
}