import * as wolf from "./wolf.js";

//class mainComponent {

function HomeComponent() {
  /** @jsx h */
  let h = wolf.h;
  // ---------------------------------------------------------------------
    let data = { name : 'jean', age : '28'};
    data.name = 'roger';
  const a = (
    <ul className="list" style="list-style: none;">
      <li>item 1 FRMO HOME</li>
      <li>item 2 { data.name }</li>
    </ul>
  );

  const b = (
    <ul>
      <li>item 1 FRMO HOOOOOME</li>
      <li>hello!</li>
    </ul>
  );

  const $root = document.getElementById("root");
  const $reload = document.getElementById("reload");

  wolf.updateElement($root, a);
  $reload.addEventListener("click", () => {
    wolf.updateElement($root, b, a);
  });
}

HomeComponent();
