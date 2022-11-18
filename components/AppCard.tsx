import React from "react";
import styles from "../styles/Card.module.css";
import { Card } from "antd";

export type Props = {
  title: string;
  description: string;
};

const AppCard = ({ title, description }: Props) => {
  return (
    <Card bordered={false} className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </Card>
  );
};

export default AppCard;
