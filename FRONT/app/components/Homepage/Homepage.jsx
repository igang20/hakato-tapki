import Link from 'next/link';
import styles from './Homepage.module.css';

export const Homepage = () => {
  return (
    // <div className={styles.container}>
    //   <h1 className={styles.title}>
    //     Ищите работу вместе с нами на <span className={styles.our_company}><span className={styles.black}>ТАПКИ</span> JOB</span>
    //   </h1>
    //   <p className={styles.paragraph}>Платформа по поиску самых подходящих вакансий</p>
    //   <Link href="/search" className={styles.button}>
    //     Перейти к поиску
    //   </Link>
    // </div>

    <div className={styles.container}>
      <h1 className={styles.title}>Платформа, которая может</h1>
      <ul className={styles.list}>
        <li className={styles.list_item}>Более 3000+ вакансий</li>
        <li className={styles.list_item}>Работа из дома</li>
        <li className={styles.list_item}>Only programming</li>
      </ul>
      <img id={styles.first_cloud}src="/img/main/cloud.png" alt="" />
      <img id={styles.code}src="/img/main/code.png" alt="" />
      <img id={styles.laptop}src="/img/main/pc.png" alt="" />
      <img id={styles.bin}src="/img/main/bin.png" alt="" />
      <img id={styles.bin2}src="/img/main/bin.png" alt="" />
      <img id={styles.coffee}src="/img/main/coffee.png" alt="" />
      <img id={styles.second_cloud}src="/img/main/cloud.png" alt="" />
      <Link href={'/search'}>
        <button className={styles.button}>
          Искать
        </button>
      </Link>
    </div>
  );
};