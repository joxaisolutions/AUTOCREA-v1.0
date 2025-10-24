import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#EBF4FF',
  				'100': '#D7E9FF',
  				'200': '#B0D3FF',
  				'300': '#88BDFF',
  				'400': '#61A7FF',
  				'500': '#4A90E2',
  				'600': '#3B73B5',
  				'700': '#2C5688',
  				'800': '#1D395B',
  				'900': '#0E1C2E',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#F5EDFA',
  				'100': '#EBDBF5',
  				'200': '#D7B7EB',
  				'300': '#C393E1',
  				'400': '#AF6FD7',
  				'500': '#9B59B6',
  				'600': '#7C4792',
  				'700': '#5D356E',
  				'800': '#3E2349',
  				'900': '#1F1225',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				'50': '#E5F9FF',
  				'100': '#CCF3FF',
  				'200': '#99E7FF',
  				'300': '#66DBFF',
  				'400': '#33CFFF',
  				'500': '#00D9FF',
  				'600': '#00AECC',
  				'700': '#008299',
  				'800': '#005766',
  				'900': '#002B33',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			surface: '#1a1f3a',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'gradient-primary': 'linear-gradient(135deg, #4A90E2 0%, #9B59B6 100%)',
  			'gradient-accent': 'linear-gradient(135deg, #00D9FF 0%, #4A90E2 100%)',
  			'gradient-bg': 'linear-gradient(180deg, #0A0E27 0%, #1a1f3a 50%, #0A0E27 100%)'
  		},
  		borderColor: {
  			DEFAULT: 'rgba(74, 144, 226, 0.2)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
