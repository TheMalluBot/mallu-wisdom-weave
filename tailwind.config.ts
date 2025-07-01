import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enhanced Kerala Theme Colors
				kerala: {
					gold: '#D4AF37',
					'gold-light': '#F4E4A6',
					'gold-dark': '#B8941F',
					green: '#1B4332',
					'green-light': '#2D5016',
					'green-dark': '#081C15',
					red: '#C1121F',
					'red-light': '#F72585',
					'red-dark': '#90323D',
					white: '#FEFAE0',
					'white-soft': '#F8F6E8',
					cream: '#F7F3E9',
					brown: '#8B4513',
					'brown-light': '#CD853F'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'kerala-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-15px) rotate(2deg)' }
				},
				'kerala-glow': {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))',
						transform: 'scale(1)'
					},
					'50%': { 
						filter: 'drop-shadow(0 0 16px rgba(212, 175, 55, 0.8))',
						transform: 'scale(1.05)'
					}
				},
				'kerala-pulse': {
					'0%, 100%': { opacity: '0.6' },
					'50%': { opacity: '1' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-scale': {
					'0%': { opacity: '0', transform: 'scale(0.8)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'kerala-float': 'kerala-float 4s ease-in-out infinite',
				'kerala-glow': 'kerala-glow 3s ease-in-out infinite',
				'kerala-pulse': 'kerala-pulse 2s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'fade-in-scale': 'fade-in-scale 0.6s ease-out'
			},
			backgroundImage: {
				'kerala-gradient': 'linear-gradient(135deg, #1B4332 0%, #2D5016 35%, #D4AF37 100%)',
				'kerala-gradient-soft': 'linear-gradient(135deg, rgba(27, 67, 50, 0.9) 0%, rgba(45, 80, 22, 0.8) 35%, rgba(212, 175, 55, 0.7) 100%)',
				'kerala-pattern': 'radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(193, 18, 31, 0.1) 0%, transparent 50%)',
				'gold-shimmer': 'linear-gradient(135deg, #D4AF37 0%, #F4E4A6 50%, #D4AF37 100%)'
			},
			boxShadow: {
				'kerala-soft': '0 4px 20px rgba(27, 67, 50, 0.15)',
				'kerala-gold': '0 4px 20px rgba(212, 175, 55, 0.25)',
				'kerala-glow': '0 0 30px rgba(212, 175, 55, 0.3)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
