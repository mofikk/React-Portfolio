import { Routes, Route } from 'react-router-dom';
import AdminNavbar from './admin/components/AdminNavbar';
import Sidebar from './admin/components/Sidebar';
import AdminFooter from './admin/components/AdminFooter';
import Modal from './admin/components/Modal';
import ToTop from './admin/components/ToTop';
import Dashboard from './admin/pages/Dashboard';
import AdminPlayground from './admin/pages/AdminPlayground';

import './admin/css/mine.css'; 


function Admin() {
 return (


    <div className="admin-wrapper"> 

        <div className="admin-wrapper" id="wrapper">

            
            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">
            
                
                <div id="content">

                        <AdminNavbar />
            
                    <div className="admin-content">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/playground" element={<AdminPlayground />} />
                            {/* <Route path="/upload-playground" element={<UploadPlayground />} />
                            <Route path="/upload-design" element={<UploadDesignProject />} />
                            <Route path="/upload-web" element={<UploadWebProject />} />
                            <Route path="/users" element={<ViewUsers />} />
                            <Route path="/edit-user/:id" element={<EditUser />} />
                            <Route path="/profile" element={<ProfilePage />} />  */}
                        </Routes>
                    </div>
                        <AdminFooter />
                </div>
                        <ToTop />

                         <Modal />
            </div>
        </div>

            
    </div>

        

        );
        }


export default Admin;
