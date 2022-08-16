import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import { BsList, BsSearch, BsBell} from 'react-icons/bs';




export default function Navbar() {

    return (

        <header id="header" class="header fixed-top d-flex align-items-center">
            <div class="d-flex align-items-center justify-content-between">
                <i class="toggle-sidebar-btn" onClick={Side}><BsList /></i>
                <a href="index.html" class="logo d-flex align-items-center">
                    <img src="assets/img/logo.png" alt="" />
                    <span class="d-none d-lg-block">HelpDesk</span>
                </a>
            </div>


            <nav class="header-nav ms-auto">
                <ul class="d-flex align-items-center">


                    <li class="nav-item dropdown">

                        <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                            <i class="bi bi-bell"> <BsBell /> </i>
                            <span class="badge bg-primary badge-number"></span>
                        </a>                      

                    </li>

                    <div class="search-bar">
                        <form class="search-form d-flex align-items-center" method="POST" action="#">
                            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                            <button type="submit" title="Search"><i class="bi bi-search"><BsSearch /></i></button>
                        </form>
                    </div>

                </ul>
            </nav>

        </header>


    );
}

function Side() {
    /**
    * Easy selector helper function
    */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        if (all) {
            select(el, all).forEach(e => e.addEventListener(type, listener))
        } else {
            select(el, all).addEventListener(type, listener)
        }
    }


    /**
     * Sidebar toggle
     */
    if (select('.toggle-sidebar-btn')) {
        on('click', '.toggle-sidebar-btn', function (e) {
            select('body').classList.toggle('toggle-sidebar')
        })
    }

    /**
     * Search bar toggle
     */
    if (select('.search-bar-toggle')) {
        on('click', '.search-bar-toggle', function (e) {
            select('.search-bar').classList.toggle('search-bar-show')
        })
    }
}




