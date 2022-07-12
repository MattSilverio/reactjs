import {PencilLine} from "phosphor-react"
import { Avatar } from "../Avatar/Avatar"
import styles from './Sidebar.module.css'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>           
            <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="Foto de Background"/>
        
            <div className={styles.profile}>
                <Avatar src="https://github.com/MattSilverio.png" />
                <strong>Matheus Phillipo</strong>
                <span>Desenvolvedor Web</span>

                <footer> 
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar Seu Perfil
                    </a>
                </footer> 
            </div>
        </aside>
    )
}