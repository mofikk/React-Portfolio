import {Link} from 'react-router-dom';

const WebDevError = () => {
    return ( 



         <div className="not-found">
              <h2>404</h2>
              <p>That page cannot be found</p>
              <Link to="/web-dev">Back to the homepage...</Link>
            </div>



     );
}
 
export default WebDevError;