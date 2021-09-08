import React from 'react';
import {
  Accordion as ReactAccordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Accordion = props => {
  const { items } = props;
  return (
    <ReactAccordion allowZeroExpanded>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionItemHeading>
            <AccordionItemState>
              {({ expanded }) => {
                console.log('expanded', expanded);
                return (
                  <>
                    <AccordionItemButton>{item.heading}</AccordionItemButton>
                    {expanded ? <div>I am expanded</div> : null}
                  </>
                );
              }}
            </AccordionItemState>
          </AccordionItemHeading>
          <AccordionItemPanel>{item.content}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </ReactAccordion>
  );
};

export default Accordion;
