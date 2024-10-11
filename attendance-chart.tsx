"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"

// Sample data - in a real application, this would come from your API
const attendanceData = [
  { date: "2023-06-01", hours: 8 },
  { date: "2023-06-02", hours: 7.5 },
  { date: "2023-06-03", hours: 8 },
  { date: "2023-06-04", hours: 8.5 },
  { date: "2023-06-05", hours: 7 },
]

export default function AttendanceChart() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Attendance Overview</CardTitle>
        <CardDescription>Daily hours worked for the current week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            hours: {
              label: "Hours",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={attendanceData}>
              <XAxis dataKey="date" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="hours" fill="var(--color-hours)" name="Hours Worked" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}