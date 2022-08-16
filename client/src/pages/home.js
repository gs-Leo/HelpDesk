import React from 'react';
import '../styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/sidebar";
import Navbar from '../components/navbar';
import Footer from '../components/footer';


export default function Home() {
    return (
        <div>
            <header><Navbar /></header>

            <aside><Sidebar /></aside>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Cards</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>                            
                            <li class="breadcrumb-item active">Cards</li>
                        </ol>
                    </nav>
                </div>

                <section class="section">
                    <div class="row align-items-top">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title">Card with header and footer</h5>
                                    Ut in ea error laudantium quas omnis officia. Sit sed praesentium voluptas. Corrupti inventore consequatur nisi necessitatibus modi consequuntur soluta id. Enim autem est esse natus assumenda. Non sunt dignissimos officiis expedita. Consequatur sint repellendus voluptas.
                                    Quidem sit est nulla ullam. Suscipit debitis ullam iusto dolorem animi dolorem numquam. Enim fuga ipsum dolor nulla quia ut.
                                    Rerum dolor voluptatem et deleniti libero totam numquam nobis distinctio. Sit sint aut. Consequatur rerum in.
                                </div>
                                <div class="card-footer">
                                    Footer
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title">Card with header and footer</h5>
                                    Ut in ea error laudantium quas omnis officia. Sit sed praesentium voluptas. Corrupti inventore consequatur nisi necessitatibus modi consequuntur soluta id. Enim autem est esse natus assumenda. Non sunt dignissimos officiis expedita. Consequatur sint repellendus voluptas.
                                    Quidem sit est nulla ullam. Suscipit debitis ullam iusto dolorem animi dolorem numquam. Enim fuga ipsum dolor nulla quia ut.
                                    Rerum dolor voluptatem et deleniti libero totam numquam nobis distinctio. Sit sint aut. Consequatur rerum in.
                                </div>
                                <div class="card-footer">
                                    Footer
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title">Card with header and footer</h5>
                                    Ut in ea error laudantium quas omnis officia. Sit sed praesentium voluptas. Corrupti inventore consequatur nisi necessitatibus modi consequuntur soluta id. Enim autem est esse natus assumenda. Non sunt dignissimos officiis expedita. Consequatur sint repellendus voluptas.
                                    Quidem sit est nulla ullam. Suscipit debitis ullam iusto dolorem animi dolorem numquam. Enim fuga ipsum dolor nulla quia ut.
                                    Rerum dolor voluptatem et deleniti libero totam numquam nobis distinctio. Sit sint aut. Consequatur rerum in.
                                </div>
                                <div class="card-footer">
                                    Footer
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