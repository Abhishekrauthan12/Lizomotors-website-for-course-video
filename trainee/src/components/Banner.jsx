import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/videos'); 
  };
  return (
    <div className=' banner text-center p-20 '>
        <h3 className="text-purple-800 text-xl mt-28">Comprehensive Learning</h3>
        <h1 className="text-green-950 text-6xl mt-2">Interactive Training Module</h1>
        <h2 className="text-purple-950 text-3xl mt-4 tracking-wide">Watch Video Content in Sequence for employee</h2>
        <button onClick={handleButtonClick}  className="btn p-5 font-normal tracking-wide text-2xl text-white bg-purple-950 mt-11">Learn More</button>
    </div>
  )
}

export default Banner