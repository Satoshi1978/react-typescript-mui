import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  ThemeProvider,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const [isDrawerOpen, setDrawerState] = useState<boolean>(true);

  const handleDrawerToggle = () => {
    setDrawerState(!isDrawerOpen);
  };

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#cf8a1d',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar
          onModeChange={setMode}
          mode={mode}
          onDrawerIconClick={handleDrawerToggle}
          drawer={isDrawerOpen}
        />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar />
          {children}
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
