import { Link } from 'react-router-dom';
import { useState } from 'react';
import { youtubeAPI } from '../api/youtube';


function Navbar({ setVideoId, setSearchInfo }) {
    const [searchString, setSearchString] = useState("");

    const handleSearchId = (e) => {
        setSearchString(e.target.value);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const data = youtubeAPI(searchString);
        console.log("Navbar:", data);
        setSearchInfo(data);
        // if (data.totalResults === 0) {
        //     console.log("xxx:", data);
        //     setVideoId(searchString);
        // }
        // setVideoId(searchString);


    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light position-fixed fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarItems" aria-controls="navarbarItems" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarItems">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active me-3">
                            <Link class="text-decoration-none" to="/">Home</Link>
                        </li>
                        <li class="nav-item me-3">
                            <Link class="text-decoration-none" to="/test">Test</Link>
                        </li>
                    </ul>
                    <form class="d-flex flex-row" role="search" onSubmit={handleSearchSubmit}>
                        <input class="form-control me-2" type="search" value={searchString} placeholder="Search" aria-label="Search" onChange={handleSearchId} />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
