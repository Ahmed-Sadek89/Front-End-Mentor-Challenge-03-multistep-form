import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import Info from '../Pages/Info/Info';
import Plan from '../Pages/Plan/Plan';
import Add_ons from '../Pages/Add_ons/Add_ons';
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
                element: <Add_ons />
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