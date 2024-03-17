import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import './footer.css'



function Footer() {
    return (
        <>
            <div className='footerParent'>
                <div className='child'>
                    <h1>Stay up to date on the latest news, courses, and AI events</h1>
                    <form class="row g-3">
                        <div class="col-auto emailField">

                            <input type="text" class="form-control" id="inputPassword2" placeholder="Email" />
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-3">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='footerParent2'>
                <a class="navbar-brand" href="#"><img src="https://www.deeplearning.ai/static/favicons/favicon.ico" />DeepLearning.AI</a>
                <ul>
                    <li>Short Courses</li>
                    <li>Specialization</li>
                    <li>The Batch</li>
                    <li>Community</li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
        </div>
        </>
    )
}
export default Footer