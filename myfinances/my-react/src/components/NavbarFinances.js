import React from 'react';
import styles from './NavbarFinances.module.css';

function NavbarFinances() {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}></div>
            <div className={styles.linknav}>
                <h3>Para Você</h3>
                <div className={styles.baixo}></div>
            </div>
            <div className={styles.linknav}>
                <h3>Para seu negocio</h3>
                <div className={styles.baixo}></div>
            </div>
            <div className={styles.linknav}>
                <h3>O MyFinances</h3>
                <div className={styles.baixo}></div>
            </div>
            <div className={styles.linknav}>
                <h3>duvidas frequentes</h3>
                <div className={styles.baixo}></div>
            </div>
            <a href='#'><button className={styles.cadastro}><h3>Cadastre-se</h3></button></a>
            <div className={styles.logomenu}></div>
        </div>
    );
}

export default NavbarFinances;
