import React from 'react';
import moment from 'moment';

const ResultsBox = (props) => {
  const { formData } = props;
  const BASE_XBRL_URL = 'https://www.sec.gov/ix?doc=/Archives/edgar/data';
  let renderedForms;

  const formNames = {
    '10-K': 'Annual Report',
    '10-Q': 'Quarterly Report',
    '10-K/A': 'Amended Annual Report',
    'DEF-14A': 'Proxy Statement',
    'S-1': 'Registration Statement',
    '8-K': 'Current Report',
  }

  if (Array.isArray(formData.forms)) {
    renderedForms = formData.forms.map((f) => {
      const url = f.form_file_name ? `${BASE_XBRL_URL}${f.form_file_path}${f.form_file_name}` : `http://localhost:3000/api/forms/${f.id}`;
      const reportTime = `Q${moment(f.date_filed).subtract(1, 'quarter').format("Q 'YY")} - ${formNames[f.form_type] ? formNames[f.form_type] : 'Other'}`;
      const formType = f.form_type;
      return (
        <li className="list-group-item">
          <a href={url}>
            {reportTime}
            -
            {formType}
          </a>
        </li>
      );
    });
  } else if (formData.error) {
    renderedForms = (
      <li className="list-group-item">
        Invalid Ticker Symbol
      </li>
    );
  }


  return (
    <div id="results-box" className="col-md-5">
      <div className="card">
        <div className="card-header">
          Results
        </div>
        <ul className="list-group list-group-flush">
          {renderedForms}
        </ul>
      </div>
    </div>
  );
};

export default ResultsBox;
