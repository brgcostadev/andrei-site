import ImgInstagram from "../../assets/instagram-square-brands.svg";
import ImgTelegram from "../../assets/telegram-svgrepo-com.svg";
import ImgYoutube from "../../assets/youtube-square-brands.svg";
import "./style.css";

export default function Footer() {
	return (
		<div className='co3-content'>
			<a href="https://www.youtube.com/channel/UCEY6Eje_I9BeXZlpcOks5MA" target="_blank"><img src={ImgYoutube} alt='youtube' className='ico' /></a>
			<a href="https://www.instagram.com/_andreicruz/" target="_blank"><img src={ImgInstagram} alt='Instagram' className='ico' /></a>
			<a href="https://t.me/GoldarioPortuguese" target="_blank"><img src={ImgTelegram} alt='telegram' className='ico-telegram' /></a>
		</div>
	);
}
