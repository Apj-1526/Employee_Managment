import React from 'react';

const FinancialDetails = ({ formData, setFormData }) => {
  return (
    <div>
      <h2>Financial Details</h2>
      <div className="form-group">
        <label>Aadhar Number</label>
        <input
          type="text"
          className="form-control"
          value={formData.aadharnumber}
          onChange={(e) => setFormData({ ...formData, aadharnumber: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>PAN Card Number</label>
        <input
          type="text"
          className="form-control"
          value={formData.pancardnumber}
          onChange={(e) => setFormData({ ...formData, pancardnumber: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Bank Account Number</label>
        <input
          type="text"
          className="form-control"
          value={formData.bankaccountnumber}
          onChange={(e) => setFormData({ ...formData, bankaccountnumber: e.target.value })}
        />
      </div>
      <div className="form-group">

        <label>IFSC Code</label>
        <input
          type="text"
          className="form-control"
          value={formData.ifsc}
          onChange={(e) => setFormData({ ...formData, ifsc: e.target.value })}
        />
      </div>
    </div>
  );
};

export default FinancialDetails;