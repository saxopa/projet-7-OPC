import dati from '../../data/datas.json'
import './Gallery.css'
import Card from '../Card/Card'

const List = ({ data }) => {
    const listItems = dati.map((item) => (
      <div className="gallery"  key={item.id}>
        <Card 
          key={item.id}
          id={item.id}
          title={item.title}
          cover={item.cover}
        />
      </div>
    ));
  
    return (
      <div className='gallery-grid'>
        {listItems}
      </div>
    );
  }
  ;
    
  
  export default List;














/*export default function JsonReader() {
    const [jsonData, setJsonData] = useState([]);
  
    useEffect(() => {
      // Fonction asynchrone pour charger le fichier JSON local
      const fetchJsonData = async () => {
        try {
          const response = await fetch('src/data/datas.json'); // Remplacez par le chemin de votre fichier JSON
          if (!response.ok) {
            throw new Error('Erreur de chargement du fichier JSON');
          }
          const data = await response.json();
          setJsonData(data);
        } catch (error) {
          console.error('Erreur lors du chargement du fichier JSON :', error);
        }
      };
  
      fetchJsonData(); // Appel de la fonction pour charger le fichier JSON au montage du composant
    }, []);
  
    return (
      <div>
      <Card 
       key={jsonData.id}
       id={jsonData.id}
       title={jsonData.title}
       cover={jsonData.cover}
      
      />
      </div>
    );
  }
  */