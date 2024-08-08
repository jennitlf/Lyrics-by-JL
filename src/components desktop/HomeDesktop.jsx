import React, {useEffect} from "react";
import './HomeDesktop.css'
import img from '../img/image5.jpeg'


const HomeDesktop = () => {

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax-d');
      parallaxElements.forEach(parallax => {
        if (parallax) { 
          const scrollPosition = window.pageYOffset;
          parallax.style.backgroundPositionY = -(scrollPosition * 0.3) + 'px';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    
    handleScroll();

    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <div className="content-home-desktop">
            
           <div className="parallax-d section1"> 
                <p >Bem <br/>vindo,<br/> Caro leitor!</p>
           </div>

            <div className="section2">
                  <h3>Quem sou?</h3>
                  
                  <div>
                    <img src={img} alt="foto da autora" className="img-home"/>
                    <p>
                      Olá, sou Jennifer, uma jovem senhora de 21 anos, cujo o hobby é externalizar sensações e sentimentos, obtidos ao decorrer da vida e do 
                      convívio com as pessoas, através de composições, textos, poemas, ou a forma que você achar melhor de nomear. Eu particurlamente, prefiro chamar 
                      de letra de música, pois sempre que leio, leio cantando rsrs..
                    </p>
                  </div>
               
            </div>

            <div className="parallax-d section3"></div>

            <div className="section4">
                <h3>Quando tudo começou...</h3>
                <p>Eu costumava escrever em um caderninho aos 10 anos, mas com o passar do tempo, fui focando em outros assuntos, então em algum momento perdi
                    os rascunhos.</p>
                <p>Com 16 voltei a sentir vontade de criar as histórias que serviam como base para as letras e, modéstia parte, sinto que com o passar dos anos
                    as letras ficam bem mais profundas, talvez porque com a idade chegando, consiguemos compreênder a vida melhor.</p>   
                <p> Mas, do que me recordo, a primeira letra composta por mim é <i><b>"Brigas"</b></i>.</p>
            </div>

            <div className="parallax-d section5"></div>

            <div className="section6">
                <h3>Não vivo mais sem você</h3>
                <p>"Suaves e macias são as suas mãos, estenda-as e toque em meu coração.</p>
                <p>Se o sol não nascer, não tenho medo,<br/>
                    pois estarei com você.<br/>
                    E o calor de nossos corpos, em nossa intimidade,
                    logo se transformam em uma só verdade.</p>
                <p>Se não te procuro não sinto a calma, 
                    e o ar logo me falta e, de novo, 
                    não vivo mais sem você."</p>
            </div>

            <div className="parallax-d section7"></div>

            <div className="section8">
                <h3>Ambiente de criação</h3>
                <p>Pra ser sincera, qualquer lugar é um lugar para escrever o que se sente. Na praça, em casa, no ônibus...</p>
                <p>Para criar os rascunhos utilizo um app de notas, ou mesmo um caderno, mas o mais importante é sempre ter como anotar, pois
                  do nada pode vir uma ideia.</p>
            </div>

            <div className="parallax-d section9"></div>

            <div className="section10">
                <h3>Inspirações</h3>
                <p> Eu costumo escrever letras românticas, e o que não falta no mundo são amores não correspondidos, isso serve como base. Porém, uma música, um toque,
                  um lugar, uma pessoa... Qualquer coisa pode servir de inpiração. </p>
            </div>


           
        </div>
    )
}

export default HomeDesktop;