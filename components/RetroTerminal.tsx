'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TerminalCommand {
  command: string
  output: string[]
  timestamp: string
}

const RetroTerminal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<TerminalCommand[]>([])
  const [currentDir, setCurrentDir] = useState('/home/omrode')
  const [terminalReady, setTerminalReady] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // ASCII Art for the terminal
  const asciiArt = [
    '    ____  _   _ ____  _____ ____  ',
    '   / ___|| | | |  _ \\| ____|  _ \\ ',
    '   \\___ \\| | | | |_) |  _| | |_) |',
    '    ___) | |_| |  _ <| |___|  _ < ',
    '   |____/ \\___/|_| \\_\\_____|_| \\_\\',
    '                                   ',
    '   Welcome to Om Rode\'s Terminal   ',
    '   Type "help" for available commands'
  ]

  // Available commands
  const commands = {
    help: {
      description: 'Show available commands',
      execute: () => [
        'Available commands:',
        '  help          - Show this help message',
        '  clear         - Clear terminal',
        '  ls            - List directory contents',
        '  pwd           - Show current directory',
        '  cd <dir>      - Change directory',
        '  whoami        - Show current user',
        '  date          - Show current date/time',
        '  neofetch      - System information',
        '  matrix        - Matrix rain effect',
        '  about         - About Om Rode',
        '  skills        - Show technical skills',
        '  projects      - Show recent projects',
        '  contact       - Contact information',
        '  fullscreen    - Terminal info',
        '  scrolltest    - Test scrolling functionality',
        '  exit          - Close terminal (or press ESC)'
      ]
    },
    clear: {
      description: 'Clear terminal',
      execute: () => {
        setHistory([])
        return []
      }
    },
    ls: {
      description: 'List directory contents',
      execute: () => [
        '📁 Documents/',
        '📁 Projects/',
        '📁 Skills/',
        '📁 Experience/',
        '📁 Contact/',
        '📄 resume.pdf',
        '📄 portfolio.md'
      ]
    },
    pwd: {
      description: 'Show current directory',
      execute: () => [currentDir]
    },
    cd: {
      description: 'Change directory',
      execute: (args: string[]) => {
        if (args.length === 0) {
          setCurrentDir('/home/omrode')
          return ['Changed to home directory']
        }
        if (args[0] === '..') {
          setCurrentDir('/home')
          return ['Changed to /home']
        }
        if (args[0] === 'Projects') {
          setCurrentDir('/home/omrode/Projects')
          return ['Changed to Projects directory']
        }
        return [`Directory '${args[0]}' not found`]
      }
    },
    whoami: {
      description: 'Show current user',
      execute: () => ['omrode']
    },
    date: {
      description: 'Show current date/time',
      execute: () => [new Date().toLocaleString()]
    },
    neofetch: {
      description: 'System information',
      execute: () => [
        '                    #@@@@@@@#',
        '                   #@@@@@@@@@#',
        '                  #@@@@@@@@@@@#',
        '                 #@@@@@@@@@@@@@#',
        '                #@@@@@@@@@@@@@@@#',
        '               #@@@@@@@@@@@@@@@@@#',
        '              #@@@@@@@@@@@@@@@@@@@#',
        '             #@@@@@@@@@@@@@@@@@@@@@#',
        '            #@@@@@@@@@@@@@@@@@@@@@@@#',
        '           #@@@@@@@@@@@@@@@@@@@@@@@@@#',
        '          #@@@@@@@@@@@@@@@@@@@@@@@@@@@#',
        '         #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#',
        '        #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#',
        '       #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#',
        '      #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#',
        '     #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#',
        '    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#',
        '   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#',
        '  #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#',
        ' #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#',
        '#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#',
        '',
        'OS: Ubuntu 22.04.3 LTS x86_64',
        'Host: Personal Portfolio',
        'Kernel: 6.8.0-65-generic',
        'Uptime: Always learning',
        'Packages: 1337 (portfolio)',
        'Shell: bash 5.1.16',
        'Terminal: Retro Terminal v1.0',
        'CPU: Intel i7-12700K @ 3.60GHz',
        'Memory: 32GB DDR4',
        'Disk: 1TB NVMe SSD'
      ]
    },
    matrix: {
      description: 'Matrix rain effect',
      execute: () => [
        '01010101 10101010 01010101 10101010',
        '10101010 01010101 10101010 01010101',
        '01010101 10101010 01010101 10101010',
        '10101010 01010101 10101010 01010101',
        '01010101 10101010 01010101 10101010',
        '10101010 01010101 10101010 01010101',
        '01010101 10101010 01010101 10101010',
        '10101010 01010101 10101010 01010101',
        '',
        'Wake up, Neo...',
        'The Matrix has you...',
        'Follow the white rabbit...',
        'Knock, knock, Neo...'
      ]
    },
    about: {
      description: 'About Om Rode',
      execute: () => [
        '🚀 Om Rode - Computer Vision & AI Engineer',
        '',
        'Passionate about computer vision, machine learning,',
        'and robotics. Building intelligent systems that',
        'can see, understand, and interact with the world.',
        '',
        '🎯 Current Focus:',
        '  • Computer Vision & Deep Learning',
        '  • Robotics & Autonomous Systems',
        '  • Edge AI & Mobile Applications',
        '',
        '🌍 Based in India, working globally'
      ]
    },
    skills: {
      description: 'Show technical skills',
      execute: () => [
        '💻 Programming Languages:',
        '  • Python (Expert)',
        '  • C++ (Advanced)',
        '  • JavaScript/TypeScript (Intermediate)',
        '',
        '🤖 AI & ML:',
        '  • PyTorch, TensorFlow',
        '  • OpenCV, YOLO',
        '  • Deep Learning, Computer Vision',
        '',
        '🛠️ Tools & Platforms:',
        '  • Docker, Kubernetes',
        '  • AWS, ROS2',
        '  • Git, Linux'
      ]
    },
    projects: {
      description: 'Show recent projects',
      execute: () => [
        '🔬 Recent Projects:',
        '  • ContextVision - Mobile CV App',
        '  • UAV Person Following',
        '  • ADAS Road Safety Analysis',
        '  • Foreign Object Detection',
        '',
        '📊 Technologies Used:',
        '  • YOLOv8, PyTorch Mobile',
        '  • OpenCV, ROS2',
        '  • Raspberry Pi, Android Studio'
      ]
    },
    contact: {
      description: 'Contact information',
      execute: () => [
        '📧 Email: omrode@example.com',
        '🔗 LinkedIn: linkedin.com/in/omrode',
        '🐙 GitHub: github.com/omrode1',
        '📱 Phone: +91-XXXXXXXXXX',
        '',
        '💼 Available for:',
        '  • Full-time opportunities',
        '  • Freelance projects',
        '  • Research collaborations'
      ]
    },
    fullscreen: {
      description: 'Terminal info',
      execute: () => [
        '🚀 Om Rode\'s Terminal',
        '',
        'This terminal is running on a modern web application.',
        'It provides a retro-style experience with ASCII art,',
        'command-line interaction, and various effects.',
        '',
        'Features:',
        '  • Retro ASCII Art',
        '  • Command Line Interface',
        '  • Matrix Rain Effect',
        '  • System Information',
        '  • About, Skills, Projects, Contact',
        '',
        'To exit, press ESC or use the "exit" command.'
      ]
    },
    scrolltest: {
      description: 'Test scrolling functionality',
      execute: () => {
        const lines = []
        for (let i = 1; i <= 50; i++) {
          lines.push(`Line ${i}: This is a test line to demonstrate scrolling functionality.`)
        }
        return [
          '🧪 Scroll Test - Generating 50 lines...',
          '',
          ...lines,
          '',
          '✅ Scroll test complete! You should be able to scroll up and down.',
          '💡 Use mouse wheel, arrow keys, or drag the scrollbar to navigate.'
        ]
      }
    },
    exit: {
      description: 'Close terminal',
      execute: () => {
        onClose()
        return []
      }
    }
  }

  useEffect(() => {
    if (isOpen) {
      setTerminalReady(true)
      // Show welcome message
      setHistory([
        {
          command: '',
          output: asciiArt,
          timestamp: new Date().toLocaleTimeString()
        }
      ])
      // Focus input after animation
      setTimeout(() => {
        inputRef.current?.focus()
      }, 500)
    }
  }, [isOpen])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  // Force scroll to bottom after any command execution
  const scrollToBottom = () => {
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      }
    }, 10)
  }

  // Check if user can scroll down
  const [canScrollDown, setCanScrollDown] = useState(false)

  const checkScrollPosition = () => {
    if (terminalRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = terminalRef.current
      setCanScrollDown(scrollTop < scrollHeight - clientHeight - 10)
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.addEventListener('scroll', checkScrollPosition)
      return () => {
        if (terminalRef.current) {
          terminalRef.current.removeEventListener('scroll', checkScrollPosition)
        }
      }
    }
  }, [])

  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return

    const [command, ...args] = cmd.trim().split(' ')
    const commandLower = command.toLowerCase()

    if (commands[commandLower as keyof typeof commands]) {
      const result = commands[commandLower as keyof typeof commands].execute(args)
      setHistory(prev => [...prev, {
        command: cmd,
        output: result,
        timestamp: new Date().toLocaleTimeString()
      }])
      scrollToBottom() // Scroll to bottom after command execution
    } else {
      setHistory(prev => [...prev, {
        command: cmd,
        output: [`Command '${command}' not found. Type 'help' for available commands.`],
        timestamp: new Date().toLocaleTimeString()
      }])
      scrollToBottom() // Scroll to bottom even if command not found
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input)
      setInput('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleGlobalKeyDown)
      return () => document.removeEventListener('keydown', handleGlobalKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-0 z-50 bg-black"
      >
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-300 text-sm ml-3">omrode@portfolio: ~</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors px-3 py-1 rounded hover:bg-gray-700"
          >
            Exit Terminal [ESC]
          </button>
        </div>

        {/* Terminal Body */}
        <div 
          ref={terminalRef}
          className="terminal-scrollbar h-[calc(100vh-60px)] overflow-y-auto font-mono text-sm text-green-400 bg-gray-900 p-4"
          style={{ fontFamily: 'Ubuntu Mono, monospace' }}
        >
          {history.map((entry, index) => (
            <div key={index} className="mb-2">
              {entry.command && (
                <div className="flex items-center mb-1">
                  <span className="text-blue-400">omrode@portfolio:</span>
                  <span className="text-yellow-400 mx-1">~</span>
                  <span className="text-white">$</span>
                  <span className="text-white ml-2">{entry.command}</span>
                </div>
              )}
              {entry.output.map((line, lineIndex) => (
                <div key={lineIndex} className="text-green-400 mb-1">
                  {line}
                </div>
              ))}
            </div>
          ))}
          
          {/* Current Input Line */}
          <div className="flex items-center">
            <span className="text-blue-400">omrode@portfolio:</span>
            <span className="text-yellow-400 mx-1">~</span>
            <span className="text-white">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              onKeyDown={handleKeyDown}
              className="bg-transparent text-white ml-2 outline-none flex-1"
              placeholder="Type a command..."
              autoFocus
            />
          </div>

          {/* Scroll Indicator */}
          {canScrollDown && (
            <div className="mt-4 text-center">
              <div className="inline-flex items-center text-gray-500 text-xs">
                <span className="mr-2">↓</span>
                <span>Scroll down for more</span>
                <span className="ml-2">↓</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default RetroTerminal
