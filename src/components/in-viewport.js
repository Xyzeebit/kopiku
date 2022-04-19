
export function isInViewport(el) {
    if (el !== null || el !== undefined) {
        try {
            const rect = el.getBoundingClientRect();
            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
            );
        } catch (error) {
            return false;
        }

    }
    return false;
}

export const screenScroll = (cb) => {
    window.addEventListener("scroll", (e) => {
        cb();
    });
};
