import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import NewReleaseSlider from './NewReleaseSlider';
import { BsChevronRight} from 'react-icons/bs';
function NewContentTab() {
    const [key, setKey] = useState('all');
  
    return (
        <div className="tab-wrapper">
        <div className='container-fluid' >
          <div className="row">
            <div className="col-sm-12">  
            <Link to ="/newrelease" style={{color : 'black' , textDecoration: 'none', fontSize:'1.5rem'}} > 최신음악<BsChevronRight/> </Link> 
              <Tabs defaultActiveKey="all" className='bg-none' >
                <Tab eventKey="all" title="전체" >
                  <div className="tab-item-wrapper" style={{padding:10}}>
                    <NewReleaseSlider/>
                  </div>
                </Tab>
  
                <Tab eventKey="domestic" title="국내" >
                <div className="tab-item-wrapper">
                  </div>
                </Tab>
  
                <Tab eventKey="oversea" title="해외">
                  <div className="tab-item-wrapper">
                    
                  </div>
                </Tab>
              </Tabs>
  
            </div>
          </div>
        </div>
      </div>
      );}

export default NewContentTab