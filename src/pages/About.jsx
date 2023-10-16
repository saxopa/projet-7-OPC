import Banner from "../components/Banner/Banner"
import Collapse from "../components/Collapse/Collapse"
import "./About.scss"

export default function About() {
    return (
        
        <div>
            <Banner />

            <div className="container_collapse_about">
            <Collapse title="Description" children="Lorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsu" />
            <Collapse title="Description" children="Lorem ipsu" />
            <Collapse title="Description" children="Lorem ipsu" />
            <Collapse title="Description" children="Lorem ipsu" />

            </div>

        
        </div>
        
    )
}