import React, {useState} from 'react';
import { Button, Space } from 'antd';

// const TagButton = () => (
//   <Space wrap>
//     <Button>Default Button</Button>
//   </Space>
// );
// export default TagButton;

function TagButton() {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div>
      <Button onClick={toggleImage}>Guard</Button>
      {showImage && <img src="https://images.pexels.com/photos/18201343/pexels-photo-18201343/free-photo-of-woman-with-eyes-closed-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder" />}
    </div>
  );
}

export default TagButton;