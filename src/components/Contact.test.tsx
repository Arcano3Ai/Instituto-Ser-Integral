import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Contact from './Contact';

describe('Contact Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders contact form fields correctly', () => {
    render(<Contact />);
    
    expect(screen.getByText('Comienza tu Proceso')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tu nombre...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tu teléfono...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tu correo...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Cuéntanos brevemente qué te gustaría explorar...')).toBeInTheDocument();
  });

  it('submits the form and displays success toast', async () => {
    render(<Contact />);
    
    fireEvent.change(screen.getByPlaceholderText('Tu nombre...'), { target: { value: 'Juan Pérez' } });
    fireEvent.change(screen.getByPlaceholderText('Tu teléfono...'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByPlaceholderText('Tu correo...'), { target: { value: 'juan@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Cuéntanos brevemente qué te gustaría explorar...'), { target: { value: 'Consulta individual' } });

    const submitBtn = screen.getByRole('button', { name: /Quiero comenzar mi proceso/i });
    fireEvent.click(submitBtn);

    // Should show loading state
    expect(screen.getByText(/Enviando.../i)).toBeInTheDocument();

    // Fast-forward timers for API delay (1500ms)
    act(() => {
      vi.advanceTimersByTime(1500);
    });

    // Should show toast
    expect(screen.getByText('¡Mensaje enviado! Nos contactaremos pronto.')).toBeInTheDocument();

    // Fast-forward timers for Toast timeout (5000ms)
    act(() => {
      vi.advanceTimersByTime(5000);
    });
  });
});
