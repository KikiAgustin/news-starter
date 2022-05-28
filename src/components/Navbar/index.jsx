import style from './Navbar.module.css'

import newIcon from '../../assets/news-icon.svg'

const Navbar = () => {
    return (
        <nav className={style.nav} >
            <div className={style.navIconWrapper}>
                <img className={style.navIcon} src={newIcon} alt="navbar icon" />
                <h1 className={style.navTitle} >NEWS</h1>
            </div>
        </nav>
    )
}

export default Navbar