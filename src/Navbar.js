import React, { useState } from 'react';
import { Menu, Image, Input } from "antd";
import { SearchOutlined, AppstoreOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  
  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
  };

  
  return (
    <>
    
    
    <div className={showSearch ? 'Navbar sticky' : 'Navbar'}>

      <div className='menuout'>
        {/* Correct way to use Font Awesome icon */}
        <FontAwesomeIcon icon={faBars} size="xl" style={{ color: "#ffffff" }} />
      </div>

        <div className='img'>
        <Image
          width={40}
          src="https://www.diabetesteam.com/assets/mht/mht_white-5725ef4703b0e8108f8637304e8b093ba2948dc080f86abf78ea8f678d9f9972.png"
        />
      </div>   

   

      
      

      <div className='searchout'>
        <FontAwesomeIcon icon={faSearch} size="xl" style={{ color: "#f7f7f7" }} />      
      </div>
      


    
    </div>

    </>
  );
}