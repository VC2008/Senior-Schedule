function async (params) {
     const xhr = new XMLHttpRequest();
  xhr.open("GET", "Vincent.json", true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      data.forEach({className, teacher, roomNumber, period, subjectArea, }) => {
        const div = `<div class" col-12 col-sm-6 col-lg-4"> `
}
}
  {
    
  }
}
}