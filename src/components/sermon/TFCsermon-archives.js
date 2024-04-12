import React from 'react';
import SermonComponent from './SermonComponent';
import Style from './sermon.module.css'
import { Link, Outlet } from 'react-router-dom';

const TFCsermonarchives = () => {
  return (
    <div className={Style.Sermon}>
      <h1>Sermon Archives</h1>
      <div className={Style.wrapper}>
        <div className={Style.tab}>
          <Link to={'/sermons/recent'}>Recent</Link>
          <Link to={'/sermons/topic'}>Topic</Link>
          <Link to={'/sermons/speaker'}>Speaker</Link>
          <Link to={'/sermons/scripture'}> Scripture</Link>
        </div>
        <input type='search' placeholder='search Here' />
      </div>
      <Outlet />
    </div>
  )
}

export default TFCsermonarchives
