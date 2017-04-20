import React, { Component } from 'react'
//import styled from 'styled-components';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {activePage: 1};
  }

  handleSelect(event, selectedEvent) {
    const eventKey = selectedEvent.eventKey;
    const activePage = this.state.activePage;

    if(eventKey === 'next') {
      return this.setState({activePage: activePage + 1});
    }

    if(eventKey === 'prev') {
      return this.setState({activePage: activePage - 1});
    }

    this.setState({activePage: selectedEvent.eventKey});
    }

  render() {
    return (
    <div>
      <ul class="pagination"> <li><a aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
        <li><a>1</a></li>
        <li class="disabled"><a>2</a></li>
        <li><a>3</a></li>
        <li class="active"><a>4</a></li>
        <li><a>5</a></li>
        <li><a aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
      </ul>
      <Pagination items={2} activePage={this.state.activePage} onSelect={this.handleSelect.bind(this)} /> 
    </div>
    );
  }
}
