import styles from "./Success.module.css";

const Success = () => {
  return (
    <main className={styles["main"]}>
      <section className={styles["card-component"]}>
      <h1>Thank you for your query</h1>
      <p>Will contact you asap</p>
      </section>
    </main>
  )
}

export default Success