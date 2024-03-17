import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import './Login.css'


function Login() {
    return (
        <>
            <div className='parentDiv'>
                <div className='childDiv2'>
                    <div className='childDiv2-child'>
                        <h1>AI is the new electricity.</h1>
                        <h1>You are the spark.</h1>
                        <h2>
                            Get the latest AI news, courses, events, and insights from Andrew Ng and other AI leaders.
                        </h2>
                        <form class="row g-3">
                            <div class="col-auto emailField">
                                
                                <input type="text" class="form-control" id="inputPassword2" placeholder="Email"/>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-3">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='joinBanner'>
                <h1>Join over 7 million people learning how to use and build AI</h1>
            </div>
        </>
    )
}
export default Login