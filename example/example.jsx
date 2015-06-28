import React from "react";
import Todolist from "../src/index.jsx";
class Example extends React.Component {

  constructor(props){
    super(props);

    let collection = [
      {
        id: 0,
        title: "Foo Bar"
      },
      {
        id: 1,
        title: "Foo Bar",
        complete: true
      },
      {
        id: 2,
        title: "Foo Bar"
      }
    ];

    this.state = { collection };
  }
  handleHover(id){
    let { collection } = this.state;
    collection[id].highlight = !collection[id].highlight;
    this.setState({collection});
  };

  handleTitleClick({id}){
    let { collection } = this.state;
    let selection = collection[id];
    this.setState({selection});
  };

  handleCheckboxClick(id){
    let { collection } = this.state;
    collection[id].complete = !collection[id].complete;
    this.setState({collection});
  };

  render() {
    let { collection, selection } = this.state;
    return (
      <section>
        <Todolist
          handleTitleClick={ this.handleTitleClick.bind(this) }
          handleCheckboxClick={ this.handleCheckboxClick.bind(this) }
          handleHover={ this.handleHover.bind(this) }
          collection={ collection }/>
          <p>Selection: { JSON.stringify(selection) || "click title" }</p>
      </section>
    );
  }
}

export default Example;

/*eslint no-alert:0 */
/*eslint no-undef:0 */
