import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Input } from 'semantic-ui-react';
import moment from 'moment';

const WeatherSearch = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`
            )
            .then((response) => {
                onSearch(response.data);
                setCity('');
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <Input
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </Form.Field>
            <Button loading={loading}>Search</Button>
        </Form>
    );
};

export default WeatherSearch;