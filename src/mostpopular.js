
import React, { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { LikeOutlined,MessageOutlined,QuestionOutlined  } from '@ant-design/icons';
import axios from 'axios';
import { Container,Row,Col } from 'react-bootstrap';

function MostPopular() {
  const [count, setCount] = useState(0);
  const [lastEntry, setLastEntry] = useState('');

  const handleLikeClick = async () => {
    try {
      // Increment the like count locally
      const updatedCount = count + 1;
      setCount(updatedCount);

      // Send a POST request to update the like count on the server
      await axios.post(`${ process.env.REACT_APP_BACKEND_URL }/api/articles/incrementLikeCount`, { count });
    } catch (error) {
      console.error('Error updating like count:', error);
    }
  };


  
  useEffect(() => {
    // Fetch last entry from backend when component mounts
    axios.get('https://sub-g9y6.onrender.com/api/last-entry')
        .then(response => {
            setLastEntry(response.data);
            console.log(response.data)
        })
        .catch(error => {
            console.error('Error fetching last entry:', error);
        });
}, []);

  return (
     
    <>
      <div className='MP'>
        <h2 style={{paddingLeft:'0px'}}>Most Popular</h2>

      </div >
      
     
      
        
           <div className='contt'>

      
             <div className='containe'>
               
                 
                   <div className='card'>
                    <div>
                       <p className='LIFESTYLE' style={{color:'grey',fontSize:'25px'}}>LIFESTYLE</p>
                    </div>
                    <div className='image-box'>
                      <img src="https://cdn.myhealthteams.com/graphic/624f0875d9e5c82370698a33/wquotes/MHT_DiabetesTeam_Article4_Carousel-ed78ed5eafedbd6441ab653583e9633c.webp?1678758980" className='C1' alt=""/>
                    </div>
                    <div className='Title'>
                       <h4 className='Life'>Life After 65 With Diabetes</h4>
                    </div>
                    <div className='logoimg'>
                      <img src="https://media.istockphoto.com/id/471629610/vector/caduceus-medical-symbol.jpg?s=1024x1024&w=is&k=20&c=vpQgpAb9OmQFkJYsCmhjlsiO6S68KUiBOukrhQKYwcg=" className="doctor" alt=''/>
                       <p className='medically'>Medically reviewed by Robert Hurd, M.D.</p>
                    </div>
                    <div className='anticons'>
                       <LikeOutlined onClick={ handleLikeClick }  style={{ fontSize: '24px', color: 'grey', paddingBottom:'10px'}}/>
                      <span style={{ color: 'grey',paddingLeft:'5px' }} className='likeann'>{count}</span>
                      <a href='' className='likean'> <MessageOutlined style={{ fontSize: '24px', color: 'grey', paddingLeft:'4px' }}/></a>
                      <p style={{ color: 'grey' }} className='grey'>558</p>
                      <a href='' className='likean'> <QuestionOutlined  style={{ fontSize: '24px', color: 'grey', paddingLeft:'5px'}}/></a>
                      <p style={{color:'grey', paddingLeft:'2px'}} className='grey'>8</p>
                    </div>
                  </div>
        
            
         </div>  
         <div className='containe2'>
               
                 
                   <div className='card'>
                    <div>
                       <p className='LIFESTYLE' style={{color:'grey',fontSize:'25px'}}>SYMPTOMS</p>
                    </div>
                    <div className='image-box'>
                    <img src="https://cdn.myhealthteams.com/graphic/64db86c1566d076f45010d66/wquotes/Diabetes_1200x630_Black_Toenails-b3770d7100c121ca499cdfff87b47920.webp?1692108480" className='C2' alt=""/>

                    </div>
                    <div className='Title'>
                       <h4 className='Life'>Member Perspective: How I Manage My A1c Levels</h4>
                    </div>
                    <div className='logoimg'>
                      <img src="https://media.istockphoto.com/id/471629610/vector/caduceus-medical-symbol.jpg?s=1024x1024&w=is&k=20&c=vpQgpAb9OmQFkJYsCmhjlsiO6S68KUiBOukrhQKYwcg=" className="doctor" alt=''/>
                       <p className='medically'>
Medically reviewed by Kiran Chaudhari</p>
                    </div>
                    <div className='anticons'>
                      <a href='' className='likean'> <LikeOutlined style={{ fontSize: '24px', color: 'grey' }}/></a>
                      <p style={{ color: 'grey' }} className='grey'>120</p>
                      <a href='' className='likean'> <MessageOutlined style={{ fontSize: '24px', color: 'grey' }}/></a>
                      <p style={{ color: 'grey' }} className='grey'>16</p>
                      <a href='' className='likean'> <QuestionOutlined  style={{ fontSize: '24px', color: 'grey' }}/></a>
                      <p style={{color:'grey'}} className='grey'>1</p>
                    </div>
                  </div>
              
      
         </div>
         <div className='containe3'>
               
            
                   <div className='card'>
                    <div>
                       <p className='LIFESTYLE' style={{color:'grey',fontSize:'25px'}}>LIFESTYLE</p>
                    </div>
                    <div className='image-box'>
                    <img src="https://cdn.myhealthteams.com/graphic/624e0cbfd9e5c8675cbe905f/wquotes/HowIManageMyA1CLevels_Carousel-1e358cf776d7f0494bb7e9fb371623e6.webp?1678758977 " className='C3' alt=""/>

                    </div>
                    <div className='Title'>
                       <h4 className='Life'>Black Toenails With Diabetes: 5 Possible Causes</h4>
                    </div>
                    <div className='logoimg'>
                      
                       <p className='medically'>Written by Barbara Cobuzzi</p>
                    </div>
                    <div className='anticons'>
                      <a href='' className='likean'> <LikeOutlined className="lik" style={{ fontSize: '24px', color: 'grey' }}/></a>
                      <p style={{ color: 'grey' }} className='grey'>651</p>
                      <a href='' className='likean'> <MessageOutlined style={{ fontSize: '24px', color: 'grey' }}/></a>
                      <p style={{ color: 'grey' }} className='grey'>94</p>
                      <a href='' className='likean'> <QuestionOutlined  style={{ fontSize: '24px', color: 'grey' }}/></a>
                      <p style={{color:'grey'}} className='grey'>4</p>
                    </div>
                  </div>
              </div>

              <div className='containe2'>
               
                 
               <div className='card'>
                <div>
                   <p className='LIFESTYLE' style={{color:'grey',fontSize:'25px'}}>{lastEntry.title}</p>
                </div>
                <div className='image-box'>
                <img src={`data:image/jpeg;base64,${lastEntry.file}`}  className='C2' alt="file" />
                </div>
                <div className='Title'>
                   <h4 className='Life'> {lastEntry.subtitle}</h4>
                </div>
                <div className='logoimg'>
                  <img src="https://media.istockphoto.com/id/471629610/vector/caduceus-medical-symbol.jpg?s=1024x1024&w=is&k=20&c=vpQgpAb9OmQFkJYsCmhjlsiO6S68KUiBOukrhQKYwcg=" className="doctor" alt=''/>
                   <p className='medically'>{lastEntry.review}</p>
                </div>
                <div className='anticons'>
                  <a href='' className='likean'> <LikeOutlined style={{ fontSize: '24px', color: 'grey' }}/></a>
                  <p style={{ color: 'grey' }} className='grey'>120</p>
                  <a href='' className='likean'> <MessageOutlined style={{ fontSize: '24px', color: 'grey' }}/></a>
                  <p style={{ color: 'grey' }} className='grey'>16</p>
                  <a href='' className='likean'> <QuestionOutlined  style={{ fontSize: '24px', color: 'grey' }}/></a>
                  <p style={{color:'grey'}} className='grey'>1</p>
                </div>
              </div>
          
  
     </div>
                      
                      
        
              
        
        </div>
      
   
        </>   
   
    
  );
}

export default MostPopular;
