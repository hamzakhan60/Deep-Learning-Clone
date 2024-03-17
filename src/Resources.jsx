import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import './Resources.css'
import AddBox from './AddBox';

function Resources(){
    return(
        <>
        <div className='resourcesParent'>
        <div className='resourcesChild1'>
            <p>FREE RESOURCES</p>
            <h1>Get Started with AI and Machine Learning</h1>
        </div>
        <div className='resourcesChild'>
        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2023%2F10%2Fc2dd5a24183597cb1727c1a6ea3d64d8.png&w=750&q=75" name="How to Build Your Career in AI" content="A practice Roadmap to building your career in AI pioneer Andrew Ng" email="block" height="max-content" width="80%" button="Downlod" border="1px solid #D2D2D2"/>
        <AddBox src="https://www.deeplearning.ai/_next/image/?url=https%3A%2F%2Fwordpress.deeplearning.ai%2Fwp-content%2Fuploads%2F2022%2F10%2F1645724689.png&w=750&q=75"  name="Machine Learning Yearning" content="An Introductory book about developing ML algorithms" email="block" height="max-content" button="Downlod" width="80%" border="1px solid #D2D2D2"/>
        <AddBox src="https://www.deeplearning.ai/_next/image/?url=%2Fimages%2Fhome%2Fcomplete-guide.png&w=750&q=75" name="A Complete Guide to Natural Language Processing" content="A complete guide covering all you need to know about NLP " email="none" height="max-content" button="Read More" width="80%" border="1px solid #D2D2D2"/>
        </div>
        </div>
        </>
    )
}
export default Resources