import { Trash } from "@phosphor-icons/react/dist/ssr";
import styles from "./Comment.module.css";
import { ThumbsUp } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gustavohst.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Tenório</strong>
              <time title="May 11 at 08:33h" dateTime="2022-05-14 08:33:51">
                Arround 1h ago
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Claps <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
