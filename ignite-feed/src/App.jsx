import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gustavo Tenório"
            content="Gustavo is a man that wants achieve a lot of goals"
          />
          <Post
            author="Gustavo Tenório"
            content="Gustavo is a man that wants achieve a lot of goals"
          />
        </main>
      </div>
    </>
  );
}

export default App;
