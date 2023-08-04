import { useEffect, useContext } from "react";

// Context
import ShowsContext from "../context/shows/showsContext";

// Components
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import ShowTicketForm from "../components/ShowTicketForm";

const Singlepage = () => {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);
  const params = useParams();
  useEffect(() => {
    getSingleShow(params.id);
  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="singleshow">
          <img
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
            }
            alt={singleShow.name}
          />
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong> {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {singleShow.rating ? singleShow.rating.average : "No rating"}
            </p>
            <p>
              <strong>Offical Site:</strong>{" "}
              {singleShow.officalSite ? (
                <a
                  href={singleShow.officalSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officalSite}
                </a>
              ) : (
                "No offical site"
              )}
            </p>
            <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
          </div>
        </div>
      )}
      <div>
        <a href="/" className="btn" style={{ textDecoration: "none" }}>
          BOOK NOW
        </a>
      </div>
    </>
  );
};

export default Singlepage;
