let destinations = [];
const destination = document.querySelector('#to');
const names = {gb:'United Kingdom',fr:'France',ie:'Ireland'};

function show(record) {
  document.querySelector('#route-from').textContent = names[document.querySelector('#from').value] || 'Your origin';
  document.querySelector('#route-to').textContent = record.name;
  document.querySelector('#animal-label').textContent = document.querySelector('#animal').selectedOptions[0].text.toLowerCase();
  document.querySelector('#authority-name').textContent = record.authority;
  document.querySelector('#authority-link').href = record.officialUrl;
  document.querySelector('#destination-code').textContent = record.code;
  document.querySelector('#airport-count').textContent = Number(record.airportRecords).toLocaleString();
  document.querySelector('#airport-context').textContent = `${record.name} has ${Number(record.airportRecords).toLocaleString()} airport records in the R2 snapshot, including ${Number(record.scheduledLargeOrMediumAirports).toLocaleString()} large or medium airports with scheduled service. None is labelled as an approved pet entry point by this dataset.`;
}

fetch('/data/destinations.json').then(response => response.json()).then(data => {
  destinations = data.records;
  destination.innerHTML = destinations.map(row => `<option value="${row.code}">${row.name}</option>`).join('');
  destination.value = 'FR';
  const generated = new Date(data.generatedAt);
  const time = document.querySelector('#projection-date');
  time.dateTime = data.generatedAt;
  time.textContent = generated.toLocaleDateString('en-GB', {dateStyle:'medium'});
  show(destinations.find(row => row.code === destination.value));
});

document.querySelector('#lookup-form').addEventListener('submit', event => {
  event.preventDefault();
  const record = destinations.find(row => row.code === destination.value);
  if (record) show(record);
  document.querySelector('#answer').scrollIntoView({behavior:'smooth', block:'start'});
});
document.querySelector('#copy-link').addEventListener('click', async event => { try { await navigator.clipboard.writeText(location.href.split('#')[0]+'#answer'); event.currentTarget.textContent='Link copied'; } catch { event.currentTarget.textContent='Copy unavailable'; } });
document.querySelector('#native-share').addEventListener('click', async () => navigator.share ? navigator.share({title:document.title,url:location.href.split('#')[0]+'#answer'}) : document.querySelector('#copy-link').click());
