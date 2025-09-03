import styles from "./cards.module.css";
import Card from "./components/Card";

const planos = [
  {
    nomePlano: "Plano PJ",
    precoPlano: "169",
    beneficios: [
      "Emissão de notas fiscais ilimitadas",
      "Relatórios contábeis mensais",
      "Suporte via e-mail",
      "Gestão de impostos simplificada",
      "Acesso ao portal do cliente",
    ],
  },
  {
    nomePlano: "Plano PJ Plus",
    precoPlano: "249",
    beneficios: [
      "Todos os benefícios do Plano PJ",
      "Consultoria contábil trimestral",
      "Atendimento via WhatsApp",
      "Gestão de folha de pagamento",
      "Análise de fluxo de caixa",
    ],
  },
  {
    nomePlano: "Plano PJ Vip",
    precoPlano: "329",
    beneficios: [
      "Todos os benefícios do Plano PJ Plus",
      "Consultoria fiscal personalizada",
      "Atendimento prioritário",
      "Planejamento tributário avançado",
      "Dashboard financeiro exclusivo",
    ],
  },
];

const Cards = () => {
  return (
    <div className={styles.container}>
      <h2>
        Escolha o <span>plano contábil</span> ideal para sua empresa.
      </h2>
      <div className={styles.cardsContainer}>
        {planos.map((plano, index) => (
          <div
            key={index}
            className={index === 0 || index === 2 ? styles.offsetCard : ""}
          >
            <Card
              nomePlano={plano.nomePlano}
              precoPlano={plano.precoPlano}
              beneficios={plano.beneficios}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
