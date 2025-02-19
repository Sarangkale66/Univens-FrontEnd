import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 150 },
  { month: "Mar", value: 180 },
  { month: "Apr", value: 200 },
  { month: "May", value: 220 },
  { month: "Jun", value: 250 },
  { month: "Jul", value: 270 },
  { month: "Aug", value: 300 },
  { month: "Sep", value: 320 },
  { month: "Oct", value: 350 },
  { month: "Nov", value: 380 },
  { month: "Dec", value: 400 },
];

export default function Dashboard() {
  return (
    <div className="h-[100vh] w-[100vw] p-6 grid gap-6 grid-cols-1 md:grid-cols-2 bg-[#010102]">
      {/* Parameter Cards */}
      <Card className="p-4">
        <CardContent>
          <h2 className="text-xl font-semibold">Unique Visitors </h2>
          <p className="text-2xl font-bold">4,000</p>
        </CardContent>
      </Card>

      <Card className="p-4">
        <CardContent>
          <h2 className="text-xl font-semibold">Total Clicks</h2>
          <p className="text-2xl font-bold">50,000</p>
        </CardContent>
      </Card>

      {/* Monthly Collection Graph */}
      <Card className="col-span-1 md:col-span-2 p-4">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Monthly Vistors Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}