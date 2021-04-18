import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h2 className="text-white text-center">Appointments</h2>
            {
                appointments.length ?
                <AppointmentShortList appointments={appointments} />
                :
                <div className="p-5">
                    <h4 className="lead text-white text-center">No Appointments For This Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;