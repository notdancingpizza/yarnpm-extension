document.getElementsByTagName("BODY")[0].onclick = function (e) {
  e = e || event;
  var target = e.target || e.srcElement;
  if (target.nodeName != "A") return;
  var href = target.href;
  chrome.tabs.create({ url: href });
  return false;
};
