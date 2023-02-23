import React from 'react';
import BookedTable from '../BookedTable/BookedTable';
import BookingForm from '../BookingForm/BookingForm';
import Header from '../Header/Header';

const Main = () => {
    return (
        <>
            <Header></Header>
            <BookingForm></BookingForm>
            <BookedTable></BookedTable>
        </>
    );
};

export default Main;