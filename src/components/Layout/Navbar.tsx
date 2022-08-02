import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  styled,
  Switch,
  SxProps,
  Toolbar,
  Typography,
} from '@mui/material';

type NavbarProps = {
  mode: 'light' | 'dark';
  onModeChange: (mode: 'light' | 'dark') => void;
  drawer: boolean;
  onDrawerIconClick: () => void;
  sx?: SxProps;
};

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const Navbar = ({
  mode,
  onModeChange,
  onDrawerIconClick,
}: NavbarProps): JSX.Element => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerIconClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Employee Management</Typography>
        <UserBox>
          <Switch
            onChange={(e) => onModeChange(mode === 'light' ? 'dark' : 'light')}
          />
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
