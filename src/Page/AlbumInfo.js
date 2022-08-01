import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function AlbumInfo() {
  return (
    <div>
      <Container>
        <Row>
      <Col><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5VkMmhknEb895CA4qQ6ZhKQpyOcT-xsocg&usqp=CAU"/></Col>
      <Col>
      <Row>
        <h1 style={{textAlign:"start", fontSize:"30px"}}>하지마</h1>
        <h1 style={{textAlign:"start" , fontSize:"18px"}}>TOYSTORY3</h1>
        <h1 style={{textAlign:"start" , fontSize:"15px"}}>릴러말즈, Toil</h1>
        </Row>
        <Row><Link to="/buy"><button>구매하기</button> </Link></Row>
      </Col>
      </Row>
      </Container>
      <hr/>
      <h2>가사</h2>
      <p>
      넌 뭘 해도 예쁘니까 화장하지마<br/>
      스케줄 비워놨으니까 딴 데 가지마<br/>
      I love you so much 조금 뻔하지만<br/>
      더는 아무 말도 내게 하지마<br/>
      Baby 둘이 여행 가자 Skrr skrr<br/>
      우리 목적지는 속초<br/>
      바다 보이는 곳 어디던<br/>
      다 좋아 벗어 재끼자 전부<br/>
      휙휙 3점 슛 Swish<br/>
      왼손은 거들 뿐 Swish<br/>
      다 한 거지 네 얼굴이<br/>
      거저먹고 가는 Assist<br/>
      덕에 나는 MVP in this game<br/>
      다른 래퍼들은 몰라 이런 얘기<br/>
      걔네 월급 One night for us<br/>
      전부 나한테는 그냥 껌이라는 거지<br/>
      쟤네들은 입만 열면 거짓말<br/>
      Baby 저런 얘기들은 듣지마<br/>
      더는 가짜들한테 속지마<br/>
      원래 진짜들은 절대 무섭지 않아<br/>
      넌 뭘 해도 예쁘니까 화장하지마<br/>
      스케줄 비워놨으니까 딴 데 가지마<br/>
      I love you so much 조금 뻔하지만<br/>
      더는 아무 말도 내게 하지마<br/>
      다시는 하지마<br/>
      넌 뭘 해도 예쁘니까 화장하지마<br/>
      스케줄 비워놨으니까 딴 데 가지마<br/>
      I love you so much 조금 뻔하지만<br/>
      더는 아무 말도 내게 하지마<br/>
      이번이 마지막 기회야<br/>
      그러니까 하지마<br/>
      내일은 아무 데도 가지마<br/>
      네 웃음은 아주 그냥 살인마<br/>
      난 이런 거에 도 텄지 달인이야<br/>
      돈도 많아 전 여친은 신사임당<br/>
      그러니까 장난질은 하지마<br/>
      진지한 날 두고 어디 가지마<br/>
      넌 뭘 해도 예쁘니까 화장하지마<br/>
      스케줄 비워놨으니까 딴 데 가지마<br/>
      I love you so much 조금 뻔하지만<br/>
      더는 아무 말도 내게 하지마<br/>
      다시는 하지마<br/>
      넌 뭘 해도 예쁘니까 화장하지마<br/>
      스케줄 비워놨으니까 딴 데 가지마<br/>
      I love you so much 조금 뻔하지만<br/>
      더는 아무 말도 내게 하지마<br/>
      전부다 하지마<br/>
      그런 말도 하지마<br/>
      전부다 하지마<br/>
      싫다고 하지마<br/>
      전부다 하지마<br/>
      진짜 다신 하지마<br/>
      이번이 마지막<br/>
      다시는 하지마<br/>
      </p>
      <hr/>
    </div>
  )
}

export default AlbumInfo