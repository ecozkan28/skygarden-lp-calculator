import { useState } from "react";

export default function SkygardenLPReturnCalculator() {
  const [amount, setAmount] = useState(2500000);
  const [years, setYears] = useState(2);
  const interestRate = 0.15;
  const successFeeRate = 0.03;

  const totalReturn = amount * Math.pow(1 + interestRate, years);
  const netPayout = totalReturn + amount * successFeeRate;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <img
        src="/skygarden-logo.png"
        alt="Skygarden Miami"
        className="mx-auto mb-6"
        style={{ width: 120 }}
      />

      <h1 className="text-3xl font-semibold mb-2 text-center text-gray-800">
        Skygarden Miami LP Return Calculator
      </h1>

      <p className="text-sm text-center text-gray-500 mb-6">
        Interest Rate: 15% &nbsp;&nbsp;|&nbsp;&nbsp; Success Fee: 3%
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Investment Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Investment Duration (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="pt-6 border-t mt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Results:</h2>
          <p><strong>Net Payout to LP:</strong> ${netPayout.toLocaleString()}</p>
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-500 text-center">
        Skygarden Miami – Confidential Model. For illustration purposes only.
      </p>
    </div>
  );
}