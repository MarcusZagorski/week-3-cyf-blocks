document.getElementById("addtocart1").addEventListener("click", (event) => {
  let element_current_list = document.getElementById("current-list");
  let new_li = document.createElement("li");
  new_li.innerText = "Milk";

  element_current_list.appendChild(new_li);
});

document.getElementById("addtocart2").addEventListener("click", (event) => {
  let element_current_list2 = document.getElementById("current-list");
  let new_li2 = document.createElement("li");
  new_li2.innerText = "Oranges";

  element_current_list2.appendChild(new_li2);
});

document.getElementById("addtocart3").addEventListener("click", (event) => {
  let element_current_list3 = document.getElementById("current-list");
  let new_li3 = document.createElement("li");
  new_li3.innerText = "Bread";

  element_current_list3.appendChild(new_li3);
});

document.getElementById("addtocart4").addEventListener("click", (event) => {
  let element_current_list4 = document.getElementById("current-list");
  let new_li4 = document.createElement("li");
  new_li4.innerText = "Biscuits";

  element_current_list4.appendChild(new_li4);
});

document.getElementById("addtocart5").addEventListener("click", (event) => {
  let element_oranges = document.getElementById("oranges");
  let element_current_list5 = document.getElementById("current-list");
  let new_li5 = document.createElement("li");
  new_li5.innerText = "Crisps";

  element_current_list5.appendChild(new_li5);
});
