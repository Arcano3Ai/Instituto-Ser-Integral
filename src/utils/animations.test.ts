import { describe, it, expect } from 'vitest';
import { fadeInUp, fadeInLeft, fadeInRight, scaleUp } from './animations';

describe('Animations Utils', () => {
  it('should have defined variant objects for framer-motion', () => {
    expect(fadeInUp).toHaveProperty('hidden');
    expect(fadeInUp).toHaveProperty('visible');
    
    expect(fadeInLeft).toHaveProperty('hidden');
    expect(fadeInLeft).toHaveProperty('visible');
    
    expect(fadeInRight).toHaveProperty('hidden');
    expect(fadeInRight).toHaveProperty('visible');
    
    expect(scaleUp).toHaveProperty('hidden');
    expect(scaleUp).toHaveProperty('visible');
  });

  it('fadeInUp should animate Y axis', () => {
    expect((fadeInUp.hidden as Record<string, unknown>).y).toBe(20);
    expect((fadeInUp.visible as Record<string, unknown>).y).toBe(0);
  });
});
