import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Checked_checkbox from './Checked_checkbox'
import Checkbox from './Checkbox'
// import Function from './Function'


export default function Function_tabledata(props) {
  return (
    <>
     {/* Row_1 */}
     <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Checked_checkbox/>
            {props.functionnames[0]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.values[0]}
        </td>
        <td className="px-6 py-4">
            <Button/>   
        </td>
    </tr>
    {/* Row_2 */}
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Checkbox/>
            {props.functionnames[1]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.values[1]}
        </td>
        <td className="px-6 py-4">
            <Button/>   
        </td>
    </tr>
    {/* Row_3 */}
    <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Checked_checkbox/>
            {props.functionnames[2]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.values[2]}
        </td>
        <td className="px-6 py-4">
            <Button/>   
        </td>
    </tr>
    {/* Row_4 */}
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Checkbox/>
            {props.functionnames[3]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.values[3]}
        </td>
        <td className="px-6 py-4">
            <Button/>   
        </td>
    </tr>
    {/* Row_5 */}
    <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Checked_checkbox/>
            {props.functionnames[4]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.values[4]}
        </td>
        <td className="px-6 py-4">
            <Button/>   
        </td>
    </tr>
                                                                                                                
    </>
  )
}
