import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { GrainOverlay } from './GrainOverlay';
import { CustomCursor } from './CustomCursor';
import { useLenis } from '../hooks/useLenis';
import { useTheme } from '../hooks/useTheme';

export function Layout() {
  const { theme, toggleTheme } = useTheme();
  useLenis();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollRestoration />
      <CustomCursor />
      <GrainOverlay />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
