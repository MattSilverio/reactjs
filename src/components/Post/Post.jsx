import styles from './Post.module.css';

export function Post(){

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/MattSilverio.png" />
                    <div className={styles.authorInfo}>
                        <strong>Matheus Phillipo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>


                <time title='30 de Junho de 2022' dateTime="2022-06-30 01:57">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam eius 
                    excepturi dolore doloribus quasi provident consequatur harum tempora, eaque iste, 
                    deleniti veniam commodi a corporis ullam incidunt quae mollitia?
                </p>
            </div>
        </article>
    )
}