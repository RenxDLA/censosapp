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

export const options2 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Censados por ocupación',
        },
    },
};

const Graficas = () => {
    const censados = useSelector(state => state.censados.censados);
    const deptos = useSelector(state => state.deptos.deptos);
    const ocupaciones = useSelector(state => state.ocupaciones.ocupaciones);

    const [cPorDepto, setCPorDepto] = useState([]);
    const [deptoC, setDeptoC] = useState([]);
    const [cPorOcupa, setCPorOcupa] = useState([]);
    const [ocupaName, setOcupaName] = useState([]);


    useEffect(() => {
        //console.log("c", censados);
        const cPorDeptoTemp = [];
        const cPorOcupaTemp = [];
        const deptosCTemp = [];
        const ocupaNameTemp = [];


        deptos.map((d) => {
            const cantEnDepto = censados.filter(c => c.departamento === d.id).length;
            //console.log(cantEnDepto);
            // console.log("c.depto", c.departamento);
            //console.log("d.id", d.id);
            if (cantEnDepto > 0) {
                deptosCTemp.push(d.nombre);
                cPorDeptoTemp.push(cantEnDepto);

            }

        })
        //console.log("ocupaciones",ocupaciones);
        setOcupaName()
        ocupaciones.map((o) => {
            //console.log("o.id",o.id);
            const cantEnOcupa = censados.filter(c => c.ocupacion === o.id).length;
            ocupaNameTemp.push(o.ocupacion);
            cPorOcupaTemp.push(cantEnOcupa);
        })
        //console.log("censadosDeptosTemp", cPorDeptoTemp)
        setCPorDepto(cPorDeptoTemp);
        setDeptoC(deptosCTemp);
        //console.log(cPorOcupaTemp);
        setCPorOcupa(cPorOcupaTemp);
        setOcupaName(ocupaNameTemp);
    }, [censados])

    return (
        <div className="col ">
            <h2 className='row justify-content-center grafcar'>Graficas</h2>
            <div className="graf">
                <div className='col grafInd '>
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

                <div className="col grafInd">
                    <Bar options={options2} data={{
                        labels: ocupaName,
                        datasets: [
                            {
                                label: 'Censados totales',
                                data: cPorOcupa,
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            }
                        ],
                    }} />
                </div>
            </div>

        </div>
    )
}

export default Graficas