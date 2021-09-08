import React from 'react';
import './style.css';
import Accordion from './Accordion';

export default function App() {
  const items = [...Array(5)].map((item, index) => ({
    uuid: 1,
    heading: `Heading - ${index}`,
    content: ' Contrary to popular belief'
  }));

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}
