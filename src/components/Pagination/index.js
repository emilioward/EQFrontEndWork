import React, { Component } from 'react'
import styled from 'styled-components';

const Paginationpane = styled.div`
  display: inline-block;
  margin: 10px 10px;
  `

const PageLinks = styled.a`
  padding: 10px;
  border: 1px solid #ddd;
  margin: 0 4px;
  transition: background-color .2s;
  &:hover{
    background-color: #ddd;
  }
`

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {activePage: 1};
  }

  // handleSelect(event, selectedEvent) {
  //   const eventKey = selectedEvent.eventKey;
  //   const activePage = this.state.activePage;
  //
  //   if(eventKey === 'next') {
  //     return this.setState({activePage: activePage + 1});
  //   }
  //
  //   if(eventKey === 'prev') {
  //     return this.setState({activePage: activePage - 1});
  //   }
  //
  //   this.setState({activePage: selectedEvent.eventKey});
  //   }

  render() {
    return (

      <div>
        <Paginationpane>
          <ul class="pagination">
            <PageLinks><a aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></PageLinks>
            <PageLinks><a>1</a></PageLinks>
            <PageLinks><a class="disabled">2</a></PageLinks>
            <PageLinks><a>3</a></PageLinks>
            <PageLinks><a class="active">4</a></PageLinks>
            <PageLinks><a>5</a></PageLinks>
            <PageLinks><a aria-label="Next"><span aria-hidden="true">&raquo;</span></a></PageLinks>
          </ul>
        </Paginationpane>
        {/* <Pagination items={2} activePage={this.state.activePage} onSelect={this.handleSelect.bind(this)} /> */}
      </div>

    );
  }
}
