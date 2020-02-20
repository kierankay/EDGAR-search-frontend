import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchBox from './SearchBox';
import ResultsBox from './ResultsBox';

class Routes extends React.Component {
    render() {
        const { formData, setFormData } = this.props;
        return (
                <React.Fragment>
                    <Route exact path='/' render={(rtProps) => <SearchBox {...rtProps} setFormData={setFormData} />} />
                    <Route exact path='/' render={(rtProps) => <ResultsBox {...rtProps} formData={formData} />} />
                </React.Fragment>
        )
    }
}

export default Routes;