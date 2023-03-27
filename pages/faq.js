import Layout from "../components/Layout";
import Link from "next/link";
import style from "../styles/faq.module.css";

export default function FAQ() {
  return (
    <Layout>
      <div className={style.faq}>
        <h2>FAQ</h2>

        <div>
          <h3>Pregunta</h3>
          <p>Respuesta a la pregunta de faq</p>
        </div>
      </div>
    </Layout>
  );
}
