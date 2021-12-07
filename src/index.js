const makeMagic = () => {
  const depCopyButton = document.querySelector('span[role="button"]');
  depCopyButton.innerHTML = depCopyButton.innerHTML.replace(
    "npm i",
    "yarn add"
  );
};

setTimeout(makeMagic, 0);
