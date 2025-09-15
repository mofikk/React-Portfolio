import { Link } from 'react-router-dom';


const Anwu = () => {
    return ( 




        <main>

    <div className="big_image">

      <img src="https://ik.imagekit.io/lyxudnnoi/Anwu-anwu/Cover.jpg?updatedAt=1742477643682" alt="" />

    </div>

    <div className="lddetails">

      <div className="right">

        <p>2023</p>
        <p>Anwu-Anwu Music cover art Design</p>
        <h3>I designed a misic cover art for an artist(Elsaint), I met him 5 years ago, when i was still starting out as
          a designer. I posted something a little bit similar to this on my instagram, so he reached out and requested
          this for his new song. Double click to add your own content. Click the Content Manager icon on the add panel
          to your left.</h3>

        <div className="line"></div>




      </div>


    </div>




    <div className="gallery">



      <img className="g1" src="https://ik.imagekit.io/lyxudnnoi/Anwu-anwu/Anwu-Anwu.jpg?updatedAt=1742477644039" alt="" />





    </div>


    <div className="pagination">


<Link className="previous" to="/green">PREVIOUS</Link>
      <Link className="next" to="/banner">NEXT</Link>


    </div>







  </main>



     );
}
 
export default Anwu;