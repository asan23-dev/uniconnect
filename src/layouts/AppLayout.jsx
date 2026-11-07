import React from 'react'
export default function AppLayout({sidebar, header, children, footer, notifications, theme}) {
  return <div className="app-shell" data-theme={theme}>{sidebar}<div className="main-area">{header}{children}{footer}</div>{notifications}</div>
}
