import Close from "../../assets/modal-close.svg";
import Next from "../../assets/modal-next.svg";
import Previous from "../../assets/modal-previous.svg";
import "./style.css";

import { videos } from "../../videos";

export default function Header({ url, handleClose, setUrl }) {
	function handleNext() {
		let findIndex = videos.findIndex((video) => url === video.url);
		if (videos.length >= findIndex) {
			findIndex++;
			if (findIndex === videos.length) {
				setUrl(videos[0].url);
			}
			setUrl(videos[findIndex].url);
		}
	}

	function handlePrevious() {
		let findIndex = videos.findIndex((video) => url === video.url);
		if (findIndex >= 0) {
			findIndex--;
			if (findIndex < 0) {
				setUrl(videos[videos.length - 1].url);
			}
			setUrl(videos[findIndex].url);
		}
	}

	return (
		<div className='modal'>
			<img
				className='modal-close'
				src={Close}
				onClick={() => handleClose()}
				alt=''
			/>
			<div className='modal-controls'>
				<img
					className='modal-previous'
					src={Previous}
					alt=''
					onClick={handlePrevious}
				/>
				<iframe
					src={url}
					title='YouTube video player'
					frameBorder='0'
					allowFullScreen
					className='video-responsive'
				></iframe>
				<img className='modal-next' src={Next} alt='' onClick={handleNext} />
			</div>
		</div>
	);
}
