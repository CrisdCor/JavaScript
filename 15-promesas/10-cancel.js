// **********************************************************************************************************************************************************************************************
let topic = "ABORT FETCH";
let title = document.createElement("div");
title.innerText = topic;
document.body.append(title);
// **********************************************************************************************************************************************************************************************

let controller = new AbortController();
let { signal } = controller;

async function getTodos() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  try {
    const response = await fetch(url, { signal }); // la propiedad de signal en fetch nos permite abortar el fetch
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error:", error);
  }
}

getTodos();
controller.abort();
