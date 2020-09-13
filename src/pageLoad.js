const landingContent = () => {
  const title = document.createElement("h1");
  title.innerHTML = "The Amazing Restaurant";

  const image = document.createElement("img");
  image.src = "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20200702132805&q=80&rw=750&rh=536";

  const text = document.createElement("p");
  text.innerHTML = "Omg come visit our amazing restaurant it's so amazing and delicious. The food is so tasty you'll soon be throwing your money at it. Here's some more filler text candy gingerbread biscuit croissant macaroon chocolate cake pudding. Sweet lemon drops icing danish tootsie roll lemon drops. Dragée pie powder wafer. Tootsie roll donut cotton candy cotton candy pie jelly-o soufflé. Cupcake pie icing tiramisu toffee apple pie chocolate bar brownie candy canes. Chupa chups jelly-o pastry jelly beans jelly-o gummies. Croissant topping chocolate cake liquorice dragée. Pie jelly-o pie bear claw tart wafer. Sweet roll chocolate gingerbread. Apple pie chocolate bar cake. Marshmallow cake gummi bears chupa chups brownie liquorice candy pudding. Dragée muffin sugar plum jujubes candy. Caramels candy powder tiramisu.";
  text.style.width = "500px";

  const container = document.getElementById("content");
  container.appendChild(title);
  container.appendChild(image);
  container.appendChild(text);

  const nav = document.querySelectorAll(".navlink");
  nav.forEach(function(link) {
    link.style.borderBottom = "solid 1px";
    link.style.backgroundColor = "rgb(207, 207, 207)";
  });

  const navElement = document.getElementById("home");
  navElement.style.borderBottom = "none";
  navElement.style.backgroundColor = "white";
}
export { landingContent }
