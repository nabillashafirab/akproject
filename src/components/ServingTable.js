import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = "geekblue";
          if (tag === "Top Operator") {
            color = "gold";
          } else if (tag === "Senior Operator") {
            color = "yellow";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Operators",
    key: "operators",
    dataIndex: "operators",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = "white";
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

export default columns;
