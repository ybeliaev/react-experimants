import React from "react";
import "./list-item.css";

const ListItem = props => {
  let classNames = "wrapper-list-item";
  const { label, addItem } = props;
  return (
    <span className={classNames}>
      <span className="list-item-label">{label}</span>
      <button className="btn btn-exclamation" onClick={() => addItem()}>
        <i className="fa fa-exclamation" />
      </button>
      <button type="button" className="btn btn-trash">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};
export default ListItem;
