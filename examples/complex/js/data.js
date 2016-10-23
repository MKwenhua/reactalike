const AppState = {
   data: {},
   loaded: false,
   frameworks: [],
   histData: null,
   eventsData: null,
   compDisplay: "list",
   achart: {
           graphed: ['WatchEvent', 'ForkEvent'],
           metrics:{
            WatchEvent: true, 
            PushEvent: false,
            IssuesEvent: false,
            ForkEvent: true,
            PullRequestEvent: false
            }
         },
   list: {
      order: '-stars'
   },
   fwinfo: { 
      React: { intro:"React unlike all other open source JS frameworks is unique in that it’s actually used by Facebook in their core products. React/React-like architectures have been quickly picked up by major players such as Netflix, Facebook, Airbnb and more, and not just for internal apps/small marketing projects, but their Core service.",
         extra: "Prior to React many developers believed separation of concerns meant splitting up HTML and JS. But React showed that such “best practices” made no sense given how tightly intertwined the two are.",
         sources: []

         },
      Angular:{
         intro: "The Angular repo actually encompasses two frontend frameworks, Angular 1 and Angular 2. Although Angular 1 and 2 share the same name, they are actually two completely separate frameworks. Due to a myriad of issues mostly relating to poor scalability, and state management, so the Angular team rebuilt Angular from the ground up. This month Angular finally released the first production ready build.",
         extra: "Angular puts JS in HTML by add NG- namespaced tags on dom elements, Angular allows developers to embed data, and logic to be associated with a DOM element. Also while Angular 1 had featured two-way data binding(meaning state changes can come from the DOM, or from the model itself), Angular 2 removed this feature.",
         sources: []
         },
      Vue: {intro: "I have never used Vue, but from what I have seen and read , Vue appears to be a more performant and practical version of Angular1. From what I have heard Vue is not only much more performant, but it is also much easier to learn when compared to Angular, since it does not require learning a whole new syntax/language and framework specific jargon like Angular.",
         extra: "While Vue is picking up steam in the US, it’s already a mainstream JS framework in China. Apparently Alibaba(阿里巴巴) heavily uses the framework which in my opinion is a pretty big endorsement.",
         sources: ["https://vuejs.org/guide/comparison.html"]
         },
      Ember: {intro: "Ember was initially released in 2011, and sells itself as the Ruby on Rails of the frontend. Ember brings convention over configuration, which forces developers to tackle problems in a specific way. While the lack of flexibility may limit the types of projects that can be created, Ember.js devs can easily jump into new projects without having to spend hours reading the source code. ",
         extra: "Ember requires jQuery as a dependency to function properly.",
         sources: []
         },
      Inferno: {intro: "Inferno is essentially React only with a more efficient diffing algorithm. Currently it is the most performant JS framework.",
               extra: "Inferno is so similar to React, I was able to switch my React app to Inferno in little over a hour.",
               sources: []
         }
      },
   details: {
      onview: null
   },
   activefw: "none",
   dragged: null,
   dragging: false,
   dropzoneOver: false,
   dropSee: null,
   graph: {
      type: "bar",
      metricsOn: [1,2],
      metrics:[
      {m:"create rows",m2:"create rows",  on: false},
      {m: "replace all rows", m2: "replace all",on: true},
      {m: "partial update",m2: "partial update", on: false},
      {m: "select row",m2: "select row", on: true},
      {m: "swap rows",m2: "swap rows",on: false},
      {m: "remove row", m2: "remove row", on: false},
      {m: "create many rows", m2: "create 1000 rows", on: false},
      {m: "append rows to large table",m2: "append to table",on: false},
      {m: "clear rows", m2:"clear rows", on: true},
      {m:"clear rows a 2nd time", m2:"repeat clear rows", on: false}]
   },
   fwList: {
      React: {
         created: 1369412154000,
         stars: 49457,
         size: 133,
         fsx: "  ",
         fileSize: "133KB",
         perf: 3
      },
      Angular: {
         created: 1262738077000,
         stars: 52264,
         size: 766,
         fsx: "  ",
         fileSize: "766KB",
         perf: 4
      },
      Vue: {
         created: 1375068291000,
         stars: 27558,
         size: 78,
         fsx: "  ",
         fileSize: "78KB",
         perf: 2
      },
      Inferno: {
         created: 1422828458000,
         stars: 3885,
         fileSize: "4KB",
         size: 4,
         fsx: "  ",
         perf: 1
      },
      Ember: {
         created: 1306366780000,
         stars: 16822,
         size: 746,
         fileSize: "746KB",
         fsx: "(includes jQuery which is a required dependency)",
         perf: 5
      }
   }

}

module.exports = AppState;