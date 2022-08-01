import React, {useRef} from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

const CategoryOptions = [
  {value: 0, label: "일반 회원"},
  {value: 1, label: "관리자"},
]

function LoginPage () {
  const [Category, setCategory] = useState("일반회원");
  const onCategoryChange = (e) => {
    setCategory(e.currentTarget.value)
}
  const {register, formState: {errors} }=useForm({mode: "onChange"}); 
  return (
    <div className="auth-wrapper" style={{width:"100%"}}>
      <h3>Login</h3>  
    <br/>

    <form>
    <label>로그인</label>
      <select onChange={onCategoryChange}>
          {CategoryOptions.map((item, index) => (
              <option key={index} value={Category}>{item.label}</option>
           ))}
      </select>
      <label>Email</label>
      <input
          name="email"
          type="email"
          {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
        />
        {errors.email&& errors.email.type==="pattern" && <p>이메일 형식으로 입력하세요</p>}

      <label>PassWord</label>
      <input
        name="password"
        type="password"
        />

      <input type="checkbox"/>
      <label>자동로그인</label>

       <input type="submit"/>
       <Link to ="/Register" style={{color : 'gray' , textDecoration: 'none'}} > 회원가입 </Link>
       <Link to ="/" style={{color : 'gray' , textDecoration: 'none', float:"right"}} > 메인으로 이동 </Link> 
        
    </form>
    
  </div>
  )
}

export default LoginPage