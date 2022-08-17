import '../styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/sidebar";
import Navbar from '../components/navbar';
import Footer from '../components/footer';



export default function Cards() {
    return (
        <div>
            <header><Navbar /></header>
            <aside><Sidebar /></aside>



            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Users</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/Home">Home</a></li>
                            
                            <li class="breadcrumb-item active">Userd</li>
                        </ol>
                    </nav>
                </div>
                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Users</h5>
                                    <p>Usuários cadastrados no sistema</p>
                                    <table class="table datatable">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name of User</th>
                                                <th scope="col">Tittle</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Priority</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Brandon Jacob</td>
                                                <td>I can't find the Worksheet</td>
                                                <td>Software Problems</td>
                                                <td>Low</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Bridie Kessler</td>
                                                <td>My Pc don't turn on</td>
                                                <td>Hardware Problems</td>
                                                <td>High</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Ashleigh Langosh</td>
                                                <td>My connection is unstable</td>
                                                <td>Network Problems</td>
                                                <td>Medium</td>
                                            </tr>
                                      
                                        </tbody>
                                    </table>


                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>

            <footer><Footer /></footer>
        </div>
    );
}

