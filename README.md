# Jest the beginning

## Story

Testing is an important part of software development.
It takes time to write tests but it speeds up the long term development.

Front-end Testing is testing Graphical User Interface (GUI), functionality and usability of website or application.
For Example: If you enter your name into the frontend of application, numbers should not be accepted.
Another example would be checking the alignment of GUI elements.

With a JS framework like React or Vue.js, one of the best tool for testing is `Jest`.
The **jest** package is as useful as the `create-react-app` script already contains the latest packages from it.
In this project, you will setup the environment for testing your font-end code.

In this project you will get a simple project. It displayes some jokes, you can change the category that the jokes from, and you can get some random jokes.
You need to write as many as test that you can.

## What are you going to learn?

- Testing React projects

## Tasks

1. Create tests for every cases that the user can interact with the application. Test that the UI works fine when the `Random jokes` button clicked or we change the jokes category.
    - There are test-cases that test wheter the page loads successfuly
    - There are test-cases that test wheter the page shows new jokes when the `Random jokes` button is clicked
    - There are test-cases that test wheter the page shows new jokes when the category dropdown value changes
    - All the tests pass

## General requirements

None

## Hints

- With frontend testing, it's really important that the tests are made by the users perspective.
  When you create a unit test for your component, you need to aim what the users see and trigger that event that makes changes in a component.
  For example, you want to test that a counter works as it needs to.
  Think like a user and how you wanna use that counter as a user.
  You click a button that raises the counter number.
  So, you want to trigger the button click event and test wheter the counter works well.

It's important because when you make tests for functions, then you change the function name, you need to rewrite all the tests that use this function.
If you make your tests for the component it is less likely to change its name, so you don't need to debug as much for passing the tests.

- It's important to mock the data fetching. _Mocking the data fetching_ means that you replace the data that we fetch with data you build up for tests.
  With a process like that you can test your frontend separated from other dependency (e.g. a third-party api or a server side).

## Background materials

- <i class="far fa-exclamation"></i> [Software testing](project/curriculum/materials/pages/general/software-testing.md)
- <i class="far fa-exclamation"></i> [Jest overview](https://jestjs.io/docs/en/tutorial-react)
- <i class="far fa-book-open"></i> [Enzym overview](https://enzymejs.github.io/enzyme/)
- <i class="far fa-exclamation"></i> [Testing react projects](https://reactjs.org/docs/testing-environments.html)
- <i class="far fa-book-open"></i> [What is mocking?](https://stackoverflow.com/a/2666006)
- <i class="far fa-exclamation"></i> [Mocking modules with jest](https://jestjs.io/docs/en/mock-functions#mocking-modules)
- <i class="far fa-exclamation"></i> [Mocking the data fetching with a module](https://www.npmjs.com/package/axios-mock-adapter)
- <i class="far fa-book-open"></i> [Front-end testing](https://dev.to/christopherkade/introduction-to-front-end-unit-testing-510n)
