import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import Info from '../Pages/Info/Info';
import Plan from '../Pages/Plan/Plan';
import AddOns from '../Pages/AddOns/AddOns';
import Summary from '../Pages/Summary/Summary';
import Thanks from '../Pages/Thanks/Thanks';

// let t = false
const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <h1>put error component here</h1>,
        children: [
            {
                path: '/',
                element: <Info />
            },
            {
                path: '/plan',
                // element: t ? <Plan /> : <Info />
                element: <Plan />
            },
            {
                path: "/add_ons",
                element: <AddOns />
            },
            {
                path: "/summary",
                element: <Summary />
            },
            {
                path: "/summary/thanks",
                element: <Thanks />
            }
        ]
    }
]);


export default routes