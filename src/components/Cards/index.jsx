import iconeMinimizacao from "../../assets/imgs/icones/traco.svg";
import iconeFechar from "../../assets/imgs/icones/x.svg";

import styles from "./styles.module.css";

export function Card ({listaCoresCirculos, imagem, textoAlternativoImagem, sinal, textoAlternativoSinal, IconeJanela}) {
    return (
        <article className={styles.card}>
            <header className={styles.cardHeader}>
                <div className={`${styles.circulosWrapper}`}>
                    {
                        listaCoresCirculos.map(cor => {
                            return <span className={`circulo ${cor}`}></span>;
                        })
                    }
                </div>
                <div className={styles.icones}>
                    <img className={styles.icon} src={iconeMinimizacao} alt="ícone de minimização" />
                    <IconeJanela />
                    <img className={styles.icon} src={iconeFechar} alt="ícone de fechamento" />
                </div>
            </header>
            <img className={styles.cardImg} src={imagem} alt={textoAlternativoImagem} />
            <img className={styles.cardSinal} src={sinal} alt={textoAlternativoSinal}  />
        </article>
    );
}

