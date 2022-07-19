import Navbar from './Navbar';
import Footer from './Footer';
import VideoPlayer from './videoplayer/VideoPlayer';
import { useState } from 'react';
import { youtubeAPI } from '../api/youtube';
import brianpic from '../images/brian.jpg';

// const initialState = {
//     kind: "a",
//     etag: "b",
//     regionCode: "c",
//     totalResults: 0
// }

function Home() {
    const [videoId, setVideoId] = useState("");
    const [searchInfo, setSearchInfo] = useState(0);

    return (
        <>
            <div class='Home'>
                <Navbar setVideoId={setVideoId} setSearchInfo={setSearchInfo} />
                <section>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-2">
                                <div class="card">
                                    <div class="card-header">
                                        Title
                                    </div>
                                    <img class="card-img-top" src={brianpic} alt="Card image cap" />
                                    <div class="card-body">
                                        {/* <p class="card-text">
                                            <span>kind:{searchInfo.kind}</span>
                                        </p>
                                        <p class="card-text">
                                            <span>etag:{searchInfo.etag}</span>
                                        </p>
                                        <p class="card-text">
                                            <span>regionCode:{searchInfo.regionCode}</span>
                                        </p> */}
                                        <p class="card-text">
                                            <span>totalResults:{searchInfo}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-10 mx-auto my-auto">
                                <VideoPlayer videoID={videoId} />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}



export default Home;