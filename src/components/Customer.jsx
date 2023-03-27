import React from 'react';
import CustomerInfo from './CustomerInfo';
import CustomerProfile from './CustomerProfile';

export default function Customer({ id, image, name, birthday, gender, job }) {
    return (
        <div>
            <CustomerProfile image={image} name={name} id={id} />
            <CustomerInfo birthday={birthday} gender={gender} job={job} />
        </div>
    );
}
