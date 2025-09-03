import { Button } from "antd";
import styles from "../cards.module.css";

interface CardProps {
  nomePlano: string;
  precoPlano: string;
  beneficios: string[];
}

const Card: React.FC<CardProps> = ({ nomePlano, precoPlano, beneficios }) => {
  return (
    <div className={styles.card}>
      <h2>{nomePlano}</h2>
      <div className={styles.price}>
        <p>R$ {precoPlano} mensal</p>
      </div>
      <div>
        <strong>Benefícios:</strong>
        <ul>
          {beneficios.map((beneficio, index) => (
            <li key={index} className={styles.beneficioItem}>
              {beneficio}
            </li>
          ))}
        </ul>
      </div>

      <Button className={styles.btn}>Comece grátis</Button>
    </div>
  );
};

export default Card;
