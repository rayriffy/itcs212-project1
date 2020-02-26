const teams = [
  {
    key: "rayriffy",
    name: {
      first: "Phumrapee",
      last: "Limpianchop"
    },
    social: {
      facebook: "https://facebook.com/rayriffy",
      twitter: "https://twitter.com/rayriffy",
      instagram: "https://instagram.com/r4yr1ffy",
      github: "https://github.com/rayriffy"
    }
  }
];

window.addEventListener("DOMContentLoaded", () => {
  teams.map(person => {
    const personDOM = document.createElement("div");
    personDOM.classList.add("person");
    document.querySelector("div.people").appendChild(personDOM);

    const cardDOM = document.createElement("div");
    cardDOM.classList.add("card");
    personDOM.appendChild(cardDOM);

    const imageDOM = document.querySelector(
      `.hidden > img#avatar-${person.key}`
    );
    cardDOM.appendChild(imageDOM);

    const metaDOM = document.createElement("div");
    metaDOM.classList.add("meta");
    cardDOM.appendChild(metaDOM);

    const headerDOM = document.createElement("h3");
    headerDOM.innerText = `${person.name.first} ${person.name.last}`;
    metaDOM.appendChild(headerDOM);

    const socialDOM = document.createElement("ul");
    socialDOM.classList.add("socialBar");
    metaDOM.appendChild(socialDOM);

    Object.entries(person.social).map(([key, val]) => {
      const listDOM = document.createElement("li");
      socialDOM.appendChild(listDOM);

      const linkDOM = document.createElement("a");
      linkDOM.setAttribute("href", val);
      linkDOM.setAttribute("target", "_blank");
      linkDOM.setAttribute("rel", "noopener noreferrer");
      linkDOM.setAttribute("aria-label", `link ${key}`);
      listDOM.appendChild(linkDOM);

      const iconDOM = document.createElement("i");
      iconDOM.className = `fab fa-${key} fa-lg`;
      iconDOM.setAttribute("aria-hidden", "true");
      linkDOM.appendChild(iconDOM);
    });
  });
});
