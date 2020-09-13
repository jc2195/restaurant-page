const menuContent = () => {
  const title = document.createElement("h1");
  title.innerHTML = "Our Menu";

  const soup = document.createElement("h2");
  soup.innerHTML = "Soup";
  const soupContents = document.createElement("p");
  soupContents.innerHTML = "Miso soup – £3.20<br>Lobster soup – £7.50<br>Mix fish soup – £6.95<br>Japanese clear soup  – £5.70";
  
  const starters = document.createElement("h2");
  starters.innerHTML = "Starters";
  const startersContents = document.createElement("p");
  startersContents.innerHTML = "Edamame – £4.20<br>Seaweed salad – £3.95<br>Nasu (aubergine) – £4.30<br>Gyoza meat – £5.80<br>Gyoza vegetables – £5.30<br>Asparagus wrapped with rib eye beef – £6.50<br>Chips with Wasabi mayonnaise – £4.80<br>Agedashi tofu – £5.20<br>Beef tartar – £6.95"

  const mainCourses = document.createElement("h2");
  mainCourses.innerHTML = "Main Courses";
  const mainCoursesContents = document.createElement("p");
  mainCoursesContents.innerHTML = "Wasabi steak – £18.50<br>Grilled sirloin steak in Teriyaki sauce – £18.50<br>Beef Yakiniku – £18.50<br>Grilled beef fillet in Sake soy sauce – £21.50<br>Deep fried pork with Katsu Curry sauce – £14.50<br>Deep fried chicken with Katsu curry sauce – £14.50<br>Grilled chicken with Teriyaki sauce – £14.50<br>Stir fried chicken with Shiitake – £14.50<br>Roast duck – £19.50<br>Steamed sea bass fillet – £15.95<br>Sea bass Kabayaki – £15.95<br>Grilled tuna with Teriyaki sauce – £16.95<br>Grilled salmon with Teriyaki sauce – £15.95<br>Eel Kabayaki served with miso soup – £18.00"

  const dessert = document.createElement("h2");
  dessert.innerHTML = "Dessert";
  const dessertContents = document.createElement("p");
  dessertContents.innerHTML = "Mango ice cream - £4.90<br>Green tea ice cream - £5.10<br>Sesame ice Cream - £5.40"

  const container = document.getElementById("content");
  container.appendChild(title);
  container.appendChild(soup);
  container.appendChild(soupContents);
  container.appendChild(starters);
  container.appendChild(startersContents);
  container.appendChild(mainCourses);
  container.appendChild(mainCoursesContents);
  container.appendChild(dessert);
  container.appendChild(dessertContents);

  const nav = document.querySelectorAll(".navlink");
  nav.forEach(function(link) {
    link.style.borderBottom = "solid 1px";
    link.style.backgroundColor = "rgb(207, 207, 207)";
  });

  const navElement = document.getElementById("menu");
  navElement.style.borderBottom = "none";
  navElement.style.backgroundColor = "white";
}
export { menuContent }