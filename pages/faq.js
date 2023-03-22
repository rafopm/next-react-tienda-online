import Layout from "@/components/layout";
import Link from "next/link";
import style from "../styles/faq.module.css";

export default function FAQ() {
  return (
    <Layout>
      <div className={style.faq}>
        <h2>FAQ</h2>

        <div>
          <h3>Pregunta</h3>
          <p>jlkfdjsalñk fdlksajfñ adsjflkds  dlkañfj dsa fjkdlasñ fdsjaklf  jflkdsajlñfkd</p>
        </div>
      </div>
    </Layout>
  );
}
