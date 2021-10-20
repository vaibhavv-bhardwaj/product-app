import styled from 'styled-components'
import { Column } from 'simple-flexbox'

const MainContainer = styled.div`
display: flex;
justify-content: center;
background-color: #101037;
height: 100vh;
width: 100vw;
text-align: center;
background-repeat: no-repeat;
background-size: 100vw 100vh;
`

const LoginContainer = styled.div`
width: 450px;
height: 300px;
position: center;
border-radius: 10px;
box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
border: solid 1px #e5e5e5;
background-color: white;
margin-top: 140px;
margin-bottom: 50%;
`

const Heading = styled.span`
font-size: 19px;
text-align: center;
margin-top: 30px;
color: #101037;
`

const InputEmail = styled.input`
outline: none;
height: 45px;
width: 350px;
margin-left: 45px;
margin-top: 15px;
outline: none;
padding-left: 10px;
border-radius: 8px;
border: solid 1.3px #bab7b7;
`

const InputPassword = styled.input`
outline: none;
height: 45px;
width: 350px;
margin-left: 45px;
margin-top: 15px;
outline: none;
padding-left: 10px;
border-radius: 8px;
border: solid 1.3px #bab7b7;
`

const LoginButton = styled.button`
height: 40px;
color: #ffffff;
background-color: #101037;
padding-top: 5px;
font-size: 14.5px;
border-radius: 4px;
border: 0 #00a0f0;
vertical-align: center;
width: 350px;
margin-left: 45px;
margin-top: 20px;
cursor: pointer;
&:focus {
  outline: none;
  border-radius: 5px;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}
`

function LoginComponent(props) {
  console.log("props of Login---", props)
  const { state, onChangeEvent } = props
  return (
    <MainContainer>
      <LoginContainer>
        <Column>
          <Heading><b>Please Enter Your Credentials</b></Heading>
          <InputEmail
            type="text"
            placeholder="Enter email"
            id="email"
            value={state ? state.email : ""}
            onChange={onChangeEvent}
          />
          {state.emailError && <div className="fc-red fs-14 py-1">{state.emailError}</div>}
          <InputPassword
            type="password"
            placeholder="Enter Password"
            id="password"
            value={state ? state.password : ""}
            onChange={onChangeEvent}
          />
          {state.passwordError && <div className="fc-red fs-14 py-1">{state.passwordError}</div>}
          <LoginButton onClick={props.onLoginClick} >Login</LoginButton>
        </Column>
      </LoginContainer>
    </MainContainer>
  );
}

export default LoginComponent;
