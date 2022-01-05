# YOUR PRODUCT/TEAM NAME

> _Note:_ This document is meant to evolve throughout the planning phase of your project. That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). Most importantly, it is a reflection of all the planning you work you've done in the first iteration.
> **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details

Figma link: https://www.figma.com/file/jRSlPZ1dFum2QO3mcJWRr6/Anime-for-Humanity-Project?node-id=0%3A1

#### Q1: What are you planning to build?

We will be building a mobile tablet app that will be integrated with the currently existing website. Our app will help users alleviate people from stress and mental health issues, using music and anime, as means to create a calm and relaxing atmosphere in stressful day-to-day situations. As music therapy has become more popular these days, surveys and research results show that listening to music has many psychological benefits. We will be focusing on lofi music, anime music, and meditation sounds. Users will have easy access to the lofi/anime music they want, they can customize the sounds as they like, and be free of stress while using the app (think of YouTube after a CSC301 assignment, and all my recommendations and ads are about frameworks and app development!). These functionalities can be used during sleep, meditation, working, and studying. Furthermore, the app also comes with self-care kits that use visual guidance to cope with mental health. An additional functionality we would like to include is the “animedoro” timer, which is a combination of the Pomodoro and todo list.

#### Q2: Who are your target users?

The users of this app will mainly consist of:

- people who are already exposed to anime, and enjoy listening to anime-themed songs
- people who don’t have exposure to anime yet, but who enjoys playing background music while doing their different tasks
- people who are in a situation of stress and/or who have a higher risk of being exposed to mental health issues

**Please see below our personas:**

- Julie, 21
  A third-year student at the University of Toronto who specializes in psychology and minors in Computer Science. In her spare time, she enjoys watching anime and painting. As she is thinking of doing graduate studies, she has applied for many research opportunities recently. Unfortunately, she hasn’t heard back from any of them yet while some of her peers have already found some. She is feeling anxious about being “behind,” and is overwhelmed by schoolwork.

- Matthew, 45
  A full-time consultant who often works overtime. He has not yet been exposed to anime but enjoys lo-fi music. His son will be attending university next Fall, which puts financial pressure on his shoulder. He doesn't want his son’s choices to be limited due to financial reasons, so he is taking an extra project. Due to the COVID-19 situation and his work nature, he stays home most of the time, always in front of a screen, and making multiple work-related calls a day. He is looking for an app to do some five minutes workout between calls.

- Thomas, 15
  A high school student who suffers from insomnia. He thinks he isn’t stressed by school in particular, but there is a lot on his mind. Although he tried to use some apps to improve his sleep, none of them have worked successfully for him. He is currently looking for a free app that can play random music which can put him to sleep.

- Karen, 35
  A mother who enjoys meditating after putting her kids to sleep and is looking for ambient background music. Karen is a single mother of two. She often jumps between work and taking care of her kids. Previously, she always went on YouTube for slow meditating music, but as the number of ads become more frequent, she is furious when an ad pops up in the middle of her meditation.

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

People often use music as a way to seek relaxation, and the app’s ability to layer an ambient sound on top of the current playing music to make the overall experience more immersive and therapeutic. There are musical apps that stream call relaxing music, apps that help with meditation and yoga, apps that use a Pomodoro timer, and other features that are available within this product. Nonetheless, one of the biggest issues that need to be answered is a distraction and the ease of relaxation. Having multiple apps or tabs of all these tasks can be extremely unorganized and distracting, often leading to more stress and waste of time. This product has a simple interactive method of creating a relaxing tone through audio and visual themes of anime, with other useful tools such as the Pomodoro timer with a todo-list and downloadable self-care kits.

Other products in the market present beautiful aesthetics along with lofi or chill ambient music to create an almost “healing” atmosphere. Despite this, these apps often cause even more distraction with ads or unnecessary functionalities that prevent users from truly experiencing a calm, relaxing moment. Unlike other similar products, this app will precisely focus on balancing the necessary functionalities as well as creating non-stimulating yet pleasant UI/visuals to allow the users to focus on relaxing rather than on the app itself.

As stated on their main website, “Anime for humanity is a non-profit organization dedicated to use anime, cosplay, video games, and music as a medium to challenge the stigma around mental health”. With this application, we want to broaden the audience and create a more easily accessible tool for achieving this goal.

In general, mobile apps are much more accessible and popular compared to their web versions. By creating a mobile app, we can reach a much bigger audience which in turn will create greater benefit for people with mental health issues.

#### Q4: How will you build it?

We will use React Native for the cross-platform application front-end and will use HTML, CSS, Bootstrap, and React to finish the website, we will also use Node.js and Express.js for the back-end of both mobile and web applications. For the website, we will use Discord API for the chat functionality and for both mobile and website we will use YouTube API for the music functionality. We plan on regular test automation with unit-testing the backend and integration testing for both front-end and back-end of the application, we will also do manual testing on the user interface.

