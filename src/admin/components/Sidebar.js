const Sidebar = () => {
    return ( 


        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">My Admin</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />



            <li className="nav-item">
                <a className="nav-link" href="designProjects.html">
                    <i className="fas fa-fw fa-image"></i>
                    <span>Design Projects</span></a>
            </li>


            <li className="nav-item">
                <a className="nav-link" href="/playgroung">
                    <i className="fas fa-fw fa-paint-brush"></i>
                    <span>Playground</span></a>
            </li>



            <li className="nav-item">
                <a className="nav-link" href="webProjects.html">
                    <i className="fas fa-fw fa-laptop-code"></i>
                    <span>Web Projects</span></a>
            </li>


            <li className="nav-item">
                <a className="nav-link" href="users.html">
                    <i className="fas fa-fw fa-user"></i>
                    <span>Users</span></a>
            </li>



            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>



        </ul>

     );
}
 
export default Sidebar;