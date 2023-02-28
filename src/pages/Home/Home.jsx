import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card.jsx";
import logements from "../../data/logements.json";

const Home = () => {
  useEffect(() => {
    document.title = "Kasa";
  }, []);

  return (
    <div>
      <Banner />
      <div className="HomeContainer">
        {logements.map((logement, index) => (
          <div className="HomeContainer__cards" key={logement.id + index}>
            <Link to={`/logements/${logement.id}`}>
              <Card cover={logement.cover} title={logement.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
