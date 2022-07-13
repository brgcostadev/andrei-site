import NomeAndrei from "../../assets/ANDREICRUZ.svg";
import ImgBusinessAndrei from "../../assets/andreicruz1.png";
import ImgArabianAndrei from "../../assets/andreicruz2.png";
import "./style.css";

export default function ComponentOne() {
	return (
		<div className='co-container'>
			<div className='co-content ai-center'>
				<div className='co-content-text'>
					<h2 className='font-main white'>SATISFAÇÃO</h2>
					<img src={NomeAndrei} alt='Andrei Cruz' />
					<h2 className='font-main white'>
						Além de ser especialista em criptomoedas e possuir cerca de 20 mil
						seguidores em minhas redes sociais, fui Oficial das Forças Armadas
						do Brasil e carrego como lema a honra, a lealdade e o comprometimento!
					</h2>
				</div>
				<img src={ImgBusinessAndrei} alt='' className='capa-andrei' />
			</div>
			<div className='co-content'>
				<img src={ImgArabianAndrei} alt='' className='capa-andrei' />
				<div className='co-content-text-two'>
					<h2 className='font-main-italic mg-top-100'>
						<i>
							Com nossa estratégia, já somos uma comunidade com mais de 300
							membros gerando resultados!
						</i>
					</h2>

					<h2 className='font-main white mg-top-200'>
						No último ano venho mostrando como ter resultados explosivos no
						mercado de criptomoedas de forma automatizada com o que há de mais
						avançado em termos de tecnologia de negociações.
					</h2>
				</div>
			</div>
		</div>
	);
}
