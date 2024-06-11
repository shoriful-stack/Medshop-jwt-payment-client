import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const SalesReport = () => {
    const [sales, setSales] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (startDate && endDate) {
            axiosSecure.get(`/sales?startDate=${startDate}&endDate=${endDate}`)
                .then(response => {
                    setSales(response.data);
                })
                .catch(error => {
                    console.error('Error fetching sales data:', error);
                });
        }
    }, [startDate, endDate, axiosSecure]);

    const columns = [
        { name: 'Medicine Name', selector: row => row.medicineName, sortable: true },
        { name: 'Seller Email', selector: row => row.sellerEmail, sortable: true },
        { name: 'Buyer Email', selector: row => row.buyerEmail, sortable: true },
        { name: 'Total Price', selector: row => row.price, sortable: true },
        { name: 'Date', selector: row => new Date(row.date).toLocaleDateString(), sortable: true },
    ];

    const exportPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
            head: [['Medicine Name', 'Seller Email', 'Buyer Email', 'Total Price', 'Date']],
            body: sales.map(sale => [
                sale.medicineName,
                sale.sellerEmail,
                sale.buyerEmail,
                sale.price,
                new Date(sale.date).toLocaleDateString(),
            ]),
        });
        doc.save('sales-report.pdf');
    };

    const exportXLSX = () => {
        const worksheet = XLSX.utils.json_to_sheet(sales);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sales Report');
        XLSX.writeFile(workbook, 'sales-report.xlsx');
    };

    return (
        <div>
            <h1 className='text-2xl lg:text-4xl font-bold'>Sales Report</h1>
            <div className='my-4 flex justify-around items-center gap-4'>
                <div>
                    <label>Start Date: </label>
                    <input className='input input-bordered' type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
                </div>
                <div>
                    <label>End Date: </label>
                    <input className='input input-bordered' type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
                </div>
            </div>
            <DataTable
                columns={columns}
                data={sales}
                pagination
            />
            <div className='flex justify-around gap-4 items-center'>
                <button className='btn btn-accent text-white' onClick={exportPDF}>Export PDF</button>
                <button className='btn btn-accent text-white' onClick={exportXLSX}>Export XLSX</button>
                <CSVLink className='btn btn-accent text-white' data={sales} filename={'sales-report.csv'}>
                    Export CSV
                </CSVLink>
            </div>
        </div>
    );
};

export default SalesReport;
