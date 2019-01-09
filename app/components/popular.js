import React from 'react';
import PropTypes from 'prop-types';

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

SelectLanguage.PropTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props){
    super()
      this.state = {
        selectedLanguage: 'All'
    }
    this.updatedLanguage = this.updatedLanguage.bind(this)
  }
updatedLanguage(lang){
  this.setState({selectedLanguage: lang})
  console.log(lang)
}

  render(){
    return(
      <div>
        <SelectLanguage
          selectedLanguage = {this.state.selectedLanguage}
          onSelect = {this.updatedLanguage}
        />
      </div>
    )
  }
}
export default Popular;
