import styles from "./SearchBar.module.css";
function SearchBar() {
  return (
    <div className={styles.container}>
      <div>
        <input type="text" placeholder="minimum price" />
        <input type="text" placeholder="maximum price" />
      </div>
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
