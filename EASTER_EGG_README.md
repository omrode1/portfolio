# 🥚 Easter Egg: Konami Code Terminal

## What is it?
A hidden retro terminal that can be activated by entering the famous Konami code on your keyboard. When activated, it takes over the entire website, providing an immersive terminal experience.

## How to activate:
1. Navigate to any page on the website
2. Enter the Konami code sequence: **↑↑↓↓←→←→BA**
   - Press Up Arrow twice
   - Press Down Arrow twice  
   - Press Left Arrow
   - Press Right Arrow
   - Press Left Arrow
   - Press Right Arrow
   - Press B key
   - Press A key

## What happens:
The terminal takes over the entire website with:
- **Full-screen takeover** - Replaces the entire website content
- **Ubuntu-themed styling** - Green text on black background with authentic terminal colors
- **Working command system** - Fully functional command-line interface
- **ASCII art welcome message** - Retro-style welcome screen
- **Ubuntu-style window controls** - Red, yellow, green dots in header

## Available Commands:
- `help` - Show all available commands
- `clear` - Clear terminal history
- `ls` - List directory contents
- `pwd` - Show current directory
- `cd <dir>` - Change directory
- `whoami` - Show current user
- `date` - Show current date/time
- `neofetch` - System information with ASCII art
- `matrix` - Matrix-style output
- `about` - About Om Rode
- `skills` - Technical skills
- `projects` - Recent projects
- `contact` - Contact information
- `fullscreen` - Terminal information and features
- `exit` - Close terminal

## How to Exit:
- **Press ESC key** - Quick exit from anywhere
- **Type `exit` command** - Traditional command-line exit
- **Click "Exit Terminal" button** - In the terminal header

## Technical Details:
- Built with React hooks (`useKonamiCode`)
- Uses Framer Motion for smooth animations
- **Full-screen overlay** - Takes over entire viewport
- TypeScript support
- Global state management with React Context
- ESC key support for intuitive navigation

## Files Created:
- `components/RetroTerminal.tsx` - Main terminal component (full-screen)
- `components/useKonamiCode.ts` - Konami code detection hook
- `components/KonamiProvider.tsx` - Global state provider
- Updated `app/layout.tsx` - Integrated provider
- Updated `components/Footer.tsx` - Added subtle hint

## Future Enhancements:
- Add more hidden commands
- Include file system simulation
- Add sound effects
- More ASCII art variations
- Easter egg achievements system
- Terminal themes and customization

## User Experience:
The terminal now provides a **complete immersion experience** by taking over the entire website, making users feel like they're actually using a real terminal. The full-screen approach eliminates distractions and creates a more authentic retro computing experience.

Enjoy discovering the hidden terminal! 🚀
