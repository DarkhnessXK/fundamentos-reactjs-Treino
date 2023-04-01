import { Header } from './components/Header'
import { Post } from './components/Post.jsx';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Giovanni Toledo"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptas, nostrum maiores sequi aut, ex quidem excepturi rerum, architecto ducimus molestias odio vitae! Aliquid nam maxime quidem, atque laborum qui."
          />
          <Post author="Jorge aragão"
            content="Post novo tropinha"
          />
          <Post />
          <Post />
        </main>
      </div>

    </div>
  )
}


