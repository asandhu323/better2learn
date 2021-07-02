## My Web Application : BetterToLearn
## Authors: Kyung Min Song & Avneet Sandhu

*** THIS REPOSITORY IS ARCHIVED ***

View web application: https://better2learn-bcc78.web.app/

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
This is a browser based web application to help student develop organizational skills and better
manage their time and workload.

Problem: Online learning environments require students to have strong self-discipline and
organization. The current option of LearningHub is lacking in many areas, leading to student
frustration, most noticeably so in terms of a centralized experience.

Solution: Our application, Better2Learn, hopes to ease these frustrations. It provides three main
centralized features. A weekly and daily view of your schedule, a todo list that tracks the time
spent for each item, and a gradebook for all courses with grade calculations.

 Features:
 Calendar: dropped due to complications involving a teammate leaving the course.

 Tasktracker:
 Keep track of a personalized todo list. Items can be added via an input form, all fields are
 required to be saved to Firestore. Realtime listeners populate the To Do and Done Tabs, Stats tab
 is populated by calculating time statistics using the saved input data and the current time data.
 Only Firebase authenticated users have permission to add/modify/delete documents from Firestore.

 Gradebook:
 Grades for all courses and all assessments within each course are available in one centralized
 location. Once a grade for an assessment has been entered, it is written to Firestore. The grades
 for all assessments that are not null are pulled from Firestore and available for user to see
 whenever they log into the app. When a grade is entered, the percent grade for that assessment is
 automatically calculated and displayed for the user. If the user wants to change a previously
 entered grade, they must first confirm that they really do want to overwrite the previous grade
 with a new one, to prevent accidental user error. A changed grade is updated in Firestore and the
 percent grade is recalculated.


## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap
* JQueryUI
* Firestore
* Firebase

## Content
Content of the project folder:

```
 Top level of project folder:
├── .gitignore               # Git ignore file
├── index.html               # landing HTML file, this is what users see when you come to url
├── login.html               # allows user to log in for customized experience
├── main.html                # landing page after user has signed in
├── gradeBook.html           # allows user to enter and track grades they receive on assessments
                               throughout the term
├── tasktracker.html         # allows user to enter items to a to-do list and track their progress
                               through the term
├── schedule.html            # allows user to see class times and deadlines for all courses
└── README.md                # information on our application

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images
    /background.jpg             # background image on all pages of application
├── scripts                  # Folder for scripts
    ├── gradebook-scripts       # Folder for gradebook scripts
        /course-display.js          # functions for changing colour and display of items depending
                                      on which course is selected
        /grades-set.js              # functions to setting, seeing, and changing grades
    ├── tasktracker-scripts     # Folder for tasktracker scripts
        /tasktracker.js             # contains functions relevant to the tracker page:
                                    # function for saving input values to firestore database,
                                    # realtime listeners for populating todo list, complete list,
                                    # function to calculate statistics in terms of time.
    /firebase-api.js            # API keys for firestore database
    /login.js                   # functions for login and creating initial collections in firestore
    /logout.js                  # functions for logout
    /main.js                    # functions for customized experience upon login

├── styles                   # Folder for styles
    ├── gradebook-styles        # Folder for gradebook styles
        /gradebook.css              # styling for gradebook feature
    ├── schedule-styles         # Folder for schedule styles
        /schedulestyle.css          # styling for schedule feature
    ├── tasktracker-styles      # Folder for tasktracker styles
        /schedulestyle.css          # styling for tasktracker feature
    /bottom-nav.css             # styling of bottom navigation bar
    /indexstyles.css            # styling for index landing page
    /loginstyles.css            # styling for login page
    /mainstyles.css             # styling for main landing page after user has logged in

Firebase hosting files:
├── .firebaserc...


```

