import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import './CourseAdd.css'
import AddBox from './AddBox.jsx';





function CourseAdd(props) {


    const conditionalRendring = (props) => {
        if (props.selection == "1") {
            return (
                <>
                    <div className='parent'>
                        <div className='heading'>
                            <h1>AI Courses and Specializations</h1>
                            <h5>Build a foundation of machine learning and AI skills, and understand how to apply them in the real world.</h5>
                        </div>

                        <div id="carouselExampleIndicators" className="carousel slide">
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>

                            <div className="carousel-inner"  id='breakPoint1'>
                                <div className="carousel-item active ">
                                    <div className='addCards'>
                                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2022%2F04%2FMachine-Learning-Specialization-v2-1.png&w=1920&q=75" type="SPECIALIZATION" name="Machine Learning" />
                                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2023%2F10%2FYouTube-Thumbnails-5.png&w=1200&q=75" type="COURSE" name="Generative AI For Everyone" />
                                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2023%2F05%2Fenlarge_ChatGPT_Prompt_Engineering_for_Developers_2-1.jpg&w=1200&q=75" type="SHORT COURSES" name="ChatGPT Prompt Engineering For Developers" />

                                    </div>
                                </div>
                                <div className="carousel-item  ">
                                    <div className='addCards'>
                                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2020%2F12%2FDeep-Learning-Specialization-v2-2.png&w=1200&q=75" type="SPECIALIZATION" name="Deep Learning" />
                                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2023%2F06%2FGenerative-AI-with-LLMs-1.png&w=1200&q=75" type="COURSE" name="Generative AI With LLMS" />
                                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2023%2F07%2FLangChain_-Chat-with-Your-Data-1.png&w=1200&q=75" type="SHORT COURSES" name="langChain: Chat with Your Data" />

                                    </div>
                                </div>



                            </div>

                            <div className="carousel-inner" id='breakPoint2'>
                                <div className="carousel-item active ">
                                    <div className='addCards'>
                                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2022%2F04%2FMachine-Learning-Specialization-v2-1.png&w=1920&q=75" type="SPECIALIZATION" name="Machine Learning" width="100%" height="max-content" />

                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className='addCards'>
                                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2022%2F04%2FMachine-Learning-Specialization-v2-1.png&w=1920&q=75" type="SPECIALIZATION" name="Machine Learning" width="100%" height="max-content" />

                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className='addCards'>
                                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2023%2F10%2FYouTube-Thumbnails-5.png&w=1200&q=75" type="COURSE" name="Generative AI For Everyone" width="100%" height="max-content" />

                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className='addCards'>
                                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2023%2F05%2Fenlarge_ChatGPT_Prompt_Engineering_for_Developers_2-1.jpg&w=1200&q=75" type="SHORT COURSES" name="ChatGPT Prompt Engineering For Developers" width="100%"  height="max-content"/>

                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className='addCards'>
                                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2020%2F12%2FDeep-Learning-Specialization-v2-2.png&w=1200&q=75" type="SPECIALIZATION" name="Deep Learning" width="100%" height="max-content"/>

                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className='addCards'>
                                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2023%2F06%2FGenerative-AI-with-LLMs-1.png&w=1200&q=75" type="COURSE" name="Generative AI With LLMS" width="100%" height="max-content" />

                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className='addCards'>
                                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2023%2F07%2FLangChain_-Chat-with-Your-Data-1.png&w=1200&q=75" type="SHORT COURSES" name="langChain: Chat with Your Data"  width="100%" height="max-content"/>

                                    </div>

                                </div>
                            </div>


                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                    </div>

                </>
            )
        }
        else {
            const width = '100%';

            return (

                <>
                    <div id="carouselExampleIndicators" className="carousel slide addBanner" style={{ width }} >

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <div className="carousel-inner addBannerChild"  >

                            <div className="carousel-item active " id='firstSlide'>
                                <div className='firstSlideChild'>
                                    <a>NEW SHORT COURSES</a>
                                    <h1>Knowledge Graphs for RAG</h1>
                                    <p>Learn how to build and use knowledge graph systems to improve your retrieval augmented generation applications.</p>
                                    <button>Learn more</button>
                                </div>



                            </div>
                            <div className="carousel-item " id='secondSlide'>
                                <div className='firstSlideChild'>
                                    <a>NEW SHORT COURSES</a>
                                    <h1>Prompt Engineering with Llama 2</h1>
                                    <p>Learn best practices for prompting and selecting amoung Meta Llama 2 models</p>
                                    <button>Learn more</button>
                                </div>


                            </div>

                        </div>

                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </>
            )
        }
    }



    return (
        <>
            {conditionalRendring(props)}
        </>
    )
}
export default CourseAdd