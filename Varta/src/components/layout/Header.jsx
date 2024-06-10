import { AppBar, Backdrop, Badge, Box, IconButton, Menu, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { themePrimary } from '../../constants/color'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
const Search = lazy(()=>import('../specific/Search'))
const Notification = lazy(()=>import('../specific/Notification'))
const NewGroupDialog = lazy(()=>import('../specific/NewGroup'))

function Header() {
  const navigate = useNavigate()
  const [isSearch, setIsSearch] = useState()
  const [isNotification, setIsNotification] = useState()
  const [isNewGroup, setIsNewGroup] = useState()

  const handleMobile = () =>{

  }
  const openSearch = () => {
    setIsSearch((prev)=>!prev)
};

const openNewGroup = () => {
    // Function logic goes here
    setIsNewGroup((prev)=>!prev)
};

const navigateToGroup = () => navigate("/groups");
const openNotification = () =>{
  setIsNotification(prev => !prev)
}
const logoutHandler = () => {
    // Function logic goes here
};

const notificationCount = 4;
  return (
    <>
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: themePrimary,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Varta
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
               <MenuIcon/>
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
             <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSearch}
              />

              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />

              <IconBtn
                title={"Manage Groups"}
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />

              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onClick={openNotification}
                value={notificationCount}
              />

              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>    
        </AppBar>
        </Box>
        {isSearch && 
        <Suspense fallback={<Backdrop open />}>
          <Search/>
        </Suspense>
        }
        { isNotification &&
        <Suspense fallback={<Backdrop open />}>
          <Notification/>
        </Suspense>
        }
        {isNewGroup && 
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog/>
        </Suspense>
        }
    </>

  )
}

const IconBtn = ({title, icon, onClick, value}) =>{
  return (
    <Tooltip title={title}>
      <IconButton color='inherit' size='large' onClick={onClick}>
        {value ? (
          <Badge badgeContent={value} color='success'>
            {icon}
          </Badge>
        ):(
          icon
        )}
      </IconButton>
    </Tooltip>
  )

}

export default Header