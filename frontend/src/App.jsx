import React from 'react';
import { Route,Routes,Navigate} from 'react-router';
import HomePage from './pages/HomePage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import NotificationsPage from './pages/NotificationsPage.jsx';
import OnboardingPage from './pages/OnboardingPage.jsx';
import ChatPage from './pages/ChatPage.jsx';
import CallPage from './pages/CallPage.jsx';
import { Toaster } from 'react-hot-toast';
import PageLoader from './components/PageLoader.jsx';
import useAuthUser from './hooks/useAuthUser.js';
import Layout from "./components/Layout.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import {useThemeStore} from "./store/useThemeStore.js";
import FriendsPage from "./pages/FriendsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Connect from "./pages/Connect.jsx";


 
const App = () => { 
// tanstack query

const {isLoading,authUser} = useAuthUser();
const {theme} = useThemeStore()
 
const isAuthenticated = Boolean(authUser)
const isOnboarded = authUser?.isOnBoarded

if(isLoading) return <PageLoader/>

  return <div className='h-screen text-1xl' data-theme={theme}>
   <Routes>
      <Route
          path="/"
          element={
            isAuthenticated && isOnboarded ? (
                <Layout showSidebar={true}>
                  <HomePage/>
                </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
      <Route
          path="/signup"
          element={
            !isAuthenticated ? <SignUpPage /> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />
          }
        />
        <Route
          path="/login"
          element={
            !isAuthenticated ? <LoginPage /> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />
          }
        />
       <Route
          path="/notifications"
          element={
            isAuthenticated && isOnboarded ? (
              <Layout showSidebar={true}>
                <NotificationsPage />
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
     <Route
          path="/call/:id"
          element={
            isAuthenticated && isOnboarded ? (
              <CallPage />
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
      <Route
          path="/chat/:id"
          element={
            isAuthenticated && isOnboarded ? (
              <Layout showSidebar={false}>
                <ChatPage />
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
      <Route
          path="/onboarding"
          element={
            isAuthenticated? (
            !isOnboarded? (
            <OnboardingPage/>
         ) : (
            <Navigate to="/"/>
         )
         ):(
            <Navigate to ="/login"/>
          )
         }
        />
        <Route
          path="/friends"
          element={
          isAuthenticated && isOnboarded ? (
          <Layout showSidebar={true}>
              <FriendsPage />
          </Layout>
          ) : (
          <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} /> 
          )}/>
          <Route
          path="/about"
          element={
          isAuthenticated && isOnboarded ? (
          <Layout showSidebar={true}>
            <AboutPage />
          </Layout>
          ) : (
          <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
          )}/>
          <Route
            path="/connect"
            element={
            isAuthenticated && isOnboarded ? (
            <Layout showSidebar={true}>
            <Connect />
            </Layout>
            ) : (
            <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />)}/>
      </Routes>
   <Toaster/>
  </div>

};

export default App;