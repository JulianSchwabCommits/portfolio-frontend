import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeToggle } from '@/components/ThemeToggle';
import * as useThemeHook from '@/hooks/useTheme';

vi.mock('@/hooks/useTheme');

describe('ThemeToggle', () => {
  it('should render theme toggle button', () => {
    vi.spyOn(useThemeHook, 'useTheme').mockReturnValue({
      isDark: false,
      toggle: vi.fn(),
    });

    render(<ThemeToggle />);
    
    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toBeInTheDocument();
  });

  it('should have correct cursor data attribute', () => {
    vi.spyOn(useThemeHook, 'useTheme').mockReturnValue({
      isDark: false,
      toggle: vi.fn(),
    });

    render(<ThemeToggle />);
    
    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toHaveAttribute('data-cursor', 'link');
  });

  it('should have glass styling class', () => {
    vi.spyOn(useThemeHook, 'useTheme').mockReturnValue({
      isDark: false,
      toggle: vi.fn(),
    });

    render(<ThemeToggle />);
    
    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toHaveClass('glass');
  });
});
