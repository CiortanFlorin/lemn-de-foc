export default function QuestionTab({question, answer}){
    return <div className="group px-3 py-1 outline-none" tabIndex="0">
    {/* <!-- Tab Flex Container --> */}
    <div className="ease group flex cursor-pointer items-center justify-between border-b py-3 transition duration-500">
      {/* <!-- Tab Title --> */}
      <div className="ease text-2xl transition duration-500 group-focus:text-fireRed md:text-3xl">
        {question}
      </div>
      {/* <!-- Arrow --> */}
      <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-fireRed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            d="M1 1l8 8 8-8"
          />
        </svg>
      </div>
    </div>

    {/* <!-- Tab Inner Content --> */}
    <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
      <p className="py-2 text-justify text-lg md:text-xl">
       {answer}
      </p>
    </div>
  </div>
}