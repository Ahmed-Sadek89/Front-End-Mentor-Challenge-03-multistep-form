import { step } from "./step";
import { useLocation } from 'react-router-dom';

const Static = () => {
  const location = useLocation();
  return (
    <div className="static">
        {
          step.map((index) => (
            <div className="static-step" key={index.id}>
              <div className="static-step-number">
                {location.pathname === index.pathname ? 
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