import React from 'react';
import { Button, Space } from 'antd';

const TagButton = ({children, onTagClick}) => (
  <Space wrap>
    <Button type="primary" onClick={onTagClick}>
      {children}
    </Button>
  </Space>
);
export default TagButton;