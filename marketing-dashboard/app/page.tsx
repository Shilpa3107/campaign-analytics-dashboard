"use client";
import { useState, useEffect } from "react";

type Campaign = {
  id: number;
  name: string;
  status: string;
  clicks: number;
  cost: number;
  impressions: number;
};

export default function Campaigns() {
  const [filter, setFilter] = useState("All");
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);


  useEffect(() => {
    fetch("http://127.0.0.1:8000/campaigns")
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = campaigns.filter(
    (c) => filter === "All" || c.status === filter
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Marketing Campaigns</h1>

      <div className="mb-4">
        <label className="mr-2 text-gray-700 font-medium">Filter by Status:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Paused">Paused</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="py-2 px-4 text-left text-gray-600">ID</th>
              <th className="py-2 px-4 text-left text-gray-600">Campaign Name</th>
              <th className="py-2 px-4 text-left text-gray-600">Status</th>
              <th className="py-2 px-4 text-left text-gray-600">Clicks</th>
              <th className="py-2 px-4 text-left text-gray-600">Cost ($)</th>
              <th className="py-2 px-4 text-left text-gray-600">Impressions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{c.id}</td>
                <td className="py-2 px-4">{c.name}</td>
                <td className={`py-2 px-4 font-semibold ${c.status === "Active" ? "text-green-600" : "text-red-500"}`}>
                  {c.status}
                </td>
                <td className="py-2 px-4">{c.clicks}</td>
                <td className="py-2 px-4">${c.cost.toLocaleString()}</td>
                <td className="py-2 px-4">{c.impressions.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
