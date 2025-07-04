"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input 
        type="quoteTopic" 
        placeholder="Enter your topic..." 
        className="shadow-sm"
      />
      <Button 
        type="submit" 
        variant="default"
        className="shadow-sm hover:shadow-md transition-all"
      >
        Generate Quote
      </Button>
    </div>
  )
}