import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import BranchSidebar from '../../../components/apps/branches/BranchSidebar';
import BranchContent from '../../../components/apps/branches/BranchContent';
import AppCard from 'src/components/shared/AppCard';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Branches',
  },
];

const Branches = () => {

  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(true);
  const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  useEffect(() => {
    if (lgDown) {
      setMobileSidebarOpen(!isMobileSidebarOpen);
    } else {
      setMobileSidebarOpen(true);
    }
  }, [lgDown]);
  return (
    <div>
      <Breadcrumb title="Branches" items={BCrumb} />
      <PageContainer>
      <AppCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}

        {isMobileSidebarOpen ? (
          <BranchSidebar
            isMobileSidebarOpen={isMobileSidebarOpen}
            onSidebarClose={() => setMobileSidebarOpen(false)}
          />
        ) : (
          ''
        )}
        {/* ------------------------------------------- */}
        {/* Right part */}
        {/* ------------------------------------------- */}

        <Box flexGrow={1}>
          <BranchContent toggleNoteSidebar={() => setMobileSidebarOpen(!isMobileSidebarOpen)} />
        </Box>
      </AppCard>  
      </PageContainer>
    </div>
  )
}

export default Branches