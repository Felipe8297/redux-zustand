import { ChevronDown } from 'lucide-react'
import { Lesson } from './Lesson'

import * as Collapsible from '@radix-ui/react-collapsible'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ title, amountOfLessons, moduleIndex }: ModuleProps) {
  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <span className="flex h-10 w-10 rounded-full justify-center items-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </span>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-sm text-zinc-400">{amountOfLessons} aulas</span>
        </div>
        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="flex flex-col relative gap-4 p-6">
          <Lesson title="Fundamentos do Redux" duration="09:15" />
          <Lesson title="Fundamentos do Redux" duration="09:15" />
          <Lesson title="Fundamentos do Redux" duration="09:15" />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
