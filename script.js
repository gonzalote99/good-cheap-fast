const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");
const meessage = document.querySelector(".message");




toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))


function doTheTrick(theClikedOne) {
  if(good.checked && cheap.checked && fast.checked) {
    if(good === theClikedOne) {
      fast.checked = false;

      meessage.innerHTML = "Good + cheap = not happening anytime soon"
    }
    if(cheap === theClikedOne) {
      good.checked = false;

      meessage.innerHTML = "Cheap + fast = lower quality work"
    }
    if(fast === theClikedOne) {
      cheap.checked = false;

      meessage.innerHTML = "Fast + good = expensive</li>"
    }
  }
  else {
    meessage.innerHTML = "click another"
  }
}