import React from 'react';
import '../styles/main.css'
import 'bootstrap';
import Sidebar from "../components/sidebar";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function NewCard() {
    return (
        <div>
            <header><Navbar /></header>

            <aside><Sidebar /></aside>
            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>New Card</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item">Users</li>
                            <li class="breadcrumb-item active">New Card</li>
                        </ol>
                    </nav>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Register a new Card</h5>

                        <form class="row g-3">
                            <div class="col-md-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="floatingName" placeholder="Your Name"/>
                                        <label for="floatingName">Card tittle</label>
                                </div>
                            </div>                           
                            <div class="col-md-4">
                                <div class="form-floating mb-3">
                                    <select class="form-select" id="floatingSelect" aria-label="State">
                                        <option selected></option>
                                        <option value="1">Software problems </option>
                                        <option value="2">Hardware Problems</option>
                                        <option value="2">Network Problems</option>
                                    </select>
                                    <label for="floatingSelect">Category</label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-floating mb-3">
                                    <select class="form-select" id="floatingSelect" aria-label="State">
                                        <option selected></option>
                                        <option value="1">High</option>
                                        <option value="2">Medium</option>
                                        <option value="2">Low</option>
                                    </select>
                                    <label for="floatingSelect">Priority</label>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Address" id="floatingTextarea" style={{"height": "100px"}}></textarea>
                                    <label for="floatingTextarea">Description</label>
                                </div>
                            </div>
                            
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Submit</button>                                
                            </div>
                        </form>

                    </div>
                </div>

            </main>
            <footer><Footer /></footer>
        </div>


    );
}