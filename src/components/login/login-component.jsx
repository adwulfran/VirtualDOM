import * as wolf from "./wolf.js";

//class mainComponent {

function LoginComponent() {
  /** @jsx h */
  let h = wolf.h;
  // ---------------------------------------------------------------------

  const a = (
    <ul className="list" style="list-style: none;">
      <li>item 1 FRMO LOGIN</li>
      <li>item 2</li>
    </ul>
  );

  const b = (
    <ul>
      <li>item 1 FRMO LOGIN 2222</li>
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

LoginComponent();
