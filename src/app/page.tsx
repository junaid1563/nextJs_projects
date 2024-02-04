import Link from "next/link";
import styles from "./style.module.css";

export default function Home() {
  return (
    <>
      <h1>home</h1> <br />
      <div className={styles.linkdiv}>
        <Link href="/register" className={styles.link}>
          New user?
        </Link>
      </div>
      <hr />
      <div className={styles.linkdiv}>
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      </div>
      <hr />
      <div className={styles.linkdiv}>
        <Link href="/forgotpassword" className={styles.link}>
          Forgot Password?
        </Link>
      </div>
      <hr />
      <div className={styles.linkdiv}>
        <Link href="/profile" className={styles.link}>
          Profile
        </Link>
      </div>
      <hr />
      <div className={styles.linkdiv}>
        <Link href="/about" className={styles.link}>
          About me
        </Link>
      </div>
      <hr />
    </>
  );
}
