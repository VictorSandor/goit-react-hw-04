import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  return (
    <header className={css.header}>
      <form onSubmit={onSubmit}>
        <input
          name="input"
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}