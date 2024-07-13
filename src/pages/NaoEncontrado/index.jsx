import React from 'react';
import styles from './NaoEncontrado.module.css';
import notFoundImg from './404.jpg';

const NaoEncontrado = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>AluraFlix</h1>
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.img} src={notFoundImg} alt="Imagem de página não encontrada" />
      </div>
    </div>
  );
};

export default NaoEncontrado;
