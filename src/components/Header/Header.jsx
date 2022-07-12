import styles from './Header.module.css'
import igniteLogo from '../../assets/ignite-symbol.svg' 

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Ignite logo"/>
            <h2>Ignite Feed</h2>
        </header>
    );
}