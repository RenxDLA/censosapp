import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Censados por departamento',
        },
    },
};

const Graficas = () => {
    const censados = useSelector(state => state.censados.censados);
    const deptos = useSelector(state => state.deptos.deptos);
    //const ocupaciones = useSelector(state => state.ocupaciones.ocupaciones);
    const [cPorDepto, setCPorDepto] = useState([]);
    const [deptoC, setDeptoC] = useState([]);

    useEffect(() => {
        deptos.map((d) => {
            if (censados.filter(c => c.departamento === d.id).length > 0) {
                setCPorDepto([...cPorDepto, censados.filter(c => c.departamento === d.id).length]);
                setDeptoC([...deptoC, d.nombre])
            }

        })
    }, [censados])

    return (
        <div className="col">



            <h2 className='row justify-content-center grafcar '>Graficas</h2>

            <div className="row row-col-2 graf">
                <div className='col grafInd'>
                    <Bar options={options} data={{
                        labels: [...deptoC],
                        datasets: [
                            {
                                label: 'Censados totales',
                                data: cPorDepto,
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            }
                        ],
                    }} />
                </div>
                {/* van una al lado de la otra */}
                <div className="col grafInd">grafica 2</div>
            </div>

        </div>
    )
}

export default Graficas