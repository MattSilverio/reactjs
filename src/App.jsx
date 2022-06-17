import { Header } from "./components/Header/Header";
import './global.css'
import styles from './App.module.css'
import { Post } from "./Post";

export default function App(){
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
          <Post
            author={"Matheus Silverio"}
            content={"Eae"}
          />

          <Post
            author={"Matheus Silverio"}
            content={"Eae"}
          />
        </main>
      </div>
    </div>
  )
}