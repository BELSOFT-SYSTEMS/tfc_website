import React, { useState } from 'react';
import { Tab, Tabs,  Container, Row, Col, ButtonGroup, Button,  ListGroup, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChurch,  faCalendarAlt, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';




const Journey = () => {
  const [activeKey, setActiveKey] = useState('eden');

  const handleSelect = (key) => {
    setActiveKey(key);
  };


  return (
    <div style={{paddingTop:'20px', paddingBottom:'40px'}}>
      <Container style={{justifyContent:'left', textAlign:'left', marginTop:'30px', marginBottom:'20px'}}>
        <h2 style={{fontSize:'65px',fontWeight:'bolder'}}> Where are you on your journey?</h2>
        <h3 style={{fontSize:'25px', fontWeight:'bold'}}>STEP 1: COMPLETE THE SELF-ASSESSMENT</h3>
        <p style={{fontSize:'15px'}}>Everyone’s journey looks a little different, and can shift depending on the season of life you’re in. Where are you in your journey to becoming a fully devoted follower of Christ? </p>
        <Button variant="warning" style={{ backgroundColor: '#d49c04', color:'#000'  }}>COMPLETE THE SELF ASSESSMENT</Button>
        </Container>
        <Container style={{justifyContent:'left', textAlign:'left', marginTop:'30px', marginBottom:'20px'}}>
        <h3 style={{fontSize:'25px', fontWeight:'bold'}}>STEP 2: CHOOSE AN AREA OF DISCIPLESHIP TO GROW IN</h3>
        <p style={{fontSize:'15px'}}>Based on the results of your self-assessment, choose an area of discipleship that you’d like to go deeper with this next season. Below are some ways in which<br/> you can work on each of the discipleship disciplines. Not sure which area to focus on? Your site pastor can help to prayerfully guide you in your discipleship.  </p>
        <Tabs defaultActiveKey="CELEBRATE BIG" id="justify-tab-example" className="mb-3" justify>
      <Tab eventKey="CELEBRATE BIG" title={<div style={{ backgroundColor: '#fff', padding: '5px', borderRadius: '5px' }}><img src="together-logo.png" alt='together' style={{width: '30px', height: '30px', marginRight: '10px' }}/> CELEBRATE BIG</div>}>
      <ul>
    <li>Prioritize church attendance in your schedule</li>
    <li>Come with an attitude of engagement and expectancy</li>
    <li>Set a goal to come on time by setting your morning alarm 15 minutes early</li>
    <li>Take notes during messages</li>
    <li>Sit closer to the front</li>
  </ul>
      </Tab>
      <Tab eventKey="CONNECT SMALL" title={<div style={{ backgroundColor: '#fff', padding: '5px', borderRadius: '5px' }}><img src="together-logo.png" alt='together' style={{width: '30px', height: '30px', marginRight: '10px' }}/> CONNECT SMALL</div>}>
      <ul>
    <li>Learn more about The Fathers Church Connect Groups</li>
    <li>Step up to host or lead a group</li>
    <li>Sign up for Group Launch</li>
    <li>Browse our open Connect Groups and try one out for a term</li>
    <li>Can’t find a group or no upcoming Group Launch events? Let us know you're interested and we'll match you up</li>
    <li>Commit to encouraging a Connect Group member’s spiritual growth</li>
    <li>Make plans to grab a coffee with people in your Connect Group</li>
    <li>Share your story with your group</li>
  </ul>
      </Tab>
      <Tab eventKey="WALK WITH JESUS" title={<div style={{ backgroundColor: '#fff', padding: '5px', borderRadius: '5px' }}><img src="together-logo.png" alt='together' style={{width: '30px', height: '30px', marginRight: '10px' }}/> WALK WITH JESUS</div>}>
      <ul>
    <li>Spend time alone with Jesus every day. Learn more here</li>
    <li>Use an online devotional like YouVersion. You can choose a daily verse or a daily study plan </li>
    <li>Increase your time alone with Jesus by 5 or 15 minutes</li>
    <li>Consider a step to more fully Renew Your Mind here </li>
    <li>Listen to Spiritual Practices sermon series online at this link</li>
    <li>Choose a spiritual practice to try for a season</li>
    <li>Learn about your “Sacred Pathway” to connecting with God at this link</li>
  </ul>
      </Tab>
      <Tab eventKey="SHARE THE WORK" title={<div style={{ backgroundColor: '#fff', padding: '5px', borderRadius: '5px' }}><img src="together-logo.png" alt='together' style={{width: '30px', height: '30px', marginRight: '10px' }}/> SHARE THE WORK</div>}>
      <ul>
    <li>Listen to Spiritual Gifts sermon series online at this link</li>
    <li>Take a Spiritual Gifts test at this link</li>
    <li>Fill in the Serve Interest Form at this link</li>
    <li>Take on a larger leadership responsibility</li>
    <li>Shadow someone in a volunteer role</li>
  </ul>
      </Tab>
      <Tab eventKey="ENGAGE IN MISSION" title={<div style={{ backgroundColor: '#fff', padding: '5px', borderRadius: '5px' }}><img src="together-logo.png" alt='together' style={{width: '30px', height: '30px', marginRight: '10px' }}/>  MISSION</div>}>
      <ul>
      <li>Invite people to church or Alpha</li>
      <li>Commit to regular financial giving</li>
      <li>Share your faith and show love courageously</li>
      <li>Discuss Mission ideas with your Connect Group</li>
    <li>Learn about a Sanctus Church Local or Global Partner at this link</li>
    <li>Serve with a Sanctus Church Local or Global Partner at this link</li>
    </ul>
      </Tab>
    </Tabs>
        </Container>


    </div>
  )
}

export default Journey
