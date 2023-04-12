import BannerTemplate from "../../components/shared/BannerTemplate";
import ProductDetails from "../../components/products/ProductDetails";
import React from "react";
import fs from "fs/promises";
import path from "path";

const ProductDetail = ({ product }) => {
  return (
    <div className="pt-[75px]">
      <BannerTemplate
        background="/images/The-Advantage-of-Multiple-Pairs-of-Eyewear_SS-Graphic-3-1080x675.jpg"
        header="اطلاعات محصول"
      />
      <ProductDetails product={product} />
    </div>
  );
};

export async function getStaticProps(context) {
  const productId = context.params.id;
  const filePathed = path.join(process.cwd(), "data", "data.json");
  const getFsData = await fs.readFile(filePathed);
  const data = JSON.parse(getFsData);
  const products = data.products;
  const product = products[productId - 1];

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const filePathed = path.join(process.cwd(), "data", "data.json");
  const getFsData = await fs.readFile(filePathed);
  const data = JSON.parse(getFsData);
  const products = data.products;

  const paths = products.map((product) => ({ params: { id: product.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default ProductDetail;
