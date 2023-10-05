export const handleImgClick = (src, title, setDialogOpen) => {
  setDialogOpen({
    img: src,
    state: true,
    title,
  });
};

export function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export function btnClickHandler(navigate, isDesktopScreen, category) {
  navigate("/photos/" + category);

  !isDesktopScreen &&
    window.scrollTo({
      top: 200,
      behavior: "smooth", // Smooth scrolling animation
    });
}
