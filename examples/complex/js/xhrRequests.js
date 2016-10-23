module.exports = (callBack) => {
      function getRepoData(url, framework, infoType) {
         return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onload = (e) => {
               if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                     resolve({
                        res: JSON.parse(xhr.responseText),
                        repo: framework,
                        type: infoType
                     });
                  } else {
                     reject({
                        res: new Error(xhr.statusText),
                        repo: framework,
                        type: infoType
                     });
                  }
               }
            };
            xhr.onerror = (e) => {
               reject({
                  res: new Error(xhr.statusText),
                  repo: framework,
                  type: infoType
               });
            };
            xhr.send();
         });

      };


      Promise.all([
         getRepoData('https://api.github.com/repos/vuejs/vue/events', 'Vue', 'events'),
         getRepoData('https://api.github.com/repos/vuejs/vue', 'Vue', 'general'),
         getRepoData('https://api.github.com/repos/vuejs/vue/contributors', 'Vue', 'contributors'),
         getRepoData('https://api.github.com/repos/facebook/react/events', 'React', 'events'),
         getRepoData('https://api.github.com/repos/facebook/react', 'React', 'general'),
         getRepoData('https://api.github.com/repos/facebook/react/contributors', 'React', 'contributors'),
         getRepoData('https://api.github.com/repos/angular/angular.js/events', 'Angular', 'events'),
         getRepoData('https://api.github.com/repos/angular/angular.js', 'Angular', 'general'),
         getRepoData('https://api.github.com/repos/angular/angular.js/contributors', 'Angular', 'contributors'),
         getRepoData('https://api.github.com/repos/trueadm/inferno/events', 'Inferno', 'events'),
         getRepoData('https://api.github.com/repos/trueadm/inferno', 'Inferno', 'general'),
         getRepoData('https://api.github.com/repos/trueadm/inferno/contributors', 'Inferno', 'contributors'),
         getRepoData('https://api.github.com/repos/emberjs/ember.js/events', 'Ember', 'events'),
         getRepoData('https://api.github.com/repos/emberjs/ember.js', 'Ember', 'general'),
         getRepoData('https://api.github.com/repos/emberjs/ember.js/contributors', 'Ember', 'contributors')
      ]).then((responses) => {
         let responseAholic = responses.reduce((ob, res) => {
            ob[res.repo][res.type] = res.res;
            return ob;
         }, {
            Vue: {},
            React: {},
            Angular: {},
            Inferno: {},
            Ember: {}
         });
         callBack(responseAholic);
        // localStorage.setItem("githubdata", JSON.stringify(responseAholic));

      });

}