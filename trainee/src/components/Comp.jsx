import women from '../assets/businesswoman-cafe.jpg'
function Comp() {
  return (
    <div className="com p-5">
<div className="grid grid-cols-2">
<div className=' rounded-xl m-7 '>
<img className='h-max' src={women}/>
</div>
<div className="text-center">
<h2 className="text-5xl mt-16 text-blue-600 font-normal tracking-wide">Comprehensive Learning and Engagement</h2>
<p className="text-center mt-8 text-lg">Trainee interactive training module enables employees to engage in comprehensive learning through structured video content, ensuring fulfillment of specific training requirements.</p>
</div>
</div>
    </div>
  )
}

export default Comp