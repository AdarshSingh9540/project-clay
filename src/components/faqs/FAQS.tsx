import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { questions } from "./question"

export default function FAQS() {
  return (
    <div id="faqs" className="max-w-3xl mx-auto px-4 py-28">
      <Header />
      <FAQAccordion questions={questions} />
    </div>
  )
}

const Header = () => (
  <div className="flex items-center justify-center gap-2 mb-8">
    <SVGIcon />
    <h2 className=" text-2xl lg:text-5xl font-extrabold">Burning Questions</h2>
  </div>
)

const SVGIcon = () => (
  <div
    className="w-6 h-6 relative -top-7"
    dangerouslySetInnerHTML={{
      __html: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" width="32" height="32">
        <path d="M 27.5 24 C 27.5 24 10.863 17.495 5 5.5" fill="transparent" stroke-width="3" stroke="rgb(0, 0, 0)" stroke-linecap="round"/>
        <path d="M 15 12 C 15 12 3.908 7.781 0 0" transform="translate(7.567 23.943) rotate(-27 7.5 6)" fill="transparent" stroke-width="3" stroke="rgb(0, 0, 0)" stroke-linecap="round"/>
        <path d="M 33.5 16 C 33.5 16 27.5 11.683 27.5 3" fill="transparent" stroke-width="3" stroke="rgb(0, 0, 0)" stroke-linecap="round"/>
      </svg>
    `,
    }}
  />
)

type FAQAccordionProps = {
  questions: { question: string; answer: string }[]
}

const FAQAccordion = ({ questions }: FAQAccordionProps) => (
  <div id="faqs" className="rounded-2xl p-2 border border-black shadow-sm  bg-white">
    <Accordion type="single" collapsible className="space-y-1">
      {questions.map((item, index) => (
        <FAQAccordionItem
          key={index}
          value={`item-${index}`}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </Accordion>
  </div>
)

type FAQAccordionItemProps = {
  value: string
  question: string
  answer: string
}

const FAQAccordionItem = ({
  value,
  question,
  answer,
}: FAQAccordionItemProps) => (
  <AccordionItem
    value={value}
    className="border-b border-gray-200 last:border-b-0 mx-3"
  >
    <AccordionTrigger className="text-md font-medium hover:no-underline flex items-center gap-2">
      {question}
    </AccordionTrigger>
    <AccordionContent className="text-gray-600 px-8">{answer}</AccordionContent>
  </AccordionItem>
)
