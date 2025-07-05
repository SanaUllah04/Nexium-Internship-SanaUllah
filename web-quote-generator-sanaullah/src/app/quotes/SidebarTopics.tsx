"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function SidebarTopics() {
  return (
    <aside className=" w-64 p-4 border-r bg-gray-100 min-h-screen">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg flex justify-center text-center">
            Available Topics
          </AccordionTrigger>
          <AccordionContent className="text-lg flex flex-col gap-4 text-balance">
            <p style={{ textAlign: "center" }}>
              action<br />
              adventure<br />
              ambition<br />
              appreciation<br />
              art<br />
              attitude<br />
              authenticity<br />
              balance<br />
              bravery<br />
              change<br />
              change management<br />
              change perspective<br />
              change your life<br />
              change yourself<br />
              character<br />
              charity<br />
              choices<br />
              confidence<br />
              cooperation<br />
              courage<br />
              creativity<br />
              determination<br />
              dreams<br />
              education<br />
              empathy<br />
              faith<br />
              forgiveness<br />
              freedom<br />
              friendship<br />
              goals<br />
              gratitude<br />
              growth<br />
              happiness<br />
              hope<br />
              humor<br />
              imagination<br />
              inner peace<br />
              innovation<br />
              inspiration<br />
              integrity<br />
              joy<br />
              kindness<br />
              knowledge<br />
              leadership<br />
              leadership lessons<br />
              learning<br />
              life<br />
              love<br />
              mind<br />
              mindfulness<br />
              mindset<br />
              motivation<br />
              nature<br />
              passion<br />
              patience<br />
              perseverance<br />
              philosophy<br />
              potential<br />
              productivity<br />
              purpose<br />
              reflection<br />
              resilience<br />
              self-care<br />
              self-confidence<br />
              self-discipline<br />
              self-esteem<br />
              self-improvement<br />
              self-love<br />
              self-respect<br />
              strength<br />
              success<br />
              success habits<br />
              success mindset<br />
              success quotes<br />
              teamwork<br />
              time<br />
              trust<br />
              vision<br />
              wellness<br />
              wisdom<br />
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  )
}