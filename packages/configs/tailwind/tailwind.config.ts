module.exports = {
  content: ["../../apps/**/*.{astro,ts}"],

  theme: {
    extend: {
      colors: {
        default: "hsl(var(--default))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        skeleton: "hsl(var(--skeleton))",
        icon: "hsl(var(--icon))",
        blue: "hsl(var(--blue))",
        grey: "hsl(var(--grey))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        cta: {
          DEFAULT: "hsl(var(--cta))",
          foreground: "hsl(var(--cta-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        overlay: {
          DEFAULT: "hsl(var(--overlay))",
        },
        inset: {
          DEFAULT: "hsl(var(--inset))",
        },
        subtle: {
          DEFAULT: "hsl(var(--subtle))",
        },
        "subtle-hover": {
          DEFAULT: "hsl(var(--subtle-hover))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      borderColor: {
        input: "hsl(var(--input))",
        card: "hsl(var(--border-card))",
      },
    },

    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
};
