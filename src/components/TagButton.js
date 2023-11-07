import React, { useState } from "react";
import { Button, Space } from "antd";

const TagButton = ({ children, onTagClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    onTagClick(children, isClicked);
  };

  return (
    <Space wrap>
      <Button
        type={isClicked ? "default" : "primary"}
        onClick={handleButtonClick}
      >
        {children}
      </Button>
    </Space>
  );
};

export default TagButton;
