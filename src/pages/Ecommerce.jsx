import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import {About, Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, recentTransactions, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg'

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 text-black rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: '#000' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-800">Earnings</p>
              <p className="text-2xl text-black">$63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: '#00dd20' }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white shadow-md hover:shadow-lg h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl flex flex-col align-middle justify-center items-center">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3 ">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-[#9cfd56] ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 shadow-md hover:shadow-lg rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Mes a Mes</p>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$7,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Presupuesto estimado</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$5,887</p>

                <p className="text-gray-500 mt-1">Gasto</p>
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Descargar Reporte"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div>
        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3 shadow-md hover:shadow-lg"
            style={{ backgroundColor: "#00dd20" }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Ahorro</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">$3,448.78</p>
                <p className="text-gray-200">Ahorro Medio</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

          <div className="bg-white shadow-md hover:shadow-lg dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Ahorro Anual</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>
          </div>
        </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white shadow-md hover:shadow-lg dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Transacciones Recientes</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">

            <p className="text-gray-400 text-sm">36 transacciones recientes</p>
          </div>
        </div>
    </div>
    <div className="w-400 bg-white shadow-md hover:shadow-lg dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Actividades recomendadas</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              {/* <IoIosMore /> */}
            </button>
          </div>
          <div className="mt-10">
            <img
              className="md:w-96 h-50 "
              src={product9}
              alt=""
            />
            <div className="mt-8">
              <p className="font-semibold text-lg">El calor viene pronto!</p>
              <p className="mt-8 text-sm text-gray-400">
              ¡El clima afirma que la próxima semana se vendrá el verano! ¡Ten en cuenta que tu consumo pasado de aire fue mayor a lo que pretendes este año! ¿Quieres activar un control de consumo? ¡Presiona el botón!              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Activar"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
          </div>
          </div>
      <About />
    </div>
  );
};

export default Ecommerce;
