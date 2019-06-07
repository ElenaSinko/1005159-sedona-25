var hotelSearch = document.querySelector(".button-search");
var form = document.querySelector(".reservation-form");
var arrival = form.querySelector("[name=arrival-date]");
var departure = form.querySelector("[name=departure-date]");

hotelSearch.addEventListener("click", function(evt){
  evt.preventDefault();
  form.classList.toggle("show");
});

form.addEventListener("submit", function(evt){
  if(!arrival.value && departure.value){
    evt.preventDefault();
    arrival.classList.add("input-error-folder");
    form.classList.add("input-error");
  }

  else if(arrival.value && !departure.value){
    evt.preventDefault();
    departure.classList.add("input-error-folder");
    form.classList.add("input-error");
  }

  else{evt.preventDefault();
    departure.classList.add("input-error-folder");
    arrival.classList.add("input-error-folder");
    form.classList.add("input-error");}
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (form.classList.contains("show")) {
      form.classList.remove("show");
    }
  }
});
