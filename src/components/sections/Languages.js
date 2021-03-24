import {useState, useRef} from 'react';
import styled from 'styled-components';

import Section from '../Section'

// export const Section = styled.div`
//   min-width: 500px;
//   max-width: 500px;
//   display: flex;
//   background: #fff;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   margin: 50px auto;
// `;

export const Row = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  margin-top: 10px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  margin-top: 10px;
`;

const langGeneralList = [
  {code: '', value: 'Select...'},
  {code: 'EN', value: 'ENGLISH'},
  {code: 'AR', value: 'ARABIC'},
  {code: 'FR', value: 'FRENCH'},
  {code: 'GER', value: 'GERMAN'},
  {code: 'SPA', value: 'SPANISH'}
]
const Languages = ({languages, AddNewLanguage, DeleteLanguage, SortArray}) => {
  
  const [isNewlanguagesHidden, setIsNewlanguagesHidden] = useState(false)
  const selectedLanguageRef = useRef()

  const handleLanguageAdd = (e) => {
    setIsNewlanguagesHidden(true)
  }

  const handleLanguageApply = () => {
    const selectedLanguageCode = selectedLanguageRef.current.value
    if(!selectedLanguageCode) {
      return false
    }
    
    if(languages.find(lang => lang.code === selectedLanguageCode)) {
      return false
    }

    const selectedLanguage = langGeneralList.find(lang => lang.code === selectedLanguageCode)
    AddNewLanguage(selectedLanguage)
    setIsNewlanguagesHidden(false)
    selectedLanguageRef.current.value = ''
  }

  return (
    <Section title='LANGUAGES'>
      {languages.map((language, index) => 
        <Row>
          <div>
            <input type='button' onClick={()=>SortArray(index, index+1)} value={'Down'} />
            <input type='button' onClick={()=>SortArray(index, index-1)}value='Up' />
          </div>
          <div style={{marginLeft: 10, width:145}}>{language.value}</div>
          <input type='button' onClick={()=>DeleteLanguage(index)} value='X' style={{marginLeft: 10}}/>
        </Row>
      )}
      {isNewlanguagesHidden && 
        <Row>
        <select
          ref={selectedLanguageRef}
          style={{alignSelf: 'start', marginLeft: 100, marginTop: 10, width:150}}
        >
            {langGeneralList.map(lang =>
              <option value={lang.code}>{lang.value}</option>
            )}
        </select>
          <input type='button' onClick={()=>setIsNewlanguagesHidden(false)} value='X' style={{marginLeft: 10}}/>
          <input type='button' onClick={handleLanguageApply} value='Apply' style={{marginLeft: 10}}/>
          </Row>
      }
      {!isNewlanguagesHidden && <input type='button' onClick={handleLanguageAdd} value='+' style={{alignSelf: 'start', marginTop: 10}}/>}
    </Section>
  )
}

export default Languages;
