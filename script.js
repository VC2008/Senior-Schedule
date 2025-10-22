const scheduleContainer = document.getElementById('scheduleContainer');
const status = document.getElementById('status');
const selector = document.getElementById('friendSelector');

function renderSchedule(jsonfolder) {
  const data = schedules[jsonfolder];
  if (!jsonfolder) {
     status.innerHTML = `<div class="alert alert-danger">Schedule not found!</div>`;
    scheduleContainer.innerHTML = "";
    return;
  }


  status.innerHTML = "jsonfolder";
  scheduleContainer.innerHTML = "";



  data.sort((a,b)=> a.period - b.period);

  data.forEach(jsonfolder => 
{
    const html = `
      <div class="card col-md-3 p-3 mb-3 opacity-1">
        <h5>${jsonfolder.className}</h5>
        <p><strong>Teacher:</strong> ${Array.isArray(jsonfolder.teacher) ? jsonfolder.teacher.join(', ') : jsonfolder.teacher}</p>
        <p><strong>Room:</strong> ${jsonfolder.roomNumber}</p>
        <p><strong>Period:</strong> ${jsonfolder.period}</p>
        <p><strong>Subject:</strong> ${jsonfolder.subjectArea}</p>
      </div>
    `;
    scheduleContainer.insertAdjacentHTML('beforeend', html);
  });
}




renderSchedule(selector.value);



selector.addEventListener('change', () => {
  renderSchedule(selector.value);
});