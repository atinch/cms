import styled from 'styled-components';
import {useState, useRef} from 'react';

import Languages from '../components/sections/Languages'
import ActiveFeatures from '../components/sections/ActiveFeatures'
import Theme from '../components/sections/Theme'

export const Container = styled.div`
  min-width: 500px;
  max-width: 500px;
  display: flex;
  background: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 50px auto;
`;

const CMS = () => {
  const [languages, setLanguages] = useState([
    {code: 'EN', value: 'ENGLISH'},
    {code: 'AR', value: 'ARABIC'},
    {code: 'FR', value: 'FRENCH'}
  ])

  const AddNewLanguage = (newLanguage) => {
    setLanguages([...languages, newLanguage])
  }

  const DeleteLanguage = (languageIndex) => {
    const arr = [...languages]
    arr.splice(languageIndex,1)
    setLanguages(arr)
  }
  const SortArray = (old_index, new_index) => {
    if(new_index < 0 || new_index > languages.length -1) {
      return
    }
    const arr = [...languages]
    arr.splice(new_index,1,arr[old_index])
    arr.splice(old_index,1,arr[new_index])
    setLanguages(arr)
  }

  return(
    <Container>
      <Languages
        languages={languages}
        AddNewLanguage={AddNewLanguage}
        SortArray={SortArray}
        DeleteLanguage={DeleteLanguage} 
      />
      <ActiveFeatures />
      <Theme />
    </Container>
  )
}

export default CMS;
