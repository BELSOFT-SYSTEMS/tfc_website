import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const TFCkids = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setShowButton(true);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="your-section-class">
        <Container fluid style={{ display: 'flex', justifyContent: 'space-around', paddingBottom:'30px', marginBottom:'30px'}}>
          {/* Card 1 */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="ambassadors.jpeg" />
            <Card.Body style={{backgroundColor:'#d49c04', color:'#fff'}}>
              <Card.Title>Ambassadors.</Card.Title>
              <Card.Text>
                Sunday programming is available for children from 3 months to Grade 5. Our programming includes everything from digital check-in and parental paging codes, to age-specific teaching and music, activities and crafts!

              </Card.Text>
              <div
                style={{
                  transition: 'opacity 0.5s ease',
                  opacity: showButton ? 1 : 0,
                }}
              >
                {showButton && (
                  <Button
                    variant="warning"
                    onClick={() => setShowButton(false)}
                    style={{
                      backgroundColor: '#fff',
                      color: '#000',
                      transform: `translateY(${showButton ? 0 : '20px'})`,
                      transition: 'transform 0.5s ease',
                    }}
                  >
                    Click Me
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
          {/* Card 2 */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="lightbearers.jpeg" />
            <Card.Body style={{backgroundColor:'#012101', color:'#fff'}}>
              <Card.Title>Lightbearers.</Card.Title>
              <Card.Text>
                Sunday programming is available for youth from Grade 5 to Grade 8. Our programming includes everything from safe digital check-in, to hang out time, games, age-specific teaching, worship and connect groups.  

              </Card.Text>
              <div
                style={{
                  transition: 'opacity 0.5s ease',
                  opacity: showButton ? 1 : 0,
                }}
              >
                {showButton && (
                  <Button
                    variant="warning"
                    onClick={() => setShowButton(false)}
                    style={{
                      backgroundColor: '#fff',
                      color: '#000',
                      transform: `translateY(${showButton ? 0 : '20px'})`,
                      transition: 'transform 0.5s ease',
                    }}
                  >
                    Click Me
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default TFCkids;