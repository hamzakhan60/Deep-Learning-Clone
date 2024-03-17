import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import './NewsLetter.css'
import AddBox from './AddBox';


function NewsLetter() {
    const width = "100%";
    return (
        <>
            <div className='firstDiv'>
            <div className='firstDivChild'>
                <p className='firstP'>THE LARGEST WEEKLY AI NEWSLETTERS</p>
                <img src="https://www.deeplearning.ai/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fthe-batch-logo.0b7c10a2.png&w=1080&q=75"/>
                <p className='secondP'>WHAT MATTERES IN AI RIGHT NOW</p>
            </div>
            
            <div id="carouselExampleIndicators" className="carousel slide " >

                <div className="carousel-inner" id='newsLetterSliderParent' style={{ width }}>
                    <div className="carousel-item active" id="newsletterslider">
                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fdl-staging-website.ghost.io%2Fcontent%2Fimages%2F2024%2F03%2Funnamed--51-.jpg&w=2048&q=75" type="Mar 13, 2024" name="Anthropic Ups the Ante, India Warns Developers Google Tests Generative News, Learning Language Without Language Training" content="The Batch AI News and insights: I've noticed a trend in how generative ..." height="450px" backgroundColor="#F1F5F9" color="#64748B" />
                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fdl-staging-website.ghost.io%2Fcontent%2Fimages%2F2024%2F03%2FMULTIAGENTS2.png&w=2048&q=75" type="Mar 06, 2024" name="Mistral Living Large, Google's Open Source Challenger. Robot Chemist, Schooling Language Models in Math" content="The Batch AI News and Insight: Progress on LLM-based agebt that can..." height="450px" backgroundColor="#F1F5F9" color="#64748B" />
                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fdl-staging-website.ghost.io%2Fcontent%2Fimages%2F2024%2F02%2FPYTHONPACKAGE.png&w=2048&q=75" type="Feb 28, 2024" name="Google's Troubled Gemini Launch OpenAI'S Next Act, Groqs Blazing Inference Speed, Faster Network Pruning" content="The Batch AI News and Insights: I think the complexity of python..." height="450px" backgroundColor="#F1F5F9" color="#64748B" />

                    </div>
                </div>
                <div className="carousel-inner" id='newsLetterSliderParent2' style={{ width }}>
                    <div className="carousel-item active" id="newsletterslider">
                        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fdl-staging-website.ghost.io%2Fcontent%2Fimages%2F2024%2F03%2Funnamed--51-.jpg&w=2048&q=75" type="Mar 13, 2024" name="Anthropic Ups the Ante, India Warns Developers Google Tests Generative News, Learning Language Without Language Training" content="The Batch AI News and insights: I've noticed a trend in how generative ..." height="450px" backgroundColor="#F1F5F9" color="#64748B" width="80%"/>
                       
                    </div>
                    <div className="carousel-item " id="newsletterslider">
                         <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fdl-staging-website.ghost.io%2Fcontent%2Fimages%2F2024%2F03%2FMULTIAGENTS2.png&w=2048&q=75" type="Mar 06, 2024" name="Mistral Living Large, Google's Open Source Challenger. Robot Chemist, Schooling Language Models in Math" content="The Batch AI News and Insight: Progress on LLM-based agebt that can..." height="450px" backgroundColor="#F1F5F9" color="#64748B" width="80%" />
                        
                    </div>
                    <div className="carousel-item " id="newsletterslider">
                       <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fdl-staging-website.ghost.io%2Fcontent%2Fimages%2F2024%2F02%2FPYTHONPACKAGE.png&w=2048&q=75" type="Feb 28, 2024" name="Google's Troubled Gemini Launch OpenAI'S Next Act, Groqs Blazing Inference Speed, Faster Network Pruning" content="The Batch AI News and Insights: I think the complexity of python..." height="450px" backgroundColor="#F1F5F9" color="#64748B" width="80%" />

                    </div>
                </div>



            </div>
            <div className='foot'>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <button className='button'>Read More</button>
            </div>

            
            </div>


 </>
    )
}
export default NewsLetter