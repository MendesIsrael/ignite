import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/MendesIsrael.png',
      name: 'Israel Mendes',
      role: 'Jogador de futebol'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'paragraph', content: 'Acabei de enviar mais um jogador para Europa. É um projeto que estou realizando para aqueles que sonham em fazer universidade fora do Brasil', },
      { type: 'link', content: 'Professor.Israel/facebook' },
    ],
    publishedAt: new Date('2022-10-11 17:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/RoyMust.png",
      name: "Samuel Mendes",
      role: "Jogador"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera',},
      { type: 'paragraph', content: 'Acabei de enviar mais um jogador para Europa. É um projeto que estou realizando para aqueles que sonham em fazer universidade fora do Brasil',},
      { type: 'link', content: 'Professor.Israel/facebook' },
    ],
    publishedAt: new Date('2022-10-10 17:30:00'),
  },
];

export function App() {
  return ( 
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
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

export default App
