const user = auth.currentUser;
const form = document.getElementById('inputtab');
const save = document.getElementById('saveitem');

const todolist = document.getElementById('itemlist');
const donelist = document.getElementById('donelist');

// Add input field data to firestore
function getInputsAndAdd() {
  save.addEventListener('click', (e) => {
    e.preventDefault();

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // Get the input values from dom form
        let title = document.getElementById('newitem').value;
        let startdate = document.getElementById('newitemstartdate').value;
        let starttime = document.getElementById('newitemstarttime').value;
        let duedate = document.getElementById('newitemduedate').value;
        let duetime = document.getElementById('newitemduetime').value;

        console.log(startdate);

        // Alert if there are missing fields
        if (title == "" || startdate == "" || starttime == "" || duedate == "" || duetime == "") {
          alert("Please enter all fields!");
        } else {
          // Save the input data to firestore
          db.collection('users').doc(user.uid).collection('todolist')
            .add({
              'title': title,
              'startdate': startdate,
              'starttime': starttime,
              'duedate': duedate,
              'duetime': duetime,
              'complete': false
            })
            .then(() => {
              // Reset the form after data has been added
              inputtab.reset();
            });
        }
      } else {
        alert("Please login!");
        location.assign('login.html');
      }
    });
  });
};
getInputsAndAdd();


// Change 24-Hour format to 12-Hour format
function to12HourFormat(timedata) {
  let hours = timedata.substr(0, 2);
  let minutes = timedata.substr(3, 2);
  if (hours >= 13) {
    hours -= 12;
    return `${hours}:${minutes} PM`;
  } else {
    return `${hours}:${minutes} AM`;
  }
}

// Calculate elapsed time and return string
function timeSpent(duedate, duetime) {
  // Due time data
  let dueday = parseInt(duedate.substr(8, 2));
  let duehour = parseInt(duetime.substr(0, 2));
  let dueminute = parseInt(duetime.substr(3, 2));

  // Completed time data
  let today = new Date();
  let todayday = today.getDate();
  let todayhour = today.getHours();
  let todayminute = today.getMinutes();

  // Calculating difference in due time and current time
  let resultday = todayday - dueday;
  let resulthour = todayhour - duehour;
  let resultminute = todayminute - dueminute;
  let result = "";

  // Completed same day, early
  if (resultday == 0 && resulthour < 0 && resulthour > -6) {
    if (todayminute > dueminute) {
      resulthour += 1;
      resultminute = todayminute - (dueminute + 60);
      result += `You finished EARLY by ${Math.abs(resulthour)} hrs and ${Math.abs(resultminute)} mins!`;
    } else {
      resultminute = todayminute - dueminute;
      result += `You finished EARLY by ${Math.abs(resulthour)} hrs and ${Math.abs(resultminute)} mins!`;
    }
    // Completed same day, same hour before/after due minutes.
  } else if (resultday == 0 && resulthour == 0) {
    if (resultminute < 0) {
      result += `You finished EARLY by ${Math.abs(resultminute)} mins!`
    } else {
      result += `You finished LATE by ${resultminute} mins!`
    }
    // Completed same day, late
  } else if (resultday == 0 && resulthour > 0 && resulthour < 6) {
    if (todayminute < dueminute) {
      resulthour -= 1;
      resultminute = (todayminute + 60) - dueminute;
      result += `You finished LATE by ${resulthour} hrs and ${resultminute} mins!`
    } else {
      resultminute = todayminute - dueminute;
      result += `You finished LATE by ${resulthour} hrs and ${resultminute} mins!`
    }
    // Completed on a different day
  } else {
    resulthour = (todayhour + 24) - duehour
    if (resulthour < 5) {
      if (todayminute > dueminute) {
        resultminute = todayminute - dueminute;
        result += `You finished LATE by ${Math.abs(resulthour)} hrs and ${Math.abs(resultminute)} mins!`;
      } else {
        resulthour -= 1;
        resultminute = (todayminute + 60) - dueminute;
        result += `You finished LATE by ${Math.abs(resulthour)} hrs and ${Math.abs(resultminute)} mins!`;
      }
    } else {
      result += "Your due date and time was off more than 5 hours, try scheduling for a reasonable amount of time!"
    }
  }
  return result;
}

