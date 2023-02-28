import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductHost from "../../components/Host/Host";
import ProductRating from "../../components/Rating/Rating";
import Carousel from "../../components/Carousel/Carousel";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import logements from "../../data/logements.json";
import Error from "../../components/Error/Error";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProduct = logements.find((p) => p.id === id);
    setProduct(foundProduct);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (!loading && product) {
      document.title = product.title || "Kasa - Appartement"; // on récupère le titre de l'appartement pour l'afficher sur la fenêtre
    }
  }, [loading, product]);

  // Conditions pour affichage des pages et éviter les faux ids

  if (loading) return null; // utilisation d'un loading pour éviter de retourner undefined
  if (!product) {
    return <Error />;
  }
  // renvoi la page Error si logement est invalide

  const equipments = product.equipments.map((i, index) => (
    <li className="equipments__list" key={index}>
      {i}
    </li>
  ));

  return (
    <div key={product.id} className="product__container">
      <div className="product__carousel">
        <Carousel slides={product.pictures} />
      </div>
      <div className="product__infos">
        <div className="product__infos__container">
          <div className="product__infos__title">
            <h1>{product.title}</h1>
            <h3>{product.location}</h3>
          </div>
          <div className="product__infos__tags">
            {product.tags.map((tag) => (
              <Tag tag={tag} />
            ))}
          </div>
        </div>
        <div className="product__host">
          <div className="product__host__infos">
            {<ProductHost host={product.host} />}
          </div>
          <div className="product__host__rating">
            {<ProductRating rating={product.rating} />}
          </div>
        </div>
      </div>
      <div className="product__collapse">
        <Collapse title="Description">{product.description}</Collapse>
        <Collapse title="Equipements">{equipments}</Collapse>
      </div>
    </div>
  );
};

export default SingleProduct;
