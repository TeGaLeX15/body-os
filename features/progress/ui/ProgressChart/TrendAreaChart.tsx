// features/progress/ui/ProgressChart/TrendAreaChart.tsx
"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type TrendPoint = {
  date: string;
  index: number;
};

type Props = {
  data: TrendPoint[];
};

export default function TrendAreaChart({
  data,
}: Props) {
  return (
    <div className="h-52 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient
              id="fill"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#8b5cf6"
                stopOpacity={0.35}
              />
              <stop
                offset="95%"
                stopColor="#8b5cf6"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="rgba(255,255,255,0.05)"
          />

          <XAxis
            dataKey="date"
            tick={{
              fontSize: 10,
              fill: "#666",
            }}
            tickMargin={8}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f0f0f",
              border:
                "1px solid rgba(255,255,255,0.08)",
              borderRadius: 10,
              fontSize: 12,
            }}
          />

          <Area
            type="monotone"
            dataKey="index"
            stroke="#8b5cf6"
            strokeWidth={2}
            fill="url(#fill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}