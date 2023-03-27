import React from 'react';

export default function CustomerInfo({ birthday, gender, job }) {
    return (
        <div>
            <p>{birthday}</p>
            <p>{gender}</p>
            <p>{job}</p>
        </div>
    );
}
