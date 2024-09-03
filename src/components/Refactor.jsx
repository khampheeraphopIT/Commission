import React, { useState } from "react";
import '../styles.css'

const Refactor = () => {
    const [locks, setLocks] = useState();
    const [stocks, setStocks] = useState();
    const [barrels, setBarrels] = useState();
    const [sales, setSales] = useState(0.0);
    const [commission, setCommission] = useState(0.0);

    const lockPrice = 45.0;
    const stockPrice = 30.0;
    const barrelPrice = 25.0;

    const calculateCommission = () => {
        const validateInput = () => {
            if (locks < 1 || locks > 70)
                return 'กรุณาใส่ตัวเลข locks  ระหว่าง 1 - 70'
            if (stocks < 1 || stocks > 80)
                return 'กรุณาใส่ตัวเลข stocks ระหว่าง 1 - 80'
            if (barrels < 1 || barrels > 90)
                return 'กรุณาใส่ตัวเลข barrels ระหว่าง 1 - 70'
        }

        const ErrorInput = validateInput();
        if (ErrorInput) {
            alert(ErrorInput);
        }

        const lockSales = lockPrice * locks;
        const stockSales = stockPrice * stocks;
        const barrelSales = barrelPrice * barrels;
        const sales = lockSales + stockSales + barrelSales;

        setSales(sales)

        let commission = 0.0;
        if (sales > 1800.0) {
            commission = 0.10 * 1000.0;
            commission += 0.15 * 800.0;
            commission += 0.20 * (sales - 1800.0);
        } else if (sales > 1000.0) {
            commission = 0.10 * 1000.0;
            commission += 0.15 * (sales - 1000.0);
        } else {
            commission = 0.10 * sales;
        }
        setCommission(commission);
    };

    return (
        <>
            <div className="container">
                <div className="commission">
                    <h1>Commission Calculator</h1>
                    <div className="input">
                        <label>
                            Locks:
                            <input
                                type="number"
                                value={locks || ''}
                                onChange={(e) => setLocks(+e.target.value)}
                                placeholder="Enter number of Locks"
                            />
                        </label>
                    </div>
                    <div className="input">
                        <label>
                            Stocks:
                            <input
                                type="number"
                                value={stocks || ''}
                                onChange={(e) => setStocks(+e.target.value)}
                                placeholder="Enter number of Stocks"
                            />
                        </label>
                    </div>
                    <div className="input">
                        <label>
                            Barrels:
                            <input
                                type="number"
                                value={barrels || ''}
                                onChange={(e) => setBarrels(+e.target.value)}
                                placeholder="Enter number of Barrels"
                            />
                        </label>
                    </div>
                    <button className="btn" onClick={calculateCommission}>Calculate</button>

                    <div className="results">
                        <h2>Results:</h2>
                        <p>Locks sold: {locks}</p>
                        <p>Stocks sold: {stocks}</p>
                        <p>Barrels sold: {barrels}</p>
                        <p>Total Sales: {sales.toFixed(2)} บาท</p>
                        <p>Commission: {commission.toFixed(2)} บาท</p>
                        <p>Total Amount: {(sales + commission).toFixed(2)} บาท</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Refactor;
