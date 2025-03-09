import React from 'react';
import PageBreadcrumb from "../components/common/PageBreadCrumb"; 
//import DefaultInputs from "../../components/form/form-elements/DefaultInputs";
import PageMeta from "../components/common/PageMeta";
import { useState } from 'react';

export default function InquiryFormPage() {

    const [enqNo, setEnqNo] = useState('');
    const [date, setDate] = useState('');
    const [course, setCourse] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mobile, setMobile] = useState('');
    const [preferredTimings, setTimings] = useState('');
    const [totalFee, setTotalFee] = useState('');
    const [discount, setDiscount] = useState('');
    const [netFee, setNetFee] = useState('');

    const handleTotalFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTotalFee(value);
        calculateNetFee(value, discount);
    };

    const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setDiscount(value);
        calculateNetFee(totalFee, value);
    };

    const calculateNetFee = (total: string, discountAmount: string) => {
        const totalNum = parseFloat(total) || 0;
        const discountNum = parseFloat(discountAmount) || 0;
        const calculatedNetFee = totalNum - discountNum;
        setNetFee(calculatedNetFee.toFixed(2));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {
            enqNo,
            date,
            course,
            name,
            phone,
            mobile,
            preferredTimings,
            totalFee,
            discount,
            netFee,
        };
        console.log(formData);
        setEnqNo('');
        setDate('');
        setCourse('');
        setName('');
        setPhone('');
        setMobile('');
        setTimings('');
        setTotalFee('');
        setDiscount('');
        setNetFee('');
    };

    return (
        <div>
            <PageMeta
                title="Inquiry Form | Institute Dashboard"
                description="Inquiry Form for Institute Dashboard"
            />
            <PageBreadcrumb pageTitle="Inquiry Form" />
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="enqNo" className="block text-sm font-medium text-gray-700">Enq. No</label>
                        <input
                            type="text"
                            id="enqNo"
                            value={enqNo}
                            onChange={(e) => setEnqNo(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="date" 
                            id="date"
                            value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
/>
                    </div>
                    <div>
                        <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
                        <select
                            id="course"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                            <option value="">Select Course</option>
                            {/* Course options will be added here later */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
                        <input
                            type="text"
                            id="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="preferredTimings" className="block text-sm font-medium text-gray-700">Preferred Timings</label>
                        <input
                            type="text"
                            id="preferredTimings"
                            value={preferredTimings}
                            onChange={(e) => setTimings(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="totalFee" className="block text-sm font-medium text-gray-700">Total Fee</label>
                        <input
                            type="number"
                            id="totalFee"
                            value={totalFee}
                            onChange={handleTotalFeeChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="discount" className="block text-sm font-medium text-gray-700">Discount</label>
                        <input
                            type="number"
                            id="discount"
                            value={discount}
                            onChange={handleDiscountChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="netFee" className="block text-sm font-medium text-gray-700">Net Fee</label>
                        <input
                            type="text"
                            id="netFee"
                            value={netFee}
                            readOnly
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                </div>
                <button type="submit" className="rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Submit
                </button>
            </form>
        </div>
    );
}