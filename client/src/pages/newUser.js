import React from 'react';
import '../styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/sidebar";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function NewUser() {
    return (
        <div>
            <header><Navbar /></header>

            <aside><Sidebar /></aside>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>New User</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item">Users</li>
                            <li class="breadcrumb-item active">New User</li>
                        </ol>
                    </nav>
                </div>


                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Register a new user</h5>

                        <form class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="floatingName" placeholder="Your Name" />
                                    <label for="floatingName">Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="floatingEmail" placeholder="Your Email" />
                                    <label for="floatingEmail">Email</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="floatingEmail" placeholder="Your Email" />
                                    <label for="floatingEmail">Username</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                            </div>                           

                            <div class="col-md-4">
                                <div class="form-floating mb-3">
                                    <select class="form-select" id="floatingSelect" aria-label="State">
                                        <option selected></option>
                                        <option value="1">Suport</option>
                                        <option value="2">ADM</option>
                                    </select>
                                    <label for="floatingSelect">Department</label>
                                </div>
                            </div>
                            
                            <div class="col-md-4">
                                <div class="form-floating mb-3">
                                    <select class="form-select" id="floatingSelect" aria-label="State">
                                        <option selected></option>
                                        <option value="1">yes</option>
                                        <option value="2">no</option>
                                    </select>
                                    <label for="floatingSelect">user Admin?</label>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-floating mb-3">
                                    <select class="form-select" id="floatingSelect" aria-label="State">
                                        <option selected></option>
                                        <option value="1">yes</option>
                                        <option value="2">no</option>
                                    </select>
                                    <label for="floatingSelect">user active?</label>
                                </div>
                            </div>

                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Submit</button>                                
                            </div>
                        </form>
 
                    </div>
                </div>
            </main >


            <footer><Footer /></footer>
        </div >


    );
}