So far, the main focus and the objective of the project at the moment is to finish the web application and deploy it as soon as we can. For developing the mobile application, we plan on using UML as the modeling language to plan out and design the model for the mobile application. Based on the use of the front-end as well as the inter functionalities with the back-end, using UML is a great way to visualize the design of the process.

Vercel is used to deploy the web application. Google Play Store and Apple App Store will be used for mobile deployment.

#### Q5: What are the user stories that make up the MVP?

- As a university student studying Computer Science, I want to listen to background music without lyrics, so that I can make my coding assignments more enjoyable.
- As a high school student, I want to listen to ambient sounds, so that I can relieve stress from my social anxiety.
- As a person who works full time remotely, I want to be able to select different genres of music, to help with my focus and performance for doing my tasks.
- As a college student studying Animation, I want to make sure that I take breaks during my sessions so that I remain both physically and mentally healthy.
- As a person who constantly works for long hours, I want to have access to a variety of self-care kits, so that I can be both physically and mentally well.

---

## Intellectual Property Confidentiality Agreement

> Note this section is **not marked** but must be completed briefly if you have a partner. If you have any questions, please contact David and Adam.
>
> **By default, you own any work that you do as part of your coursework.** However, some partners may want you to keep the project confidential after the course is complete. As part of your first deliverable, you should discuss and agree upon an option with your partner. Examples include:

1. You can share the software and the code freely with anyone with or without a license, regardless of domain, for any use.
2. You can upload the code to GitHub or other similar publicly available domains.
3. You will only share the code under an open-source license with the partner but agree to not distribute it in any way to any other entity or individual.
4. You will share the code under an open-source license and distribute it as you wish but only the partner can access the system deployed during the course.

We agreed on the third option (III) in which we can mention the project on our resume but will only share the source code with the partner.

---

## Process Details

#### Q6: What are the roles & responsibilities on the team?

**Chris:**

- As a Project Manager, Chris is responsible for making sure that the communication between the partner and the project members is fluent and that the goals and the expected progress.
- As the project manager, Chris will be the one who is the most familiar with the entire project and hence will work on full-stack development of the project, assisting help on areas that seem to be falling behind.
- Work on developing the app.
- Strength: Familiarity with React Native, JavaScript, Jest, and building Frontend
- Weaknesses: Limited full-stack experience, database, and continuous integration

**Bolkar**

- As both full stack developer for the web app and mobile app developer, I will work in both front-end and back-end for web app and mobile app developer.
- As the DevOps I will check on the group members on their progress, update the todo list, and make the voting for the prioritization of the tasks
- As the QA Tester, I can improve on the prototype on Figma and get other people to test our prototype to improve our products User Interface in addition to writing tests for the front-end and back-end of the code
- Strength: Good with communicating ideas between team members, arranging meetings and checking up on people on their progress, experience with prototyping and user tests of products
- Weakness: Limited Javascripts, full-stack, react, and react-native experience that I will be improving as we go through the term

**Kaiyi**

- As the backend developer, I will primarily work on backend development for both the web app and mobile app using Node.js and Express.js.
- As the DevOps developer, I will work on managing and maintaining the CI/CD for the web and mobile app as well as reviewing GitHub code pushes.
- Strength: I have solid experience in Full-Stack development, especially with Node.js and React. I also have solid experience with relational databases and other server-side programming languages like Java and Python.
- Weaknesses: I do not have that much experience with CI/CD. I also have limited experience with Mobile App Development

**JiaQi**

- We will be mainly focusing on the frontend for the project and will work on the mobile application
- In charge of coordinating meetings: making sure that everyone shows up to meetings, and if not, keep them updated on what has happened. Also, I will be making sure that our meetings with the partner go smoothly, and fast in terms of response.
- Weaknesses: Limited experience with mobile application or web development, Limited experience with CI/CD and the deployment process, Limited experience with javascript and React.
- Strengths: Familiarity with databases, strong experience in Java and clean architecture, Good organization skills in terms of organizing big projects, and coordinating everyone on the team

**Brian**

- I will focus on the front-end development of our project on the mobile app.
- As the DevOps, I will make sure everyone has good progress on pulling, pushing, and updating codes on GitHub and deployed platform
- As the QA Tester, I will set up a tester for unit testing, integration testing Staging/UAT, and production.
- Strength: I am experienced in working on the frontend with CSS Html, and I am willing to devote my time learning different languages
- Weaknesses: my weakness is communicating with people. Limited experience in JavaScript and React.

**Jia Nian**

- Involved in web development in the past using the MERN (MongoDB, Express, React, Node) stack and thus will participate in both frontend and backend of the project.
- Have experience in both relational (PostgreSQL) and non-relational (MongoDB) databases.
- In charge of the meeting minutes during meetings.
- Limited experience in deployment of the web and mobile app.
- Limited experience with mobile app development but have strong experience in Java
- Limited experience with automated testing tools.

#### Q7: What operational events will you have as a team?

- Monday (8-9 PM, in-person):
  Monday is the tutorial meeting so we will discuss the problems and progress with the TA. This meeting is our only in-person meeting so that we could use our time more effectively to share ideas, create and add to-do lists on Notion, divide and assign tasks and vote on their importance. Since it’s much faster to exchange ideas and to decide on things in in-person meetings we plan on using this time more effectively.

