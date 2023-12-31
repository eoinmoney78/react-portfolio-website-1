import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
// import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
// import IMG5 from '../../assets/portfolio5.png';
// import IMG6 from '../../assets/portfolio6.jpg';
const Portfolio = () => {
  return (
    <section id="portfolio">

        <h5>My Recent Work</h5>

        <h2>Portfolio</h2>

        <div className="container portfolio_container">

          <article className="portfolio_item">
            <div className="portfolio_item-image">
                <img src={IMG1} alt="" />

            </div>

            <h3>ToDo App</h3>


            <div className="portfolio_item-cta">
            <a href="https://github.com/eoinmoney78/Todo-app" className="btn" target='_blank' rel="noreferrer">Github</a>
            <a href="https://eoinmoney78.github.io/Todo-app/" className="btn btn-primary" target='_blank' rel="noreferrer" >Live Demo</a>
            </div>
          
          </article>



          <article className="portfolio_item">
            <div className="portfolio_item-image">
                <img src={IMG2} alt="" />

            </div>  

            <h3>Shopping list app</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/eoinmoney78/shopping-list" className="btn" target='_blank' rel="noreferrer">Github</a>
            <a href="https://eoinmoney78.github.io/shopping-list/" className="btn btn-primary" target='_blank' rel="noreferrer" >Live Demo</a>
            </div>
          </article>




          <article className="portfolio_item">
            <div className="portfolio_item-image">
                <img src={IMG4} alt="" />

            </div>

            <h3>Slot Machine Game</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/eoinmoney78/slot-machine" className="btn" target='_blank' rel="noreferrer">Github</a>
            <a href=" https://unrivaled-peony-2347b1.netlify.app" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>

        


        </div>


    </section>
  )
}

export default Portfolio;