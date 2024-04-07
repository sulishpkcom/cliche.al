import React from 'react';
import { Tabs } from 'antd';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Categories',
    children: <Tab1 />,
  },
  {
    key: '2',
    label: 'Collections',
    children: <Tab2 />,
  },
];
const CategoriesTabContent = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default CategoriesTabContent;