import { Header } from "./components/Header/Header";
import './global.css'
import styles from './App.module.css'
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://www.github.com/MattSilverio.png',
      name: "Matheus Silverio",
      role: "Estudante @ UnB"
    },
    content: [
        {type: 'paragraph' , content: 'Fala Galera!!'},
        {type: 'paragraph' , content: 'Acabei de subir um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat'},
        {type: 'link', content: 'jane.design/doctorcare'},     
    ],
    publishedAt: new Date('2022-07-20 22:27:44'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://www.github.com/Iagorrr04.png',
      name: "Iago Rocha",
      role: "Estudante @ UnB"
    },
    content: [
        {type: 'paragraph' , content: 'Fala Galera!!'},
        {type: 'paragraph' , content: 'Acabei de concluir mais um contest em C++, chequem as soluções no meu repositório. Logo mais tem vídeo'},
        {type: 'link', content: 'github.com/Iagorrr04/Competitive-Programming-Algorithms'},     
    ],
    publishedAt: new Date('2022-07-15 20:04:57'),
  }
]

export default function App(){
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>   
        <Sidebar />
        
        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
