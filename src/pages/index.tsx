import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Image src="/reysol.png" alt="Reysol Logo" width={180} height={180} />
        <Link href="/posts/first-post">First Post</Link>
        <Link href="/posts">View Blog</Link>
      </div>
    </>
  );
}
