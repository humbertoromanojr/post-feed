import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/6500430?v=4',
      name: 'JR Dev PM',
      role: 'Developer Frontend Middle'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋, tudo bom com vocês?' },
      { type: 'paragraph', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et labore architecto, laboriosam cumque officiis mollitia, recusandae quisquam animi suscipit commodi, quam voluptate. Quam eius magni eum rerum possimus velit aliquam!' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-01 11:44:30')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/6500430?v=4',
      name: 'JR Dev PM',
      role: 'Developer Frontend Middle'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋, bora codar' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-09-29 13:24:30')
  },
]

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

