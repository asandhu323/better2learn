//this function sets the grade for the assessment
function setGradec1100j1() {
    document.getElementById("setc1100j1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1100j1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1100j1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1100j1()
                })
        })
    })
}
//this function shows the set grade whenever user logs in
//each of these functions creates an uncaught in promise error simply because the id
//of the grade change function isn't there yet, it shows up after a grade has been set
function keepGradec1100j1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1100j1;
                var getTotal = doc.data().c1100j1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1100j1").innerHTML = "<button type='button' id='changec1100j1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1100j1") != null) {
                    //this function allows user to change grade
                    function changeGradec1100j1() {
                        document.getElementById("changec1100j1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1100j1").innerHTML = "<button type='button' id='setc1100j1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1100j1g' type='text'></input>"
                                setGradec1100j1()
                            }
                        })
                    }
                    changeGradec1100j1()
                }
            })
    })
}
//The following functions are the same as the above two, but for each assessment.
//I tried to find a way to generalize the functions by passing in the assessment ID
//but I couldn't find a way to access Firestore data values using a local variable 
//from my code, thus the repetitive functions.

function setGradec1100j2() {
    document.getElementById("setc1100j2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1100j2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1100j2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1100j2()
                })
        })
    })
}

function keepGradec1100j2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1100j2;
                var getTotal = doc.data().c1100j2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1100j2").innerHTML = "<button type='button' id='changec1100j2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1100j2") != null) {
                    function changeGradec1100j2() {
                        document.getElementById("changec1100j2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1100j2").innerHTML = "<button type='button' id='setc1100j2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1100j2g' type='text'></input>"
                                setGradec1100j2()
                            }
                        })
                    }
                    changeGradec1100j2()
                }
            })
    })
}

function setGradec1100j3() {
    document.getElementById("setc1100j3").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1100j3g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1100j3": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1100j3()
                })
        })
    })
}

function keepGradec1100j3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1100j3;
                var getTotal = doc.data().c1100j3s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1100j3").innerHTML = "<button type='button' id='changec1100j3' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1100j3") != null) {
                    function changeGradec1100j3() {
                        document.getElementById("changec1100j3").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1100j3").innerHTML = "<button type='button' id='setc1100j3' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1100j3g' type='text'></input>"
                                setGradec1100j3()
                            }
                        })
                    }
                    changeGradec1100j3()
                }
            })
    })
}

function setGradec1100j4() {
    document.getElementById("setc1100j4").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1100j4g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1100j4": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1100j4()
                })
        })
    })
}

function keepGradec1100j4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1100j4;
                var getTotal = doc.data().c1100j4s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1100j4").innerHTML = "<button type='button' id='changec1100j4' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1100j4") != null) {
                    function changeGradec1100j4() {
                        document.getElementById("changec1100j4").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1100j4").innerHTML = "<button type='button' id='setc1100j4' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1100j4g' type='text'></input>"
                                setGradec1100j4()
                            }
                        })
                    }
                    changeGradec1100j4()
                }
            })
    })
}

function setGradec1100j5() {
    document.getElementById("setc1100j5").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1100j5g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1100j5": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1100j5()
                })
        })
    })
}

function keepGradec1100j5() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1100j5;
                var getTotal = doc.data().c1100j5s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1100j5").innerHTML = "<button type='button' id='changec1100j5' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1100j5") != null) {
                    function changeGradec1100j5() {
                        document.getElementById("changec1100j5").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1100j5").innerHTML = "<button type='button' id='setc1100j5' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1100j5g' type='text'></input>"
                                setGradec1100j5()
                            }
                        })
                    }
                    changeGradec1100j5()
                }
            })
    })
}

function setGradec1100j8() {
    document.getElementById("setc1100j8").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1100j8g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1100j8": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1100j8()
                })
        })
    })
}

function keepGradec1100j8() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1100j8;
                var getTotal = doc.data().c1100j8s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1100j8").innerHTML = "<button type='button' id='changec1100j8' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1100j8") != null) {
                    function changeGradec1100j8() {
                        document.getElementById("changec1100j8").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1100j8").innerHTML = "<button type='button' id='setc1100j8' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1100j8g' type='text'></input>"
                                setGradec1100j8()
                            }
                        })
                    }
                    changeGradec1100j8()
                }
            })
    })
}

function setGradec1100j9() {
    document.getElementById("setc1100j9").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1100j9g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1100j9": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1100j9()
                })
        })
    })
}

function keepGradec1100j9() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1100j9;
                var getTotal = doc.data().c1100j9s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1100j9").innerHTML = "<button type='button' id='changec1100j9' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1100j9") != null) {
                    function changeGradec1100j9() {
                        document.getElementById("changec1100j9").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1100j9").innerHTML = "<button type='button' id='setc1100j9' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1100j9g' type='text'></input>"
                                setGradec1100j9()
                            }
                        })
                    }
                    changeGradec1100j9()
                }
            })
    })
}

function setGradec1100j11() {
    document.getElementById("setc1100j11").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1100j11g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1100j11": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1100j11()
                })
        })
    })
}

function keepGradec1100j11() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1100j11;
                var getTotal = doc.data().c1100j11s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1100j11").innerHTML = "<button type='button' id='changec1100j11' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1100j11") != null) {
                    function changeGradec1100j11() {
                        document.getElementById("changec1100j11").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1100j11").innerHTML = "<button type='button' id='setc1100j11' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1100j11g' type='text'></input>"
                                setGradec1100j11()
                            }
                        })
                    }
                    changeGradec1100j11()
                }
            })
    })
}

function setGradec1100j12() {
    document.getElementById("setc1100j12").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1100j12g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1100j12": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1100j12()
                })
        })
    })
}

function keepGradec1100j12() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1100j12;
                var getTotal = doc.data().c1100j12s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1100j12").innerHTML = "<button type='button' id='changec1100j12' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1100j12") != null) {
                    function changeGradec1100j12() {
                        document.getElementById("changec1100j12").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1100j12").innerHTML = "<button type='button' id='setc1100j12' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1100j12g' type='text'></input>"
                                setGradec1100j12()
                            }
                        })
                    }
                    changeGradec1100j12()
                }
            })
    })
}

function setGradec1113q1() {
    document.getElementById("setc1113q1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113q1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113q1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113q1()
                })
        })
    })
}

function keepGradec1113q1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113q1;
                var getTotal = doc.data().c1113q1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113q1").innerHTML = "<button type='button' id='changec1113q1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113q1") != null) {
                    function changeGradec1113q1() {
                        document.getElementById("changec1113q1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113q1").innerHTML = "<button type='button' id='setc1113q1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113q1g' type='text'></input>"
                                setGradec1113q1()
                            }
                        })
                    }
                    changeGradec1113q1()
                }
            })
    })
}

function setGradec1113q2() {
    document.getElementById("setc1113q2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113q2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113q2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113q2()
                })
        })
    })
}

function keepGradec1113q2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113q2;
                var getTotal = doc.data().c1113q2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113q2").innerHTML = "<button type='button' id='changec1113q2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113q2") != null) {
                    function changeGradec1113q2() {
                        document.getElementById("changec1113q2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113q2").innerHTML = "<button type='button' id='setc1113q2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113q2g' type='text'></input>"
                                setGradec1113q2()
                            }
                        })
                    }
                    changeGradec1113q2()
                }
            })
    })
}

function setGradec1113q3() {
    document.getElementById("setc1113q3").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113q3g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113q3": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113q3()
                })
        })
    })
}

function keepGradec1113q3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113q3;
                var getTotal = doc.data().c1113q3s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113q3").innerHTML = "<button type='button' id='changec1113q3' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113q3") != null) {
                    function changeGradec1113q3() {
                        document.getElementById("changec1113q3").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113q3").innerHTML = "<button type='button' id='setc1113q3' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113q3g' type='text'></input>"
                                setGradec1113q3()
                            }
                        })
                    }
                    changeGradec1113q3()
                }
            })
    })
}

function setGradec1113q4() {
    document.getElementById("setc1113q4").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113q4g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113q4": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113q4()
                })
        })
    })
}

function keepGradec1113q4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113q4;
                var getTotal = doc.data().c1113q4s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113q4").innerHTML = "<button type='button' id='changec1113q4' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113q4") != null) {
                    function changeGradec1113q4() {
                        document.getElementById("changec1113q4").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113q4").innerHTML = "<button type='button' id='setc1113q4' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113q4g' type='text'></input>"
                                setGradec1113q4()
                            }
                        })
                    }
                    changeGradec1113q4()
                }
            })
    })
}

function setGradec1113q5() {
    document.getElementById("setc1113q5").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113q5g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113q5": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113q5()
                })
        })
    })
}

function keepGradec1113q5() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113q5;
                var getTotal = doc.data().c1113q5s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113q5").innerHTML = "<button type='button' id='changec1113q5' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113q5") != null) {
                    function changeGradec1113q5() {
                        document.getElementById("changec1113q5").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113q5").innerHTML = "<button type='button' id='setc1113q5' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113q5g' type='text'></input>"
                                setGradec1113q5()
                            }
                        })
                    }
                    changeGradec1113q5()
                }
            })
    })
}

function setGradec1113q6() {
    document.getElementById("setc1113q6").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113q6g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113q6": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113q6()
                })
        })
    })
}

function keepGradec1113q6() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113q6;
                var getTotal = doc.data().c1113q6s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113q6").innerHTML = "<button type='button' id='changec1113q6' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113q6") != null) {
                    function changeGradec1113q6() {
                        document.getElementById("changec1113q6").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113q6").innerHTML = "<button type='button' id='setc1113q6' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113q6g' type='text'></input>"
                                setGradec1113q6()
                            }
                        })
                    }
                    changeGradec1113q6()
                }
            })
    })
}

function setGradec1113a1() {
    document.getElementById("setc1113a1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113a1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113a1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113a1()
                })
        })
    })
}

