import React from 'react'
import { Container } from 'react-bootstrap';

const backgroundImageUrl = 'background-img2.jpeg'; // Replace with your image URL

const SectionOne = () => {
    return (
        <>

            {/* Section 1 */}
            <section className="your-section-class">
                <Container fluid style={containerStyle}>
                    {/* Overlay */}
                    <div style={overlayStyle}></div>
                    {/* Text */}
                    <div style={textStyle}>
                        <h2 style={{ fontSize: '90px', fontWeight: 'bolder', fontFamily: 'Sans-serif', color: '#000' }}>
                            The ambassadors @ <br /> TFC
                        </h2>
                    </div>
                </Container>
            </section></>
    )
}

const containerStyle = {
    position: 'relative',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center center', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    width: '100%', // Set the width to 100% of the viewport width
    height: '100vh', // Set the desired height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Set text color
    margin: 0, // Reset margin
    padding: 0, // Reset padding
    overflow: 'hidden',
    boxSizing: 'border-box',
    marginBottom: '40px',
};

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: '200px',
    width: '70%', // Adjust to position the overlay to the left
    // maxWidth: '1200px',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust overlay color and opacity
    zIndex: 1,
};

const textStyle = {
    position: 'relative', // Ensure text is above the overlay
    zIndex: 2, // Higher z-index than overlay
    textAlign: 'left',
    marginLeft: '20px',
};

export default SectionOne