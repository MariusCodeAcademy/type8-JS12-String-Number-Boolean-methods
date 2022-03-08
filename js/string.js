// nusitaikom i el su id replace
const replaceStringEl = document.getElementById('replace');
console.log('replaceStringEl ===', replaceStringEl);

// paimti paskutines 6 simbolius ir irasyti juos i paragrafa einanati po dabartiniu paragrafu
const pask6Simb = replaceStringEl.textContent.slice(-6);
console.log('pask6Simb ===', pask6Simb);
const pEl = document.createElement('p');
pEl.textContent = pask6Simb;
replaceStringEl.after(pEl);

// is replaceStringEl teksto paimti zodeli cat ir ji ikelti i papildoma h3 el po paskutiniu el.
