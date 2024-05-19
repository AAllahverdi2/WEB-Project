import React, { useContext, useRef } from 'react'
import './AdminSidebar.scss'
import { Link, useLocation } from 'react-router-dom'
import { mdiCalendarToday, mdiDotsVertical, mdiHomeAccount, mdiSpeedometer } from '@mdi/js';
import Icon from '@mdi/react';
import { mdiCog } from '@mdi/js';
import { mdiInformationOutline } from '@mdi/js';
import Maincontext from '../../Context/Context'
import { mdiAccountCheckOutline } from '@mdi/js';
import { mdiAccountEdit } from '@mdi/js';
const Sidebare = () => {
    const { sideBardHeadRef
    } = useContext(Maincontext)
    const profDropRef = useRef()
    const handleActiveDrop = () => {
        profDropRef.current.classList.toggle('activeProfDrop')
    }
    const location = useLocation()
    return (
        <div className="sidebar " ref={sideBardHeadRef}>
            <div className="sidebarTop  d-none d-lg-flex align-items-center justify-content-center fixed-top">
                <Link to={'/admin'} className='sidebarTopLink1'>
                    <img src={'https://static.insales-cdn.com/assets/1/3171/6319203/1707480682/logotype.jpg'} alt="logo" />
                </Link>
                <Link to={'/admin'} className='sidebarTopLink2'>
                    <img src={'https://static.insales-cdn.com/assets/1/3171/6319203/1707480682/logotype.jpg'} alt="icon" />
                </Link>
            </div>
            <ul className="sidebarBottom">
                <li className='profileImage sidebarBottomLinks'>
                    <div className="profileImageInside">
                        <div className="profileImageInsideLeft">
                            <div className="profileImageInsideLeftImg">
                                <img src={'https://i.pinimg.com/474x/a8/45/f1/a845f11e10d890b2926202b895658d20.jpg'} alt="userImage" />
                                <span className="activeGreen">

                                </span>
                            </div>
                            <div className="profileImageInsideLeftAbout">
                                <h5>A.Agamaliyevh</h5>
                                <span>Gold Member</span>
                            </div>
                        </div>
                        <div className="profileImageInsideRight" onClick={handleActiveDrop}>
                            <Icon path={mdiDotsVertical} size={1} />

                        </div>
                        <div ref={profDropRef} className="profilDropMenu">
                            <div className="profilDropMenuItem">
                                <div className="profilDropMenuItemImage">
                                    <div className="profDropImgBox">
                                        <span className='setIcon'>
                                            <Icon path={mdiCog} size={0.8} />
                                        </span>
                                    </div>
                                </div>
                                <div className="profilDropMenuItemText">
                                    <p>
                                        Account settings
                                    </p>
                                </div>
                            </div>
                            <div className="profilDropMenuLine"></div>
                            <div className="profilDropMenuItem">
                                <div className="profilDropMenuItemImage">
                                    <div className="profDropImgBox">
                                        <span className='infoIcon'>
                                            <Icon path={mdiInformationOutline} size={0.8} />
                                        </span>
                                    </div>
                                </div>
                                <div className="profilDropMenuItemText">
                                    <p>
                                        Change Password
                                    </p>
                                </div>
                            </div>
                            <div className="profilDropMenuLine"></div>
                            <div className="profilDropMenuItem">
                                <div className="profilDropMenuItemImage">
                                    <div className="profDropImgBox">
                                        <span className='todoİcon'>
                                            <Icon path={mdiCalendarToday} size={0.8} />

                                        </span>
                                    </div>
                                </div>
                                <div className="profilDropMenuItemText">
                                    <p>
                                        To-do list
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="sidebarBottomLinks navCategory">
                    <span>Navigation</span>
                </li>
                <li className={`sidebarBottomLinks navMenu ${location.pathname === '/' ? "navMenuActive" : ""}`} >
                    <Link to={'/'}>
                        <div className="navMenuIcon text-info">
                            <span>
                                <Icon path={mdiHomeAccount} size={0.8} />

                            </span>
                        </div>
                        <span className="navMenuText">
                            Site
                        </span>
                    </Link>
                </li>
                <li className={`sidebarBottomLinks navMenu ${location.pathname === '/admin' ? "navMenuActive" : ""}`} >
                    <Link to={'/admin'}>
                        <div className="navMenuIcon speedometer">
                            <span>

                                <Icon path={mdiSpeedometer} size={0.8}  style={{color:"red"}}/>
                            </span>
                        </div>
                        <span className="navMenuText">
                            Dashboard
                        </span>
                    </Link>
                </li>

                <li className={`sidebarBottomLinks navMenu ${location.pathname === '/admin/Add' ? "navMenuActive" : ""}`} >
                    <Link to={'/admin/Add'}>
                        <div className="navMenuIcon speedometer" >
                            <span>

                                <Icon path={mdiSpeedometer} size={0.8} style={{color:"blue"}} />
                            </span>
                        </div>
                        <span className="navMenuText">
                            Add Product
                        </span>
                    </Link>
                </li>

                <li className={`sidebarBottomLinks navMenu ${location.pathname === '/admin/AdminOrder' ? "navMenuActive" : ""}`} >
                    <Link to={'/admin/AdminOrder'}>
                        <div className="navMenuIcon speedometer">
                            <span>

                            <Icon path={mdiAccountCheckOutline} size={1} style={{color:"orangered"}} />
                            </span>
                        </div>
                        <span className="navMenuText">
                            Admin Order
                        </span>
                    </Link>
                </li>

                <li className={`sidebarBottomLinks navMenu ${location.pathname === '/admin/XeberAdmin' ? "navMenuActive" : ""}`} >
                    <Link to={'/admin/XeberAdmin'}>
                        <div className="navMenuIcon speedometer">
                            <span>

                            <Icon path={mdiAccountEdit} size={1} style={{color:"white"}} />
                            </span>
                        </div>
                        <span className="navMenuText">
                            News
                        </span>
                    </Link>
                </li>

                <li className={`sidebarBottomLinks navMenu ${location.pathname === '/admin/AddNews' ? "navMenuActive" : ""}`} >
                    <Link to={'/admin/AddNews'}>
                        <div className="navMenuIcon speedometer">
                            <span>

                            <Icon path={mdiAccountEdit} size={1} style={{color:"white"}} />
                            </span>
                        </div>
                        <span className="navMenuText">
                        Add News
                        </span>
                    </Link>
                </li>



            </ul >
        </div >
    )
}

export default Sidebare