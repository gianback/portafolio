export const goToSection = (sectionName: string) => {
  const element = document.querySelector(
      `[data-section="${sectionName}"]`
    ) as Element,
    offsetTop =
      element.getBoundingClientRect().top +
      window.scrollY -
      +`${sectionName === "/" ? 150 : 80}`;
  window.scrollTo({
    behavior: "auto",
    top: offsetTop,
  });
};
