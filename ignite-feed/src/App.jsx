import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";

function App() {
  return (
    <>
      <Header></Header>
      <Post
        author="Gustavo Tenório"
        content="Gustavo is a man that wants achieve a lot of goals"
      />
    </>
  );
}

export default App;
