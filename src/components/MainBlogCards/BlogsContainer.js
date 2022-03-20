import "./BlogsContainer.css";

import BlackCatImage from "../../resources/cat.jpeg";
import MySelfImage from "../../resources/myself.jpeg";
import FitnessImage from "../../resources/fitness_first.jpeg";
import OmuRiceImage from "../../resources/omu.jpeg";

function BlogsContainer() {
  return (
    <section className="blog-container">
      <article className="blog-card">
        <div className="blog-card__picture">
          <img src={MySelfImage} alt="Myself" />
        </div>
        <div className="blog-card__desc">
          <div className="blog-card__desc-header">Myself</div>
          <div className="blog-card__desc-main">Picture of Myself, selfied by using my New iPad Mini!</div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__picture">
          <img src={BlackCatImage} alt="A Black Cat" />
        </div>
        <div className="blog-card__desc">
          <div className="blog-card__desc-header">Black Cat</div>
          <div className="blog-card__desc-main">Picture of a black cat wearing a motorcycle taxi trying to earn for his meal.</div>
        </div>
      </article>

      <article className="blog-card">
        <div className="blog-card__picture">
          <img src={FitnessImage} alt="Fitness View" />
        </div>
        <div className="blog-card__desc">
          <div className="blog-card__desc-header">Fitness First @SiamParagon</div>
          <div className="blog-card__desc-main">
              Fitness First View at Siam Paragon. So much spacious here!
          </div>
        </div>
      </article>

      <article className="blog-card">
        <div className="blog-card__picture">
          <img src={OmuRiceImage} alt="Omu Rice" />
        </div>
        <div className="blog-card__desc">
          <div className="blog-card__desc-header">My First Omu Rice</div>
          <div className="blog-card__desc-main">My First Japanese-like Omu Rice at Central World</div>
        </div>
      </article>
    </section>
  );
}

export default BlogsContainer;
