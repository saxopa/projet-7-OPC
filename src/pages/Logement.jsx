import React from "react";
import datas from "../data/datas.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Caroussel from "../components/Caroussel/Caroussel";
import Collapse from "../components/Collapse/Collapse";
import "./Logement.scss";
import starActive from "../assets/img/star-active.svg";
import starInactive from "../assets/img/star-inactive.svg";
import Erreur from "../pages/Erreur";
function Logement() {
  const [imageSlider, setImageSlider] = useState([]);
  const idLogementPage = useParams("id").id;
  const dataLogementActuel = datas.filter((data) => data.id === idLogementPage);

  // Gestion spécialisée d'un mauvais id : on ne tente pas d'accéder aux données si elles n'existent pas
  if (dataLogementActuel.length === 0) {
        console.error("Erreur : logement introuvable pour l'id :", idLogementPage);

    return <Erreur/> ;
  }

  useEffect(() => {
    const dataLogementActuel = datas.filter(
      (data) => data.id === idLogementPage
    );
    if (dataLogementActuel.length > 0) {
      setImageSlider(dataLogementActuel[0].pictures);
    } else {
      setImageSlider([]);
    }
  }, [idLogementPage]);

  const name = dataLogementActuel[0].host.name.split(" ");
  const rating = parseInt(dataLogementActuel[0].rating, 10);

  return (
    <>
      <main>
        <Caroussel imageSlider={imageSlider} />
        <div className="info-logement">
          <div className="container-info-tag">
            <h1>{dataLogementActuel[0].title}</h1>
            <p>{dataLogementActuel[0].location}</p>
            <div className="container-tag">
              {dataLogementActuel[0].tags.map((tag, index) => {
                return (
                  <button className="button-info-logement" key={index}>
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="container-star-name-img">
            <div className="container-info-nom-photo">
              <div className="container-info-nom">
                <span>{name[0]} </span>
                <br />
                <span> {name[1]} </span>
              </div>
              <img
                src={dataLogementActuel[0].host.picture}
                className="host-img"
                alt="LogementPage"
              />
            </div>

            <div className="container-logement-star">
              {[...Array(rating)].map((_, index) => (
                <img src={starActive} alt="star active" key={`star-active-${index}`} />
              ))}
              {[...Array(5 - rating)].map((_, index) => (
                <img
                  src={starInactive}
                  alt="star inactive"
                  key={`star-inactive-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="container_collapses">
          <Collapse
            title="Description"
            children={dataLogementActuel[0].description}
          />

          <Collapse
            title="Equipements"
            children={
              <ul>
                {dataLogementActuel[0].equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </main>
    </>
  );
}

export default Logement;
