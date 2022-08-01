import React from 'react'
import NewReleaseSlider from './MainPage/MainPanel/NewReleaseSlider';
/*장르별 정렬을 캐러셀 형식인지 목록 형식으로 하란건지
들었는데 기억이 안나서 임의로 만들어둠   */
function GenreMusic() {
  return (
    <div >
      <h1>R&B</h1>
      <br/>
      <NewReleaseSlider />
      <br/>
      <hr/>

      <h1>hip-hop</h1>
      <br/>
      <NewReleaseSlider/>
      <br/>
      <hr/>

      <h1>ballad</h1>
      <br/>
      <NewReleaseSlider/>
      <br/>
      <hr/>

      <h1>pop</h1>
      <br/>
      <NewReleaseSlider/>
      <br/>
      <hr/>

      <h1>jazz</h1>
      <br/>
      <NewReleaseSlider/>
      <br/>
      <hr/>


    </div>
  )

  
}

export default GenreMusic