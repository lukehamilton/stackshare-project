# StackShare Challenge by Luke Hamilton

### Locally Running the Project
* `npm install`
* `npm start`
* visit `http://localhost:8080/`

### Notes

- Refreshing the home page will load a new set of tags each time.

- This was my first time using the Redux architecture in a React application / using Redux in conjunction with React Router if there are any questions re: architecture.

- This was my first time deploying a React application. Prior to this project the majority of my React experience has been working locally.

- I am aware there is a bug when refreshing a page at the url /tags/#{tagID}/tools. I ran into a few webpack issues with relation to React Router and wanted to get the project back to you.

### Area To Improve

- Cache tools that have already been received to avoid duplicate server requests.

- Fix refresh react router bug.

- Add loading / progress placeholders when loading content into the DOM.


![Alt Text](https://www.dropbox.com/s/a9ehurktltexe6b/stackshare-remove-tool.gif?raw=1)
