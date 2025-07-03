"use client";


import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import InputWithButton from './InputWithButton';


export default function Quotes() {
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





