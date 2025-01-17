const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let value = params.t; // "some_value"

let div = document.getElementById('thisDiv')

