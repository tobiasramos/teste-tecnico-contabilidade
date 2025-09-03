"use client";

import Image from "next/image";
import styles from "./TablePrice.module.css";
import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    beneficios: "Certificado Digital",
    age: <p className={styles.textGreen}>incluso</p>,
    media: "R$ 200/ano",
  },
  {
    key: "2",
    beneficios: "Abertura de empresa, 100% digital",
    age: <p className={styles.textGreen}>incluso</p>,
    media: "R$ 700/ano",
  },
  {
    key: "3",
    beneficios: "Contabilidade Consultiva",
    age: <p className={styles.textGreen}>incluso</p>,
    media: "R$ 5.880,00/ano",
  },
  {
    key: "4",
    beneficios: "Conta PJ gratuita, digital e integrada à sua contabilidade",
    age: <p className={styles.textGreen}>incluso</p>,
    media: "R$ 756,00/ano",
  },
  {
    key: "5",
    beneficios:
      "Atendimento personalizado por telefone e WhatsApp a partir do plano de entrada",
    age: <p className={styles.textGreen}>incluso</p>,
    media: "R$ 1.920/ano",
  },
];

const columns = [
  {
    title: (
      <p className={styles.textGreen}>Benefícios inclusos no seu pacote</p>
    ),
    dataIndex: "beneficios",
    key: "beneficios",
    width: "56%",
    className: styles.columnContent,
  },
  {
    title: (
      <div className={styles.colunIcon}>
        <Image src="/logo.png" alt="Logo" width={24.97} height={40} />
        <Image
          src="/check.png"
          alt="Logo"
          width={14.4}
          height={12.17}
          className={styles.imageCheck}
        />
      </div>
    ),
    dataIndex: "age",
    key: "age",
    width: "24%",
    className: styles.colunIconColor,
  },
  {
    title: "Média de Mercado",
    dataIndex: "media",
    key: "media",
    width: "18%",
    className: styles.columnContent,
  },
];

const TablePrice = () => {
  return (
    <div>
      <Table
        className={styles.table}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        rowClassName={(record, index) => (index === 0 ? styles.firstRow : "")}
      />
      ;
    </div>
  );
};

export default TablePrice;
