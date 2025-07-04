'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { quotes } from './quotes'; // ✅ import the array

export default function InputWithButton() {
  const [topic, setTopic] = useState('');
  const [matchedQuotes, setMatchedQuotes] = useState<string[]>([]);

  const handleSubmit = () => {
    const filtered = quotes
      .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map(q => q.text);

    setMatchedQuotes(filtered.length ? filtered : ["No quotes found for this topic."]);
  };

  
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="text-center mt-4">
        <h1 className="text-xl font-bold">Enter a Topic for your Quotes<br /></h1>
      </div>

      <div className="flex w-full max-w-sm items-center gap-2">
        <Input
          type="text"
          placeholder="Enter your topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="shadow-sm"
        />
        <Button
          type="button"
          onClick={handleSubmit}
          className="shadow-sm hover:shadow-md transition-all"
        >
          Generate Quote
        </Button>
      </div>

      <div className="w-full max-w-md space-y-4 mt-4">
        {matchedQuotes.map((quote, index) => (
          <p key={index} className="bg-gray-100 p-3 rounded shadow">
            {quote}
          </p>
        ))}
      </div>
    </div>
  );
}
