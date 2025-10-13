const setup = () => {
  const testDiv = document.querySelector("#test");
  testDiv.addEventListener("click", (event) => {
    console.log("Div geklikt");
  });

  const headLines = document.querySelector("#headlines");
  headLines.addEventListener("click", (event) => {
    console.log(event.target.textContent);
    event.stopPropagation();
  });

  const googleLink = document.querySelector("#googleLink");
  googleLink.addEventListener("click", (event) => {
    event.preventDefault();
  });
};
window.addEventListener("load", setup);
