import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';

const CategoryOptions = [
  {value: 0, label: "연령/성별"},
  {value: 1, label: "유입 해시태그"},
]

function MusicAnalysis() {
  const [Category, setCategory] = useState("연령별");

  const onCategoryChange = (e) => {
    setCategory(e.currentTarget.value)
}
  return (
    <div style={{textAlign:"center"}}>
      <div style={{height: '0px'}}>
            <Header />
      <div style={{height: '10px'}}>
        </div>
      <Container>
        <Row>
            <Col>
            <label>조회수</label>
            <div style={{
            width:'100%',
            height:'200px',
            border:'.2rem solid #ececec',
            borderRadius:'4px',
            padding:'1rem',
            marginBottom:'1rem',
            overflowY:'auto'
        }}></div>
            </Col>


            <Col>
            <label>리스너 분석</label>
            <div style={{
            width:'100%',
            height:'200px',
            border:'.2rem solid #ececec',
            borderRadius:'4px',
            padding:'1rem',
            marginBottom:'1rem',
            overflowY:'auto'
        }}>
          <select onChange={onCategoryChange}>
            {CategoryOptions.map((item, index) => (
              <option key={index} value={item.value}>{item.label}</option>
               ))}
            </select>


        </div>
            </Col>
        </Row>
        <Col>
            분석할 자료

            </Col>


        
      </Container>

      </div>
   </div>

  )
}

export default MusicAnalysis