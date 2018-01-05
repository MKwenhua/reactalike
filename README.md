# Reactalike
Random React-like rendering engine.

I have provided a quick start example for Redux + Reactalike as seen below:

![](/simple-example-visual.gif)

## About This project

Reactalike is not really intended to an alternative to React, in fact originally I started building this React clone for a coding challenge. The challenge was to build a simple application that would fetch Github data from the repos of several popular JS Frameworks, and figure out a way to present it in a way so that their team could potentially glean some insights into the future trajectory of each framework.

One major stipulation for this challenge was that you could not use any Framework yourself so they could evaluate each applicants understanding of Javascript. So given the fact I could not use React, I realized I had to build my own, because ever since learning React's patterns I couldn't go back to writing procedural Javascript. Prior to this I have already written a very basic library that generates html strings: [vdom-html-strings](https://github.com/MKwenhua/vdom-html-strings-), I thought that reverse engineering React would be an excellent learning opportunity.

#### Here Is A Visual Of That App

![](/original-project-built-with-reactalike.gif)


## Brief Explanation of How I Got It To Work


#### JSX Without React

After working out the diffing algorithm and updating I realized that writing plain old functions was too messy for me to be able to properly build this app. So I decided that I had to figure out how to get JSX to compile to something other than `React.createElement`, since I knew there was many other substitute libraries out there I knew this must be possible, if not I would just write the plugin myself.

Fortunately I found out that the plugin `transform-react-jsx` has a config setting called `pragma` which I was able to compile to the function I was currently using: `EX.node`. The `EX` stood for "example" since ultimately that's all Reactalike really is, an example.  

#### Synthetic Events
