import styles from "../styles/Home.module.css";
import AppCard from "../components/AppCard";
import { cardItems } from "../constants/cardItems";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Who can you nominate?</h1>

      <p className={styles.description}>
        In order to be eligible for the Women Tech Idols awards, your nomination
        must be:
      </p>

      <div className={styles.grid}>
        {cardItems.map(({ title, description }, i) => (
          <AppCard key={i} title={title} description={description} />
        ))}
      </div>
    </main>
  );
}
