import React from 'react'
import { FiClock, FiCheckCircle, FiAlertCircle, FiXCircle, FiLoader } from 'react-icons/fi'
import { IoCheckmarkCircle } from 'react-icons/io5'

type Status = "pending" | "processing" | "accepted" | "cancelled" | "rejected" | "completed"

interface TimelineItem {
  status: Status
  title: string
  description: string
  timestamp: string
}

interface TimelineProps {
  items: TimelineItem[]
  highlightedIndex: number
}

const statusConfig = {
  pending: {
    icon: FiClock,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500",
    borderColor: "border-yellow-500",
  },
  processing: {
    icon: FiLoader,
    color: "text-blue-500",
    bgColor: "bg-blue-500",
    borderColor: "border-blue-500",
  },
  accepted: {
    icon: FiCheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-500",
    borderColor: "border-green-500",
  },
  cancelled: {
    icon: FiXCircle,
    color: "text-gray-500",
    bgColor: "bg-gray-500",
    borderColor: "border-gray-500",
  },
  rejected: {
    icon: FiAlertCircle,
    color: "text-red-500",
    bgColor: "bg-red-500",
    borderColor: "border-red-500",
  },
  completed: {
    icon: IoCheckmarkCircle,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500",
    borderColor: "border-emerald-500",
  },
}



export default function ScrapStatusTimeline({ items, highlightedIndex }: TimelineProps) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <div className="relative space-y-8">
        {items.map((item, index) => {
          const Icon = statusConfig[item.status].icon
          const isLast = index === items.length - 1
          const isHighlighted = index === highlightedIndex

          return (
            <div key={index} className={`relative pl-8 sm:pl-16 transition-all duration-300 ease-in-out ${isHighlighted ? 'scale-105' : 'scale-100 opacity-50'}`}>
              {/* Vertical Line */}
              {!isLast && (
                <div
                  className={`absolute left-2 top-8 h-full w-0.5 ${isHighlighted ? statusConfig[item.status].bgColor : 'bg-gray-200'}`}
                />
              )}

              {/* Icon */}
              <div
                className={`absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full sm:left-0 ${isHighlighted ? statusConfig[item.status].bgColor : 'bg-gray-200'}`}
              >
                <Icon
                  className={`h-6 w-6 ${isHighlighted ? 'text-white' : 'text-gray-400'}`}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div
                className={`flex flex-col gap-2 rounded-lg border border p-4 shadow-sm ${isHighlighted ? `${statusConfig[item.status].borderColor} border-2` : 'border-mutedColor'}`}
              >
                <div className="flex flex-col gap-4 ">
                  <div>
                    <h3 className={`font-semibold ${isHighlighted ? statusConfig[item.status].color : 'text-gray-700'}`}>{item.title}</h3>
                    <p className={`text-sm ${isHighlighted ? 'text-gray-600' : 'text-gray-500'}`}>{item.description}</p>
                  </div>
                  <time
                    className={`whitespace-nowrap text-sm ${isHighlighted ? 'text-gray-500' : 'text-gray-400'} text-left`}
                    dateTime={item.timestamp}
                  >
                    {item.timestamp}
                  </time>
                </div>
                <div className="flex items-left gap-2">
                  <span
                    className={`inline-flex items-left rounded-full px-0 py-0.5 text-xs font-medium ${isHighlighted ? `${statusConfig[item.status].bgColor}/10 ${statusConfig[item.status].color}` : 'bg-gray-100 text-gray-400'}`}
                  >
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

