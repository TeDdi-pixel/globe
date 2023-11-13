import FlightsStays from "../FlightsStays/FlightsStays";
import FlightsHotels from "../../features/FlightsHotels/FlightsHotels";
import Reviews from "../../features/Reviews/Reviews";
import MainPlan from "../../entities/MainPlan/MainPlaces";

function LandingPageMain({ active }) {
    return (
        <>
            <main className={(active ? "main main_active" : 'main')}>
                <FlightsStays />
                <MainPlan />
                <FlightsHotels />
                <Reviews />
            </main>
        </>

    );
}

export default LandingPageMain;

