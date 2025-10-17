function async (params) {
     const xhr = new XMLHttpRequest();
  xhr.open("GET", "list.json", true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      data.forEach({className, teacher, roomNumber, period, subjectArea, }) => {
}
}
  {
    
  }
}
}