const scheduleContainer = document.getElementById('scheduleContainer');
const status = document.getElementById('status');
const selector = document.getElementById('friendSelector');

function renderSchedule(fileName) {
  const data = schedules[fileName];
  if (!data) {
     status.innerHTML = `<div class="alert alert-danger">Schedule not found!</div>`;
    scheduleContainer.innerHTML = "";
    return;
  }


  status.innerHTML = "";
  scheduleContainer.innerHTML = "";



  data.sort((a,b)=> a.period - b.period);

  data.forEach(cls => {
    const html = `
      <div class="card col-md-3 p-3 mb-3 opacity-1">
        <h5>${cls.className}</h5>
        <p><strong>Teacher:</strong> ${Array.isArray(cls.teacher) ? cls.teacher.join(', ') : cls.teacher}</p>
        <p><strong>Room:</strong> ${cls.roomNumber}</p>
        <p><strong>Period:</strong> ${cls.period}</p>
        <p><strong>Subject:</strong> ${cls.subjectArea}</p>
      </div>
    `;
    scheduleContainer.insertAdjacentHTML('beforeend', html);
  });
}




renderSchedule(selector.value);



selector.addEventListener('change', () => {
  renderSchedule(selector.value);
});