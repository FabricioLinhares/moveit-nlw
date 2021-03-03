import styles from "../styles/components/LoginBox.module.css";

export default function LoginBox() {
  return (
    <div className={styles.loginBoxContainer}>
      <h2>Bem-vindo</h2>
      <div>
        <p className={styles.subTitle}>
          <img src="/icons/github.svg" alt="github" />
          Faça login com seu Github para começar
        </p>
        <div className={styles.loginInfo}>
          <input
            type="text"
            id="username"
            placeholder="Digite seu username"
            required
          />
          <button>
            <img src="/icons/send.svg" alt="enviar" />
          </button>
        </div>
      </div>
    </div>
  );
}
