# Reactalike
Random React-like rendering engine.

I have provided a quick start example for Redux + Reactalike as seen below:

![](/simple-example-visual.gif)

## About This project

Reactalike is not really intended to an alternative to React, in fact originally I started building this React clone for a coding challenge. The challenge was to build a simple application that would fetch Github data from the repos of several popular JS Frameworks, and figure out a way to present it in a way so that their team could potentially glean some insights into the future trajectory of each framework.

One major stipulation for this challenge was that you could not use any Framework yourself so they could evaluate each applicants understanding of Javascript. So given the fact I could not use React, I realized I had to build my own, because ever since learning React's patterns I couldn't go back to writing procedural Javascript. Prior to this I have already written a very basic library that generates html strings: [vdom-html-strings](https://github.com/MKwenhua/vdom-html-strings-), I thought that reverse engineering React would be an excellent learning opportunity.

#### Here Is A Visual Of That App

![](/original-project-built-with-reactalike.gif)


> As you can see I also briefly worked on building an interactive code playground for this challenge since it was required to provide an overview/explanation of your code. But I quickly abandoned it after realizing I have already gone too far over-engineering this thing.   


After getting an offer from another company, I stopped working on this project, but since I enjoyed working on it so much I decided to extract the "Fake React" code and set up his repo.

## Brief Explanation of How I Got It To Work


#### JSX Without React

After working out the diffing algorithm and updating I realized that writing plain old functions was too messy for me to be able to properly build this app. So I decided that I had to figure out how to get JSX to compile to something other than `React.createElement`, since I knew there was many other substitute libraries out there I knew this must be possible, if not I would just write the plugin myself.

Fortunately I found out that the plugin `transform-react-jsx` has a config setting called `pragma` which I was able to compile to the function I was currently using: `EX.node`. The `EX` stood for "example" since ultimately that's all Reactalike really is, an example.  

#### Synthetic Events

> I actually only use synthetic events on non root delegated events.

Another challenge when developing this application was figuring out how to do root level event delegation for common non tag specific events such as `"click"`, `"mouseover"`, `"mouseleave"` etc. was figuring out how to access the event targets V-Dom node and calling it's respective function.

Turns out the solution was quite simple by using a V-Dom tracing HTML attribute called `trace` which was similar to the now retired `data-reactid`. I could leave a string that maps the elements props position in the V-Dom, each `.` separating the nodes index within it's parents `nested` attribute (what React calls `children`). This way if the prop `onClick` is set on an element, then a click event will be set on the Root if it hasn't already. Once the event happens the actual target is provided via the DOMs event API as `e.eventTarget` the event target is then split into an array to traverse through the V-Dom and call the function applied to that events prop name `node[eventName]()`.

##### Tag Specific Events

Unfortunately not all events can be just applied to the Root and some tag specific events must be applied to the element themselves such as `onPlay` for `video` tags. This process can be a pain since it means events need to be removed up once the element is removed/changed or else old events may fire triggering multiple stale function calls, additionally for older browsers old events can result in memory leaks.

So to deal with this I created an tag specific event registry that maps the event's `trace` id to point to a Synthetic Event passing in `(eventObject, htmlNode, vDomNode)` which calls the event with those arguments.



**Below is how the HTML looks in development tools:**

```html
<div class="padd-center" trace="Root.0.1.3.0">
  <div class="tag" style="border-color:#ffa500" trace="Root.0.1.3.0.0">
    <header style="background:#ffa500" trace="Root.0.1.3.0.0.0" >
      <div class="hello" contenteditable="false" trace="Root.0.1.3.0.0.0.0" >
        HELLO
      </div>
    </header>
    ....
  </div>
</div>
```

## Super Simple Example

There are better example you can look at within the **examples** folder. 

```javascript
import EX from 'reactalike'

class Layout extends EX.Container {
  randomList = [1,2,3,4]
  showList = () => this.randomList.map((itm, i) => (
    <li class={i % 2 === 0 ? 'even' : 'odd'}>
      {itm}
    </li>
  ))
  render() {
    return (
      <section>
       <h1>Example</h1>
       <ul>
        { this.showList() }
       </ul>
      </section>
    )
  }
}

EX.mountAppToNode(Layout, document.getElementById('root'));
```
