import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ['Total', 'Yo'],
//   datasets: [
//     {
//       label: '% Censados',
//       data: [73, 27],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)'
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export function App() {
//   return <Pie data={data} />;
// }

const Porcentaje = () => {
  const censados = useSelector(state => state.censados.censados);
  const [totalCensados, setTotalCensados] = useState(0);


  useEffect(() => {
    fetch(`https://censo.develotion.com/totalCensados.php`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'apikey': localStorage.getItem("ApiKey"),
        'iduser': localStorage.getItem("UsuarioId")
      },
    })
      .then(r => r.json())
      .then((data) => {
        //console.log(data)
        if (data.codigo === 200) {
          setTotalCensados(data.total);
        }
      });

  }, [censados])

  return (
    <div className="col">
      <h2>Porcentaje censado</h2>
      <div>
        <Pie data={{
          labels: ['Resto', 'Yo'],
          datasets: [
            {
              label: '% Censados',
              data: [((totalCensados-censados.length)*100)/totalCensados, (censados.length *100)/totalCensados],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1,
            },
          ],
        }} />
      </div>
    </div>
  )
}

export default Porcentaje

/*import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function App() {
  return <Pie data={data} />;
} */