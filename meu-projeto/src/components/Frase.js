import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.divContainer}>
            <p className={styles.paragraph}>Este é um componente com frase</p>
        </div>
    )
};

export default Frase;