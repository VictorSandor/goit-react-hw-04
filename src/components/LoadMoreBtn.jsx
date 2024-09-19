import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onNextPage }) {
  return (
    <button className={css.button} onClick={onNextPage}>
      Load more
    </button>
  );
}