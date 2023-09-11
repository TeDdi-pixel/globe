import { useState } from "react";
import HeaderUnlogged from "../../components/HeaderUnlogged/HeaderUnlogged";
import LandingPageMain from "../../components/LandingPageMain/LandingPageMain";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../hooks/use-auth";
// import { useSelector } from "react-redux";


function LandingPage() {
    const [active, setActive] = useState(false);
    const {isAuth, email} = useAuth(state => state.user);

    const handleBurgerClick = () => {
        setActive((prev) => !prev);
    };
    return (
        <>
            <div className="container">
                {
                    isAuth ? (<>
                    <button>{email} Выйти</button>
                    </>)
                    :
                    (<HeaderUnlogged active={active} handleBurgerClick={handleBurgerClick} />)
                }
            </div>
            <LandingPageMain active={active} />
            <Footer />
        </>
    );
}

export default LandingPage;