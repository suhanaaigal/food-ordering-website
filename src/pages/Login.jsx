import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Login = () => {
  const { isSignedIn, user, isLoaded, signOut } = useUser();

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <SignedOut>
                <SignInButton type="submit" className="addToCart__btn" />
              </SignedOut>
              <SignedIn>
                <div style={{
                  display :"flex",
                  justifyContent : "center"
                }}>
                  {isLoaded && (
                    <div style={{
                      display: "flex",
                      flexDirection : "row",
                      justifyContent : "space-evenly",
                      width : "250px",
                      textAlign : "center"
                    }}>
                      <UserButton onClick={signOut}></UserButton>
                      <br />
                      <span style={{fontSize : "30px", width: "500px"}}>Hello <br /> {user ? user.fullName : 'Guest'}</span>
                    </div>
                  )}
                </div>
              </SignedIn>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;