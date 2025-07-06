"use client";

import InputWithButton from './InputWithButton';
import SidebarTopics from './SidebarTopics'; // Updated import name

export default function Quotes() {
  return (
    <div className="min-h-screen flex animate-gradient-main">
      {/* Sidebar on the left */}
      <SidebarTopics />
      
      {/* Main content in the middle - fixed position */}
      <div className="flex-1 relative">
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto">
            <InputWithButton />
          </div>
        </div>
      </div>
    </div>
  )
}