function keepGradec1113a1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113a1;
                var getTotal = doc.data().c1113a1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113a1").innerHTML = "<button type='button' id='changec1113a1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113a1") != null) {
                    function changeGradec1113a1() {
                        document.getElementById("changec1113a1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113a1").innerHTML = "<button type='button' id='setc1113a1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113a1g' type='text'></input>"
                                setGradec1113a1()
                            }
                        })
                    }
                    changeGradec1113a1()
                }
            })
    })
}

function setGradec1113a2() {
    document.getElementById("setc1113a2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113a2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113a2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113a2()
                })
        })
    })
}

function keepGradec1113a2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113a2;
                var getTotal = doc.data().c1113a2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113a2").innerHTML = "<button type='button' id='changec1113a2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113a2") != null) {
                    function changeGradec1113a2() {
                        document.getElementById("changec1113a2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113a2").innerHTML = "<button type='button' id='setc1113a2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113a2g' type='text'></input>"
                                setGradec1113a2()
                            }
                        })
                    }
                    changeGradec1113a2()
                }
            })
    })
}

function setGradec1113a3() {
    document.getElementById("setc1113a3").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113a3g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113a3": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113a3()
                })
        })
    })
}

function keepGradec1113a3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113a3;
                var getTotal = doc.data().c1113a3s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113a3").innerHTML = "<button type='button' id='changec1113a3' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113a3") != null) {
                    function changeGradec1113a3() {
                        document.getElementById("changec1113a3").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113a3").innerHTML = "<button type='button' id='setc1113a3' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113a3g' type='text'></input>"
                                setGradec1113a3()
                            }
                        })
                    }
                    changeGradec1113a3()
                }
            })
    })
}

function setGradec1113a4() {
    document.getElementById("setc1113a4").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113a4g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113a4": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113a4()
                })
        })
    })
}

function keepGradec1113a4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113a4;
                var getTotal = doc.data().c1113a4s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113a4").innerHTML = "<button type='button' id='changec1113a4' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113a4") != null) {
                    function changeGradec1113a4() {
                        document.getElementById("changec1113a4").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113a4").innerHTML = "<button type='button' id='setc1113a4' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113a4g' type='text'></input>"
                                setGradec1113a4()
                            }
                        })
                    }
                    changeGradec1113a4()
                }
            })
    })
}

function setGradec1113a5() {
    document.getElementById("setc1113a5").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113a5g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113a5": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113a5()
                })
        })
    })
}

function keepGradec1113a5() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113a5;
                var getTotal = doc.data().c1113a5s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113a5").innerHTML = "<button type='button' id='changec1113a5' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113a5") != null) {
                    function changeGradec1113a5() {
                        document.getElementById("changec1113a5").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113a5").innerHTML = "<button type='button' id='setc1113a5' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113a5g' type='text'></input>"
                                setGradec1113a5()
                            }
                        })
                    }
                    changeGradec1113a5()
                }
            })
    })
}

function setGradec1113a6() {
    document.getElementById("setc1113a6").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113a6g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113a6": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113a6()
                })
        })
    })
}

function keepGradec1113a6() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113a6;
                var getTotal = doc.data().c1113a6s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113a6").innerHTML = "<button type='button' id='changec1113a6' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113a6") != null) {
                    function changeGradec1113a6() {
                        document.getElementById("changec1113a6").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113a6").innerHTML = "<button type='button' id='setc1113a6' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113a6g' type='text'></input>"
                                setGradec1113a6()
                            }
                        })
                    }
                    changeGradec1113a6()
                }
            })
    })
}

function setGradec1113a7() {
    document.getElementById("setc1113a7").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113a7g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113a7": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113a7()
                })
        })
    })
}

function keepGradec1113a7() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113a7;
                var getTotal = doc.data().c1113a7s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113a7").innerHTML = "<button type='button' id='changec1113a7' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113a7") != null) {
                    function changeGradec1113a7() {
                        document.getElementById("changec1113a7").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113a7").innerHTML = "<button type='button' id='setc1113a7' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113a7g' type='text'></input>"
                                setGradec1113a7()
                            }
                        })
                    }
                    changeGradec1113a7()
                }
            })
    })
}

function setGradec1113a8() {
    document.getElementById("setc1113a8").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113a8g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113a8": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113a8()
                })
        })
    })
}

function keepGradec1113a8() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113a8;
                var getTotal = doc.data().c1113a8s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113a8").innerHTML = "<button type='button' id='changec1113a8' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113a8") != null) {
                    function changeGradec1113a8() {
                        document.getElementById("changec1113a8").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113a8").innerHTML = "<button type='button' id='setc1113a8' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113a8g' type='text'></input>"
                                setGradec1113a8()
                            }
                        })
                    }
                    changeGradec1113a8()
                }
            })
    })
}

function setGradec1113a9() {
    document.getElementById("setc1113a9").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113a9g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113a9": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113a9()
                })
        })
    })
}

function keepGradec1113a9() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113a9;
                var getTotal = doc.data().c1113a9s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113a9").innerHTML = "<button type='button' id='changec1113a9' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113a9") != null) {
                    function changeGradec1113a9() {
                        document.getElementById("changec1113a9").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113a9").innerHTML = "<button type='button' id='setc1113a9' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113a9g' type='text'></input>"
                                setGradec1113a9()
                            }
                        })
                    }
                    changeGradec1113a9()
                }
            })
    })
}

function setGradec1113e1() {
    document.getElementById("setc1113e1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113e1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113e1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113e1()
                })
        })
    })
}

function keepGradec1113e1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113e1;
                var getTotal = doc.data().c1113e1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113e1").innerHTML = "<button type='button' id='changec1113e1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113e1") != null) {
                    function changeGradec1113e1() {
                        document.getElementById("changec1113e1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113e1").innerHTML = "<button type='button' id='setc1113e1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113e1g' type='text'></input>"
                                setGradec1113e1()
                            }
                        })
                    }
                    changeGradec1113e1()
                }
            })
    })
}

function setGradec1113e2() {
    document.getElementById("setc1113e2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1113e2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1113e2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1113e2()
                })
        })
    })
}

function keepGradec1113e2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1113e2;
                var getTotal = doc.data().c1113e2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1113e2").innerHTML = "<button type='button' id='changec1113e2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1113e2") != null) {
                    function changeGradec1113e2() {
                        document.getElementById("changec1113e2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1113e2").innerHTML = "<button type='button' id='setc1113e2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1113e2g' type='text'></input>"
                                setGradec1113e2()
                            }
                        })
                    }
                    changeGradec1113e2()
                }
            })
    })
}


function setGradec1116q1() {
    document.getElementById("setc1116q1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116q1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116q1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116q1()
                })
        })
    })
}

function keepGradec1116q1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116q1;
                var getTotal = doc.data().c1116q1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116q1").innerHTML = "<button type='button' id='changec1116q1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116q1") != null) {
                    function changeGradec1116q1() {
                        document.getElementById("changec1116q1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116q1").innerHTML = "<button type='button' id='setc1116q1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116q1g' type='text'></input>"
                                setGradec1116q1()
                            }
                        })
                    }
                    changeGradec1116q1()
                }
            })
    })
}


function setGradec1116q2() {
    document.getElementById("setc1116q2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116q2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116q2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116q2()
                })
        })
    })
}

function keepGradec1116q2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116q2;
                var getTotal = doc.data().c1116q2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116q2").innerHTML = "<button type='button' id='changec1116q2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116q2") != null) {
                    function changeGradec1116q2() {
                        document.getElementById("changec1116q2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116q2").innerHTML = "<button type='button' id='setc1116q2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116q2g' type='text'></input>"
                                setGradec1116q2()
                            }
                        })
                    }
                    changeGradec1116q2()
                }
            })
    })
}


function setGradec1116q3() {
    document.getElementById("setc1116q3").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116q3g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116q3": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116q3()
                })
        })
    })
}

function keepGradec1116q3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116q3;
                var getTotal = doc.data().c1116q3s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116q3").innerHTML = "<button type='button' id='changec1116q3' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116q3") != null) {
                    function changeGradec1116q3() {
                        document.getElementById("changec1116q3").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116q3").innerHTML = "<button type='button' id='setc1116q3' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116q3g' type='text'></input>"
                                setGradec1116q3()
                            }
                        })
                    }
                    changeGradec1116q3()
                }
            })
    })
}


function setGradec1116q4() {
    document.getElementById("setc1116q4").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116q4g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116q4": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116q4()
                })
        })
    })
}

function keepGradec1116q4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116q4;
                var getTotal = doc.data().c1116q4s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116q4").innerHTML = "<button type='button' id='changec1116q4' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116q4") != null) {
                    function changeGradec1116q4() {
                        document.getElementById("changec1116q4").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116q4").innerHTML = "<button type='button' id='setc1116q4' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116q4g' type='text'></input>"
                                setGradec1116q4()
                            }
                        })
                    }
                    changeGradec1116q4()
                }
            })
    })
}


function setGradec1116q5() {
    document.getElementById("setc1116q5").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116q5g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116q5": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116q5()
                })
        })
    })
}

function keepGradec1116q5() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116q5;
                var getTotal = doc.data().c1116q5s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116q5").innerHTML = "<button type='button' id='changec1116q5' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116q5") != null) {
                    function changeGradec1116q5() {
                        document.getElementById("changec1116q5").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116q5").innerHTML = "<button type='button' id='setc1116q5' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116q5g' type='text'></input>"
                                setGradec1116q5()
                            }
                        })
                    }
                    changeGradec1116q5()
                }
            })
    })
}


function setGradec1116q6() {
    document.getElementById("setc1116q6").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116q6g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116q6": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116q6()
                })
        })
    })
}

