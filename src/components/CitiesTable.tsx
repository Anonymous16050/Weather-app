import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface City {
    recordid: string;
    fields: {
        name: string;
        country: string;
        timezone: string;
    };
}

const CitiesTable: React.FC = () => {
    const [cities, setCities] = useState<City[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCityData = async () => {
            try {
                const response = await axios.get('https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/api/?disjunctive.cou_name_en&sort=name');
                setCities(response.data.records);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching city data:', error);
                setLoading(false);
            }
        };

        fetchCityData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Cities</h2>
            <table>
                <thead>
                    <tr>
                        <th>City Name</th>
                        <th>Country</th>
                        <th>Timezone</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map((city) => (
                        <tr key={city.recordid}>
                            <td>
                                <Link to={`/weather/${city.fields.name}`}>{city.fields.name}</Link>
                            </td>
                            <td>{city.fields.country}</td>
                            <td>{city.fields.timezone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CitiesTable;