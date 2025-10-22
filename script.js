function async (XMLHttpRequest) {
     const xhr = new XMLHttpRequest();
  xhr.open("GET", "Vincent.json", true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      data.forEach(({className, teacher, roomNumber, period, subjectArea, }) =>
        {
        const div = `<div class" col-12 col-sm-6 col-lg-4">
          <div class="h1">${className}</div>
           <div class="h1">${teacher}</div>
            <div class="h1">${roomNumber}</div>
             <div class="h1">${period}</div>
              <div class="h1">${subjectArea}</div>
          </div>
          `;
        document.querySelector("#output").insertAdjacentHTML("beforeend", div);
      });
    } else throw new Error(`Invalid file received, error ${xhr.status}`);
  };
  xhr.send();
  document.querySelector("#clicker").removeEventListener("click", act);
}
document.querySelector("#clicker").addEventListener("click", act);

function run(name, output) {
  output.classList.add("loading");
  fetch(name)
    .then((data) => data.json())
    .then((data) => {
      output.classList.remove("loading");
      output.innerHTML = "";
      current = data;
      data.forEach(
        ({ className, teacher, roomNumber, period, subjectArea }) => {
          const elem = new _Class(
            className,
            teacher,
            `Room: ${roomNumber}`,
            `Period: ${period}`,
            subjectArea
          );
          elem.print(output);
        }
      );
    })
    .catch(
      () =>
        (output.innerHTML =
          "Error Loading Files, please try reloading the webpage. If this error persists, know that we will fix it within two days.")
    );
}