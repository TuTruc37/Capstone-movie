import React from 'react';
import {  Flex, Tag } from 'antd';
const App = () => (
  <>   
    
    <Flex gap="4px 0" wrap>      
      <Tag bordered={false} color="magenta">
        Hai huoc
      </Tag>
      <Tag bordered={false} color="red">
        Vui nhon
      </Tag>
      <Tag bordered={false} color="volcano">
        Disney
      </Tag>
      {/* <Tag bordered={false} color="orange">
        orange
      </Tag>
      <Tag bordered={false} color="gold">
        gold
      </Tag>
      <Tag bordered={false} color="lime">
        lime
      </Tag>
      <Tag bordered={false} color="green">
        green
      </Tag>
      <Tag bordered={false} color="cyan">
        cyan
      </Tag>
      <Tag bordered={false} color="blue">
        blue
      </Tag>
      <Tag bordered={false} color="geekblue">
        geekblue
      </Tag>
      <Tag bordered={false} color="purple">
        purple
      </Tag> */}
    </Flex>
  </>
);
export default App;