import React, { PropTypes } from "react";
import classnames from "classnames";
import R from "ramda";
import Radium from "radium";
import TodolistItem from "offcourse-component-todolist-item";
import Styles from "./styles";

@Radium
class Todolist extends React.Component {

  static propTypes = {
    handleHover: PropTypes.func,
    handleTitleClick: PropTypes.func,
    handleCheckboxClick: PropTypes.func,
    collection: PropTypes.array.isRequired,
    theme: PropTypes.object
  };

  static defaultProps = {
    handleCheckboxClick: () =>{},
    handleTitleClick: () => {},
    handleHover: () => {},
    theme: {}
  };

  constructor(props){
    super(props);
    const { theme } = this.props;
    this.styles = new Styles(theme);
    this.name = "todolist";
  }

  classes(){
    return classnames({
      [this.name]: true
    });
  }

  render() {
    const { collection, handleHover, handleTitleClick, handleCheckboxClick } = this.props;
    const { base } = this.styles;
    const items = R.mapIndexed((item, index) => (
      <TodolistItem key={ index } item={ item }
        handleHover={ handleHover }
        handleTitleClick={ handleTitleClick }
        handleCheckboxClick={ handleCheckboxClick }/>
    ), collection);

    return (
      <ul style={ [base] }className={ this.classes() }>
        { items }
      </ul>
    );
  }
}

export default Todolist;
