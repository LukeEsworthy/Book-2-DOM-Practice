const headerInfo = document.querySelector(".article__header");
headerInfo.textContent = "Welcome to the Luke Blog";

const headerNodeList = document.querySelectorAll(".article__header");
for (let i = 0; i < headerNodeList.length; i++) {
    headerNodeList[i].classList.add("important");
}

const dashedEl = document.querySelector(".dashed");
dashedEl.remove(dashedEl);

const goldenrodEl = document.querySelector(".article__footer");
goldenrodEl.classList.add("goldenrod");