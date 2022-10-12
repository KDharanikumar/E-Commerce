import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <section className="search">
      <div className="product-search">
        <input type="text" className="form-control searchbox" placeholder="Search Products" />
        <i>
          <FaSearch />
        </i>
      </div>
    </section>
  );
};

export default Search;
