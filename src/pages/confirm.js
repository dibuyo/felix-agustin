import React, { useState } from 'react';

function Confirm() {
    
    const [submit, setSubmit] = useState(false);

    return <>
        <div className="w-full items-center">
            <div className="mt-20">
                <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                    <h1 className="text-2xl font-bold mb-8 text-center">Asistencia para el cumple</h1>
                    <form id="form" novalidate>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="name"
                                placeholder=" "
                                required
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nombre</label>
                            <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="name"
                                placeholder=" "
                                required
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nombre y Apellido de Papa o Mama</label>
                            <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="name"
                                placeholder=" "
                                required
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">DNI de Papi o Mami</label>
                            <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                        </div>

                        <fieldset className="relative z-0 w-full p-px mb-5">
                            <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">Acompañado</legend>
                            <div className="block pt-3 pb-2 space-x-4">
                                
                                <label>
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="1"
                                        checked
                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Solo
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="2"
                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Con hermanito/s
                                </label>

                            </div>
                            <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                        </fieldset>


                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="number"
                                name="money"
                                placeholder=" "
                                value="0"
                                className="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="money" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Cantidad hermanitos</label>
                        </div>

                        <button
                            id="button"
                            type="button"
                            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-500 hover:bg-blue-600 hover:shadow-lg focus:outline-none"
                            onClick={() => { setSubmit(true) }}
                        >
                            Confirmar Asistencia
                        </button>
                    </form>
                </div>
            </div>

            <div className={`flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md py-5 pl-6 pr-8 sm:pr-6 mx-auto max-w-md mt-5 ${submit ? '' : 'hidden'}`}>
                <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                    <div className="text-green-500">
                        <svg className="w-6 sm:w-5 h-6 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="text-sm font-medium ml-3">Asistencia Confirmada</div>
                </div>
                <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">¡Con éxtio!</div>
                <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>
        </div>
    </>
}

export default Confirm