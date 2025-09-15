const AdminPlayground = () => {

    return ( 


         <div className="container-fluid">

                       
                        <a href="addToPlayground.html"
                            className="add-btn d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i>Add New</a>

                     
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">playground images</h6>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Image</th>
                                                <th>Published at</th>
                                            </tr>
                                        </thead>
                                        

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Image-slug</td>
                                                <td>2011/04/25</td>
                                            </tr>




                                            <tr>
                                                <td>2</td>
                                                <td>Image-slug</td>
                                                <td>2011/04/25</td>
                                            </tr>



                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

     );
}
 
export default AdminPlayground;