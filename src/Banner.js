import { Link } from 'react-router-dom';

const Banner = () => {
    return ( 



        <main>

    <div className="big_image">

      <img src="https://ik.imagekit.io/lyxudnnoi/banners-00.jpg?updatedAt=1743095660376" alt="" />

    </div>

    <div className="lddetails">

      <div className="right">

        <p>2024</p>
        <p>Social Media Banners</p>
        <h3>A collection of marketing materials and flyers, where design meets strategy. Each piece showcased here was
          crafted with
          the goal of capturing attention, communicating key messages, and driving action. From vibrant event flyers to
          compelling
          promotional materials, my designs are tailored to meet the unique needs of each project.</h3>
        <div className="line"></div>




      </div>


    </div>





    <div className="pagination">

        <Link className="previous" to="/anwu">PREVIOUS</Link>
      <Link className="next" to="">NEXT</Link>


    </div>



   



  </main>



     );
}
 
export default Banner;