import * as wolf from "./wolf.js";

function mainComponent() {
  let h = wolf.h;
  const a = h("ul", {
    className: "list",
    style: "list-style: none;"
  }, h("li", null, "item 1"), h("li", null, "item 2"));
  const b = h("ul", null, h("li", null, "item 1"), h("li", null, "hello!"));
  const $root = document.getElementById("root");
  const $reload = document.getElementById("reload");
  wolf.updateElement($root, a);
  $reload.addEventListener("click", () => {
    wolf.updateElement($root, b, a);
  });
}

mainComponent();