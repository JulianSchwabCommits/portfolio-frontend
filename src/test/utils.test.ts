import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('utils', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      const result = cn('px-4', 'py-2', 'bg-blue-500');
      expect(result).toBe('px-4 py-2 bg-blue-500');
    });

    it('should handle tailwind conflicts correctly', () => {
      const result = cn('px-4', 'px-6');
      expect(result).toBe('px-6');
    });

    it('should handle conditional classes', () => {
      const isActive = true;
      const isInactive = false;
      const result = cn('base-class', isActive && 'active', isInactive && 'inactive');
      expect(result).toBe('base-class active');
    });

    it('should handle undefined and null values', () => {
      const result = cn('base', undefined, null, 'end');
      expect(result).toBe('base end');
    });
  });
});
