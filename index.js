;(() => {
    const dataName = document.querySelector("[data-name]");
    const qStr = window.location.search;
    const urlParams = new URLSearchParams(qStr);
    const name = urlParams.get('name');

    dataName.textContent = `We'll make sure to keep you posted ${name}! `;
  })()
  