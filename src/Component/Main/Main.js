import React from "react";
import { useSelector } from "react-redux";
import BookedTable from "../BookedTable/BookedTable";
import BookingForm from "../BookingForm/BookingForm";
import Header from "../Header/Header";

const Main = () => {
    const booked = useSelector((state) => state);
  return (
    <>
      <Header></Header>
      <BookingForm></BookingForm>
      {
        booked.length && <BookedTable></BookedTable>
      }
    </>
  );
};

export default Main;
