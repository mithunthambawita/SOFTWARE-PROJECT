import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { deleteAccount } from '../../actions/profile';


// const Nav = styled.div`
//   background:linear-gradient(180deg,rgb(134, 10, 10) 0%, rgb(185, 87, 87) 100%);
//   height: 40px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
  
// `;

const Nav = styled.div`
  background:linear-gradient(180deg,rgb(134, 10, 10) 0%, rgb(185, 87, 87) 100%);
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 2rem;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background-color:#1A2D40;
  background: linear-gradient(180deg,#2f5072 0%, #052647 100%);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0%' : '0%')}; /*Edit*/
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = ({ deleteAccount, auth,  profile: {profile:{user: {_id}}} } ) => {
  const [sidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  const SidebarData = [

    {
      title: 'Profile',
      path: '/admin-page',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
  
      subNav: [
        {
          title: 'My Profile',
          path: `/profile/${_id}`,
          icon: <AiIcons.AiOutlineProfile />
        },
        {
          title: 'Edit Profile',
          path: '/edit-profile',
          icon: <FaIcons.FaUserEdit />
        }
      ]
    },

    {
      title: 'Customer',
      path: '/admin-page',
      icon: <IoIcons.IoIosPaper />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
  
      subNav: [
        {
          title: 'All Customer',
          path: './profiles',
          icon: <AiIcons.AiOutlineProfile />
        },
        {
          title: 'Daily Customer',
          // path: '/Profile/edit-info',
          icon: <FaIcons.FaUserEdit />
        }
      ]
    },

    {
      title: 'Add New Admin',
      path: '/admin-sign-up',
      icon: <AiIcons.AiOutlineUsergroupAdd />
    },
    {
      title: 'Feedback',
      path: '/Feedback',
      icon: <IoIcons.IoMdPeople />
    },
    {
      title: 'Delete Account',
      path: '/admin-page',
      click : () => deleteAccount(),
      icon: <AiIcons.AiFillDelete />,
    },
    
  ];
  
  

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav> */}
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              {/* <AiIcons.AiOutlineClose onClick={showSidebar} /> */}
              <div></div>
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};


Sidebar.prototype = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
  user: state.auth.user,
});

export default connect(mapStateToProps, {deleteAccount})(Sidebar);
