import React from 'react';
import { Drawer, useMediaQuery } from '@mui/material';
import BranchList from './BranchList';

const drawerWidth = 260;

const BranchSidebar = ({ isMobileSidebarOpen, onSidebarClose }) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        zIndex: lgUp ? 0 : 1,
        [`& .MuiDrawer-paper`]: { position: 'relative' },
      }}
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant={lgUp ? 'persistent' : 'temporary'}
    >
      <BranchList />
    </Drawer>
  );
};

export default BranchSidebar;
