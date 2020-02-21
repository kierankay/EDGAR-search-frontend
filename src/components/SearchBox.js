import React, { useState } from 'react';
import EdgarApi from '../EdgarApi';

const SearchBox = (props) => {
    const [ticker, setTicker] = useState('');
    const { setFormData } = props;

    async function handleSubmit(evt) {
        evt.preventDefault();
        let lowerTicker = ticker.toLowerCase();
        let result = await EdgarApi.getByTicker(lowerTicker);
        setFormData(result);
    }

    return (
        <div id="search-box" className="col-lg-5 col-md-6 col-sm-8">
            <h2 className="text-center my-4">Search Public Company SEC Filings</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName"></label>
                    <input type="text" required
                        className="form-control" name="firstName" id="firstName" aria-describedby="helpId" placeholder="Enter a stock ticker" value={ticker} onChange={evt => setTicker(evt.target.value.toUpperCase())} />
                </div>
                <button type="submit" className="btn btn-primary btn-block my-2">Search</button>
            </form>
        </div>
    )
}

export default SearchBox;