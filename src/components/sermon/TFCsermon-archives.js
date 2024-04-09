import React from 'react';
import Style from './sermon.module.css'
import { Link, Outlet,useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
const NavLink = ({ to, children }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const isCurrentPath = pathname === to.toLowerCase();

  return (
    <Link to={to} style={{ fontWeight: isCurrentPath ? 'bold' : 'normal', borderBottom:isCurrentPath? "1px solid black": "1px solid transparent" }}>
      {children}
    </Link>
  );
};

const TFCsermonarchives = () => {
  
  return (
    <div className={Style.Sermon}>
      <h1>Sermon Archives</h1>
      <div className={Style.wrapper}>
        <div className={Style.tab}>
          <NavLink to={'/sermons/recent'} >Recent</NavLink>
          <NavLink to={'/sermons/topic'}>Topic</NavLink>
          <NavLink to={'/sermons/speaker'}>Speaker</NavLink>
          <NavLink to={'/sermons/scripture'}> Scripture</NavLink>
        </div>
        <input type='search' placeholder='search Here' />
      </div>
      <Outlet />
    </div>
  )
}

export default TFCsermonarchives
