import React from 'react';
import { type Language } from '../types';

interface PriceHistoryChartProps {
  data: { date: string; price: number }[];
  language: Language;
}

const PriceHistoryChart: React.FC<PriceHistoryChartProps> = ({ data, language }) => {
  if (!data || data.length < 2) {
    return (
        <div className="text-center text-sm text-gray-400 py-4">
            {language === 'en' ? 'Not enough price history data available.' : 'पुरेसा किंमत इतिहास डेटा उपलब्ध नाही.'}
        </div>
    );
  }

  const WIDTH = 300;
  const HEIGHT = 120;
  const PADDING = 20;

  const prices = data.map(p => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice === 0 ? 1 : maxPrice - minPrice;

  const getX = (index: number) => {
    return PADDING + (index / (data.length - 1)) * (WIDTH - 2 * PADDING);
  };

  const getY = (price: number) => {
    return HEIGHT - PADDING - ((price - minPrice) / priceRange) * (HEIGHT - 2 * PADDING);
  };

  const linePath = data
    .map((point, index) => {
      const x = getX(index);
      const y = getY(point.price);
      return `${index === 0 ? 'M' : 'L'} ${x},${y}`;
    })
    .join(' ');
  
  const formatAxisLabel = (price: number) => {
    const crore = 10000000;
    const lakh = 100000;
    if (price >= crore) return `₹${(price / crore).toFixed(1)}Cr`;
    if (price >= lakh) return `₹${(price / lakh).toFixed(1)}L`;
    return `₹${price / 1000}k`;
  };

  const oldestDate = new Date(data[0].date).toLocaleDateString(language === 'en' ? 'en-GB' : 'mr-IN', { year: '2-digit', month: 'short' });
  const newestDate = new Date(data[data.length - 1].date).toLocaleDateString(language === 'en' ? 'en-GB' : 'mr-IN', { year: '2-digit', month: 'short' });


  return (
    <div className="w-full">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">{language === 'en' ? 'Price Trend' : 'किंमत ट्रेंड'}</h4>
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label={language === 'en' ? 'Price history chart' : 'किंमत इतिहास चार्ट'}>
            {/* Y-axis labels */}
            <text x={PADDING - 5} y={PADDING} alignmentBaseline="middle" textAnchor="end" fill="#9ca3af" fontSize="10">{formatAxisLabel(maxPrice)}</text>
            <text x={PADDING - 5} y={HEIGHT - PADDING} alignmentBaseline="middle" textAnchor="end" fill="#9ca3af" fontSize="10">{formatAxisLabel(minPrice)}</text>

            {/* Guideline */}
            <line x1={PADDING} y1={getY(maxPrice)} x2={WIDTH - PADDING} y2={getY(maxPrice)} stroke="#4b5563" strokeWidth="0.5" strokeDasharray="2,2" />
            <line x1={PADDING} y1={getY(minPrice)} x2={WIDTH - PADDING} y2={getY(minPrice)} stroke="#4b5563" strokeWidth="0.5" strokeDasharray="2,2" />
            
            {/* Line Path */}
            <path d={linePath} fill="none" stroke="#D4AF37" strokeWidth="2" />

            {/* Data Points */}
            {data.map((point, index) => (
                <circle key={index} cx={getX(index)} cy={getY(point.price)} r="3" fill="#D4AF37" stroke="#1A1A1A" strokeWidth="1" />
            ))}

            {/* X-axis labels */}
             <text x={PADDING} y={HEIGHT - 5} textAnchor="start" fill="#9ca3af" fontSize="10">{oldestDate}</text>
             <text x={WIDTH - PADDING} y={HEIGHT - 5} textAnchor="end" fill="#9ca3af" fontSize="10">{newestDate}</text>
        </svg>
    </div>
  );
};

export default PriceHistoryChart;
