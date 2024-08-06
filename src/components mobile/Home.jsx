import React, {useEffect} from "react";
import './Home.css'
import img from '../img/image5.jpeg'


const Home = () => {

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(parallax => {
        if (parallax) { // Verifica se o elemento existe
          const scrollPosition = window.pageYOffset;
          parallax.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px'; // Ajuste a velocidade do efeito
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Chama handleScroll para definir o valor inicial
    handleScroll();

    // Limpeza do event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <div className="content-home home">
            
           <section className="container-welcome section parallax"> 
                <p id="welcome1">Bem</p>
                <p id="welcome2">vindo,</p>
                <p id="welcome3" >Caro leitor!</p>
           </section>

            <section className="home-div-first section">
                  <h3>Quem sou?</h3>
                  <img src={img} className="show-me"/>
                  <p>Olá, sou Jennifer, uma jovem senhora de 21 anos, cujo o hobby é externalizar sensações e sentimentos, obtidos ao decorrer da vida e do 
                      convívio com as pessoas, através de composições, textos, poemas, ou a forma que você achar melhor de nomear. Eu particurlamente, prefiro chamar 
                      de letra de música, pois sempre que leio, leio cantando rsrs..</p>
               
            </section>

            <section className="parallax"></section>

            <section className="home-div-tuo section">
                <h3>Quando tudo começou...</h3>
                <p> Eu costumava escrever em um caderninho aos 10 anos, mas com o passar do tempo, fui focando em outros assuntos, então em algum momento perdi
                    os rascunhos.</p>
                <p>Com 16 voltei a sentir vontade de criar as histórias que serviam como base para as letras e, modéstia parte, sinto que com o passar dos anos
                    as letras ficam bem mais profundas, talvez porque com a idade chegando, consiguemos compreênder a vida melhor.</p>   
                <p> Mas, do que me recordo, a primeira letra composta por mim é <i><b>"Brigas"</b></i>.</p>
            </section>

            <section className="parallax"></section>

            <section className="home-div-three section parallax">
                <h3>Composições em destaque</h3>
                <p>
                Pequenos Trechos: Exiba trechos ou frases marcantes das suas composições. Pode ser um breve excerto de letras ou uma descrição da ideia central de cada composição. 
                Isso dá uma amostra do que os visitantes podem esperar.
                </p>
            </section>

            <section className="parallax"></section>

            <section className="home-div-four section parallax">
                <h3>ambiente de criação</h3>
                <p>utilização do google keep e lugares váriados, onibus, uber, restaurantes</p>
            </section>

            <section className="parallax"></section>

            <section className="home-div-five section">
                <h3>Inspirações</h3>
                <p>não me recordo de todas pessoas, letras, musicas, que serviram de inspiração, são várias. Mas posso dizer que melodias ja me trouxeram sensações 
                    que levaram a criar uma história
                </p>
            </section>


           
        </div>
    )
}

export default Home;