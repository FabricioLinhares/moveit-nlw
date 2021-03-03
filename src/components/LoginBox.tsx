import { useState } from "react";
import Link from "next/link";
import styles from "../styles/components/LoginBox.module.css";

export default function LoginBox() {
  const [username, setUsername] = useState("");

  function handleChangeUsername(event) {
    const name = event.target.value;

    setUsername(name);
  }

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
            value={username}
            onChange={handleChangeUsername}
          />
          <Link href="/home">
            <a>
              <img src="/icons/send.svg" alt="enviar" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
