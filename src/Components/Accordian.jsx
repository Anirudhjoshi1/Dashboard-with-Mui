import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Accordian() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Mac Books
        </AccordionSummary>
        <AccordionDetails>
        MacBook is a brand of Mac notebook computers developed and marketed by Apple that use Apple's macOS operating system since 2006.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
            Samsung Oled TV
        </AccordionSummary>
        <AccordionDetails>
        An OLED TV is a type of television that relies on OLED display technology to render images on your television panel.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Motorola g series
        </AccordionSummary>
        <AccordionDetails>
        The Moto G is an Android smartphone developed and manufactured by Motorola Mobility, at the time a subsidiary of Google 
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          I phones
        </AccordionSummary>
        <AccordionDetails>
        The iPhone is a line of smartphones developed and marketed by Apple that run iOS, the company's own mobile operating system. The first-generation iPhone was announced by then–Apple CEO Steve Jobs on January 9, 2007, at Macworld 2007, and launched later that year.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}