
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/"
};

const dogKeys = Object.keys(dogs);

function dogLinkCreator() {
  const liTags = [];
  dogKeys.forEach(dogKey => {
    let link = document.createElement("a");
    link.innerHTML = dogKey;
    link.setAttribute("href", dogs[dogKey]);
    let li = document.createElement("li");
    li.setAttribute("class", "dog-link");
    li.appendChild(link);
    liTags.push(li);
  })
  return liTags;
}

export function attachDogLinks(){
  const dogLinks = dogLinkCreator();
  const ul = document.querySelector(".drop-down-dog-list")
  dogLinks.forEach( link=> {
    ul.appendChild(link);
  })
}

attachDogLinks();

function handleEnter(targetEl){
  targetEl.addEventListener("mouseenter", (e) => {
    targetEl.classList.add("show");
  });

}

function handleLeave(targetEl){
  targetEl.addEventListener("mouseleave", (e) => {
    targetEl.classList.remove("show")
  });
}


const nav = document.querySelector(".drop-down-dog-nav");
handleEnter(nav);
handleLeave(nav);

