import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionBody,
    Container,
    Row,
    Col,
    Button,
} from 'react-bootstrap';

const SectionThree = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleAccordionClick = (eventKey) => {
        setActiveAccordion((prevActiveAccordion) =>
            prevActiveAccordion === eventKey ? null : eventKey
        );
    };

    return (
        <Container style={{ marginBottom: '70px' }}>
            <Container style={{ justifyContent: 'center', textAlign: 'center', marginBottom: '30px', marginTop: '20px' }}>
                <Row>
                    <Col>
                        <h2 style={{ fontSize: '55px', fontWeight: 'bolder' }}>Sunday Morning's Ambassadorship</h2>
                        <p style={{ fontSize: '20px' }}>Ambassadors programs take place simultaneously with our Sunday morning services. Depending on the size of the site, some programming may be separated out further by age.</p>
                    </Col>
                </Row>
            </Container>
            <Accordion activeKey={activeAccordion} onSelect={handleAccordionClick}>
                <AccordionItem eventKey="1">
                    <AccordionHeader>Biblical Finance Course</AccordionHeader>
                    <AccordionBody>
                        <p>
                            Learn how to be a good steward of your finances with Biblical
                            principles and teachings.
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="2">
                    <AccordionHeader>The Father Church Youth Service</AccordionHeader>
                    <AccordionBody>
                        <p>
                            TFC youth, grades 6 – 12 are invited to join us on Thursday nights
                            from 7:00 – 9:00 pm!
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="3">
                    <AccordionHeader>The Father Church Youth Night</AccordionHeader>
                    <AccordionBody>
                        <p>
                            All youth in grades 6 - 12 are invited to Port Perry Youth meeting
                            weekly on Thursdays from 7 - 9:00 pm.
                        </p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>

        </Container>
    )
}

export default SectionThree