function keepGradec1116q6() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116q6;
                var getTotal = doc.data().c1116q6s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116q6").innerHTML = "<button type='button' id='changec1116q6' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116q6") != null) {
                    function changeGradec1116q6() {
                        document.getElementById("changec1116q6").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116q6").innerHTML = "<button type='button' id='setc1116q6' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116q6g' type='text'></input>"
                                setGradec1116q6()
                            }
                        })
                    }
                    changeGradec1116q6()
                }
            })
    })
}


function setGradec1116q7() {
    document.getElementById("setc1116q7").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116q7g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116q7": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116q7()
                })
        })
    })
}

function keepGradec1116q7() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116q7;
                var getTotal = doc.data().c1116q7s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116q7").innerHTML = "<button type='button' id='changec1116q7' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116q7") != null) {
                    function changeGradec1116q7() {
                        document.getElementById("changec1116q7").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116q7").innerHTML = "<button type='button' id='setc1116q7' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116q7g' type='text'></input>"
                                setGradec1116q7()
                            }
                        })
                    }
                    changeGradec1116q7()
                }
            })


    })
}

function setGradec1116d1() {
    document.getElementById("setc1116d1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116d1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116d1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116d1()
                })
        })
    })
}

function keepGradec1116d1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116d1;
                var getTotal = doc.data().c1116d1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116d1").innerHTML = "<button type='button' id='changec1116d1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116d1") != null) {
                    function changeGradec1116d1() {
                        document.getElementById("changec1116d1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116d1").innerHTML = "<button type='button' id='setc1116d1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116d1g' type='text'></input>"
                                setGradec1116d1()
                            }
                        })
                    }
                    changeGradec1116d1()
                }
            })
    })
}


function setGradec1116d2() {
    document.getElementById("setc1116d2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116d2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116d2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116d2()
                })
        })
    })
}

function keepGradec1116d2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116d2;
                var getTotal = doc.data().c1116d2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116d2").innerHTML = "<button type='button' id='changec1116d2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116d2") != null) {
                    function changeGradec1116d2() {
                        document.getElementById("changec1116d2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116d2").innerHTML = "<button type='button' id='setc1116d2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116d2g' type='text'></input>"
                                setGradec1116d2()
                            }
                        })
                    }
                    changeGradec1116d2()
                }
            })
    })
}


function setGradec1116d3() {
    document.getElementById("setc1116d3").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116d3g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116d3": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116d3()
                })
        })
    })
}

function keepGradec1116d3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116d3;
                var getTotal = doc.data().c1116d3s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116d3").innerHTML = "<button type='button' id='changec1116d3' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116d3") != null) {
                    function changeGradec1116d3() {
                        document.getElementById("changec1116d3").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116d3").innerHTML = "<button type='button' id='setc1116d3' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116d3g' type='text'></input>"
                                setGradec1116d3()
                            }
                        })
                    }
                    changeGradec1116d3()
                }
            })
    })
}


function setGradec1116d4() {
    document.getElementById("setc1116d4").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116d4g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116d4": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116d4()
                })
        })
    })
}

function keepGradec1116d4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116d4;
                var getTotal = doc.data().c1116d4s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116d4").innerHTML = "<button type='button' id='changec1116d4' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116d4") != null) {
                    function changeGradec1116d4() {
                        document.getElementById("changec1116d4").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116d4").innerHTML = "<button type='button' id='setc1116d4' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116d4g' type='text'></input>"
                                setGradec1116d4()
                            }
                        })
                    }
                    changeGradec1116d4()
                }
            })
    })
}


function setGradec1116d5() {
    document.getElementById("setc1116d5").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116d5g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116d5": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116d5()
                })
        })
    })
}

function keepGradec1116d5() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116d5;
                var getTotal = doc.data().c1116d5s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116d5").innerHTML = "<button type='button' id='changec1116d5' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116d5") != null) {
                    function changeGradec1116d5() {
                        document.getElementById("changec1116d5").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116d5").innerHTML = "<button type='button' id='setc1116d5' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116d5g' type='text'></input>"
                                setGradec1116d5()
                            }
                        })
                    }
                    changeGradec1116d5()
                }
            })
    })
}


function setGradec1116d6() {
    document.getElementById("setc1116d6").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116d6g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116d6": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116d6()
                })
        })
    })
}

function keepGradec1116d6() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116d6;
                var getTotal = doc.data().c1116d6s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116d6").innerHTML = "<button type='button' id='changec1116d6' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116d6") != null) {
                    function changeGradec1116d6() {
                        document.getElementById("changec1116d6").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116d6").innerHTML = "<button type='button' id='setc1116d6' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116d6g' type='text'></input>"
                                setGradec1116d6()
                            }
                        })
                    }
                    changeGradec1116d6()
                }
            })
    })
}


function setGradec1116d7() {
    document.getElementById("setc1116d7").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116d7g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116d7": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116d7()
                })
        })
    })
}

function keepGradec1116d7() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116d7;
                var getTotal = doc.data().c1116d7s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116d7").innerHTML = "<button type='button' id='changec1116d7' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116d7") != null) {
                    function changeGradec1116d7() {
                        document.getElementById("changec1116d7").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116d7").innerHTML = "<button type='button' id='setc1116d7' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116d7g' type='text'></input>"
                                setGradec1116d7()
                            }
                        })
                    }
                    changeGradec1116d7()
                }
            })

            
    })
}

function setGradec1116e() {
    document.getElementById("setc1116e").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116eg").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116e": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116e()
                })
        })
    })
}

function keepGradec1116e() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116e;
                var getTotal = doc.data().c1116es;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116e").innerHTML = "<button type='button' id='changec1116e' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116e") != null) {
                    function changeGradec1116e() {
                        document.getElementById("changec1116e").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116e").innerHTML = "<button type='button' id='setc1116e' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116eg' type='text'></input>"
                                setGradec1116e()
                            }
                        })
                    }
                    changeGradec1116e()
                }
            })

            
    })
}

function setGradec1116ir() {
    document.getElementById("setc1116ir").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116irg").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116ir": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116ir()
                })
        })
    })
}

function keepGradec1116ir() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116ir;
                var getTotal = doc.data().c1116irs;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116ir").innerHTML = "<button type='button' id='changec1116ir' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116ir") != null) {
                    function changeGradec1116ir() {
                        document.getElementById("changec1116ir").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116ir").innerHTML = "<button type='button' id='setc1116ir' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116irg' type='text'></input>"
                                setGradec1116ir()
                            }
                        })
                    }
                    changeGradec1116ir()
                }
            })

            
    })
}

function setGradec1116op() {
    document.getElementById("setc1116op").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1116opg").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1116op": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1116op()
                })
        })
    })
}

function keepGradec1116op() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1116op;
                var getTotal = doc.data().c1116ops;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1116op").innerHTML = "<button type='button' id='changec1116op' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1116op") != null) {
                    function changeGradec1116op() {
                        document.getElementById("changec1116op").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1116op").innerHTML = "<button type='button' id='setc1116op' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1116opg' type='text'></input>"
                                setGradec1116op()
                            }
                        })
                    }
                    changeGradec1116op()
                }
            })

            
    })
}

function setGradec1510q1() {
    document.getElementById("setc1510q1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510q1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510q1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510q1()
                })
        })
    })
}

function keepGradec1510q1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510q1;
                var getTotal = doc.data().c1510q1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510q1").innerHTML = "<button type='button' id='changec1510q1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510q1") != null) {
                    function changeGradec1510q1() {
                        document.getElementById("changec1510q1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510q1").innerHTML = "<button type='button' id='setc1510q1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510q1g' type='text'></input>"
                                setGradec1510q1()
                            }
                        })
                    }
                    changeGradec1510q1()
                }
            })

            
    })
}

function setGradec1510q2() {
    document.getElementById("setc1510q2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510q2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510q2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510q2()
                })
        })
    })
}

function keepGradec1510q2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510q2;
                var getTotal = doc.data().c1510q2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510q2").innerHTML = "<button type='button' id='changec1510q2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510q2") != null) {
                    function changeGradec1510q2() {
                        document.getElementById("changec1510q2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510q2").innerHTML = "<button type='button' id='setc1510q2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510q2g' type='text'></input>"
                                setGradec1510q2()
                            }
                        })
                    }
                    changeGradec1510q2()
                }
            })

            
    })
}

function setGradec1510q3() {
    document.getElementById("setc1510q3").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510q3g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510q3": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510q3()
                })
        })
    })
}

function keepGradec1510q3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510q3;
                var getTotal = doc.data().c1510q3s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510q3").innerHTML = "<button type='button' id='changec1510q3' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510q3") != null) {
                    function changeGradec1510q3() {
                        document.getElementById("changec1510q3").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510q3").innerHTML = "<button type='button' id='setc1510q3' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510q3g' type='text'></input>"
                                setGradec1510q3()
                            }
                        })
                    }
                    changeGradec1510q3()
                }
            })

            
    })
}

function setGradec1510q4() {
    document.getElementById("setc1510q4").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510q4g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510q4": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510q4()
                })
        })
    })
}

function keepGradec1510q4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510q4;
                var getTotal = doc.data().c1510q4s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510q4").innerHTML = "<button type='button' id='changec1510q4' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510q4") != null) {
                    function changeGradec1510q4() {
                        document.getElementById("changec1510q4").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510q4").innerHTML = "<button type='button' id='setc1510q4' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510q4g' type='text'></input>"
                                setGradec1510q4()
                            }
                        })
                    }
                    changeGradec1510q4()
                }
            })

            
    })
}

function setGradec1510q5() {
    document.getElementById("setc1510q5").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510q5g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510q5": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510q5()
                })
        })
    })
}

