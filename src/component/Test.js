import Navbar from "./Navbar";
import Footer from "./Footer";
import brianpic from "../images/brian.jpg";
import VideoPlayer from "./videoplayer/VideoPlayer";

const videoID = "Dacs7X27ssA";


function Test() {

    return (
        <>
            <Navbar />
            <main>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="card">
                                <div class="card-header">
                                    Title
                                </div>
                                <img class="card-img-top" src={brianpic} alt="Card image cap" />
                                <div class="card-body">
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 my-auto mx-auto">
                            <VideoPlayer videoID={videoID} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Test;