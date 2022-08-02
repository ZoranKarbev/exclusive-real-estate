import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OffersIcon } from "../../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../../assets/svg/personOutlineIcon.svg";
import "./Footer.css";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log("Location", location)
    const pathMatchesRoute = route => route === location.pathname;

    return (
        <footer className="navbar">
            <nav className="navbar__nav">
                <ul className="navbar__list">
                    <li className="navbar__list-item" onClick={() => navigate("/")}>
                        <ExploreIcon fill={pathMatchesRoute("/") ? "#ffd700" : "#eeebe5"} />
                        <p className={pathMatchesRoute("/") ? "navbar__list-item__name--active" : "navbar__list-item__name"}>Explore</p>
                    </li>
                    <li className="navbar__list-item" onClick={() => navigate("/offers")}>
                        <OffersIcon fill={pathMatchesRoute("/offers") ? "#ffd700" : "#eeebe5"} />
                        <p className={pathMatchesRoute("/offers") ? "navbar__list-item__name--active" : "navbar__list-item__name"}>Offers</p>
                    </li>
                    <li className="navbar__list-item" onClick={() => navigate("/profile")}>
                        <PersonOutlineIcon fill={pathMatchesRoute("/profile") || pathMatchesRoute("/sign-up") ? "#ffd700" : "#eeebe5"} />
                        <p className={pathMatchesRoute("/profile") || pathMatchesRoute("/sign-up") ? "navbar__list-item__name--active" : "navbar__list-item__name"}>Profile</p>
                    </li>
                </ul>
            </nav>
        </footer >
    )
};

export default Footer;