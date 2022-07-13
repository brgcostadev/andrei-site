import { useState } from "react";
import Arrow from "../../assets/arrow-up-solid.svg";
import Card from "../../components/Card";
import ComponentOne from "../../components/ComponentOne";
import ComponentTwo from "../../components/ComponentTwo";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import { videos } from "../../videos";
import "./style.css";

function App() {
	window.onscroll = function () {
		if (document.documentElement.scrollTop > 800) {
			setArrow(true);
		} else {
			setArrow(false);
		}
	};

	const [openModal, setOpenModal] = useState(false);
	const [url, setUrl] = useState("");
	const [arrow, setArrow] = useState(0);
	return (
		<div className='container'>
			<ComponentOne id='top' />
			<ComponentTwo />
			<main>
				<h2>Aprenda tudo que você precisa</h2>
				<div className='container-cards'>
					{videos.map((video) => (
						<div
							onClick={() => {
								setOpenModal(true);
								setUrl(video.url);
							}}
							key={video.id}
						>
							<Card
								title={video.title}
								cover={video.cover}
								description={video.description}
							/>
						</div>
					))}
				</div>
			</main>
			{openModal && (
				<Modal
					url={url}
					setUrl={setUrl}
					handleClose={() => setOpenModal(false)}
				/>
			)}
			{arrow && (
				<a href='#top'>
					<img src={Arrow} alt='Subir para o topo' className='arrow-top' />
				</a>
			)}
			<Footer />
		</div>
	);
}

// Card
// Header

export default App;
