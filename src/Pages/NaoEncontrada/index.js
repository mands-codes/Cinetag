import styles from './NaoEncontrada.module.css';

function NaoEncontrada(){
    return
    (
        <section className={styles.container}>
            <p>Ops, o conteúdo que você procura não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada;