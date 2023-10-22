import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";
import "./About.scss";
import datasAbout from "../data/dataAbout.json";

export default function About() {
  return (
    <div>
      <Banner />

      <div className="container_collapse_about">
        {
          //créer un composant collapse qui boucle sur un fichier json "datasAbout"
          //pour afficher les données de la page about
          //utiliser le composant collapse dans la page about
          datasAbout.map((data) => {
            return (
              <Collapse
                key={data.id}
                title={data.title}
                children={data.children}
              />
            );
          })
        }
        <Collapse
          title="Description"
          children="Lorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsu"
        />
      </div>
    </div>
  );
}
