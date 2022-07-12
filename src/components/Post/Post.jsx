import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/MattSilverio.png"
          />
          <div className={styles.authorInfo}>
            <strong>Matheus Phillipo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="30 de Junho de 2022" dateTime="2022-06-30 01:57">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Fala Galera!!
        </p>

        <p>Acabei de subir um projeto no meu sorteio. É um projeto que fiz no NLW Return, evento da Rocketseat</p>
        <p><a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário"/>

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
