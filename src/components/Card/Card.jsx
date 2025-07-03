import './Card.scss'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {

	return (
		<Link to={`/logement/${id}`} className="card">
			<figure>
				<img src={cover} alt="" />
				<figcaption>
					<h3>{title}</h3>
				</figcaption>
			</figure>
		</Link>
	)
}