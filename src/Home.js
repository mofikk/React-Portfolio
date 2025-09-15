import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoProjects from './logoProjects';

const Home = () => {



 

    return ( 




  <main>


    <div className="more">
      <img src="/img/there-is-more.png" alt="" />
    </div>


    <div class="title">
      <h4>FRANK MBADIWE</h4>
      <h3>DESIGNER</h3>
      <h1>I'm an experienced brand and UI designer,
        <br />passionate about creating impactful visual
        <br />identities and user-friendly interfaces..
      </h1>
    </div>

    <div class="show">

      {logoProjects.map((logo) => (

      <div class="s1" style={{ backgroundImage: `url(${logo.thumbnail})` }} key={logo.id}>
        <div class="s1t">
          <h3><Link to={`/projects/${logo.id}`}>{logo.title}</Link></h3>
          <p>{logo.desc.split('.')[0]}. . .</p>
        </div>
      </div>
 ))}

      <div class="s1" style={{ backgroundImage: 'url("https://ik.imagekit.io/lyxudnnoi/Book/thumbnail.jpg?updatedAt=1743082359220")' }}>
        <div class="s1t">
          <h3><a href="/Tower">The Tower - Book Cover</a></h3>
          <p>I wanted this design to feel unsettling yet intriguing, like a story that pulls you in before you even read
            the first page...</p>
        </div>
      </div>




      <div class="s1" style={{ backgroundImage: 'url("https://ik.imagekit.io/lyxudnnoi/Mad%20Que%20BBQ/Mad%20Que-01.jpg?updatedAt=1742433690631")' }}>
        <div class="s1t">
          <h3><a href="/Mad-que-bbq">Mad Que BBQ</a></h3>
          <p>The MadQue BBQ logo combines bold, fiery energy with a refined, professional edge, designed to represent
            both a
            competitive BBQ team and a catering brand. Inspired by modern, fire-themed aesthetics (without pig imagery),
            the mark
            strikes a balance between intensity and approachability</p>
        </div>
      </div>


      <div class="s1" style={{ backgroundImage: 'url("https://ik.imagekit.io/lyxudnnoi/Kelan%20Travels/Thumbnail?updatedAt=1742430797869")' }}>
        <div class="s1t">
          <h3><a href="/Keelan">Keelan Travel And Tours</a></h3>
          <p>Keelan Travel and Tours needed a fresh, modern identity that captured the spirit of adventure while communicating trust and professionalism...</p>
        </div>
      </div>


      <div class="s1" style={{ backgroundImage: 'url("https://ik.imagekit.io/lyxudnnoi/Green%20Logistics/Green-01.jpg?updatedAt=1742437444312")' }}>
        <div class="s1t">
          <h3><a href="/Green">Green Logistics</a></h3>
          <p>Green Logistics Is a delivery company that believes in protecting the environment.
            while satisfying customers with fast and secure delivery.</p>
        </div>
      </div>



      <div class="s1" style={{ backgroundImage: 'url("https://ik.imagekit.io/lyxudnnoi/Anwu-anwu/Anwu-Anwu.jpg?updatedAt=1742477644039")' }}>
        <div class="s1t">
          <h3><a href="/Anwu">Anwu-Anwu Cover Art</a></h3>
          <p>Misic cover art Design for an artist(Elsaint)</p>
        </div>
      </div>


      <div class="s1" style={{ backgroundImage: 'url("https://ik.imagekit.io/lyxudnnoi/banners-01.jpg?updatedAt=1743095754981")' }}>
        <div class="s1t">
          <h3><a href="/Banner">Social Media Banners</a></h3>
          <p>A collection of marketing materials and flyers, where design meets strategy.</p>
        </div>
      </div>

    </div>



  </main>



     );
}
 
export default Home;
