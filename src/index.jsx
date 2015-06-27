import React from "react";
import classnames from "classnames";
import R from "ramda";
import TodolistItem from "offcourse-component-todolist-item";

class Todolist extends React.Component {
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
    let { collection, handleHover, handleTitleClick, handleCheckboxClick } = this.props;
    let items = R.mapIndexed((item, index) => {
      return (
        <TodolistItem key={ index } item={ item }
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

Todolist.defaultProps = {
  handleCheckboxClick: () =>{},
  handleTitleClick: () => {},
  handleHover: () => {}
};

Todolist.propTypes = {
  handleHover: React.PropTypes.func,
  handleTitleClick: React.PropTypes.func,
  handleCheckboxClick: React.PropTypes.func,
  collection: React.PropTypes.array.isRequired
};

export default Todolist;
/*eslint no-unused-vars:0 */
