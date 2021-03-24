import React, { useState } from 'react'
import styled from 'styled-components';

import Section from '../Section'

let themeData = {
  theme: '',
  colours: [
    {primary1: '#FA8072'},
    {primary2: '#9FE2BF'},
    {secondary1: ''},
    {secondary2: ''},
    {secondary3: ''},
    {highlight1: ''},
    {highlight2: ''}
  ],
  fonts: [
    {font1: ''},
    {font2: ''},
    {font3: ''},
  ]
}
const Theme = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");

  const setColor = (e) => {
     let updatedColours = themeData.colours.map(colour => {
      return Object.keys(colour)[0] == e.target.name ? {[e.target.name] : e.target.value}: colour
    })
    themeData = {...themeData, colours: updatedColours}
  }

  const setTheme = (e) => {
    console.log(e.target.value)
    themeData.theme = e.target.value
  }

  const onChangeFile = (e) => {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    setFiles([...files, ...filesArr]);
  }

  const removeFile = (f) => {
    setFiles(files.filter(x => x !== f)); 
}

console.log('////', files)
  return (
    <Section title={'THEME & APPERANCE'}>
      <div style={{marginBottom: 20}}>
        <label>
          THEME:
          <select style={{marginLeft: 30}} onChange={setTheme}>
            <option value='CASSETTE HARD EDGE'>CASSETTE HARD EDGE</option>
            <option value='CASSETTE SOFT EDGE'>CASSETTE SOFT EDGE</option>
            <option value='CASSETTE COOL'>CASSETTE COOL</option>
          </select>
        </label>
      </div>
      <div style={{display:'flex', marginBottom: 20}}>
        <div>
          COLORS:
        </div>
        <div>
          <div style={{marginBottom: 5}}>
            <input
              type='color'
              value={themeData.colours[0].primary1}
              id='primary1'
              name='primary1'
              style={{marginLeft: 20}}
              onChange={setColor}
            />
            <span style={{marginLeft: 20}}>PRIMARY 1</span>
          </div>
          <div style={{marginBottom: 15}}>
            <input
              type='color'
              value={themeData.colours[1].primary2}
              id='primary2'
              name='primary2'
              style={{marginLeft: 20}}
              onChange={setColor}
            />
            <span style={{marginLeft: 20}}>PRIMARY 2</span>
          </div>
          <div style={{marginBottom: 5}}>
            <input
              type='color'
              value={themeData.colours[2].primary3}
              id='secondary1'
              name='secondary1'
              style={{marginLeft: 20}}
              onChange={setColor}
            />
            <span style={{marginLeft: 20}}>SECONDARY 1</span>
          </div>
          <div style={{marginBottom: 5}}>
            <input
              type='color'
              value={themeData.colours[3].primary4}
              id='secondary2'
              name='secondary2'
              style={{marginLeft: 20}}
              onChange={setColor}
            />
            <span style={{marginLeft: 20}}>SECONDARY 2</span>
          </div>
          <div style={{marginBottom: 15}}>
            <input
              type='color'
              value={themeData.colours[4].primary5}
              id='secondary3'
              name='secondary3'
              style={{marginLeft: 20}}
              onChange={setColor}
            />
            <span style={{marginLeft: 20}}>SECONDARY 3</span>
          </div>
          <div style={{marginBottom: 5}}>
            <input
              type='color'
              value={themeData.colours[5].primary6}
              id='highlight1'
              name='highlight1'
              style={{marginLeft: 20}}
              onChange={setColor}
            />
            <span style={{marginLeft: 20}}>HIGHLIGHT 1</span>
          </div>
          <div style={{marginBottom: 10}}>
            <input
              type='color'
              value={themeData.colours[6].primary7}
              id='highlight2'
              name='highlight2'
              style={{marginLeft: 20}}
              onChange={setColor}
            />
            <span style={{marginLeft: 20}}>HIGHLIGHT 2</span>
          </div>
        </div>
      </div>
      <section style={{display:'flex', marginBottom: 20}}>
         <div>
          FONTS:
        </div>
        <div style={{marginLeft:30}}>
        <label className="custom-file-upload">
          <input type="file" multiple onChange={onChangeFile} />
          <i className="fa fa-cloud-upload" /> Attach
        </label>
        {files.length > 0 && files[0].name}
        {files.map(x => 
           <div className="file-preview" onClick={removeFile(x)}>{x.name}</div>
         )}
        </div>
      </section>
    </Section>
  )
}

export default Theme