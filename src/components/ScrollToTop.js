import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    // Scroll to top on page load and route change (popstate or hashchange)
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Trigger scroll on initial load
    handleScrollToTop();

    // Event listener for hashchange (for anchor link navigation)
    window.addEventListener("hashchange", handleScrollToTop);

    // Event listener for popstate (for browser back/forward navigation)
    window.addEventListener("popstate", handleScrollToTop);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("hashchange", handleScrollToTop);
      window.removeEventListener("popstate", handleScrollToTop);
    };
  }, []); // Empty dependency array to run only once on mount

  return null;
}

export default ScrollToTop;
