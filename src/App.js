import { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(2500000);
  const [years, setYears] = useState(2);
  const interestRate = 0.15;
  const successFeeRate = 0.03;

  const calculateReturn = () => {
    const totalReturn = amount * Math.pow(1 + interestRate, years);
    const successFee = amount * successFeeRate;
    const netPayout = totalReturn + successFee;

    return {
      totalReturn,
      successFee,
      netPayout,
    };
  };

  const { totalReturn, successFee, netPayout } = calculateReturn();

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '24px' }}>Skygarden Miami LP Return Calculator</h1>

      <div style={{ marginBottom: '12px' }}>
        <label>Investment Amount ($)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          style={{ width: '100%', padding: '8px', marginTop: '4px' }}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label>Investment Duration (Years)</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          style={{ width: '100%', padding: '8px', marginTop: '4px' }}
        />
      </div>

      <div style={{ borderTop: '1px solid #ccc', paddingTop: '16px' }}>
        <p><strong>Total Return Before Fee:</strong> ${totalReturn.toLocaleString()}</p>
        <p><strong>Success Fee (3%):</strong> ${successFee.toLocaleString()}</p>
        <p><strong>Net Payout:</strong> ${netPayout.toLocaleString()}</p>
      </div>

      <p style={{ fontSize: '12px', color: '#777', marginTop: '24px' }}>
        Skygarden Miami – Confidential Model
      </p>
    </div>
  );
}