- Thursday (8-9 PM, online):
  The main purpose of the Thursday meeting is to recollect everyone’s progress regarding any code updates or planning that needs to be discussed and agreed upon prior to speaking with the partners on Friday.

- Friday (8:30-9:30 PM, online):
  This meeting will mostly be used to discuss any issues or clarifications that need to be solved and plan ahead on the next tasks. Also, we want to update our partners to make sure we are on the same track.

The first meeting with our partner was on Sep 29th. We got to introduce ourselves and learn further information regarding the goals and the vision of this project. We set up platforms for us to communicate, such as using Slack and Notion. We were given a to-do list along with a session for answering any questions for each other. Our partner asked us to take a look at the previous code and also come up with other implementations that can be added to the app.

The second meeting with our partner was on Oct 6th. We demonstrated our prototype to our partner and shared ideas on how to improve the design/layout. We discussed other bugs and issues regarding the website and updated the to-do list. We decided to hold weekly meetings every Friday 8:30-9:30PM. At the end of the meeting, we were given specific implementations to work on to finish the website.

#### Q8: What artifacts will you use to self-organize?

To organize our meeting, we will produce different artifacts, divided into mainly these categories:

1. Communication
2. Notes/Meeting minutes
3. Code organization

For communication, we will be using Discord, Slack, Messenger, Sessions, When2Meet:

- Messenger: used for quick general communication, and keep each other updated on important news they need to know asap
- Discord: We will put important links/resources and announcements there. Our discord has different channels, and we will use the channel accordingly. Also, for our meetings, we will be using discord to run our internal meetings.
- Slack: used for our communication with the organization partner (written)
- Sessions: used for online meeting with the organization partner
- When2Meet: If the situation requires an extra meeting (other than our regular Monday and Thursday meetings), we will be using a When2Meet to schedule meeting times and emergency meetings.

For notes and meeting minutes, we will be using Notion, Google Drive:

- Notion: we will be posting our meeting minutes, important information in Notion. Our notion has different sections (such as meeting notes, contact information, etc…)
- For the tasks added, they will be either - Not Started, In Progress, or Completed. Also, for each task, they will have a priority order so we know which ones are the most important to get done.
- Google Drive: have our collaborative working files on Google Drive

For code organization/sketching, we will be using GitHub, Figma

- Github: code repository server that we will be using for our production code
- Figma: we will use an online collaborative prototyping tool to work on the design

We will have a to-do list on the Notion that assigns tasks to everyone so that we can check the progress in the meeting within the group. We will decide on the importance of the tasks in the in-person meetings and will rank them by importance in the to-do list by voting. DevOps roles will actively check the completion of the code before meetings and will decide to vote on the importance of the tasks regarding how much is completed. Each member will get assigned a task based on their skill sets and availability at a given point in time.

#### Q9: What are the rules regarding how your team works?

Three meetings every week, two meetings with the group, one online meeting with the partner. Every week we give updates during the meeting with the partner (any need for clarification that may arise will be communicated with the partner during the meeting before attempting to solve it).

Scenario 1: A member doesn’t do their work or submit their work on time

- Ideally, the person who is responsible for the task should inform the rest of the team of his/her difficulties faced ahead of the deadline
- If not, someone will talk to them privately to find out why: if it’s because they need help/too much work, we can reallocate and do a division of work

Scenario 2: The team members could not reach an agreement

- Both parties make a pro/con list individually and come to a meeting together to put the ideas together and agree upon a final solution
- If time permits, we could consult the TA for possible solutions.
- Must show respect and understand that both sides are acceptable. Being hostile is not permitted.

Scenario 3: Being aggressive or rude

- Try to remind them during group meetings or in private so that they can realize their mistakes.

Scenario 4: Someone drops out of the course

- From the assigned roles, we can divide their roles and assign them to group members who already had similar roles.

---

## Highlights

During our first week of this project, we used Discord as our main method of communication. Problems arose when project members were having issues checking messages frequently, as well as having technical issues regarding muted notifications. We decided to switch our main form of communication to something more friendly and easy to use: Messenger. This was a great solution to the lack of communication since it is much faster to get replies and address everyone in the group.

During our meeting regarding the prototype, one of our team members came up with a unique design for the UI of the self-care kits which turned out to be much more visually pleasing and praised by our partner during the partner meeting.

During class, as a team, we have come to a decision regarding the framework we will be using. We’ve decided to use ReactNative after learning the different mobile development options. Since the organization already has a current website, and after looking into the code, we saw that they are using React for the web application. Also, ReactNative is able to support web frameworks, it is available on app stores and has good performance.

During one of our online meetings, we came up with the plan to use Notion for a to-do list which is our partner’s preferred for sharing our notes such that we can all access and manage the current tasks for the group. We decided that the DevOps role would be working with assigning tasks to group members in addition to updating how much of the task is done with some estimate. We decided to come up with the tasks mainly during our in-person meetings and also voted on their importance.
