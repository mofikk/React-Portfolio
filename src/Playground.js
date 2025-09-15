import { useEffect, useState } from 'react';
import useFetch from "./UseFetch";

const Playground = () => {


 const {data: gallery, loading, error} = useFetch('http://localhost:5000/playground', []);

 if (error) return <p>Error: {error}</p>;
    return ( 



<main>

    <div className="playground-title">
      <h1>Playground</h1>
      <p>Here are some of my experimental projects</p>
    </div>


    <div className="playground">




        {gallery.map((gallery) => (

<div className="pg-img-div">
            <img

          src= { gallery.image } 
          alt={ gallery.name } 
          key={gallery.id} 
          
          />
</div>
        ))}




      <div className="pg-img-div"><img
          src="https://ik.imagekit.io/lyxudnnoi/For%20web/scribbble.jpg?updatedAt=1742423561704" alt="Scribble" /></div>

      <div className="pg-img-div"><img
          src="https://ik.imagekit.io/lyxudnnoi/For%20web/Gradient-dimension.jpg?updatedAt=1742423559573"
          alt="Gradient" /></div>

      <div className="pg-img-div">
        <img src="https://ik.imagekit.io/lyxudnnoi/For%20web/Middle-of-the-night.jpg?updatedAt=1742423561657"
          alt="Middle of the night" />
      </div>

      <div className="pg-img-div"><img
          src="https://ik.imagekit.io/lyxudnnoi/For%20web/Sun-and-Moon.jpg?updatedAt=1742423560849" alt="Sun and moon" />
      </div>

      <div className="pg-img-div"><img
          src="https://ik.imagekit.io/lyxudnnoi/For%20web/rect-Sun-and-Moon-2.jpg?updatedAt=1742476335547"
          alt="Sun and moon2" /></div>

      <div className="pg-img-div"><img
          src="https://ik.imagekit.io/lyxudnnoi/For%20web/touch-hands.jpg?updatedAt=1742423561591" alt="Lovers" /></div>

      <div className="pg-img-div"><img src="https://ik.imagekit.io/lyxudnnoi/For%20web/Jkeeeyn.jpg?updatedAt=1742423562003"
          alt="JKeey" /></div>

      <div className="pg-img-div"><img
          src="https://ik.imagekit.io/lyxudnnoi/For%20web/touch-hands-color.jpg?updatedAt=1742423561515" alt="Lovers" />
      </div>

      <div className="pg-img-div"><img
          src="https://ik.imagekit.io/lyxudnnoi/For%20web/Work-of-art.jpg?updatedAt=1742423559962" alt="Work of art" />
      </div>

      <div className="pg-img-div"><img
          src="https://ik.imagekit.io/lyxudnnoi/For%20web/Provoke-Type.jpg?updatedAt=1742423561829" alt="Type" /></div>

      <div className="pg-img-div"><img src="https://ik.imagekit.io/lyxudnnoi/For%20web/birds.jpg?updatedAt=1742423560638"
          alt="Birds" /></div>


    </div>



  </main>



     );
}
 
export default Playground;