
import React from 'react'
import { Menu, Image, Input  } from "antd";
import { SearchOutlined,AppstoreOutlined, } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';






export default function SecondHeader() {
  return (
    
    
    <div className='secondNavbar'>
        <div className='HomeIcon'>
        <FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#8c8c8c",}} />
        </div>
       <div className='Resources'>
          <a  href='' style={{ color: 'grey' }} className='A'><h3 className='AA'>Resources</h3></a>
        </div>
        <div className='QA'>
          <a href='' className='Q'><h3 className='QQ'>Q&A</h3></a>
        </div>
        <div className='meatothers'>
          <a href='' className='M' ><h3 className='MM'>MeetOthers</h3></a>
  </div> 
    </div>
    
    
  )
}

