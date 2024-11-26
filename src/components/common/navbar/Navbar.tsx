import { useState, useEffect } from "react";
import RHLogo from '../../images/abc.png';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ContactLinks, ContactLinksCont, IconDiv, LoginBtn, NavContainer, NavRightContainer, NavTabCont, NavTabMainCont, NavTabs, RegisterBtn, SocialMediaIconsCont, TopFooter } from './Navbar.styles';
import { Link, useLocation, useHistory } from "react-router-dom"
// import PatientRegModal from "../../views/modals/patientRegModal/PatientRegModal";
// import LoginModal from "../../views/modals/loginModal/LoginModal";
import { useMediaQuery } from 'react-responsive';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar() {

    const [activeTab, setActiveTab] = useState("services");
    const [showRegModal, setShowRegModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isUserLoggedIn, setisUserLoggedIn] = useState<any>(false);
    const [showProfileMenu, setShowProfileMenu] = useState<any>(false);

    // const location = useLocation();
    const history = useHistory();
    const isDesktop = useMediaQuery({ maxWidth: 1020 });
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    useEffect(() => {
        setisUserLoggedIn(localStorage.getItem('isAuthenticated'));
    }, [isUserLoggedIn, isAuthenticated]);

    // useEffect(() => {
    //     if (location.pathname === '/') {
    //         setActiveTab('services');
    //     } else if (location.pathname == '/doctors') {
    //         setActiveTab('doctors');
    //     } else if (location.pathname == '/specialities') {
    //         setActiveTab('specialities');
    //     } else if (location.pathname == '/resources') {
    //         setActiveTab('resources');
    //     } else if (location.pathname == ('/contacts')) {
    //         setActiveTab('contacts');
    //     } else {
    //         setActiveTab('');
    //     }
    // }, [location.pathname]);

    const handleChangeActiveTab = (e: any) => {
        setActiveTab(e.target.innerText.toLowerCase());
    }

    const onRegisterClick = () => {
        setShowRegModal(true);
    }

    const onLoginClick = () => {
        setShowLoginModal(true);
    }

    const onLogoutClick = () => {
        localStorage.clear();
        setisUserLoggedIn(localStorage.getItem('isAuthenticated'));
        setShowProfileMenu(false);
    }

    const handleLogoClick = () => {
        history.push('/');
    }

    const handliProfileClick = () => {
        setShowProfileMenu(!showProfileMenu);
    }

    const handleViewProfileClick = () => {
        history.push('/patientProfile');
        setShowProfileMenu(false);
    }

    return (
        <div style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
            {!isDesktop && <TopFooter>
                <SocialMediaIconsCont>
                    <IconDiv href="https://www.facebook.com/ramahospital" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon style={{ color: 'white', height: '15px', width: '20px', margin: '0px 5px' }} />
                    </IconDiv>
                    <IconDiv href="https://www.instagram.com/ramahospital" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon style={{ color: 'white', height: '15px', width: '20px', margin: '0px 5px' }} />
                    </IconDiv>
                    <IconDiv href="https://twitter.com/RamaHospital" target="_blank" rel="noopener noreferrer">
                        <XIcon style={{ color: 'white', height: '15px', width: '20px', margin: '0px 5px' }} />
                    </IconDiv>
                    <IconDiv href="" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon style={{ color: 'white', height: '15px', width: '20px', margin: '0px 5px' }} />
                    </IconDiv>
                </SocialMediaIconsCont>
                <ContactLinksCont>
                    <ContactLinks style={{ borderRight: '1px solid white' }}>Contact</ContactLinks>
                    <ContactLinks style={{ borderRight: '1px solid white' }}>Privacy Policy</ContactLinks>
                    <ContactLinks>Disclaimer</ContactLinks>
                </ContactLinksCont>
            </TopFooter>}
            <NavContainer >
                <div style={{ padding: '0px 10px', cursor: 'pointer' }} onClick={handleLogoClick}><img alt='' src={RHLogo} /></div>
                <NavRightContainer>
                    {/* <div style={{ margin: '0px 10px', cursor: 'pointer' }}><SearchIcon /></div> */}
                    {
                        isUserLoggedIn ?
                            // <RegisterBtn onClick={onLogoutClick}>Log Out</RegisterBtn>
                            <>
                                <div onClick={handliProfileClick} style={{ backgroundColor: ' #009A85', color: 'white', padding: '2px 10px', borderRadius: '100%', fontSize: '20px', fontWeight: '500', justifyContent: 'center', cursor: 'pointer' }}>R</div>
                                {showProfileMenu &&
                                    <div style={{ position: 'absolute', top: 75, right: 5, padding: '10px 20px', border: '1px solid #d7d5d552', borderRadius: '10px', backgroundColor: 'white', zIndex: '1000' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10', cursor: 'pointer' }}>
                                            <PersonRoundedIcon />
                                            <div onClick={handleViewProfileClick} style={{ fontSize: '13px', fontWeight: '400', padding: '10px' }}>View Profile</div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10', cursor: 'pointer' }}>
                                            <LogoutIcon />
                                            <div onClick={onLogoutClick} style={{ fontSize: '13px', fontWeight: '400', padding: '10px' }}>Logout</div>
                                        </div>
                                    </div>
                                }
                            </>
                            :
                            <>
                                {/* <LoginBtn onClick={onLoginClick}>Login</LoginBtn>
                                {
                                    showLoginModal && <LoginModal showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} />
                                }
                                <RegisterBtn onClick={onRegisterClick}>Register</RegisterBtn>
                                {
                                    showRegModal && <PatientRegModal showRegModal={showRegModal} setShowRegModal={setShowRegModal} />
                                } */}
                            </>
                    }
                </NavRightContainer>
            </NavContainer>
            <NavTabMainCont>
                <NavTabCont>
                    <NavTabs>
                        <Link onClick={(e) => handleChangeActiveTab(e)} style={{ color: 'grey', textDecoration: 'none', borderBottom: activeTab === 'services' ? '2px solid #184A84' : '3px solid transparent' }} to="/">Services</Link>
                    </NavTabs>
                    <NavTabs>
                        <Link onClick={(e) => handleChangeActiveTab(e)} style={{ color: 'grey', textDecoration: 'none', borderBottom: activeTab === 'doctors' ? '2px solid #184A84' : '3px solid transparent' }} to="/doctors">Doctors</Link>
                    </NavTabs>
                    <NavTabs>
                        <Link onClick={(e) => handleChangeActiveTab(e)} style={{ color: 'grey', textDecoration: 'none', borderBottom: activeTab === 'specialities' ? '2px solid #184A84' : '3px solid transparent' }} to="/specialities">Specialities</Link>
                    </NavTabs>
                    <NavTabs>
                        <Link onClick={(e) => handleChangeActiveTab(e)} style={{ color: 'grey', textDecoration: 'none', borderBottom: activeTab === 'resources' ? '2px solid #184A84' : '3px solid transparent' }} to="/resources">Resources</Link>
                    </NavTabs>
                    <NavTabs>
                        <Link onClick={(e) => handleChangeActiveTab(e)} style={{ color: 'grey', textDecoration: 'none', borderBottom: activeTab === 'contacts' ? '2px solid #184A84' : '3px solid transparent' }} to="/contacts">Contacts</Link>
                    </NavTabs>
                </NavTabCont>
            </NavTabMainCont>
        </div>
    )
}