function keepGradec1510q5() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510q5;
                var getTotal = doc.data().c1510q5s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510q5").innerHTML = "<button type='button' id='changec1510q5' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510q5") != null) {
                    function changeGradec1510q5() {
                        document.getElementById("changec1510q5").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510q5").innerHTML = "<button type='button' id='setc1510q5' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510q5g' type='text'></input>"
                                setGradec1510q5()
                            }
                        })
                    }
                    changeGradec1510q5()
                }
            })

            
    })
}

function setGradec1510q6() {
    document.getElementById("setc1510q6").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510q6g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510q6": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510q6()
                })
        })
    })
}

function keepGradec1510q6() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510q6;
                var getTotal = doc.data().c1510q6s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510q6").innerHTML = "<button type='button' id='changec1510q6' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510q6") != null) {
                    function changeGradec1510q6() {
                        document.getElementById("changec1510q6").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510q6").innerHTML = "<button type='button' id='setc1510q6' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510q6g' type='text'></input>"
                                setGradec1510q6()
                            }
                        })
                    }
                    changeGradec1510q6()
                }
            })

            
    })
}

function setGradec1510q7() {
    document.getElementById("setc1510q7").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510q7g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510q7": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510q7()
                })
        })
    })
}

function keepGradec1510q7() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510q7;
                var getTotal = doc.data().c1510q7s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510q7").innerHTML = "<button type='button' id='changec1510q7' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510q7") != null) {
                    function changeGradec1510q7() {
                        document.getElementById("changec1510q7").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510q7").innerHTML = "<button type='button' id='setc1510q7' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510q7g' type='text'></input>"
                                setGradec1510q7()
                            }
                        })
                    }
                    changeGradec1510q7()
                }
            })

            
    })
}

function setGradec1510q8() {
    document.getElementById("setc1510q8").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510q8g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510q8": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510q8()
                })
        })
    })
}

function keepGradec1510q8() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510q8;
                var getTotal = doc.data().c1510q8s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510q8").innerHTML = "<button type='button' id='changec1510q8' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510q8") != null) {
                    function changeGradec1510q8() {
                        document.getElementById("changec1510q8").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510q8").innerHTML = "<button type='button' id='setc1510q8' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510q8g' type='text'></input>"
                                setGradec1510q8()
                            }
                        })
                    }
                    changeGradec1510q8()
                }
            })

            
    })
}

function setGradec1510q9() {
    document.getElementById("setc1510q9").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510q9g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510q9": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510q9()
                })
        })
    })
}

function keepGradec1510q9() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510q9;
                var getTotal = doc.data().c1510q9s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510q9").innerHTML = "<button type='button' id='changec1510q9' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510q9") != null) {
                    function changeGradec1510q9() {
                        document.getElementById("changec1510q9").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510q9").innerHTML = "<button type='button' id='setc1510q9' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510q9g' type='text'></input>"
                                setGradec1510q9()
                            }
                        })
                    }
                    changeGradec1510q9()
                }
            })

            
    })
}

function setGradec1510q10() {
    document.getElementById("setc1510q10").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510q10g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510q10": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510q10()
                })
        })
    })
}

function keepGradec1510q10() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510q10;
                var getTotal = doc.data().c1510q10s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510q10").innerHTML = "<button type='button' id='changec1510q10' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510q10") != null) {
                    function changeGradec1510q10() {
                        document.getElementById("changec1510q10").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510q10").innerHTML = "<button type='button' id='setc1510q10' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510q10g' type='text'></input>"
                                setGradec1510q10()
                            }
                        })
                    }
                    changeGradec1510q10()
                }
            })

            
    })
}

function setGradec1510q11() {
    document.getElementById("setc1510q11").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510q11g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510q11": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510q11()
                })
        })
    })
}

function keepGradec1510q11() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510q11;
                var getTotal = doc.data().c1510q11s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510q11").innerHTML = "<button type='button' id='changec1510q11' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510q11") != null) {
                    function changeGradec1510q11() {
                        document.getElementById("changec1510q11").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510q11").innerHTML = "<button type='button' id='setc1510q11' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510q11g' type='text'></input>"
                                setGradec1510q11()
                            }
                        })
                    }
                    changeGradec1510q11()
                }
            })

            
    })
}

function setGradec1510l1() {
    document.getElementById("setc1510l1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510l1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510l1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510l1()
                })
        })
    })
}

function keepGradec1510l1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510l1;
                var getTotal = doc.data().c1510l1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510l1").innerHTML = "<button type='button' id='changec1510l1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510l1") != null) {
                    function changeGradec1510l1() {
                        document.getElementById("changec1510l1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510l1").innerHTML = "<button type='button' id='setc1510l1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510l1g' type='text'></input>"
                                setGradec1510l1()
                            }
                        })
                    }
                    changeGradec1510l1()
                }
            })

            
    })
}

function setGradec1510l2() {
    document.getElementById("setc1510l2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510l2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510l2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510l2()
                })
        })
    })
}

function keepGradec1510l2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510l2;
                var getTotal = doc.data().c1510l2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510l2").innerHTML = "<button type='button' id='changec1510l2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510l2") != null) {
                    function changeGradec1510l2() {
                        document.getElementById("changec1510l2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510l2").innerHTML = "<button type='button' id='setc1510l2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510l2g' type='text'></input>"
                                setGradec1510l2()
                            }
                        })
                    }
                    changeGradec1510l2()
                }
            })

            
    })
}

function setGradec1510l3() {
    document.getElementById("setc1510l3").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510l3g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510l3": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510l3()
                })
        })
    })
}

function keepGradec1510l3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510l3;
                var getTotal = doc.data().c1510l3s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510l3").innerHTML = "<button type='button' id='changec1510l3' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510l3") != null) {
                    function changeGradec1510l3() {
                        document.getElementById("changec1510l3").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510l3").innerHTML = "<button type='button' id='setc1510l3' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510l3g' type='text'></input>"
                                setGradec1510l3()
                            }
                        })
                    }
                    changeGradec1510l3()
                }
            })

            
    })
}

function setGradec1510l4() {
    document.getElementById("setc1510l4").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510l4g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510l4": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510l4()
                })
        })
    })
}

function keepGradec1510l4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510l4;
                var getTotal = doc.data().c1510l4s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510l4").innerHTML = "<button type='button' id='changec1510l4' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510l4") != null) {
                    function changeGradec1510l4() {
                        document.getElementById("changec1510l4").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510l4").innerHTML = "<button type='button' id='setc1510l4' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510l4g' type='text'></input>"
                                setGradec1510l4()
                            }
                        })
                    }
                    changeGradec1510l4()
                }
            })

            
    })
}

function setGradec1510l5() {
    document.getElementById("setc1510l5").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510l5g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510l5": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510l5()
                })
        })
    })
}

function keepGradec1510l5() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510l5;
                var getTotal = doc.data().c1510l5s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510l5").innerHTML = "<button type='button' id='changec1510l5' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510l5") != null) {
                    function changeGradec1510l5() {
                        document.getElementById("changec1510l5").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510l5").innerHTML = "<button type='button' id='setc1510l5' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510l5g' type='text'></input>"
                                setGradec1510l5()
                            }
                        })
                    }
                    changeGradec1510l5()
                }
            })

            
    })
}

function setGradec1510l6() {
    document.getElementById("setc1510l6").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510l6g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510l6": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510l6()
                })
        })
    })
}

function keepGradec1510l6() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510l6;
                var getTotal = doc.data().c1510l6s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510l6").innerHTML = "<button type='button' id='changec1510l6' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510l6") != null) {
                    function changeGradec1510l6() {
                        document.getElementById("changec1510l6").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510l6").innerHTML = "<button type='button' id='setc1510l6' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510l6g' type='text'></input>"
                                setGradec1510l6()
                            }
                        })
                    }
                    changeGradec1510l6()
                }
            })

            
    })
}

function setGradec1510l7() {
    document.getElementById("setc1510l7").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510l7g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510l7": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510l7()
                })
        })
    })
}

function keepGradec1510l7() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510l7;
                var getTotal = doc.data().c1510l7s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510l7").innerHTML = "<button type='button' id='changec1510l7' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510l7") != null) {
                    function changeGradec1510l7() {
                        document.getElementById("changec1510l7").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510l7").innerHTML = "<button type='button' id='setc1510l7' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510l7g' type='text'></input>"
                                setGradec1510l7()
                            }
                        })
                    }
                    changeGradec1510l7()
                }
            })

            
    })
}

function setGradec1510l8() {
    document.getElementById("setc1510l8").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510l8g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510l8": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510l8()
                })
        })
    })
}

function keepGradec1510l8() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510l8;
                var getTotal = doc.data().c1510l8s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510l8").innerHTML = "<button type='button' id='changec1510l8' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510l8") != null) {
                    function changeGradec1510l8() {
                        document.getElementById("changec1510l8").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510l8").innerHTML = "<button type='button' id='setc1510l8' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510l8g' type='text'></input>"
                                setGradec1510l8()
                            }
                        })
                    }
                    changeGradec1510l8()
                }
            })

            
    })
}

function setGradec1510l9() {
    document.getElementById("setc1510l9").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510l9g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510l9": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510l9()
                })
        })
    })
}

function keepGradec1510l9() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510l9;
                var getTotal = doc.data().c1510l9s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510l9").innerHTML = "<button type='button' id='changec1510l9' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510l9") != null) {
                    function changeGradec1510l9() {
                        document.getElementById("changec1510l9").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510l9").innerHTML = "<button type='button' id='setc1510l9' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510l9g' type='text'></input>"
                                setGradec1510l9()
                            }
                        })
                    }
                    changeGradec1510l9()
                }
            })

            
    })
}

function setGradec1510l10() {
    document.getElementById("setc1510l10").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510l10g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510l10": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510l10()
                })
        })
    })
}

