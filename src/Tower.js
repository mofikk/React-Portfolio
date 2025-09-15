import { Link } from 'react-router-dom';

const Tower = () => {
    return ( 


 <main>

    <div className="big_image">

      <img src="https://ik.imagekit.io/lyxudnnoi/Book/main.jpg?updatedAt=1743082359321" alt="" />

    </div>

    <div className="lddetails">

      <div className="right">

        <p>2025</p>
        <p>The Tower – Concept Book Cover</p>
        <h3>I wanted this design to feel unsettling yet intriguing, like a story that pulls you in before you even read
          the first
          page. The stacked houses create an eerie, almost impossible structure, symbolizing instability, whether
          physical,
          psychological, or emotional. The lone glowing window hints at something (or someone) inside, adding to the
          mystery.
          <br />
          <br />
          I played with bold contrasts, deep reds, and distorted typography to reinforce the feeling of unease, making
          the cover
          feel like a glimpse into a surreal, suspenseful world. This was a personal project where I experimented with
          visual
          storytelling and mood-driven design.

          <br />
          <br />
          <h3>Added Content</h3>

          What if books could give you a sneak peek of their story? I tried animated previews that add a subtle touch of
          motion
          and mystery. Imagine browsing with that extra spark!

          <br />


        </h3>

        <div className="line"></div>




      </div>


    </div>




    <div className="gallery">



      <img className="g1" src="https://ik.imagekit.io/lyxudnnoi/Book/book-1.jpg?updatedAt=1743082359193" alt="" />
      <img className="g2" src="https://ik.imagekit.io/lyxudnnoi/Book/thumbnail.jpg?updatedAt=1743082359220" alt="" />
      


      <video controls loop className="g3" autoplay>
        <source src="https://ik.imagekit.io/lyxudnnoi/Book/Book-aimate_2.mp4?updatedAt=1743393306715" type="video/mp4" />
        Your browser does not support the video tag.
      </video>






    </div>


    <div className="pagination">

      <a className="previous">PREVIOUS</a>
      <Link className="next" to="/mad-que-bbq">NEXT</Link>

    </div>





  </main>


     );
}
 
export default Tower;