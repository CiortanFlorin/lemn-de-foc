export default function Contact() {
  return (
    <div className="text-center md:min-h-[550px]">
      <h1 className="mt-12 lg:mt-20 font-rubik-bold text-2xl md:text-3xl">Contact</h1>

      {/* Contact Container */}
      <div className="mt-5 mb-10 flex lg:px-10 flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8 lg:justify-center items-center mx-auto">
        {/* Contact 1 */}
        <div className="flex max-h-48 w-3/4 max-w-lg lg:max-w-md flex-col items-center justify-center space-y-2 rounded-2xl bg-zinc-900 p-5 shadow-xl shadow-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 stroke-fireRed"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <h3 className="text-xl">Telefon:</h3>
          <p className="text-lg">
            <a href="tel:+40751518502">
              {" "}
              0751518502
            </a>{" "}
          </p>
          <p className="text-lg">
            <a href="tel:+40751518501" >
              {" "}
              0751518501
            </a>{" "}
          </p>
        </div>
        {/* Contact 2 */}
        <div className="flex min-h-48 w-3/4 max-w-lg lg:max-w-md flex-col items-center justify-center space-y-2 rounded-2xl bg-zinc-900 p-5 shadow-xl shadow-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 stroke-fireRed"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
            />
          </svg>

          <h3 className="text-xl">E-mail:</h3>
          <p className="text-lg">viorel.ciortan@yahoo.com</p>
        </div>
        {/* Contact 3 */}
        <div className="flex min-h-48 w-3/4 max-w-lg lg:max-w-md flex-col items-center justify-center space-y-2 rounded-2xl bg-zinc-900 p-5 shadow-xl shadow-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 stroke-fireRed"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <h3 className="text-xl">Adresă:</h3>
          <p className="text-lg">Galați, Calea Smardan 10C</p>
        </div>
      </div>
    </div>
  );
}