function keepGradec1510l10() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510l10;
                var getTotal = doc.data().c1510l10s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510l10").innerHTML = "<button type='button' id='changec1510l10' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510l10") != null) {
                    function changeGradec1510l10() {
                        document.getElementById("changec1510l10").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510l10").innerHTML = "<button type='button' id='setc1510l10' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510l10g' type='text'></input>"
                                setGradec1510l10()
                            }
                        })
                    }
                    changeGradec1510l10()
                }
            })

            
    })
}

function setGradec1510l11() {
    document.getElementById("setc1510l11").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510l11g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510l11": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510l11()
                })
        })
    })
}

function keepGradec1510l11() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510l11;
                var getTotal = doc.data().c1510l11s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510l11").innerHTML = "<button type='button' id='changec1510l11' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510l11") != null) {
                    function changeGradec1510l11() {
                        document.getElementById("changec1510l11").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510l11").innerHTML = "<button type='button' id='setc1510l11' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510l11g' type='text'></input>"
                                setGradec1510l11()
                            }
                        })
                    }
                    changeGradec1510l11()
                }
            })

            
    })
}

function setGradec1510a1() {
    document.getElementById("setc1510a1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510a1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510a1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510a1()
                })
        })
    })
}

function keepGradec1510a1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510a1;
                var getTotal = doc.data().c1510a1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510a1").innerHTML = "<button type='button' id='changec1510a1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510a1") != null) {
                    function changeGradec1510a1() {
                        document.getElementById("changec1510a1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510a1").innerHTML = "<button type='button' id='setc1510a1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510a1g' type='text'></input>"
                                setGradec1510a1()
                            }
                        })
                    }
                    changeGradec1510a1()
                }
            })

            
    })
}

function setGradec1510a2() {
    document.getElementById("setc1510a2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510a2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510a2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510a2()
                })
        })
    })
}

function keepGradec1510a2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510a2;
                var getTotal = doc.data().c1510a2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510a2").innerHTML = "<button type='button' id='changec1510a2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510a2") != null) {
                    function changeGradec1510a2() {
                        document.getElementById("changec1510a2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510a2").innerHTML = "<button type='button' id='setc1510a2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510a2g' type='text'></input>"
                                setGradec1510a2()
                            }
                        })
                    }
                    changeGradec1510a2()
                }
            })

            
    })
}

function setGradec1510a3() {
    document.getElementById("setc1510a3").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510a3g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510a3": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510a3()
                })
        })
    })
}

function keepGradec1510a3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510a3;
                var getTotal = doc.data().c1510a3s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510a3").innerHTML = "<button type='button' id='changec1510a3' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510a3") != null) {
                    function changeGradec1510a3() {
                        document.getElementById("changec1510a3").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510a3").innerHTML = "<button type='button' id='setc1510a3' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510a3g' type='text'></input>"
                                setGradec1510a3()
                            }
                        })
                    }
                    changeGradec1510a3()
                }
            })

            
    })
}

function setGradec1510a4() {
    document.getElementById("setc1510a4").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510a4g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510a4": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510a4()
                })
        })
    })
}

function keepGradec1510a4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510a4;
                var getTotal = doc.data().c1510a4s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510a4").innerHTML = "<button type='button' id='changec1510a4' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510a4") != null) {
                    function changeGradec1510a4() {
                        document.getElementById("changec1510a4").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510a4").innerHTML = "<button type='button' id='setc1510a4' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510a4g' type='text'></input>"
                                setGradec1510a4()
                            }
                        })
                    }
                    changeGradec1510a4()
                }
            })

            
    })
}

function setGradec1510e1() {
    document.getElementById("setc1510e1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510e1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510e1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510e1()
                })
        })
    })
}

function keepGradec1510e1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510e1;
                var getTotal = doc.data().c1510e1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510e1").innerHTML = "<button type='button' id='changec1510e1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510e1") != null) {
                    function changeGradec1510e1() {
                        document.getElementById("changec1510e1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510e1").innerHTML = "<button type='button' id='setc1510e1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510e1g' type='text'></input>"
                                setGradec1510e1()
                            }
                        })
                    }
                    changeGradec1510e1()
                }
            })

            
    })
}

function setGradec1510e2() {
    document.getElementById("setc1510e2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1510e2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1510e2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1510e2()
                })
        })
    })
}

function keepGradec1510e2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1510e2;
                var getTotal = doc.data().c1510e2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1510e2").innerHTML = "<button type='button' id='changec1510e2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1510e2") != null) {
                    function changeGradec1510e2() {
                        document.getElementById("changec1510e2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1510e2").innerHTML = "<button type='button' id='setc1510e2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1510e2g' type='text'></input>"
                                setGradec1510e2()
                            }
                        })
                    }
                    changeGradec1510e2()
                }
            })

            
    })
}

function setGradec1537l1() {
    document.getElementById("setc1537l1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1537l1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1537l1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1537l1()
                })
        })
    })
}

function keepGradec1537l1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1537l1;
                var getTotal = doc.data().c1537l1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1537l1").innerHTML = "<button type='button' id='changec1537l1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1537l1") != null) {
                    function changeGradec1537l1() {
                        document.getElementById("changec1537l1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1537l1").innerHTML = "<button type='button' id='setc1537l1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1537l1g' type='text'></input>"
                                setGradec1537l1()
                            }
                        })
                    }
                    changeGradec1537l1()
                }
            })

            
    })
}

function setGradec1537l2() {
    document.getElementById("setc1537l2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1537l2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1537l2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1537l2()
                })
        })
    })
}

function keepGradec1537l2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1537l2;
                var getTotal = doc.data().c1537l2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1537l2").innerHTML = "<button type='button' id='changec1537l2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1537l2") != null) {
                    function changeGradec1537l2() {
                        document.getElementById("changec1537l2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1537l2").innerHTML = "<button type='button' id='setc1537l2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1537l2g' type='text'></input>"
                                setGradec1537l2()
                            }
                        })
                    }
                    changeGradec1537l2()
                }
            })

            
    })
}

function setGradec1537l3() {
    document.getElementById("setc1537l3").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1537l3g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1537l3": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1537l3()
                })
        })
    })
}

function keepGradec1537l3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1537l3;
                var getTotal = doc.data().c1537l3s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1537l3").innerHTML = "<button type='button' id='changec1537l3' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1537l3") != null) {
                    function changeGradec1537l3() {
                        document.getElementById("changec1537l3").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1537l3").innerHTML = "<button type='button' id='setc1537l3' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1537l3g' type='text'></input>"
                                setGradec1537l3()
                            }
                        })
                    }
                    changeGradec1537l3()
                }
            })

            
    })
}

function setGradec1537l4() {
    document.getElementById("setc1537l4").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1537l4g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1537l4": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1537l4()
                })
        })
    })
}

function keepGradec1537l4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1537l4;
                var getTotal = doc.data().c1537l4s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1537l4").innerHTML = "<button type='button' id='changec1537l4' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1537l4") != null) {
                    function changeGradec1537l4() {
                        document.getElementById("changec1537l4").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1537l4").innerHTML = "<button type='button' id='setc1537l4' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1537l4g' type='text'></input>"
                                setGradec1537l4()
                            }
                        })
                    }
                    changeGradec1537l4()
                }
            })

            
    })
}

function setGradec1537l5() {
    document.getElementById("setc1537l5").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1537l5g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1537l5": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1537l5()
                })
        })
    })
}

function keepGradec1537l5() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1537l5;
                var getTotal = doc.data().c1537l5s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1537l5").innerHTML = "<button type='button' id='changec1537l5' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1537l5") != null) {
                    function changeGradec1537l5() {
                        document.getElementById("changec1537l5").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1537l5").innerHTML = "<button type='button' id='setc1537l5' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1537l5g' type='text'></input>"
                                setGradec1537l5()
                            }
                        })
                    }
                    changeGradec1537l5()
                }
            })

            
    })
}

function setGradec1537l6() {
    document.getElementById("setc1537l6").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1537l6g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1537l6": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1537l6()
                })
        })
    })
}

function keepGradec1537l6() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1537l6;
                var getTotal = doc.data().c1537l6s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1537l6").innerHTML = "<button type='button' id='changec1537l6' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1537l6") != null) {
                    function changeGradec1537l6() {
                        document.getElementById("changec1537l6").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1537l6").innerHTML = "<button type='button' id='setc1537l6' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1537l6g' type='text'></input>"
                                setGradec1537l6()
                            }
                        })
                    }
                    changeGradec1537l6()
                }
            })

            
    })
}

function setGradec1537l7() {
    document.getElementById("setc1537l7").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1537l7g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1537l7": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1537l7()
                })
        })
    })
}

function keepGradec1537l7() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1537l7;
                var getTotal = doc.data().c1537l7s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1537l7").innerHTML = "<button type='button' id='changec1537l7' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1537l7") != null) {
                    function changeGradec1537l7() {
                        document.getElementById("changec1537l7").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1537l7").innerHTML = "<button type='button' id='setc1537l7' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1537l7g' type='text'></input>"
                                setGradec1537l7()
                            }
                        })
                    }
                    changeGradec1537l7()
                }
            })

            
    })
}

function setGradec1537l8() {
    document.getElementById("setc1537l8").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1537l8g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1537l8": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1537l8()
                })
        })
    })
}

function keepGradec1537l8() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1537l8;
                var getTotal = doc.data().c1537l8s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1537l8").innerHTML = "<button type='button' id='changec1537l8' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1537l8") != null) {
                    function changeGradec1537l8() {
                        document.getElementById("changec1537l8").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1537l8").innerHTML = "<button type='button' id='setc1537l8' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1537l8g' type='text'></input>"
                                setGradec1537l8()
                            }
                        })
                    }
                    changeGradec1537l8()
                }
            })

            
    })
}

function setGradec1537l9() {
    document.getElementById("setc1537l9").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1537l9g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1537l9": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1537l9()
                })
        })
    })
}

