import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';
import {useState} from 'react'

export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0);   
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;  // sempre que for atualizar um estado que depende do seu valor, é melhor fazer desse jeito
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/MattSilverio.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Silverio</strong>
                            <time title="12 de Julho às 01:03h" dateTime="2022-07-12 01:03:13">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}