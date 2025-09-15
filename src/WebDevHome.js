import { useState, useEffect } from "react";

import useFetch from "./UseFetch";
import { API_BASE } from "./config";
const WebDevHome = () => {


const { data: web, loading, error } = useFetch(`${API_BASE}/webprojects`, []);



  if (loading) return <p>⏳ Loading projects...</p>;
  if (error) return <p style={{ color: "red" }}>❌ Error: {error}</p>;

    return ( 



         <main className="web-dev-home">
        <div className="title web-dev-title">
            <h4>FRANK MBADIWE</h4>
            <h3>FRONT-END WEB DEVELOPER</h3>
            <h1>hi, I'm a front-end web developer with a passion for creating
                <br />dynamic and user-friendly web applications.
                <br />I specialize in HTML, CSS, JavaScript, and React, and I'm always eager to learn new technologies
                <br />and improve my skills. Let's build something amazing together!
            </h1>

            <div className="web-dev-stacks">
                <span><i className="devicon-html5-plain stacks"></i>
                    <p>Html 5</p>
                </span>
                <span><i className="devicon-css3-plain stacks"></i>
                    <p>Css 3</p>
                </span>
                <span><i className="devicon-javascript-plain stacks"></i>
                    <p>JavaScript</p>
                </span>
                <span><i className="devicon-react-original stacks"></i>
                    <p>React</p>
                </span>
                <span><i className="devicon-nodejs-plain stacks"> </i>
                    <p>Node js</p>
                </span>
            </div>


        </div>



        <div className="show web-dev-show">


            <div className="web-dev-card-container">




                <div className="web-dev-card">
                    <h2><a href="#">This Website, Yes This one you are looking at <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </h2>
                    <p>
                        Started off with simple Html and Css after few months i upgraded and moved to REACT also added and admin section so its a bit dynamic
                    </p>
                    <div className="web-dev-skill-tags">
                        <span className="skill-tag">HTML</span>
                        <span className="skill-tag">CSS</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">React</span>
                    </div>
                </div>




            


                { web.map((dev) => (

                    <div className="web-dev-card" key={dev._id || dev.id}>

                        <h2><a target="blank" href={ dev.link }> { dev.name } <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </h2>
                        <p>
                            { dev.desc }
                        </p>
                        <div className="web-dev-skill-tags">
                            { dev.tags.map((tag, index) => (

                                <span className="skill-tag" key={index}>{tag}</span>

                            ))}
                            
                        </div> 

                    </div>

                 )) }



<div className="web-dev-card" style={{display: 'none'}}>
                    <h2><a href="#">This Website, Yes This one you are looking at <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </h2>
                    <p>
                        Started off with simple Html and Css after few months i upgraded and moved to REACT also added and admin section so its a bit dynamic
                    </p>
                    <div className="web-dev-skill-tags">
                        <span className="skill-tag">HTML</span>
                        <span className="skill-tag">CSS</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">React</span>
                    </div>
                </div>


        



            </div>


        </div>



    </main>



     );
}
 
export default WebDevHome;