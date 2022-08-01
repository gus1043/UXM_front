import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

function Delete() {

  const {register, handleSubmit, watch, formState:{errors}}=useForm();
  const onSubmit = data => alert(JSON.stringify(data))
    
    return (
      <div>
        <h1>내 음원 삭제</h1>
<form onSubmit={handleSubmit(onSubmit)}>
  <div class="checkbox select-all">
    <input id="all" type="checkbox" {...register("exampleRequired", {required:true})}/>
    <label for="all">Select all</label>
  </div>
  <div class="checkbox rows">
    <input id="box1" type="checkbox" />
    <label for="box1">Checkbox 1</label>
  </div>
  <div class="checkbox rows">
    <input id="box2" type="checkbox" />
    <label for="box2">Checkbox 2</label>
  </div>
  <div class="checkbox rows">
    <input id="box3" type="checkbox" />
    <label for="box3">Checkbox 3</label>
  </div>
  <div>
    <input type="submit"/>
  </div>
</form>
      </div>
    );
  }
  
export default Delete