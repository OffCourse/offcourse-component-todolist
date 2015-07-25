import React, { PropTypes } from "react";
import classnames from "classnames";
import R from "ramda";
import TodolistItem from "offcourse-component-todolist-item";

class Todolist extends React.Component {

  static propTypes = {
    handleHover: PropTypes.func,
    handleTitleClick: PropTypes.func,
    handleCheckboxClick: PropTypes.func,
    parentId: PropTypes.string,
    collection: PropTypes.array.isRequired
  };

  static defaultProps = {
    handleCheckboxClick: () =>{},
    handleTitleClick: () => {},
    handleHover: () => {}
  };

  constructor(props){
    super(props);
    this.name = "todolist";
  }

  classes(){
    return classnames({
      [this.name]: true
    });
  }

  render() {
    let { parentId, collection, handleHover, handleTitleClick, handleCheckboxClick } = this.props;
    let items = R.mapIndexed((item, index) => {
      return (
        <TodolistItem key={ index } item={ item }
          parentId={ parentId }
          handleHover={ handleHover }
          handleTitleClick={ handleTitleClick }
          handleCheckboxClick={ handleCheckboxClick }/>
      );
    }, collection);

    return (
      <ul className={ this.classes() }>
        { items }
      </ul>
    );
  }
}

export default Todolist;
