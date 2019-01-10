import React from 'react';
import PropTypes from 'prop-types';
var api = require('../utils/api')

const SelectLanguage = ({selectedLanguage, onSelect}) => {
    const languages = ['All', 'JavaScript','Ruby','Java', 'CSS', 'Python'];

        return(
          <ul className='languages'>
            {languages.map(lang => (
              <li
                style={lang === selectedLanguage ? { color: '#d0021b'}: null}
                onClick={onSelect.bind(null,lang)}
                key={lang}
                >
                {lang}
              </li>
            ))}
          </ul>
    )
}

const RepoGrid = ({repos}) => {
  return(
    <ul  className='popular-list'>
    {repos.map((repo, index) => {
      return (
        <li key={repo.name} className='popular-item'>
          <div className='popular-rank'>#{index +1}</div>
          <ul className='space-list-items'>
            <li>
              <img
              className='avatar'
              src={repo.owner.avatar_url}
              alt={'Avatar for ' + repo.owner.login}
              />
            </li>
            <li><a href={repo.html_url}> {repo.name}</a></li>
            <li>{repo.owner.login}</li>
            <li>{repo.stargazers_count} stars</li>
          </ul>
        </li>
        )
      })}
      </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props){
    super()
      this.state = {
        selectedLanguage: 'All',
        repos: null
    }

    this.updatedLanguage = this.updatedLanguage.bind(this)
  }

  componentDidMount(){
    this.updatedLanguage(this.state.selectedLanguage)
  }

updatedLanguage(lang){
  this.setState({selectedLanguage: lang})
  api.fetchPopularRepos(lang)
  .then(repos => this.setState({repos:repos}))
}

  render(){
    return(
      <div>
        <SelectLanguage
          selectedLanguage = {this.state.selectedLanguage}
          onSelect = {this.updatedLanguage}
        />
        {!this.state.repos ? <p> LOADING </p> :
        <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}
export default Popular;
