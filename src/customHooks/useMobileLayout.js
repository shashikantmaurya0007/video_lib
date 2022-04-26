import React, { useEffect } from "react";

const useMobileLayout = () => {
    const [displayMobileLayout, setMobileLayout] = useState(false);
    useEffect(() => {
        const resize = () => {
            if (window.innerWidth > 1000) {
                setMobileLayout(true);
            } else {
                setMobileLayout(false);
            }
        };
        window.addEventListener("resize", resize);
        if (window.innerWidth > 100) {
            setMobileLayout(true);
        }
        return () => {
            window.removeEventListener("resize");
        };
    }, []);

    return displayMobileLayout;
};