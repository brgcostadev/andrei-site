import "./style.css";

export default function Card({ title, description, url, cover }) {
	return (
		<div className='card'>
			<img className='img-video' src={cover} alt='card cover' />
			<h3>
				<i>{title}</i>
			</h3>
			<p>{description}</p>
		</div>
	);
}
