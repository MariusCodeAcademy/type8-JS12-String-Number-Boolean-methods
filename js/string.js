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
const catString = replaceStringEl.textContent.slice(8, 11);
console.log('catString ===', catString);
console.log('catString ===', catString.length);

const catStringSubStr = replaceStringEl.textContent.substr(8, 3);
console.log('catStringSubStr ===', catStringSubStr);

// paragrafe pakeisti zodeli 'street' i zodeli 'building'
replaceStringEl.textContent = replaceStringEl.textContent.replace('street', 'building');

// sukurti dar viena paragrafa po paskutiniu el ir jame turi buti visas sakinys didziosiomis raidemis .toUpperCase()
const pUpperEl = document.createElement('p');
pUpperEl.textContent = replaceStringEl.textContent.toUpperCase();
pEl.after(pUpperEl);

// gauti pirma sakinio raide (ne su slice ir ne su substring ar substr)

// paversti sakini i masyva kuriame kiekvienas elementas yra zodis .split
const zodziuMasyvas = replaceStringEl.textContent.split(' ');
console.log('zodziuMasyvas ===', zodziuMasyvas);

const pEl2 = document.createElement('p');
pEl2.textContent = zodziuMasyvas.join(' || ');
document.body.append(pEl2);

// visa sakini parasyti naujame paragrafe is priesingos puses dabartinei tvarkai.

// kiekvienas zodi sakinyne pradeti is didziosios raides. ir irasyti i dar viena paragrafa

// gauti reiksme ir reiksmes ilgi i console
{
  /* <input id="inp" type="text" value="  labas    " /> */
}
const inputEl = document.getElementById('inp');
const inpValue = inputEl.value;
const inpValueIlgis = inputEl.value.length;
console.log('inpValue ===', inpValue);
console.log('inpValueIlgis ===', inpValueIlgis);
// ar ilgis yra 5 ?
console.log('labas' === inpValue.trim());

// suzinoti ar reiksme nuemus tarpus is sonu yra lygi 'lAbAs' reiksmei sumazinus raides iki mazuju raidziu
const inputValueP = inputEl.value.trim().toLowerCase();
const compareValue = 'lAbAs '.toLowerCase().trim();
console.log('compareValue ===', compareValue);
console.log('inputValueP ===', inputValueP);
console.log(compareValue === inputValueP);
