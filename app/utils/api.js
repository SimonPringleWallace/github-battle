import axios from 'axios';
//encodedURI takes the human readable things, like <1, etc.
//encodes them into a url that the computer can read


 export const fetchPopularRepos = (language) => {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

  return axios.get(encodedURI)
  .then(res => res.data.items)
  .catch(err => console.log(err))
 }

//es5
// module.exports = {
//   fetchPopularRepos: function (language) {
//     var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language' + language + '&sort=stars&order=desc&type=Repositories');
//
//   return axios.get(encodedURI)
//   .then(function (response) {
//     console.log(response)
//     return response.data.items;
//   })
//  }
// }
