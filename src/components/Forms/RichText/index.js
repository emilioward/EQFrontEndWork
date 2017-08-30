import React, {Component} from 'react'
import RichTextEditor, {createEmptyValue} from 'react-rte'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  min-height: 250px;
  font-family: sans-serif;
  margin-bottom: 16px;
`;

const RTE = styled(RichTextEditor)`
  width: 45%;
  padding-top: 10px;
`;

export default class RichTextArea extends Component{

  constructor(props) {
    super(props);
    this.state = {
      value: createEmptyValue()
    }
  }

  onChange = (value) => {
    this.setState({value})
    //this.props.onChange(value.toString('html'))
    // const values = new Map(Object.entries(value.getEditorState().toJS().currentContent.blockMap))
    // console.log('---------');
    // for (value of values) {
    //   console.log(value);
    // }
  }

  render() {

    const toolbarConfig = {
      display: [
        'INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'BLOCK_TYPE_DROPDOWN'
      ],
      INLINE_STYLE_BUTTONS: [
        {
          label: 'Bold',
          style: 'BOLD',
          className: 'custom-css-class'
        }, {
          label: 'Italic',
          style: 'ITALIC'
        }
      ],
      BLOCK_TYPE_DROPDOWN: [
        {label: 'Normal', style: 'unstyled'},
        {label: 'Heading Large', style: 'header-one'},
        {label: 'Heading Medium', style: 'header-two'},
        {label: 'Heading Small', style: 'header-three'}
      ],
      BLOCK_TYPE_BUTTONS: [
        {
          label: 'UL',
          style: 'unordered-list-item'
        }, {
          label: 'OL',
          style: 'ordered-list-item'
        }
      ]
    }
    return (
      <div id="content">
        <div className="Richtexteditor">
          <h1>RichText Editor</h1>
          <Wrapper>
            <RTE className="rte" value={this.state.value} toolbarConfig={toolbarConfig} onChange={this.onChange}/>
          </Wrapper>
        </div>
      </div>
    );
  }
}
