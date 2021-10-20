import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import { connect } from 'react-redux'

const Container = styled.div`
  display: flex;
  background-color: #101037;
`;

const Image = styled.img`
  width: 70px;
  padding: 10px;
`;

const Heading = styled.span`
  padding: 27px;
  font-size: 33px;
  font-family: fangsong;
  color: #ffffff;
`;

const AboutApp = styled.span`
//   padding: 38px;
margin: 38px 38px 0 0;

  font-size: 19px;
  font-family: fangsong;
  color: #ffffff;
  background: none;
  border: none;
  position: absolute;
  right: 100px;
  cursor: pointer;
`;

const LogoutButton = styled.button`
//   padding: 38px;
margin: 38px 38px 0 0;
  font-size: 19px;
  font-family: fangsong;
  color: #ffffff;
  background: none;
  border: none;
  position: absolute;
  right: 0px;
  cursor: pointer;
`;

const HeaderLine = styled.hr`
  width: 100%;
  background-color: #b2adad;
  position: absolute;
  margin-top: 95px;
  height: 12px;
`;

function Header(props) {
  console.log("props in Header", props)
  return (
    <Container>
      <Row>
        <Image src="/logo192.png" />
        <Heading>BidOnHomes Product App</Heading>
        <AboutApp>{props.userData.email}</AboutApp>
        <LogoutButton onClick={props.logout}>Logout</LogoutButton>
      </Row>
      <HeaderLine />
    </Container>
  );
}

const mapStateToProps = state => (
  {
    userData: state.user.userData,
  }
)
export default connect(mapStateToProps)(Header);