// Realtime listener for todo items
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('users').doc(user.uid).collection('todolist').where("complete", "==", false)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {

          // Add new item to list and show saved list.
          if (change.type === "added") {
            console.log("New item: ", change.doc.data());

            let itemcard = document.createElement('div');
            itemcard.className = 'itemcard';
            let itemtitle = document.createElement('h4');
            let timestart = document.createElement('span');
            let timedue = document.createElement('span');
            let id = change.doc.id;

            // Variable for date and time data
            let savedstartdate = change.doc.data().startdate;
            let savedstarttime = change.doc.data().starttime;
            let savedduedate = change.doc.data().duedate;
            let savedduetime = change.doc.data().duetime;

            // Showing the date and times for the item
            itemtitle.innerHTML = change.doc.data().title;
            timestart.innerHTML = "<b>Start</b> at " + to12HourFormat(savedstarttime) + " on " + savedstartdate + "</br>";
            timedue.innerHTML = "<b>Due</b> at " + to12HourFormat(savedduetime) + " on " + savedduedate;

            // Creating done button
            let donebutton = document.createElement('button');
            let i = document.createElement('i');
            i.className = 'material-icons';
            i.textContent = 'check_circle';
            donebutton.appendChild(i);

            // Adding event listener to complete a todo item
            donebutton.addEventListener('click', () => {
              console.log(id);
              db.collection('users').doc(user.uid).collection('todolist').doc(id).update({
                complete: true,
                result: timeSpent(savedduedate, savedduetime)
              });
              console.log("Update success");
              todolist.removeChild(itemcard);
            });

            // Appending elements to item card
            itemcard.appendChild(itemtitle);
            itemcard.appendChild(timestart);
            itemcard.appendChild(timedue);
            itemcard.appendChild(donebutton);
            todolist.appendChild(itemcard);
          }
        })
      })
  }
});


// Realtime listener for completed items
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('users').doc(user.uid).collection('todolist').where("complete", "==", true)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {

          // Add new item to list and show saved list.
          if (change.type === "added") {
            console.log("Done item: ", change.doc.data());

            let itemcard = document.createElement('div');
            itemcard.className = 'itemcarddone';
            let itemtitle = document.createElement('h4');
            let timestart = document.createElement('span');
            let timedue = document.createElement('span');
            let result = document.createElement('span');
            result.className = 'resultstyle';
            let id = change.doc.id;

            // Creating delete button and adding event listener
            let deletebutton = document.createElement('button');
            let i = document.createElement('i');
            i.className = 'material-icons';
            i.textContent = 'delete';
            deletebutton.appendChild(i);

            // Variables for date and time data
            let savedstartdate = change.doc.data().startdate;
            let savedstarttime = change.doc.data().starttime;
            let savedduedate = change.doc.data().duedate;
            let savedduetime = change.doc.data().duetime;
            let resulttext = change.doc.data().result;

            // Event removes from database
            deletebutton.addEventListener('click', () => {
              console.log(id);
              db.collection('users').doc(user.uid).collection('todolist').doc(id).delete().then(() => {
                console.log("Removed from database");
                donelist.removeChild(itemcard);
              });
            });

            itemtitle.innerHTML = change.doc.data().title;
            timestart.innerHTML = "<b>Start</b> at " + to12HourFormat(savedstarttime) + " on " + savedstartdate + "</br>";
            timedue.innerHTML = "<b>Due</b> at " + to12HourFormat(savedduetime) + " on " + savedduedate + "</br>";
            result.innerHTML = resulttext;


            // Appending elements to item card
            itemcard.appendChild(itemtitle);
            itemcard.appendChild(timestart);
            itemcard.appendChild(timedue);

            itemcard.appendChild(deletebutton);
            itemcard.appendChild(result);
            donelist.appendChild(itemcard);

          }
        })
      });
  }
});