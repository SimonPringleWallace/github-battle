import axios from 'axios';
//encodedURI takes the human readable things, like <1, etc.
//encodes them into a url that the computer can read
const id = "e2ce75b57729dd4d67b4"
const sec = "c7566bbb3ca423a432f617d39f8305a79a4d7ece"
const params = `?client_id=${id}&client_secrets=${sec}`

const getProfile = (username) => {
  return axios.get(`https://api.github.com/users/${username}${params}`)
  .then(user => user.data)
}

const getRepos = (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
}

const getStarCount=(repos)=>{
  return repos.data.reduce(function (count, repo) {
    return count + repo.stargazers_count;
  },0);
}

const calculateScore=(profile, repos)=>{
  const followers = profile.followers
  const totalStars =  getStarCount(repos)

  return (followers *3) + totalStars
}

const handleError=(error)=>{
  console.warn(error)
  return null
}

const getUserData=(player)=>{
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(function (data) {
    const profile = data[0]
    const repos = data[1]

    return{
      profile: profile,
      score: calculateScore(profile,repos)
    }
  })
}

const sortPlayers = (players) => {
  return players.sort((a,b) => {
    return b.score - a.score
  })
}

export const battle = (players) => {
  return axios.all(players.map(getUserData))
  .then(sortPlayers)
  .catch(handleError)
}

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