function keepGradec1537l9() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1537l9;
                var getTotal = doc.data().c1537l9s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1537l9").innerHTML = "<button type='button' id='changec1537l9' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1537l9") != null) {
                    function changeGradec1537l9() {
                        document.getElementById("changec1537l9").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1537l9").innerHTML = "<button type='button' id='setc1537l9' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1537l9g' type='text'></input>"
                                setGradec1537l9()
                            }
                        })
                    }
                    changeGradec1537l9()
                }
            })

            
    })
}

function setGradec1537l10() {
    document.getElementById("setc1537l10").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1537l10g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1537l10": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1537l10()
                })
        })
    })
}

function keepGradec1537l10() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1537l10;
                var getTotal = doc.data().c1537l10s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1537l10").innerHTML = "<button type='button' id='changec1537l10' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1537l10") != null) {
                    function changeGradec1537l10() {
                        document.getElementById("changec1537l10").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1537l10").innerHTML = "<button type='button' id='setc1537l10' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1537l10g' type='text'></input>"
                                setGradec1537l10()
                            }
                        })
                    }
                    changeGradec1537l10()
                }
            })

            
    })
}

function setGradec1537e1() {
    document.getElementById("setc1537e1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1537e1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1537e1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1537e1()
                })
        })
    })
}

function keepGradec1537e1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1537e1;
                var getTotal = doc.data().c1537e1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1537e1").innerHTML = "<button type='button' id='changec1537e1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1537e1") != null) {
                    function changeGradec1537e1() {
                        document.getElementById("changec1537e1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1537e1").innerHTML = "<button type='button' id='setc1537e1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1537e1g' type='text'></input>"
                                setGradec1537e1()
                            }
                        })
                    }
                    changeGradec1537e1()
                }
            })

            
    })
}

function setGradec1537e2() {
    document.getElementById("setc1537e2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1537e2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1537e2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1537e2()
                })
        })
    })
}

function keepGradec1537e2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1537e2;
                var getTotal = doc.data().c1537e2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1537e2").innerHTML = "<button type='button' id='changec1537e2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1537e2") != null) {
                    function changeGradec1537e2() {
                        document.getElementById("changec1537e2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1537e2").innerHTML = "<button type='button' id='setc1537e2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1537e2g' type='text'></input>"
                                setGradec1537e2()
                            }
                        })
                    }
                    changeGradec1537e2()
                }
            })

            
    })
}

function setGradec1712q1() {
    document.getElementById("setc1712q1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712q1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712q1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712q1()
                })
        })
    })
}

function keepGradec1712q1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712q1;
                var getTotal = doc.data().c1712q1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712q1").innerHTML = "<button type='button' id='changec1712q1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712q1") != null) {
                    function changeGradec1712q1() {
                        document.getElementById("changec1712q1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712q1").innerHTML = "<button type='button' id='setc1712q1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712q1g' type='text'></input>"
                                setGradec1712q1()
                            }
                        })
                    }
                    changeGradec1712q1()
                }
            })

            
    })
}

function setGradec1712q2() {
    document.getElementById("setc1712q2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712q2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712q2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712q2()
                })
        })
    })
}

function keepGradec1712q2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712q2;
                var getTotal = doc.data().c1712q2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712q2").innerHTML = "<button type='button' id='changec1712q2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712q2") != null) {
                    function changeGradec1712q2() {
                        document.getElementById("changec1712q2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712q2").innerHTML = "<button type='button' id='setc1712q2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712q2g' type='text'></input>"
                                setGradec1712q2()
                            }
                        })
                    }
                    changeGradec1712q2()
                }
            })

            
    })
}

function setGradec1712q3() {
    document.getElementById("setc1712q3").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712q3g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712q3": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712q3()
                })
        })
    })
}

function keepGradec1712q3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712q3;
                var getTotal = doc.data().c1712q3s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712q3").innerHTML = "<button type='button' id='changec1712q3' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712q3") != null) {
                    function changeGradec1712q3() {
                        document.getElementById("changec1712q3").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712q3").innerHTML = "<button type='button' id='setc1712q3' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712q3g' type='text'></input>"
                                setGradec1712q3()
                            }
                        })
                    }
                    changeGradec1712q3()
                }
            })

            
    })
}

function setGradec1712q4() {
    document.getElementById("setc1712q4").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712q4g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712q4": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712q4()
                })
        })
    })
}

function keepGradec1712q4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712q4;
                var getTotal = doc.data().c1712q4s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712q4").innerHTML = "<button type='button' id='changec1712q4' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712q4") != null) {
                    function changeGradec1712q4() {
                        document.getElementById("changec1712q4").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712q4").innerHTML = "<button type='button' id='setc1712q4' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712q4g' type='text'></input>"
                                setGradec1712q4()
                            }
                        })
                    }
                    changeGradec1712q4()
                }
            })

            
    })
}

function setGradec1712a1() {
    document.getElementById("setc1712a1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712a1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712a1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712a1()
                })
        })
    })
}

function keepGradec1712a1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712a1;
                var getTotal = doc.data().c1712a1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712a1").innerHTML = "<button type='button' id='changec1712a1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712a1") != null) {
                    function changeGradec1712a1() {
                        document.getElementById("changec1712a1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712a1").innerHTML = "<button type='button' id='setc1712a1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712a1g' type='text'></input>"
                                setGradec1712a1()
                            }
                        })
                    }
                    changeGradec1712a1()
                }
            })

            
    })
}

function setGradec1712a2() {
    document.getElementById("setc1712a2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712a2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712a2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712a2()
                })
        })
    })
}

function keepGradec1712a2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712a2;
                var getTotal = doc.data().c1712a2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712a2").innerHTML = "<button type='button' id='changec1712a2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712a2") != null) {
                    function changeGradec1712a2() {
                        document.getElementById("changec1712a2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712a2").innerHTML = "<button type='button' id='setc1712a2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712a2g' type='text'></input>"
                                setGradec1712a2()
                            }
                        })
                    }
                    changeGradec1712a2()
                }
            })

            
    })
}

function setGradec1712a3() {
    document.getElementById("setc1712a3").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712a3g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712a3": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712a3()
                })
        })
    })
}

function keepGradec1712a3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712a3;
                var getTotal = doc.data().c1712a3s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712a3").innerHTML = "<button type='button' id='changec1712a3' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712a3") != null) {
                    function changeGradec1712a3() {
                        document.getElementById("changec1712a3").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712a3").innerHTML = "<button type='button' id='setc1712a3' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712a3g' type='text'></input>"
                                setGradec1712a3()
                            }
                        })
                    }
                    changeGradec1712a3()
                }
            })

            
    })
}

function setGradec1712a4() {
    document.getElementById("setc1712a4").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712a4g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712a4": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712a4()
                })
        })
    })
}

function keepGradec1712a4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712a4;
                var getTotal = doc.data().c1712a4s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712a4").innerHTML = "<button type='button' id='changec1712a4' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712a4") != null) {
                    function changeGradec1712a4() {
                        document.getElementById("changec1712a4").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712a4").innerHTML = "<button type='button' id='setc1712a4' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712a4g' type='text'></input>"
                                setGradec1712a4()
                            }
                        })
                    }
                    changeGradec1712a4()
                }
            })

            
    })
}

function setGradec1712a5() {
    document.getElementById("setc1712a5").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712a5g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712a5": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712a5()
                })
        })
    })
}

function keepGradec1712a5() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712a5;
                var getTotal = doc.data().c1712a5s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712a5").innerHTML = "<button type='button' id='changec1712a5' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712a5") != null) {
                    function changeGradec1712a5() {
                        document.getElementById("changec1712a5").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712a5").innerHTML = "<button type='button' id='setc1712a5' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712a5g' type='text'></input>"
                                setGradec1712a5()
                            }
                        })
                    }
                    changeGradec1712a5()
                }
            })

            
    })
}

function setGradec1712a6() {
    document.getElementById("setc1712a6").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712a6g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712a6": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712a6()
                })
        })
    })
}

function keepGradec1712a6() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712a6;
                var getTotal = doc.data().c1712a6s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712a6").innerHTML = "<button type='button' id='changec1712a6' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712a6") != null) {
                    function changeGradec1712a6() {
                        document.getElementById("changec1712a6").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712a6").innerHTML = "<button type='button' id='setc1712a6' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712a6g' type='text'></input>"
                                setGradec1712a6()
                            }
                        })
                    }
                    changeGradec1712a6()
                }
            })

            
    })
}

function setGradec1712a7() {
    document.getElementById("setc1712a7").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712a7g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712a7": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712a7()
                })
        })
    })
}

function keepGradec1712a7() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712a7;
                var getTotal = doc.data().c1712a7s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712a7").innerHTML = "<button type='button' id='changec1712a7' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712a7") != null) {
                    function changeGradec1712a7() {
                        document.getElementById("changec1712a7").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712a7").innerHTML = "<button type='button' id='setc1712a7' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712a7g' type='text'></input>"
                                setGradec1712a7()
                            }
                        })
                    }
                    changeGradec1712a7()
                }
            })

            
    })
}

function setGradec1712a8() {
    document.getElementById("setc1712a8").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712a8g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712a8": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712a8()
                })
        })
    })
}

function keepGradec1712a8() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712a8;
                var getTotal = doc.data().c1712a8s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712a8").innerHTML = "<button type='button' id='changec1712a8' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712a8") != null) {
                    function changeGradec1712a8() {
                        document.getElementById("changec1712a8").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712a8").innerHTML = "<button type='button' id='setc1712a8' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712a8g' type='text'></input>"
                                setGradec1712a8()
                            }
                        })
                    }
                    changeGradec1712a8()
                }
            })

            
    })
}

function setGradec1712a9() {
    document.getElementById("setc1712a9").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712a9g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712a9": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712a9()
                })
        })
    })
}

