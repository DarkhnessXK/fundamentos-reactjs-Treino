import { Header } from './components/Header'
import { Post } from './components/Post.jsx';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';



const posts = [{
  id: 1,
  author: {
    avatarUrl: "https://github.com/DarkhnessXK.png",
    name: "Giovanni Toledo",
    role: "P.O / Dev @ INjunior"
  },
  content: [
    { type: 'paragraph', content: 'Fala galeraa 👋' },
    
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },

    { type: 'link', content:'👉 jane.design/doctorcare'},
   
  ],
  publishedAt: new Date('2023-04-02 00:40:00')
},

{
  id: 2,
  author: {
    avatarUrl: "https://pbs.twimg.com/profile_images/914211724412166144/Bf2Yij9b_400x400.jpg",
    name: "Jorge Lafon",
    role: "Trainee @ INjunior"
  },
  content: [
    { type: 'paragraph', content: 'Fala galeraa 👋' },
    
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },

    { type: 'link', content:'👉 jane.design/doctorcare'},
   
  ],
  publishedAt: new Date('2023-04-02 00:42:00')
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


