import { step } from "./step";
import { useLocation } from 'react-router-dom';

const Static = () => {
  let location1 = useLocation();
  let location = `/${location1.pathname.split('/')[1]}`
  console.log(location)
  return (
    <div className="static">
        {
          step.map((index) => (
            <div className="static-step" key={index.id}>
              <div className="static-step-number">
                {location === index.pathname ? 
                  <span className="static-step-number-current">{index.id}</span> :
                  <span className="static-step-number-others">{index.id}</span>
                }
              </div>
              <div className="static-step-info">
                <span>{index.step_number}</span>
                <h5>{index.step_name}</h5>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default Static