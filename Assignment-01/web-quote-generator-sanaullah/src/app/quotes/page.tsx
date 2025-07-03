"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"



export default function Quote() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-slate-800">Quote Generator</CardTitle>
          <CardDescription className="text-slate-600">
            Enter a topic and get an inspiring quote related to it
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          <InputWithButton />
        </CardContent>
      </Card>
    </div>
  )
}



function InputWithButton() {
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

