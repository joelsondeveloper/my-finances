// Cadastro.js
import React from 'react';
import styles from './Cadastro.module.css'

const Cadastro = () => {
  return (
    <div className={styles.back}>
      <section className={styles.box}>
        
        <form>
          <div className={styles.form}>
            <label htmlFor='email'>E-mail</label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='johnkane@gmail.com'
            />
          </div>
          <div className={styles.form}>
            <label htmlFor='email'>E-mail</label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='johnkane@gmail.com'
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Cadastro;
