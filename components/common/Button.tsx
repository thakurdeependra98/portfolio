import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  onClick,
  disabled = false 
}: ButtonProps) => {
  const baseStyles = 'font-semibold rounded transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'
  
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700 shadow-md hover:shadow-lg',
    success: 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700 shadow-md hover:shadow-lg',
    danger: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 shadow-md hover:shadow-lg',
    warning: 'bg-yellow-500 text-black hover:bg-yellow-600 active:bg-yellow-700 shadow-md hover:shadow-lg',
    info: 'bg-cyan-500 text-white hover:bg-cyan-600 active:bg-cyan-700 shadow-md hover:shadow-lg',
    dark: 'bg-gray-900 text-white hover:bg-black active:bg-gray-800 shadow-md hover:shadow-lg',
    light: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 shadow-md hover:shadow-lg',
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 active:from-purple-700 active:to-pink-700 shadow-lg hover:shadow-xl'
  }
  
  return (
    <button 
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button