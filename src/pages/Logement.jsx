import React from 'react';
import datas from '../data/datas.json';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import Caroussel from '../components/Caroussel/Caroussel';





function Logement() {
 
  const [imageSlider, setImageSlider] = useState([]);
	//récupération de l'id du logement
	const idLogementPage = useParams('id').id;
	//récupération des données du logement
	const dataCurrentLogementPage = datas.filter(data => data.id === idLogementPage);
	
	useEffect(() => {
		const dataCurrentLogementPage = datas.filter(data => data.id === idLogementPage);
		setImageSlider(dataCurrentLogementPage[0].pictures);
	}, [idLogementPage]);

	const name = dataCurrentLogementPage[0].host.name.split(' '); 
	

	return (
		<>

			<main >
				<Caroussel imageSlider={imageSlider} />
				<div >
					<div >
						<h1>{dataCurrentLogementPage[0].title}</h1>
						<p>{dataCurrentLogementPage[0].location}</p>
						<div>
							{dataCurrentLogementPage[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div >
						<div>
							<div >
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentLogementPage[0].host.picture} alt="LogementPage" />
						</div>
							
						<div >
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index}  alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div >
					<div >
	
					</div>
					<div >

					</div>	
				</div>
			</main>
			
		</>
	)
}

export default Logement