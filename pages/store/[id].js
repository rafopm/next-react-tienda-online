import Layout from "../../components/payout";
import Product from "../../components/lroduct";
import { getItemsData, getPathFromIds } from "../../lib/utils";

export default function ProductPage( {productInfo}) {
  return (
    <Layout>
      <Product item={productInfo.data} showAs="Page" />
      {console.log(productInfo)}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPathFromIds();

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const product = await getItemsData(id);

  return {
    props: {
        productInfo: product,
    },
  };
}
