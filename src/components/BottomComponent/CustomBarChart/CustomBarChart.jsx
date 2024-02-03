import { ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const CustomBarChart = ({ data }) => {

  const renderBarColor = (barData, index) => {
    const middleIndex = Math.floor(data.length / 2);
    if (index >= middleIndex && index < middleIndex + 7) {
      return '#fe708b'; 
    }
    return '#dbdff1';
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="uv">
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={renderBarColor(entry, index)} />
            ))
          }
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
