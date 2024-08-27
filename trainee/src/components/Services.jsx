import { AiOutlineGlobal } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { MdOutlineFolderCopy } from "react-icons/md";

function Services() {
  return (
    <div className="m-10">
        <h2 className="text-center text-green-950 mt-10 tracking-wide text-4xl">Interactive Training</h2>
        <h1 className="text-center text-green-950 mt-4 tracking-wide font-normal text-5xl">Effective and Engaging Training Module</h1>
        <div className="grid grid-cols-4 gap-4">
        <div className="p-8 rounded-xl text-center border-2 mt-14">
        <AiOutlineGlobal style={{ color: '#0e5428', fontSize: '3rem', margin:'auto' }} />
        <h3 className="text-green-950 tracking-wide text-2xl mt-5">Strucutred Video Learning</h3>
        <p className="text-gray-600 text-lg tracking-widest mt-2">Carefully Sequenced Video Content</p>
        <h2 className="text-lg text-blue-600 mt-2">Start Learning</h2>
        </div>

        <div className="p-8 rounded-xl text-center border-2 mt-14">
        <FaBook style={{ color: '#0e5428', fontSize: '3rem', margin:'auto' }} />
        <h3 className="text-green-950 tracking-wide text-2xl mt-5">Comprehensive Learning</h3>
        <p className="text-gray-600 text-lg tracking-widest mt-2">Thorough Fulfillment of Training Requirements</p>
        <h2 className="text-lg text-blue-600 mt-2">Fulfill Requirements</h2>
        </div>

        <div className="p-8 rounded-xl text-center border-2 mt-14">
        <MdAddCall style={{ color: '#0e5428', fontSize: '3rem', margin:'auto' }} />
        <h3 className="text-green-950 tracking-wide text-2xl mt-5">Engaging Employee Training</h3>
        <p className="text-gray-600 text-lg tracking-widest mt-2">Employee-Centric Training Approach</p>
        <h2 className="text-lg text-blue-600 mt-2">Engage Now</h2>
        </div>

        <div className="p-8 rounded-xl text-center border-2 mt-14">
        <MdOutlineFolderCopy style={{ color: '#0e5428', fontSize: '3rem', margin:'auto' }} />
        <h3 className="text-green-950 tracking-wide text-2xl mt-5"> Specific Training Requirements</h3>
        <p className="text-gray-600 text-lg tracking-widest mt-2">Tailored Training Fulfillment</p>
        <h2 className="text-lg text-blue-600 mt-2">Fulfill Requirements</h2>
        </div>
        </div>
    </div>
  )
}

export default Services