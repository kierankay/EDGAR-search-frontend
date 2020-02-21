import React from 'react';
import { Route } from 'react-router-dom';
import SearchBox from './SearchBox';
import ResultsBox from './ResultsBox';

const Routes = (props) => {
  const { formData, setFormData } = props;
  return (
    <>
      <Route exact path="/" render={(rtProps) => <SearchBox {...rtProps} setFormData={setFormData} />} />
      <Route exact path="/" render={(rtProps) => <ResultsBox {...rtProps} formData={formData} />} />
    </>
  );
};

export default Routes;
