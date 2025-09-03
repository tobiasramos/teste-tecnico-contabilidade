import { Button } from "antd";
import TablePrice from "./components/TablePrice/TablePrice";
import styles from "./page.module.css";
import Image from "next/image";
import Cards from "./components/Cards/Cards";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Por que a <span>Contabilidade.com</span> é a melhor opção em Senador
        Pompeu?
      </h1>

      <TablePrice />

      <div className={styles.info}>
        <Image src="/cifra.png" alt="Logo" width={62} height={62} />

        <p>
          Uma economia média de <span>R$ 9.456/ano</span>
        </p>
      </div>

      <Button className={styles.btnOpen}>Abrir empresa grátis</Button>

      <Cards />
    </div>
  );
}
