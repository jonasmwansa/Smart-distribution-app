import {FaShippingFast, FaBug, FaWpforms, FaStreetView} from 'react-icons/fa';

const ActivityData = [
    {
        id:1,
        title: "Routes in transit",
        icon: <FaShippingFast/>,
        count : 2

    },
    {
        id:2,
        title: "Routes Delayed",
        icon: <FaBug/>,
        count : 3

    },
    {
        id:3,
        title: "Invoices paid",
        icon: <FaWpforms/>,
        count : 7

    },
    {
        id:4,
        title: "New bookings",
        icon: <FaStreetView/>,
        count : 2

    }
]

export default ActivityData;