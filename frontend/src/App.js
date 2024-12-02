import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";

function App() {
    return (
        <Router>
            <AppContainer>
                <Sidebar>
                    <NavItem>
                        <StyledLink to="/">홈</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="/myinfo">내 정보</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="/settings">설정</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="/connection">연결</StyledLink>
                    </NavItem>
                </Sidebar>
                <MainContent>
                    <Header>
                        <Title>Coma</Title>
                    </Header>
                    <Content>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/myinfo" element={<MyInfo />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/connection" element={<ConnectionStatus />} />
                        </Routes>
                    </Content>
                </MainContent>
            </AppContainer>
        </Router>
    );
}

// Styled Components

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #ffcc80;  /* 연한 주황색 */
  color: white;
  padding-top: 20px;
  position: fixed;
  height: 100%;
`;

const NavItem = styled.li`
  list-style: none;
  padding: 15px;
  border-bottom: 1px solid #3498db; /* 파란색 테두리 */
  &:hover {
    background-color: #ffa500;  /* 주황색 */
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: block;  /* Link를 블록 요소로 만들어서 클릭하면 NavItem 전체가 클릭되게 함 */
`;

const MainContent = styled.div`
  margin-left: 250px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.header`
  background-color: #FFA500;  /* 주황색 배경 */
  padding: 15px 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Content = styled.main`
  padding: 20px;
  background-color: #f4f7fa;
  flex-grow: 1;
`;

const PageContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

function Home() {
    return (
        <PageContainer>
            <h2>홈</h2>
            <p>여기는 홈 페이지입니다. 여기에 활동과 통계를 확인할 수 있습니다.</p>
        </PageContainer>
    );
}

function MyInfo() {
    return (
        <PageContainer>
            <h2>내 정보</h2>
            <p>여기에서 개인 정보를 확인하고 수정할 수 있습니다.</p>
        </PageContainer>
    );
}

function Settings() {
    return (
        <PageContainer>
            <h2>설정</h2>
            <p>설정 페이지에서 환경설정을 변경할 수 있습니다.</p>
        </PageContainer>
    );
}

function ConnectionStatus() {
    const [connectionStatus, setConnectionStatus] = useState("");

    useEffect(() => {
        // Spring Boot API 호출
        fetch("http://43.202.160.173:8080/api/connection-status")
            .then((response) => response.text())
            .then((data) => setConnectionStatus(data))
            .catch((error) => console.error("Error fetching connection status:", error));
    }, []);

    return (
        <PageContainer>
            <h2>연결 상태</h2>
            <p>{connectionStatus || "서버 연결을 확인하는 중입니다..."}</p>
        </PageContainer>
    );
}

export default App;
