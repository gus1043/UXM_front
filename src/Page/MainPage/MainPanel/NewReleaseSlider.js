import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewReleaseSlider.css"


const img = {
   display: "block",
   width: '95%',
   height: 'this.width'
 };

export default class NewReleaseSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows:true
    };

    return (
      <div className="newsong">
      <Slider {...settings}>
      <div >
         <a href="/newsong" style={{textDecoration:"none"}}>
         <img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/691/7691002.jpg?type=r360Fll&v=20220711181108" alt="하늘"/>
         <h3>하늘</h3>
         <h2>크루셜스타 (CRUCIAL STAR)</h2></a>
      </div>

      <div>
         <img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/638/7638708.jpg?type=r480Fll&v=20220705115639" alt="열이올라요"/>
         <h3>열이 올라요 (Heart Burn)</h3>
         <h2>선미</h2>
      </div>

      <div>
         <img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/701/7701645.jpg?type=r360Fll&v=20220711175913" alt=""/>
         <h3>Bare&Rare Pt.1</h3>
         <h2>청하</h2>
      </div>

      <div>
         <img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/617/7617997.jpg?type=r480Fll&v=20220701124947" alt=""/>
         <h3>POP!</h3>
         <h2>나연 (TWICE)</h2>
      </div>
     
      <div>
         <img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/578/7578969.jpg?type=r360Fll&v=20220708173426" alt=""/>
         <h3>Girls - The 2nd Mini Album</h3>
         <h2>싸이 (PSY)</h2>
      </div>

      <div>
         <img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/502/7502798.jpg?type=r100Fll&v=20220502110029" alt=""/>
         <h3>정이라고 하자 (Feat. 10CM)</h3>
         <h2>BIG Naughty (서동현)</h2>
      </div>

      <div>
         <img style={img} src="https://musicmeta-phinf.pstatic.net/album/005/843/5843153.jpg?type=r100Fll&v=20210514175915" alt=""/>
         <h3>신호등</h3>
         <h2>이무진</h2>
      </div>

      <div>
         <img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/675/7675641.jpg?type=r360Fll&v=20220707115936" alt=""/>
         <h3>Rose Thorn</h3>
         <h2>L.Do (엘도)</h2>
      </div>

      <div>
         <img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/701/7701835.jpg?type=r360Fll&v=20220711175913" alt=""/>
         <h3>무덤까지 가져가</h3>
         <h2>빈센트 블루(Vincent Blue)</h2>
      </div>

      <div>
         <img style={img} src="https://musicmeta-phinf.pstatic.net/album/007/690/7690493.jpg?type=r360Fll&v=20220711141408" alt=""/>
         <h3>바나나 먹고싶다</h3>
         <h2>육중완밴드</h2>
      </div>


      </Slider>
      </div>
    );
  }
}