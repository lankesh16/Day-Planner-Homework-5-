const currentDay = document.getElementById("currentDay");
const rows =document.getElementsByClassName("timerow");
const present = document.getElementsByClassName("present")
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    
    //Present
    if (currentHour === rowHour) {
      setColor(row, "red");
      //future
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
      //Past
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "lightgrey");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

const m = moment()

console.log(m.format('MMMM Do YYYY, h:mm:ss a'));
 currentDay.textContent = (m.format('MMMM Do YYYY, h:mm:ss a'));  

function getInput() {
  var textarea =document.getElementById("textarea").value;
}

var saveBtn = document.getElementsByClassName("saveBtn")

saveBtn.addEventListener('click',getInput,false);
