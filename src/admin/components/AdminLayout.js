import { useEffect } from 'react';
import { loadScript, loadStyles } from '../../utils/loadExternalAssets';
import AdminNavbar from './AdminNavbar';
import Sidebar from './Sidebar';
import AdminFooter from './AdminFooter';
import Modal from './Modal';
import ToTop from './ToTop';

function AdminLayout({ children }) {
  useEffect(() => {
    // ✅ STYLES
    loadStyles("https://cdn.jsdelivr.net/npm/pagedone@1.2.2/src/css/pagedone.css");
    loadStyles("https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css");
    loadStyles("%PUBLIC_URL%/vendor/fontawesome-free/css/all.min.css");
    loadStyles("../../css/sb-admin-2.min.css");
    loadStyles("%PUBLIC_URL%/vendor/datatables/dataTables.bootstrap4.min.css");
    loadStyles("../../css/mine.css");

    // ✅ SCRIPTS
   loadScript("%PUBLIC_URL%/vendor/jquery/jquery.min.js");
loadScript("%PUBLIC_URL%/vendor/bootstrap/js/bootstrap.bundle.min.js"); // AFTER jQuery!
loadScript("%PUBLIC_URL%/vendor/jquery-easing/jquery.easing.min.js");
loadScript("%PUBLIC_URL%/vendor/datatables/jquery.dataTables.min.js");
loadScript("%PUBLIC_URL%/vendor/datatables/dataTables.bootstrap4.min.js");
loadScript("%PUBLIC_URL%/js/sb-admin-2.min.js");
loadScript("%PUBLIC_URL%/js/demo/datatables-demo.js");
  }, []);

  return (
    <div className="admin-wrapper" id="wrapper">
      
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        
        <div id="content">
          <AdminNavbar />

          <div className="admin-content">
            {children}
          </div>

          <AdminFooter />
        </div>

        <ToTop />
        <Modal />
        
      </div>
    </div>
  );
}

export default AdminLayout;
