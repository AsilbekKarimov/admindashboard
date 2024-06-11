import React, { useEffect } from 'react';
import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from 'src/store/customizer/CustomizerSlice';
import FlagEn from 'src/assets/images/flag/icon-flag-en.svg';
import FlagRu from 'src/assets/images/flag/icon-flag-ru.svg';
import FlagUz from 'src/assets/images/flag/icon-flag-uz.svg';
import { Stack } from '@mui/system';
import { useTranslation } from 'react-i18next';

const Languages = [
  {
    flagname: 'English',
    icon: FlagEn,
    value: 'en',
  },
  {
    flagname: 'Русский (Russian)',
    icon: FlagRu,
    value: 'ru',
  },
  {
    flagname: 'Oʻzbekcha (Uzbek)',
    icon: FlagUz,
    value: 'uz',
  },
];

const Language = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const customizer = useSelector((state) => state.customizer);
  const currentLang = Languages.find((_lang) => _lang.value === customizer.isLanguage) || Languages[0];
  const { i18n } = useTranslation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (value) => {
    dispatch(setLanguage(value));
    i18n.changeLanguage(value);
    handleClose();
  };

  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
  }, [customizer.isLanguage, i18n]);

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar src={currentLang.icon} alt={currentLang.value} sx={{ width: 20, height: 20 }} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiMenu-paper': {
            width: '200px',
          },
        }}
      >
        {Languages.map((option, index) => (
          <MenuItem
            key={index}
            sx={{ py: 2, px: 3 }}
            onClick={() => handleLanguageChange(option.value)}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar src={option.icon} alt={option.icon} sx={{ width: 20, height: 20 }} />
              <Typography> {option.flagname}</Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Language;
