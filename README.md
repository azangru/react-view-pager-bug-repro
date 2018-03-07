This repository contains a minimal reproduction case demonstrating a problem with
`react-view-pager` when used with React 16 (specifically, 16.2.0).

## Description of the problem
When the view-pager is used as an infinite carousel (i.e. when `Track` receives
the `infinite` prop), fast slide changes (especially to the previous slide)
result in empty frames.

*To run the repro case:*

- clone the repo
- run `npm start`
- navigate to `localhost:3000`
- click on the controls (`Previous` and `Next`) below the slider

_(Bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app))_
