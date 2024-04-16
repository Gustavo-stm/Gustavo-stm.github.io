import profPic from "./assets/images/profile.jpg"
import linkedIn from "./assets/images/linkedin.png"
import github from "./assets/images/github.png"
import twitter from "./assets/images/twitter.png"
import plane from "./assets/images/paper-plane.png"


function Header() {

    return (<header className="header">
        <div className="container">
            <div className="profile-container">
                <img className="profile-image" src={profPic} alt="profile image" />
                <div className="profile-content">
                    <h1 className="name">Gustavo C. S.</h1>
                    <h2 className="desc">Web Dev Instructor</h2>
                    <ul className="social list-inline">
                        <li><a href="https://twitter.com/GustavoGcs26" target="">
                            <img src={twitter} /></a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/gustavo-catala-sverdrup-40128427/?originalSubdomain=se"
                            target=""><img src={linkedIn} /></a></li>
                        <li><a href="https://github.com/Gustavo-stm" target=""><img
                            src={github} /></a></li>
                    </ul>
                </div>
            </div>
            <div id="contact">
                <div className="dark-mode">
                    <div className="form-check">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <span>Dark Mode</span>
                    </div>
                </div>
                <a href="mailto: gcs26@yahoo.com" target=""><img src={plane} />
                    CONTACT
                    ME</a>
            </div>
        </div>
    </header>)
}

export default Header