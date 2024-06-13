import { useState } from 'react';
import { Box, Menu, Typography, Button, Divider, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { IconChevronDown, IconHelp } from '@tabler/icons';
import AppLinks from './AppLinks';
import QuickLinks from './QuickLinks';
import React from 'react';
import { useTranslation } from 'react-i18next';

const AppDD = () => {
  const { t } = useTranslation();

  const [anchorElApps, setAnchorElApps] = useState(null);
  const [anchorElQuickLinks, setAnchorElQuickLinks] = useState(null);

  const handleClickApps = (event) => {
    setAnchorElApps(event.currentTarget);
  };

  const handleCloseApps = () => {
    setAnchorElApps(null);
  };

  const handleClickQuickLinks = (event) => {
    setAnchorElQuickLinks(event.currentTarget);
  };

  const handleCloseQuickLinks = () => {
    setAnchorElQuickLinks(null);
  };

  return (
    <>
      <Box>
        <Button
          aria-label="show 11 new notifications"
          color="inherit"
          variant="text"
          aria-controls="apps-menu"
          aria-haspopup="true"
          sx={{
            bgcolor: anchorElApps ? 'primary.light' : '',
            color: anchorElApps ? 'primary.main' : (theme) => theme.palette.text.secondary,
          }}
          onClick={handleClickApps}
          endIcon={<IconChevronDown size="15" style={{ marginLeft: '-5px', marginTop: '2px' }} />}
        >
          {t('apps')} </Button>
        {/* ------------------------------------------- */}
        {/* Apps Dropdown */}
        {/* ------------------------------------------- */}
        <Menu
          id="apps-menu"
          anchorEl={anchorElApps}
          keepMounted
          open={Boolean(anchorElApps)}
          onClose={handleCloseApps}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          sx={{
            '& .MuiMenu-paper': {
              width: '850px',
            },
            '& .MuiMenu-paper ul': {
              p: 0,
            },
          }}
        >
          <Grid container>
            <Grid item sm={0} display="flex">
              <Box p={4} pr={0} pb={3}>
                <AppLinks />
                <Divider />
                <Box
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'flex',
                    },
                  }}
                  alignItems="center"
                  justifyContent="space-between"
                  pt={2}
                  pr={4}
                >
                  <Link to="/faq">
                    <Typography
                      variant="subtitle2"
                      fontWeight="600"
                      color="textPrimary"
                      display="flex"
                      alignItems="center"
                      gap="4px"
                    >
                      <IconHelp width={24} />
                      Frequently Asked Questions
                    </Typography>
                  </Link>
                  <Button variant="contained" color="primary">
                    {t(`${"Check"}`)}
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Menu>
      </Box>
      <Button
        color="inherit"
        sx={{ color: (theme) => theme.palette.text.secondary }}
        variant="text"
        to="/apps/calendar"
        component={Link}
      >
        Calendar
      </Button>
      <Button
        color="inherit"
        sx={{ color: (theme) => theme.palette.text.secondary }}
        variant="text"
        to="/user-profile"
        component={Link}
      >
        Profile
      </Button>
      <Button
        color="inherit"
        sx={{ color: (theme) => theme.palette.text.secondary }}
        variant="text"
        to="/apps/contacts"
        component={Link}
      >
        Contacts
      </Button>
      <Button
        color="inherit"
        sx={{ color: (theme) => theme.palette.text.secondary }}
        variant="text"
        to="/tables/basic"
        component={Link}
      >
        Table
      </Button>
      <Box>
        <Button
          aria-label="show 11 new notifications"
          color="inherit"
          variant="text"
          aria-controls="quick-links-menu"
          aria-haspopup="true"
          sx={{
            bgcolor: anchorElQuickLinks ? 'primary.light' : '',
            color: anchorElQuickLinks ? 'primary.main' : (theme) => theme.palette.text.secondary,
          }}
          onClick={handleClickQuickLinks}
          endIcon={<IconChevronDown size="15" style={{ marginLeft: '-5px', marginTop: '2px' }} />}
        >
          QuickLinks
        </Button>
        {/* ------------------------------------------- */}
        {/* QuickLinks Dropdown */}
        {/* ------------------------------------------- */}
        <Menu
          id="quick-links-menu"
          anchorEl={anchorElQuickLinks}
          keepMounted
          open={Boolean(anchorElQuickLinks)}
          onClose={handleCloseQuickLinks}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          sx={{
            '& .MuiMenu-paper': {
              display: 'flex',
              width: '250px',
            },
            '& .MuiMenu-paper ul': {
              p: 0,
            },
          }}
        >
          <Box p={3}>
            <QuickLinks />
          </Box>
        </Menu>
      </Box>
    </>
  );
};

export default AppDD;
