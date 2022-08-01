import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
const img = {
    display: "block",
    width: '80%',
    height: 'this.width'
  };

function BuyMusic() {
  return (
    <div style={{display:"block"}}>
        <h1>MP3 음원 구매</h1>
        <p>다운로드한 MP3는 평생 소장 가능</p>
        <hr/>
        <Container>
            <Col>
                <Row>
                <img style={img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5VkMmhknEb895CA4qQ6ZhKQpyOcT-xsocg&usqp=CAU"/>
                <p>하지마<br/>TOYSTORY3<br/>릴러말즈, 토일</p>
                </Row>
                <Row>약관</Row>
            </Col>
            <Col>
                <Row>
                    <h1>결제</h1>
                    <h2>보유금액 :</h2>
                </Row>
                <Row>잔액, 버튼</Row>
            </Col>
        </Container>
    </div>
  )
}

export default BuyMusic