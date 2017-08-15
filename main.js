const J = 74;
const K = 75;

const getLinks = () => {
  const h3s = [].slice.call(document.getElementsByTagName('h3'));
  const rawAs = h3s.map(h3 => h3.children[0]);
  return rawAs.filter(a => a != null);
};

let currentIndex = null;

document.addEventListener('keyup', (e) => {
  const links = getLinks();
  if (e.keyCode !== J && e.keyCode !== K) { return; }

  if (currentIndex === null) {
    currentIndex = 0;
  } else {
    switch (e.keyCode) {
      case J:
        currentIndex += 1;
        currentIndex = currentIndex >= links.length ? links.length - 1 : currentIndex;
        break;

      case K:
        currentIndex -= 1;
        currentIndex = currentIndex < 0 ? 0 : currentIndex;
        break;
    }
  }

  const target = links[currentIndex];
  target.focus();
});
