import { useNavigate } from 'react-router-dom';
import young from '../assets/young-person-intership.jpg';

function Main() {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/videos'); 
  };

  return (
    <div>
      <div className="flex mt-40 m-10">
        <div className="w-3/5 p-5 text-left">
          <h2 className="text-5xl tracking-wide text-green-950">
            Interactive Training Module for Employees
          </h2>
          <p className="mt-7 text-lg tracking-wide">
            Trainee offers an effective and engaging interactive training module for employees, enabling them to watch video content in a carefully structured sequence to guarantee thorough learning and fulfillment of specific training requirements.
          </p>
          <button
            onClick={handleButtonClick} 
            className="mt-10 p-3 rounded-xl text-white bg-purple-950 text-lg font-normal"
          >
            watch videos
          </button>
        </div>
        <div className="w-6/12 p-10">
          <img className="young" src={young} alt="Young person intership" />
        </div>
      </div>
      <p className="bg-gray-400 text-white p-3 text-center">
        TrainHub offers an interactive training module for employees, allowing them to watch video content in a structured sequence to ensure comprehensive learning and fulfillment of specific training requirements.
      </p>
    </div>
  );
}

export default Main;
