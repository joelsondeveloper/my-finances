import NavbarFinances from "./NavbarFinances"
import ConteudoFinances from "./ConteudoFinances"
import styles from "./PaginaInicial.module.css"

function PaginaInicial() {
    return(
        <div className={styles.back}>
            <NavbarFinances />
            <ConteudoFinances />
        </div>
    )
}

export default PaginaInicial;
