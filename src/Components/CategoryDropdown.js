import React, { Component } from "react";
import { Select, Option } from "./CategoryDropdown.style";
import { connect } from "react-redux";
import { changeCategory } from "../Redux/Actions/Category";

class CategoryDropdown extends Component {
  handleChange = (e) => {
    this.props.changeCategory(e.target.value);
  };
  render() {
    const { categories } = this.props;
    return (
      <Select onChange={this.handleChange}>
        {categories.map((category) => (
          <Option key={category.name}>{category.name}</Option>
        ))}
      </Select>
    );
  }
}

export default connect(null, { changeCategory })(CategoryDropdown);
