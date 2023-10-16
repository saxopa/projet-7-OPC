import React from "react";
import datas from "../data/datas.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Caroussel from "../components/Caroussel/Caroussel";
import Collapse from "../components/Collapse/Collapse";
import "./Logement.scss";

function Logement() {
  const [imageSlider, setImageSlider] = useState([]);
  //récupération de l'id du logement
  const idLogementPage = useParams("id").id;
  //récupération des données du logement
  const dataLogementActuel = datas.filter((data) => data.id === idLogementPage);
  // useEffect permet de faire des appels à des API ou des traitements asynchrones

  useEffect(() => {
    const dataLogementActuel = datas.filter(
      (data) => data.id === idLogementPage
    );
    setImageSlider(dataLogementActuel[0].pictures);
  }, [idLogementPage]);

  const name = dataLogementActuel[0].host.name.split(" ");
  console.log(dataLogementActuel);

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
                return <button className="button-info-logement" key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div>
            <div className="container-info-nom-photo">
              <div>
                <span>{name[0] + name[1]} </span>
              </div>
              <img
                src={dataLogementActuel[0].host.picture}
                className="host-img"
                alt="LogementPage"
              />
            </div>

            <div>
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return <img key={index} alt="star" />;
              })}
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
              children={<ul>
				{dataLogementActuel[0].equipments.map((equipment, index) => (
				  <li key={index}>{equipment}</li>
				))}
			  </ul>}
            />
          </div>
      </main>
    </>
  );
}

export default Logement;
