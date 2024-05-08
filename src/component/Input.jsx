import React from 'react';

import { Button, Input,  Space } from 'antd';


const App = () => (
  <Space direction="vertical" size="middle">
    
    
    <Space.Compact
      style={{
        width: '100%',
      }}
    >
      <Input placeholder='exemple@gmail.com' />
      <Button type="primary">Surprise</Button>
    </Space.Compact>
    
    
  </Space>
);
export default App;