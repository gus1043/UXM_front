import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import {BsArrowDownCircle} from 'react-icons/bs'
const img = {
  display: "block",
  width: '10vh',
  height: 'this.width'
};
function Download() {
  return (
    <div >
    <h1>다운로드</h1>
    <p>전체00곡</p>
    <Container>
      <hr/>
      <Row>
        <Col xs={3}></Col>
        <Col xs={3}>곡 제목</Col>
        <Col xs={3}>앨범 명</Col>
        <Col xs={3}>가수명</Col>
        <Col >다운로드</Col>
      </Row>
      <hr/>
      <Row>
        <Col> <img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/638/7638708.jpg?type=r480Fll&v=20220705115639" alt="열이올라요"/></Col>
        <Col xs={3}>열이 올라요 (Heart Burn)</Col>
        <Col xs={3}>열이 올라요 (Heart Burn)</Col>
        <Col xs={3}>선미</Col>
        <Col><BsArrowDownCircle/></Col>
      </Row>
      <hr/>
      

    </Container>
    </div>
  )
}

export default Download