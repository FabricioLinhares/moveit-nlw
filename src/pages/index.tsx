import Head from "next/head";
import LoginBox from "../components/LoginBox";

import styles from "../styles/pages/Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <main>
        <img src="/images/logo-extend.svg" alt="move it" />

        <LoginBox />
      </main>
    </div>
  );
}
