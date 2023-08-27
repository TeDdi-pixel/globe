import { useState } from "react";
import HeaderUnlogged from "../../components/HeaderUnlogged/HeaderUnlogged";
import LandingPageMain from "../../components/LandingPageMain/LandingPageMain";

function LandingPage() {
    const [active, setActive] = useState(false);

    const handleBurgerClick = () => {
        setActive((prev) => !prev);
    };
    return (
        <>
            <HeaderUnlogged active={active} handleBurgerClick={handleBurgerClick} />
            <LandingPageMain active={active}/>
        </>
    );
}

export default LandingPage;