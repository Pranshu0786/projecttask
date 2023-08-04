import Searchbar from "../components/Searchbar";
import { useContext } from "react";
import ShowsContext from "../context/shows/showsContext";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";
const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <div className="homepage">
      <Searchbar />
      {loading ? (
        <Loader />
      ) : (
        <div className="homepage__list">
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "No rating"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
