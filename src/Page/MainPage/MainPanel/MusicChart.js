import React from 'react'
import "./MusicChart.css"

const img={
  width:85,
  height:85,
  margin:5
}
function MusicChart() {
  return (
    <div clssName="Chart" style = {{textAlign: 'center'}}>
      <div class="row" >
        <div class="col-md-1"><h1>앨범 커버</h1></div>
        <div class="col-md-1"><h1>순위</h1></div>
        <div class="col-md-3"><h1>곡</h1></div>
        <div class="col-md-3"><h1>아티스트</h1></div>
        <div class="col-md-3"><h1>앨범</h1></div>
      </div>
      <hr/>
      
      <div class="row">
        <div class="col-md-1"><img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/691/7691778.jpg?type=r100Fll&v=20220711173508" alt="그때 그 순간 그대로 (그그그)"/></div>
        <div class="col-md-1"><p>1<br/>-</p></div>
        <div class="col-md-3"><p>그때 그 순간 그대로 (그그그)</p></div>
        <div class="col-md-3"><p>WSG워너비(가야G)</p></div>
        <div class="col-md-3"><p>WSG워너비</p></div>
      </div>

      <div class="row">
        <div class="col-md-1"><img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/443/7443411.jpg?type=r120Fll&v=20220421114109" alt="그때 그 순간 그대로 (그그그)"/></div>
        <div class="col-md-1"><p>2<br/>-</p></div>
        <div class="col-md-3"><p>LOVE DIVE</p></div>
        <div class="col-md-3"><p>IVE(아이브)</p></div>
        <div class="col-md-3"><p>LOVE DIVE</p></div>
      </div>

      <div class="row">
        <div class="col-md-1"><img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/385/7385585.jpg?type=r120Fll&v=20220405155416" alt="그때 그 순간 그대로 (그그그)"/></div>
        <div class="col-md-1"><p>3<br/>-</p></div>
        <div class="col-md-3"><p>TOMBOY</p></div>
        <div class="col-md-3"><p>(여자)아이들</p></div>
        <div class="col-md-3"><p>I NEVER DIE</p></div>
      </div>

      <div class="row">
        <div class="col-md-1"><img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/617/7617997.jpg?type=r120Fll&v=20220701124947" alt="그때 그 순간 그대로 (그그그)"/></div>
        <div class="col-md-1"><p>4<br/>-</p></div>
        <div class="col-md-3"><p>POP!</p></div>
        <div class="col-md-3"><p>나연(TWICE)</p></div>
        <div class="col-md-3"><p>IM NAYEON</p></div>
      </div>

      <div class="row">
        <div class="col-md-1"><img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/519/7519840.jpg?type=r120Fll&v=20220510143908" alt="그때 그 순간 그대로 (그그그)"/></div>
        <div class="col-md-1"><p>5<br/>-</p></div>
        <div class="col-md-3"><p>That That (prod. & feat. SUGA of BTS)</p></div>
        <div class="col-md-3"><p>싸이(PSY)</p></div>
        <div class="col-md-3"><p>싸다9</p></div>
      </div>

      <div class="row">
        <div class="col-md-1"><img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/502/7502798.jpg?type=r120Fll&v=20220502110029" alt="그때 그 순간 그대로 (그그그)"/></div>
        <div class="col-md-1"><p>6<br/>-</p></div>
        <div class="col-md-3"><p>정이라고 하자 (Feat. 10cm)</p></div>
        <div class="col-md-3"><p>BIG Naughty(서동현)</p></div>
        <div class="col-md-3"><p>정이라고 하자</p></div>
        
      </div>

      <div class="row">
        <div class="col-md-1"><img style={img} src="https://musicmeta-phinf.pstatic.net/album/005/843/5843153.jpg?type=r120Fll&v=20210514175915" alt="그때 그 순간 그대로 (그그그)"/></div>
        <div class="col-md-1"><p>7<br/>-</p></div>
        <div class="col-md-3"><p>신호등</p></div>
        <div class="col-md-3"><p>이무진</p></div>
        <div class="col-md-3"><p>신호등</p></div>
      </div>

      <div class="row">
        <div class="col-md-1"><img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/578/7578969.jpg?type=r120Fll&v=20220708173426" alt="그때 그 순간 그대로 (그그그)"/></div>
        <div class="col-md-1"><p>8<br/>-</p></div>
        <div class="col-md-3"><p>Girls</p></div>
        <div class="col-md-3"><p>aespa</p></div>
        <div class="col-md-3"><p>Girls-The 2nd Mini Album</p></div>
      </div>

      <div class="row">
        <div class="col-md-1"><img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/421/7421466.jpg?type=r120Fll&v=20220405154432" alt="그때 그 순간 그대로 (그그그)"/></div>
        <div class="col-md-1"><p>9<br/>-</p></div>
        <div class="col-md-3"><p>Feel My Rhythm</p></div>
        <div class="col-md-3"><p>Red Velvet(레드벨벳)</p></div>
        <div class="col-md-3"><p>'The ReVe Festival 2022 - Feel My Rhythm'</p></div>
      </div>

      <div class="row">
        <div class="col-md-1"><img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/352/7352769.jpg?type=r120Fll&v=20220324175023" alt="그때 그 순간 그대로 (그그그)"/></div>
        <div class="col-md-1"><p>10<br/>-</p></div>
        <div class="col-md-3"><p>그때 그 순간 그대로 (그그그)</p></div>
        <div class="col-md-3"><p>WSG워너비(가야G)</p></div>
        <div class="col-md-3"><p>WSG워너비</p></div>
      </div>

      <hr/>

      
      </div>

      
  )
}

export default MusicChart