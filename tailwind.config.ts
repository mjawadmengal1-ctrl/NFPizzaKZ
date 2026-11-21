import type { Config } from 'tailwindcss';
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { background: 'hsl(var(--background))', foreground: 'hsl(var(--foreground))', primary: 'hsl(var(--primary))', gold: 'hsl(var(--gold))', ink: 'hsl(var(--ink))', muted: 'hsl(var(--muted))', surface: 'hsl(var(--surface))', line: 'hsl(var(--line))', cream: 'hsl(var(--cream))' },
    fontFamily: { display: ['Barlow Condensed', 'sans-serif'], sans: ['DM Sans', 'sans-serif'] },
    boxShadow: { card: '0 12px 40px hsl(25 40% 15% / 0.06)', glow: '0 8px 24px hsl(7 85% 45% / .24)' }
  } }, plugins: []
} satisfies Config;
