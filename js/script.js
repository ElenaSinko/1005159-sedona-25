var hotelSearch = document.querySelector(".button-search");
var form = document.querySelector(".reservation-form");
var arrival = form.querySelector("[name=arrival-date]");
var departure = form.querySelector("[name=departure-date]");
var adultsNumber = form.querySelector("[name=adults]");
var kidsNumber = form.querySelector("[name=kids]");

var isStorageSupportAdults = true;
var storageAdults = "";

try {
    storageAdults = localStorage.getItem("adultsNumber");
} catch (err) {
    isStorageSupportAdults = false;
}

var isStorageSupportKids = true;
var storageKids = "";

try {
    storageKids = localStorage.getItem("kidsNumber");
} catch (err) {
    isStorageSupportKids = false;
}

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

  else{
    evt.preventDefault();
    departure.classList.add("input-error-folder");
    arrival.classList.add("input-error-folder");
    form.classList.add("input-error");}

})

form.addEventListener("submit", function(){
  if(arrival.value && departure.value && adultsNumber.value && kidsNumber.value){
    if (isStorageSupportAdults && isStorageSupportKids) {
      localStorage.setItem("adultsNumber", adultsNumber.value);
      localStorage.setItem("kidsNumber", kidsNumber.value);
    }
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (form.classList.contains("show")) {
      form.classList.remove("show");
    }
  }
});