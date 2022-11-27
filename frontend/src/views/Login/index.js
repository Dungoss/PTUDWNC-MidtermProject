import './index.css'
import { FaFacebook, FaGoogle } from "react-icons/fa";
import React from 'react';
import { loginApi } from '../../api';


 const Login = () =>{
  
    return(
      <>
      <div className='cover'>
          <div id="loginform">  
            <FormHeader title="Login" />
            <Form />
            <OtherMethods />
          </div>
      </div>
      </>
    )
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
   <div>
     <FormInput description="Tên đăng nhập" placeholder="Nhập tên đăng nhập" type="text" />
     <FormInput description="Mật khẩu" placeholder="Nhập mật khẩu" type="password"/>
     <FormButton title="Đăng nhập"/>
   </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button type='submit'>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);
  

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <div className='fb'>
        <FaFacebook />
      </div>
      <div className='gg'>
        <FaGoogle />
      </div>
    </div>
  </div>
);


export default React.memo(Login);