function keepGradec1712a9() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712a9;
                var getTotal = doc.data().c1712a9s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712a9").innerHTML = "<button type='button' id='changec1712a9' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712a9") != null) {
                    function changeGradec1712a9() {
                        document.getElementById("changec1712a9").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712a9").innerHTML = "<button type='button' id='setc1712a9' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712a9g' type='text'></input>"
                                setGradec1712a9()
                            }
                        })
                    }
                    changeGradec1712a9()
                }
            })

            
    })
}

function setGradec1712a10() {
    document.getElementById("setc1712a10").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712a10g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712a10": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712a10()
                })
        })
    })
}

function keepGradec1712a10() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712a10;
                var getTotal = doc.data().c1712a10s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712a10").innerHTML = "<button type='button' id='changec1712a10' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712a10") != null) {
                    function changeGradec1712a10() {
                        document.getElementById("changec1712a10").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712a10").innerHTML = "<button type='button' id='setc1712a10' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712a10g' type='text'></input>"
                                setGradec1712a10()
                            }
                        })
                    }
                    changeGradec1712a10()
                }
            })

            
    })
}

function setGradec1712e1() {
    document.getElementById("setc1712e1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712e1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712e1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712e1()
                })
        })
    })
}

function keepGradec1712e1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712e1;
                var getTotal = doc.data().c1712e1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712e1").innerHTML = "<button type='button' id='changec1712e1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712e1") != null) {
                    function changeGradec1712e1() {
                        document.getElementById("changec1712e1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712e1").innerHTML = "<button type='button' id='setc1712e1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712e1g' type='text'></input>"
                                setGradec1712e1()
                            }
                        })
                    }
                    changeGradec1712e1()
                }
            })

            
    })
}

function setGradec1712e2() {
    document.getElementById("setc1712e2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1712e2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1712e2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1712e2()
                })
        })
    })
}

function keepGradec1712e2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1712e2;
                var getTotal = doc.data().c1712e2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1712e2").innerHTML = "<button type='button' id='changec1712e2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1712e2") != null) {
                    function changeGradec1712e2() {
                        document.getElementById("changec1712e2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1712e2").innerHTML = "<button type='button' id='setc1712e2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1712e2g' type='text'></input>"
                                setGradec1712e2()
                            }
                        })
                    }
                    changeGradec1712e2()
                }
            })

            
    })
}

function setGradec1800ia1() {
    document.getElementById("setc1800ia1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ia1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ia1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ia1()
                })
        })
    })
}

function keepGradec1800ia1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ia1;
                var getTotal = doc.data().c1800ia1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ia1").innerHTML = "<button type='button' id='changec1800ia1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ia1") != null) {
                    function changeGradec1800ia1() {
                        document.getElementById("changec1800ia1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ia1").innerHTML = "<button type='button' id='setc1800ia1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ia1g' type='text'></input>"
                                setGradec1800ia1()
                            }
                        })
                    }
                    changeGradec1800ia1()
                }
            })

            
    })
}

function setGradec1800ia2() {
    document.getElementById("setc1800ia2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ia2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ia2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ia2()
                })
        })
    })
}

function keepGradec1800ia2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ia2;
                var getTotal = doc.data().c1800ia2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ia2").innerHTML = "<button type='button' id='changec1800ia2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ia2") != null) {
                    function changeGradec1800ia2() {
                        document.getElementById("changec1800ia2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ia2").innerHTML = "<button type='button' id='setc1800ia2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ia2g' type='text'></input>"
                                setGradec1800ia2()
                            }
                        })
                    }
                    changeGradec1800ia2()
                }
            })

            
    })
}

function setGradec1800ia3() {
    document.getElementById("setc1800ia3").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ia3g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ia3": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ia3()
                })
        })
    })
}

function keepGradec1800ia3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ia3;
                var getTotal = doc.data().c1800ia3s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ia3").innerHTML = "<button type='button' id='changec1800ia3' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ia3") != null) {
                    function changeGradec1800ia3() {
                        document.getElementById("changec1800ia3").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ia3").innerHTML = "<button type='button' id='setc1800ia3' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ia3g' type='text'></input>"
                                setGradec1800ia3()
                            }
                        })
                    }
                    changeGradec1800ia3()
                }
            })

            
    })
}

function setGradec1800ia4() {
    document.getElementById("setc1800ia4").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ia4g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ia4": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ia4()
                })
        })
    })
}

function keepGradec1800ia4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ia4;
                var getTotal = doc.data().c1800ia4s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ia4").innerHTML = "<button type='button' id='changec1800ia4' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ia4") != null) {
                    function changeGradec1800ia4() {
                        document.getElementById("changec1800ia4").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ia4").innerHTML = "<button type='button' id='setc1800ia4' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ia4g' type='text'></input>"
                                setGradec1800ia4()
                            }
                        })
                    }
                    changeGradec1800ia4()
                }
            })

            
    })
}

function setGradec1800ia5() {
    document.getElementById("setc1800ia5").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ia5g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ia5": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ia5()
                })
        })
    })
}

function keepGradec1800ia5() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ia5;
                var getTotal = doc.data().c1800ia5s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ia5").innerHTML = "<button type='button' id='changec1800ia5' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ia5") != null) {
                    function changeGradec1800ia5() {
                        document.getElementById("changec1800ia5").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ia5").innerHTML = "<button type='button' id='setc1800ia5' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ia5g' type='text'></input>"
                                setGradec1800ia5()
                            }
                        })
                    }
                    changeGradec1800ia5()
                }
            })

            
    })
}

function setGradec1800ia6() {
    document.getElementById("setc1800ia6").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ia6g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ia6": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ia6()
                })
        })
    })
}

function keepGradec1800ia6() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ia6;
                var getTotal = doc.data().c1800ia6s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ia6").innerHTML = "<button type='button' id='changec1800ia6' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ia6") != null) {
                    function changeGradec1800ia6() {
                        document.getElementById("changec1800ia6").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ia6").innerHTML = "<button type='button' id='setc1800ia6' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ia6g' type='text'></input>"
                                setGradec1800ia6()
                            }
                        })
                    }
                    changeGradec1800ia6()
                }
            })

            
    })
}

function setGradec1800ia7() {
    document.getElementById("setc1800ia7").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ia7g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ia7": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ia7()
                })
        })
    })
}

function keepGradec1800ia7() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ia7;
                var getTotal = doc.data().c1800ia7s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ia7").innerHTML = "<button type='button' id='changec1800ia7' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ia7") != null) {
                    function changeGradec1800ia7() {
                        document.getElementById("changec1800ia7").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ia7").innerHTML = "<button type='button' id='setc1800ia7' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ia7g' type='text'></input>"
                                setGradec1800ia7()
                            }
                        })
                    }
                    changeGradec1800ia7()
                }
            })

            
    })
}

function setGradec1800ta1() {
    document.getElementById("setc1800ta1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ta1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ta1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ta1()
                })
        })
    })
}

function keepGradec1800ta1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ta1;
                var getTotal = doc.data().c1800ta1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ta1").innerHTML = "<button type='button' id='changec1800ta1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ta1") != null) {
                    function changeGradec1800ta1() {
                        document.getElementById("changec1800ta1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ta1").innerHTML = "<button type='button' id='setc1800ta1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ta1g' type='text'></input>"
                                setGradec1800ta1()
                            }
                        })
                    }
                    changeGradec1800ta1()
                }
            })

            
    })
}

function setGradec1800ta2() {
    document.getElementById("setc1800ta2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ta2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ta2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ta2()
                })
        })
    })
}

function keepGradec1800ta2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ta2;
                var getTotal = doc.data().c1800ta2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ta2").innerHTML = "<button type='button' id='changec1800ta2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ta2") != null) {
                    function changeGradec1800ta2() {
                        document.getElementById("changec1800ta2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ta2").innerHTML = "<button type='button' id='setc1800ta2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ta2g' type='text'></input>"
                                setGradec1800ta2()
                            }
                        })
                    }
                    changeGradec1800ta2()
                }
            })

            
    })
}

function setGradec1800ta3() {
    document.getElementById("setc1800ta3").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ta3g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ta3": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ta3()
                })
        })
    })
}

function keepGradec1800ta3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ta3;
                var getTotal = doc.data().c1800ta3s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ta3").innerHTML = "<button type='button' id='changec1800ta3' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ta3") != null) {
                    function changeGradec1800ta3() {
                        document.getElementById("changec1800ta3").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ta3").innerHTML = "<button type='button' id='setc1800ta3' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ta3g' type='text'></input>"
                                setGradec1800ta3()
                            }
                        })
                    }
                    changeGradec1800ta3()
                }
            })

            
    })
}

function setGradec1800ta4() {
    document.getElementById("setc1800ta4").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ta4g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ta4": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ta4()
                })
        })
    })
}

function keepGradec1800ta4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ta4;
                var getTotal = doc.data().c1800ta4s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ta4").innerHTML = "<button type='button' id='changec1800ta4' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ta4") != null) {
                    function changeGradec1800ta4() {
                        document.getElementById("changec1800ta4").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ta4").innerHTML = "<button type='button' id='setc1800ta4' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ta4g' type='text'></input>"
                                setGradec1800ta4()
                            }
                        })
                    }
                    changeGradec1800ta4()
                }
            })

            
    })
}

function setGradec1800ta5() {
    document.getElementById("setc1800ta5").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ta5g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ta5": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ta5()
                })
        })
    })
}

function keepGradec1800ta5() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ta5;
                var getTotal = doc.data().c1800ta5s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ta5").innerHTML = "<button type='button' id='changec1800ta5' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ta5") != null) {
                    function changeGradec1800ta5() {
                        document.getElementById("changec1800ta5").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ta5").innerHTML = "<button type='button' id='setc1800ta5' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ta5g' type='text'></input>"
                                setGradec1800ta5()
                            }
                        })
                    }
                    changeGradec1800ta5()
                }
            })

            
    })
}

