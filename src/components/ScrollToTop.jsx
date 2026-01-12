import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Sayfa değiştiğinde en üste sar
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // istersen "smooth" yapabilirsin
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
