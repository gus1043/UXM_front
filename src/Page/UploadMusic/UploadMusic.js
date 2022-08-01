import React, { useState } from 'react'
import { Typography, Button, Form, message, Input} from 'antd';
import {PlusOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import AlbumCover from './AlbumCover';
import TextArea from 'antd/lib/input/TextArea';


const GenreOptions = [
    {value: 0, label: "city pop"},
    {value: 1, label: "balad"},
    {value: 2, label: "hip-hop"},
    {value: 3, label: "R&B"}
]

const CountryOptions = [
    {value: 0, label: "Korea"},
    {value: 1, label: "Japan"},
    {value: 2, label: "US"},
    {value: 3, label: "UK"}
]

function UploadMusic() {
    const [MusicTitle, setMusicTitle] = useState("");
    const [AlbumTitle, setAlbumTitle] = useState("");
    const [Genre, setGenre] = useState("city pop");
    const [Country, setCountry] = useState("Korea");

    const onAlbumTitleChange = (e) => {
        setAlbumTitle(e.currentTarget.value)
    }

    const onTitleChange = (e) => {
        setMusicTitle(e.currentTarget.value)
    }

    const onGenreChange = (e) => {
        setGenre(e.currentTarget.value)
    }

    const onCountryChange = (e) => {
        setCountry(e.currentTarget.value)
    }

    return (
      <div className="auth-wrapper">
        <div style={{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{ textAlign: 'center', marginBotom: '2rem' }} >
                <h3>내 음악 업로드</h3>
            </div>
            <br />
            <Form onSubmit>
                <label>앨범 커버</label>
                <div style={{display: 'flex', justifyContent: 'space-between' }} >
                    {/* Drop zone */}
                    <AlbumCover/>
                </div>

                <label>국가</label>
                <select onChange={onCountryChange}>
                    {CountryOptions.map((item, index) => (
                        <option key={index} value={Country}>{item.label}</option>
                    ))}
                </select>

                <label>장르</label>
                <select onChange={onGenreChange}>
                    {GenreOptions.map((item, index) => (
                        <option key={index} value={Genre}>{item.label}</option>
                    ))}
                </select>
            
                <label>앨범 명</label>
                <Input onChange={onAlbumTitleChange} value={AlbumTitle} />


                <label>곡제목</label>
                <Input onChange={onTitleChange} value={MusicTitle} />

                <label>음원 업로드</label>
                <input 
                    type="file" 
                    accept='music/mp3, music/mp4, music/flac, music/ogg, music/mp2, music/m4r'
                    textDecoration="none"/>
                


                <label>가사</label>
                <TextArea rows="10" cols="50"></TextArea>
           

                <input type="button" value="업로드" color="blue"/>
                <Link to ="/" style={{color : 'gray' , textDecoration: 'none'}} > 메인으로 돌아가기 </Link>
            </Form>

            </div>
        </div>
    )
}

export default UploadMusic