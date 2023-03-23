import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import { getLatestItems } from "@/services/ItemService";
import Product from "@/components/Product";
import styleProduct from "../styles/product.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ items }) {
  return (
    <Layout title="Bienvenido">
      <div className={styles.banner}>
        <div className={styles.bannerBackground}>
          <div className={styles.bannerInfo}>
            <h2>Shop the Summer 2023 Collection</h2>
            <p>Colección de temporada</p>
          </div>
        </div>
      </div>
      <div>Estás en Index</div>

      <h3>Latest Products</h3>
      <div className={styleProduct.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getLatestItems();

  return {
    props: {
      items: res,
    },
  };
}
