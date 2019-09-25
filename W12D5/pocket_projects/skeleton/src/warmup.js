
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let kids = Array.from(htmlElement.children);
  if (kids.length != 0){
    while (kids.length){
      kids.shift();
      htmlElement.children[0].remove();
    }
  }
  const p = document.createElement("p");
  p.innerHTML = string;
  htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);

