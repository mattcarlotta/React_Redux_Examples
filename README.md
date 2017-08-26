This custom project was integrated with the [Create React App](https://github.com/facebookincubator/create-react-app).

Customs include:
- axios
- react-router v3.0.4 (react-router-dom v4 doesn't have an easy way to parse query strings in the URL)
- react-bootstrap
- react-redux
- react-router-redux
- react-scroll
- react-slick
- react-transition-group v1.2.0 (v2+ doesn't have thorough enough docs yet)
- redux
- redux-form
- redux-thunk
- sass-loader (scss won't compile to css for dev env -- to alter this option: change "start" script in package.json to "start": "npm-run-all -p watch-css start-js start-server")
