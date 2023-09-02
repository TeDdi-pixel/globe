import { useState } from "react";
import HeaderUnlogged from "../../components/HeaderUnlogged/HeaderUnlogged";
import LandingPageMain from "../../components/LandingPageMain/LandingPageMain";
import Footer from "../../components/Footer/Footer";

function LandingPage() {
    const [active, setActive] = useState(false);

    const handleBurgerClick = () => {
        setActive((prev) => !prev);
    };
    return (
        <>
            <div className="container">
                <HeaderUnlogged active={active} handleBurgerClick={handleBurgerClick} />
            </div>
            <LandingPageMain active={active} />

            <Footer />
        </>
    );
}

export default LandingPage;