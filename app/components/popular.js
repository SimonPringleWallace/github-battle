import React from 'react'

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
    const languages = ['All', 'JavaScript','Ruby','Java', 'CSS', 'Python']
    return(
<ul className='languages'>
  {languages.map(lang => {
    return(
      <li key={lang}
        style={lang === this.state.selectedLanguage ? { color: '#d0021b'}: null}
        onClick={this.updatedLanguage.bind(null,lang)}>
        {lang}
      </li>
    )
  })}
</ul>
    )
  }
}
export default Popular;
