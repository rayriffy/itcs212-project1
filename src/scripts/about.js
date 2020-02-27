const sections = [
  {
    title: "We are moving company",
    content:
      "We provide services for helping you to move into your new home at ease."
  },
  {
    title: "Anytime anywhere",
    content:
      "Out trained employees will help you move to your new home located in anywhere (other countries, other world, fantasy world etc.)"
  },
  {
    title: "Instant delivery",
    content:
      "The distance is not problem. No matter how far it is, your belonging will be delivered instantly, faster than you blink"
  }
];

window.addEventListener("DOMContentLoaded", () => {
  sections.map(section => {
    const sectionDOM = document.createElement("div");
    sectionDOM.classList.add("section");
    document.querySelector(".cardContain").appendChild(sectionDOM);

    const cardDOM = document.createElement("div");
    cardDOM.classList.add("card");
    sectionDOM.appendChild(cardDOM);

    const titleDOM = document.createElement("h2");
    titleDOM.innerText = section.title;
    cardDOM.appendChild(titleDOM);

    const paragraphDOM = document.createElement("p");
    paragraphDOM.innerText = section.content;
    cardDOM.appendChild(paragraphDOM);
  });
});
