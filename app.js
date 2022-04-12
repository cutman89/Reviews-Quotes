//Selectors
var preview = document.querySelector(".preview");
var next = document.querySelector(".next");
var image = document.querySelector("#person-img");
var author = document.querySelector("#author");
var job = document.querySelector("#job");
var info = document.querySelector("#info");
var random = document.querySelector(".random-btn");
//Event
next.addEventListener("click", nextPerson);
preview.addEventListener("click", previewPerson);
random.addEventListener("click", randomPerson);
//Function
function nextPerson(evt) {
  if (image.src == "http://127.0.0.1:5500/images/person-1_rfzshl.jpg") {
    image.src = "images/person-2_np9x5l.jpg";
    author.innerHTML = "Anna Johnson";
    job.innerHTML = "WEB DESIGNER";
    info.innerHTML =
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.";
  } else if (image.src == "http://127.0.0.1:5500/images/person-2_np9x5l.jpg") {
    image.src = "images/person-3_ipa0mj.jpg";
    author.innerHTML = "Peter Jones";
    job.innerHTML = "INTERN";
    info.innerHTML =
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.";
  } else if (image.src == "http://127.0.0.1:5500/images/person-3_ipa0mj.jpg") {
    image.src = "images/person-4_t9nxjt.jpg";
    author.innerHTML = "Bill Anderson";
    job.innerHTML = "THE BOSS";
    info.innerHTML =
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.";
  } else {
    image.src = "images/person-1_rfzshl.jpg";
    author.innerHTML = "Susan Smith";
    job.innerHTML = "WEB DEVELOPER";
    info.innerHTML =
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry";
  }
}
function previewPerson(evt) {
  if (image.src == "http://127.0.0.1:5500/images/person-1_rfzshl.jpg") {
    image.src = "images/person-4_t9nxjt.jpg";
    author.innerHTML = "Bill Anderson";
    job.innerHTML = "THE BOSS";
    info.innerHTML =
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.";
  } else if (image.src == "http://127.0.0.1:5500/images/person-2_np9x5l.jpg") {
    image.src = "images/person-1_rfzshl.jpg";
    author.innerHTML = "Susan Smith";
    job.innerHTML = "WEB DEVELOPER";
    info.innerHTML =
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry";
  } else if (image.src == "http://127.0.0.1:5500/images/person-3_ipa0mj.jpg") {
    image.src = "images/person-2_np9x5l.jpg";
    author.innerHTML = "Anna Johnson";
    job.innerHTML = "WEB DESIGNER";
    info.innerHTML =
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.";
  } else {
    image.src = "images/person-3_ipa0mj.jpg";
    author.innerHTML = "Peter Jones";
    job.innerHTML = "INTERN";
    info.innerHTML =
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.";
  }
}
function randomPerson(evt) {
  var number = Math.floor(Math.random() * 4) + 1;

  if (number == 1) {
    image.src = "images/person-1_rfzshl.jpg";
    author.innerHTML = "Susan Smith";
    job.innerHTML = "WEB DEVELOPER";
    info.innerHTML =
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry";
  } else if (number == 2) {
    image.src = "images/person-2_np9x5l.jpg";
    author.innerHTML = "Anna Johnson";
    job.innerHTML = "WEB DESIGNER";
    info.innerHTML =
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.";
  } else if (number == 3) {
    image.src = "images/person-3_ipa0mj.jpg";
    author.innerHTML = "Peter Jones";
    job.innerHTML = "INTERN";
    info.innerHTML =
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.";
  } else {
    image.src = "images/person-4_t9nxjt.jpg";
    author.innerHTML = "Bill Anderson";
    job.innerHTML = "THE BOSS";
    info.innerHTML =
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.";
  }
}