function setGradec1800ta6() {
    document.getElementById("setc1800ta6").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ta6g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ta6": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ta6()
                })
        })
    })
}

function keepGradec1800ta6() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ta6;
                var getTotal = doc.data().c1800ta6s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ta6").innerHTML = "<button type='button' id='changec1800ta6' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ta6") != null) {
                    function changeGradec1800ta6() {
                        document.getElementById("changec1800ta6").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ta6").innerHTML = "<button type='button' id='setc1800ta6' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ta6g' type='text'></input>"
                                setGradec1800ta6()
                            }
                        })
                    }
                    changeGradec1800ta6()
                }
            })

            
    })
}

function setGradec1800ta7() {
    document.getElementById("setc1800ta7").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ta7g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ta7": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ta7()
                })
        })
    })
}

function keepGradec1800ta7() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ta7;
                var getTotal = doc.data().c1800ta7s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ta7").innerHTML = "<button type='button' id='changec1800ta7' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ta7") != null) {
                    function changeGradec1800ta7() {
                        document.getElementById("changec1800ta7").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ta7").innerHTML = "<button type='button' id='setc1800ta7' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ta7g' type='text'></input>"
                                setGradec1800ta7()
                            }
                        })
                    }
                    changeGradec1800ta7()
                }
            })

            
    })
}

function setGradec1800ta8() {
    document.getElementById("setc1800ta8").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ta8g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ta8": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ta8()
                })
        })
    })
}

function keepGradec1800ta8() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ta8;
                var getTotal = doc.data().c1800ta8s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ta8").innerHTML = "<button type='button' id='changec1800ta8' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ta8") != null) {
                    function changeGradec1800ta8() {
                        document.getElementById("changec1800ta8").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ta8").innerHTML = "<button type='button' id='setc1800ta8' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ta8g' type='text'></input>"
                                setGradec1800ta8()
                            }
                        })
                    }
                    changeGradec1800ta8()
                }
            })

            
    })
}

function setGradec1800ta9() {
    document.getElementById("setc1800ta9").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ta9g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ta9": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ta9()
                })
        })
    })
}

function keepGradec1800ta9() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ta9;
                var getTotal = doc.data().c1800ta9s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ta9").innerHTML = "<button type='button' id='changec1800ta9' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ta9") != null) {
                    function changeGradec1800ta9() {
                        document.getElementById("changec1800ta9").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ta9").innerHTML = "<button type='button' id='setc1800ta9' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ta9g' type='text'></input>"
                                setGradec1800ta9()
                            }
                        })
                    }
                    changeGradec1800ta9()
                }
            })

            
    })
}

function setGradec1800ta10() {
    document.getElementById("setc1800ta10").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ta10g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ta10": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ta10()
                })
        })
    })
}

function keepGradec1800ta10() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ta10;
                var getTotal = doc.data().c1800ta10s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ta10").innerHTML = "<button type='button' id='changec1800ta10' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ta10") != null) {
                    function changeGradec1800ta10() {
                        document.getElementById("changec1800ta10").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ta10").innerHTML = "<button type='button' id='setc1800ta10' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ta10g' type='text'></input>"
                                setGradec1800ta10()
                            }
                        })
                    }
                    changeGradec1800ta10()
                }
            })

            
    })
}

function setGradec1800ala1() {
    document.getElementById("setc1800ala1").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ala1g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ala1": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ala1()
                })
        })
    })
}

function keepGradec1800ala1() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ala1;
                var getTotal = doc.data().c1800ala1s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ala1").innerHTML = "<button type='button' id='changec1800ala1' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ala1") != null) {
                    function changeGradec1800ala1() {
                        document.getElementById("changec1800ala1").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ala1").innerHTML = "<button type='button' id='setc1800ala1' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ala1g' type='text'></input>"
                                setGradec1800ala1()
                            }
                        })
                    }
                    changeGradec1800ala1()
                }
            })

            
    })
}

function setGradec1800ala2() {
    document.getElementById("setc1800ala2").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ala2g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ala2": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ala2()
                })
        })
    })
}

function keepGradec1800ala2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ala2;
                var getTotal = doc.data().c1800ala2s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ala2").innerHTML = "<button type='button' id='changec1800ala2' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ala2") != null) {
                    function changeGradec1800ala2() {
                        document.getElementById("changec1800ala2").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ala2").innerHTML = "<button type='button' id='setc1800ala2' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ala2g' type='text'></input>"
                                setGradec1800ala2()
                            }
                        })
                    }
                    changeGradec1800ala2()
                }
            })

            
    })
}

function setGradec1800ala3() {
    document.getElementById("setc1800ala3").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ala3g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ala3": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ala3()
                })
        })
    })
}

function keepGradec1800ala3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ala3;
                var getTotal = doc.data().c1800ala3s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ala3").innerHTML = "<button type='button' id='changec1800ala3' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ala3") != null) {
                    function changeGradec1800ala3() {
                        document.getElementById("changec1800ala3").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ala3").innerHTML = "<button type='button' id='setc1800ala3' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ala3g' type='text'></input>"
                                setGradec1800ala3()
                            }
                        })
                    }
                    changeGradec1800ala3()
                }
            })

            
    })
}

function setGradec1800ala4() {
    document.getElementById("setc1800ala4").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ala4g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ala4": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ala4()
                })
        })
    })
}

function keepGradec1800ala4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ala4;
                var getTotal = doc.data().c1800ala4s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ala4").innerHTML = "<button type='button' id='changec1800ala4' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ala4") != null) {
                    function changeGradec1800ala4() {
                        document.getElementById("changec1800ala4").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ala4").innerHTML = "<button type='button' id='setc1800ala4' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ala4g' type='text'></input>"
                                setGradec1800ala4()
                            }
                        })
                    }
                    changeGradec1800ala4()
                }
            })

            
    })
}

function setGradec1800ala5() {
    document.getElementById("setc1800ala5").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ala5g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ala5": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ala5()
                })
        })
    })
}

function keepGradec1800ala5() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ala5;
                var getTotal = doc.data().c1800ala5s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ala5").innerHTML = "<button type='button' id='changec1800ala5' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ala5") != null) {
                    function changeGradec1800ala5() {
                        document.getElementById("changec1800ala5").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ala5").innerHTML = "<button type='button' id='setc1800ala5' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ala5g' type='text'></input>"
                                setGradec1800ala5()
                            }
                        })
                    }
                    changeGradec1800ala5()
                }
            })

            
    })
}

function setGradec1800ala6() {
    document.getElementById("setc1800ala6").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ala6g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ala6": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ala6()
                })
        })
    })
}

function keepGradec1800ala6() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ala6;
                var getTotal = doc.data().c1800ala6s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ala6").innerHTML = "<button type='button' id='changec1800ala6' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ala6") != null) {
                    function changeGradec1800ala6() {
                        document.getElementById("changec1800ala6").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ala6").innerHTML = "<button type='button' id='setc1800ala6' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ala6g' type='text'></input>"
                                setGradec1800ala6()
                            }
                        })
                    }
                    changeGradec1800ala6()
                }
            })

            
    })
}

function setGradec1800ala7() {
    document.getElementById("setc1800ala7").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ala7g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ala7": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ala7()
                })
        })
    })
}

function keepGradec1800ala7() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ala7;
                var getTotal = doc.data().c1800ala7s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ala7").innerHTML = "<button type='button' id='changec1800ala7' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ala7") != null) {
                    function changeGradec1800ala7() {
                        document.getElementById("changec1800ala7").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ala7").innerHTML = "<button type='button' id='setc1800ala7' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ala7g' type='text'></input>"
                                setGradec1800ala7()
                            }
                        })
                    }
                    changeGradec1800ala7()
                }
            })

            
    })
}

function setGradec1800ala8() {
    document.getElementById("setc1800ala8").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800ala8g").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800ala8": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800ala8()
                })
        })
    })
}

function keepGradec1800ala8() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800ala8;
                var getTotal = doc.data().c1800ala8s;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800ala8").innerHTML = "<button type='button' id='changec1800ala8' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800ala8") != null) {
                    function changeGradec1800ala8() {
                        document.getElementById("changec1800ala8").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800ala8").innerHTML = "<button type='button' id='setc1800ala8' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800ala8g' type='text'></input>"
                                setGradec1800ala8()
                            }
                        })
                    }
                    changeGradec1800ala8()
                }
            })

            
    })
}

function setGradec1800fp() {
    document.getElementById("setc1800fp").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var score = parseInt(document.getElementById("c1800fpg").value);
            console.log("Setting grade...")
            db.collection("grades").doc(user.uid)
                .update({
                    "c1800fp": score
                })
                .then(function () {
                    console.log("Grade set")
                    keepGradec1800fp()
                })
        })
    })
}

function keepGradec1800fp() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("grades")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                var getScore = doc.data().c1800fp;
                var getTotal = doc.data().c1800fps;
                var percent = ((getScore / getTotal) * 100).toFixed(2) + "%";
                if (getScore != null) {
                    document.getElementById("c1800fp").innerHTML = "<button type='button' id='changec1800fp' class='btn btn-outline-primary right'>Change</button><span class='score'>" + percent +"</span><span class='score'>" + getScore + "/" + getTotal + "</span>"
                }
                if ($("#changec1800fp") != null) {
                    function changeGradec1800fp() {
                        document.getElementById("changec1800fp").addEventListener('click', function () {
                            if (confirm("Are you sure you want to change the grade for this assessment? Doing so will overwrite the grade you entered previously. Press OK to change the grade.")) {
                                document.getElementById("c1800fp").innerHTML = "<button type='button' id='setc1800fp' class='btn btn-outline-primary right'>Set</button><span class='score'> /" + getTotal + "</span><input id='c1800fpg' type='text'></input>"
                                setGradec1800fp()
                            }
                        })
                    }
                    changeGradec1800fp()
                }
            })

            
    })
}