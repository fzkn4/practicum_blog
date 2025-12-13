import React from 'react'

const Icon = ({ name, size = 24, color = 'currentColor', className = '' }) => {
  // Map our icon names to Hackernoon pixel icon library class names
  // Check https://pixeliconlibrary.com for available icons
  const iconMap = {
    profile: 'hn-user',           // User/profile icon
    book: 'hn-bookmark',          // Book icon (using bookmark as closest match)
    blog: 'hn-newspaper',         // Document/blog icon (using newspaper)
    search: 'hn-search',          // Search icon
    settings: 'hn-cog',           // Settings/gear icon
    design: 'hn-bolt',            // Design icon (using bolt as creative/design symbol)
    bookOpen: 'hn-book-heart',    // Open book icon (using book-heart)
    target: 'hn-check-circle',    // Target/goal icon (using check-circle as achievement symbol)
  }

  const iconClass = iconMap[name] || 'hn-help-circle'
  const style = {
    fontSize: `${size}px`,
    color: color,
  }

  return (
    <i 
      className={`hn ${iconClass} ${className}`} 
      style={style}
      aria-hidden="true"
    />
  )
}

export default Icon

