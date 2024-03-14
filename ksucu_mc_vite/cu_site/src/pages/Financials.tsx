import React, { useState } from 'react'
import '../styles/financials.css'

import Header from '../componenets/header'
import Footer from '../componenets/footer'

const FinancialsPage: React.FC = () => {
  const [isPaymentHistoryOpen, setPaymentHistoryOpen] = useState(false);
  const [isFinancialStatementsOpen, setFinancialStatementsOpen] = useState(false);

  const togglePaymentHistory = () => {
    setPaymentHistoryOpen(!isPaymentHistoryOpen);
  };

  const toggleFinancialStatements = () => {
    setFinancialStatementsOpen(!isFinancialStatementsOpen);
  };

  return (
    <>
      <Header />

        <main>
          <h2 className="main-financial--title---text">KSUCU-MC FINANCIALS</h2>

          <p className="financial-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            praesentium ullam repellendus aperiam, quidem id modi commodi sint
            maiores eius earum quae libero impedit sit? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Incidunt, fugiat? Suscipit,
            minima. Dignissimos molestias minima eum nostrum voluptas quibusdam
            sit. Cumque obcaecati sit veniam enim.
          </p>

          <form action="#" className="offerring">
            <div>
              <label htmlFor="phone">Phone</label>
              <input className='inputs' type="text" id="phone" />
            </div>
            <div>
              <label htmlFor="amount">Amount</label>
              <input className='inputs' type="text" id="amount" />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input className='inputs' type="text" id="category" />
            </div>
          </form>

          <div className="btn-submit">Pay</div>

          <div className="record-flex">
            <div className="payment-history">
              <div className="payment-history--title" onClick={togglePaymentHistory}>
                <p className="payment-history--text">myPayment History</p>
                <svg className={`dropdown-icon ${isPaymentHistoryOpen ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                </svg>
              </div>
              <div className={`payment-history--record records ${isPaymentHistoryOpen ? 'active' : ''}`}>
                <p>11th Feb 2024 - Ksh5,000</p>
                <p>11th Feb 2024 - Ksh5,000</p>
                <p>11th Feb 2024 - Ksh5,000</p>
                <p>11th Feb 2024 - Ksh5,000</p>
              </div>
            </div>
            <div className="financial-statements">
              <div className="financial-statement--title" onClick={toggleFinancialStatements}>
                <p className="financial-statement--text">financial statements</p>
                <svg className={`dropdown-icon ${isFinancialStatementsOpen ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                </svg>
              </div>
              <div className={`financial-statement--record records ${isFinancialStatementsOpen ? 'active' : ''}`}>
                <p>financial year 2021 - 2022</p>
                <p>financial year 2022 - 2023</p>
                <p>financial year 2024 - 2024</p>
                <p>financial year 2025 - 2026</p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
    </>
  );
};

export default FinancialsPage;


