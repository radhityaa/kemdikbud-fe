import React from 'react'
import { angkatanKe1, angkatanKe2, angkatanKe3 } from '../dummy/TargetAreaData'

export default function TargetAreaTable() {
    return (
        <div className='space-y-5'>
            <div>
                <h1 className='mb-5'>Wilayah sasaran guru penggerak PPPPTK TK dan PLB. Angkatan ke-1 :</h1>
                <table className="w-full table-auto">
                    <thead className="border-2 border-slate-500">
                        <tr>
                            <th scope="col" className="border-2 border-slate-500 w-1/2 font-bold text-center text-gray-900 py-1">
                                Kabupaten/Kota
                            </th>
                            <th scope="col" className="w-1/2 font-bold text-center text-gray-900 py-1">
                                Jumlah
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {angkatanKe1.map((item, index) => (
                            <tr className="border-2 border-slate-500" key={index}>
                                <td className="py-1 px-2 border-r-2 border-slate-500 font-medium text-gray-900">
                                    {item.kab}
                                </td>
                                <td className="py-1 px-2 text-gray-900 text-center">
                                    {item.jumlah}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table >
            </div>

            <div>
                <h1 className='mb-5'>Wilayah sasaran guru penggerak PPPPTK TK dan PLB. Angkatan ke-2 :</h1>
                <table className="w-full table-auto">
                    <thead className="border-2 border-slate-500">
                        <tr>
                            <th scope="col" className="border-2 border-slate-500 w-1/2 font-bold text-center text-gray-900 py-1">
                                Kabupaten/Kota
                            </th>
                            <th scope="col" className="w-1/2 font-bold text-center text-gray-900 py-1">
                                Jumlah
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {angkatanKe2.map((item, index) => (
                            <tr className="border-2 border-slate-500" key={index}>
                                <td className="py-1 px-2 border-r-2 border-slate-500 font-medium text-gray-900">
                                    {item.kab}
                                </td>
                                <td className="py-1 px-2 text-gray-900 text-center">
                                    {item.jumlah}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table >
            </div>

            <div>
                <h1 className='mb-5'>Wilayah sasaran guru penggerak PPPPTK TK dan PLB. Angkatan ke-3 :</h1>
                <table className="w-full table-auto">
                    <thead className="border-2 border-slate-500">
                        <tr>
                            <th scope="col" className="border-2 border-slate-500 w-1/2 font-bold text-center text-gray-900 py-1">
                                Kabupaten/Kota
                            </th>
                            <th scope="col" className="w-1/2 font-bold text-center text-gray-900 py-1">
                                Jumlah
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {angkatanKe3.map((item, index) => (
                            <tr className="border-2 border-slate-500" key={index}>
                                <td className="py-1 px-2 border-r-2 border-slate-500 font-medium text-gray-900">
                                    {item.kab}
                                </td>
                                <td className="py-1 px-2 text-gray-900 text-center">
                                    {item.jumlah}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table >
            </div>

        </div>
    )
}
