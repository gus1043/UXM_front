import React, {useRef} from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

const CategoryOptions = [
  {value: 0, label: "일반 회원"},
  {value: 1, label: "관리자"},
]

function RegisterPage() {
  const [Category, setCategory] = useState("일반회원");
  const onCategoryChange = (e) => {
    setCategory(e.currentTarget.value)
}
  const {register, watch, formState: {errors} }=useForm({mode: "onChange"});
  const password = useRef();
  password.current=watch("password");


  return (  
    <div className="auth-wrapper">
      <div style = {{textAlign: 'center'}}>
        <h3>회원가입</h3>  
      </div>
      <br/>

      <form>
      <label>가입 유형</label> 
      <select onChange={onCategoryChange}>
          {CategoryOptions.map((item, index) => (
              <option key={index} value={item.value}>{item.label}</option>
           ))}
      </select>
        <label>Email</label>
        <input
          name="email"
          type="email"
          {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
        />
        {errors.email&& errors.email.type==="required" && <p>이메일을 입력하세요</p>}
        {errors.email&& errors.email.type==="pattern" && <p>이메일 형식으로 입력하세요</p>}

        <label>Name</label>
        <input
          name="name"
          type="name"
          {...register("name", {required: true, maxLength:10})}
          />
        {errors.name&& errors.name.type==="required" && <p>이름을 입력하세요</p>}
        {errors.name&& errors.name.type==="maxLength" && <p>이름이 너무 깁니다</p>}

        <label>NickName</label>
        <input
          name="nickname"
          type="name"
          {...register("name", {required: true})}
          />
        {errors.name&& errors.name.type==="required" && <p>예명을 입력하세요</p>}

        <label>PassWord</label>
        <input
          name="password"
          type="password"
          {...register("password", {required: true, minLength:8, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/})}
        />
        {errors.password&& errors.password.type==="required" && <p>This password field is required</p>}
        {errors.password&& errors.password.type==="minLength" &&   <p>대문자, 소문자, 숫자, 특수문자를 포함한 8자 이상을 입력하시오</p>}
        {errors.password&& errors.password.type==="pattern" &&   <p>대문자, 소문자, 숫자, 특수문자를 포함한 8자 이상을 입력하시오</p>}

        <label>PassWord Confirm</label>
        <input
          name="password_confirm"
          type="password"
          {...register("password_confirm", {
            required: true,
            validate: (value) =>
              value===password.current
            })}
          />
        {errors.password_confirm&& errors.password_confirm.type==="required" && <p>비밀번호 확인이 필요합니다</p>}
        {errors.password_confirm&& errors.password_confirm.type==="validate" && <p>비밀번호가 다릅니다</p>}
         <input type="submit"/>
         <Link to ="/login" style={{color : 'gray' , textDecoration: 'none'}} >이미 아이디가 있다면... </Link>
      </form>
      
    </div>
  )
}

export default RegisterPage