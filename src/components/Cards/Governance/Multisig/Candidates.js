import React from "react";

const Candidates = () => {
  return (
    <>
      <div className="sushi-flex sushi-flex-col">
        <div className="sushi-py-2 sushi-overflow-x-auto">
          <div className="sushi-inline-block sushi-min-w-full sushi-overflow-hidden sushi-align-middle sushi-border-b sushi-border-gray-200 sushi-shadow sm:sushi-rounded-lg">
            <table className="sushi-min-w-full sushi-divide-y sushi-divide-gray-200">
              <thead>
                <tr>
                  <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                    <a href="#" className="sushi-flex sushi-items-center">
                      <span>Place</span> {/**/}
                    </a>
                  </th>
                  <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                    <a href="#" className="sushi-flex sushi-items-center">
                      <span>Candidate</span> {/**/}
                    </a>
                  </th>
                  <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                    <a href="#" className="sushi-flex sushi-items-center">
                      <span className="sushi-text-green-500">Yes</span>
                    </a>
                  </th>
                  <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                    <a href="#" className="sushi-flex sushi-items-center">
                      <span className="sushi-text-red-500">No</span>
                    </a>
                  </th>
                  <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                    {/**/}
                  </th>
                  <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                    {/**/}
                  </th>
                </tr>
              </thead>{" "}
              <tbody className="sushi-bg-white sushi-divide-y sushi-divide-gray-200">
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #1
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/SBF_Alameda"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/SBF_Alameda"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/SBF_Alameda"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @SBF_Alameda
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 261,381</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      273 wallets
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 9,341</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">12 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "96.54949392454367%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "3.450506075456319%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">96.5% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">3.5% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/Qmbjd7KKaSpAJaJBh96WbGUo4UWEnE7WVo5PxzWS1xZ6MB"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #2
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/rleshner"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/rleshner"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/rleshner"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @rleshner
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 231,257</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      146 wallets
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 1,003</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">4 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "99.56826254787933%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "0.43173745212067405%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">99.6% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">0.4% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/Qmf6nY1iffWpX2wHySYYkAnjXiUgCY49yZbj7sR4r6fBqA"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #3
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/0xMaki"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/0xMaki"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/0xMaki"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @0xMaki
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 191,255</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      212 wallets
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 409</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">6 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "99.78658258651613%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "0.21341741348386506%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">99.8% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">0.2% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/Qmc7dC3c2csW937MdVrGKPYCZCub7owgVvAazcZ6k8LfXw"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #4
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/lawmaster"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/lawmaster"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/lawmaster"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @lawmaster
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 178,616</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">86 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 2,224</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">5 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "98.76994194682193%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "1.2300580531780845%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">98.8% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">1.2% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmRiomzmtMw4w6VDZ1Yy5Ybfu6JLAW73JWMfe6MJaJ2VmG"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #5
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/cmsholdings"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/cmsholdings"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/cmsholdings"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @cmsholdings
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 172,483</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">33 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 9,415</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">7 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "94.8238211242438%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "5.176178875756182%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">94.8% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">5.2% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmY8XvVds8FwCGENffUiDBUmGq3j6V7dvCKWDWVe4TMV5N"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #6
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/mattysino"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/mattysino"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/mattysino"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @mattysino
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 160,726</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">38 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 591</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">2 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "99.63357993522528%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "0.3664200647747227%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">99.6% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">0.4% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/Qmew6unHuCZjZea7t3nhNbA1fUWw6eDgz3KKFsWqpebbt1"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #7
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/mickhagen"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/mickhagen"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/mickhagen"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @mickhagen
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 158,745</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">40 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 2,614</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">4 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "98.38017786850284%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "1.6198221314971741%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">98.4% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">1.6% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmUYW8CjcJ75XRifq2oTJZkRNaAWLo6WdVLYYcydAc3MiZ"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #8
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/AdamScochran"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/AdamScochran"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/AdamScochran"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @AdamScochran
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 147,298</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">93 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 7,119</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">4 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "95.3897060363569%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "4.610293963643083%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">95.4% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">4.6% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmSUJjtWXzjb37R6pDYdDHfLiS4TXWSvVDGXoMa4rTiqSo"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #9
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/zippoxer"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/zippoxer"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/zippoxer"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @zippoxer
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 130,035</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      109 wallets
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 19,347</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">6 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "87.0484014476728%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "12.951598552327212%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">87.0% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">13.0% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmYeGxz3RacXSYJ5hqxXz4BZcMeYnPkoxUV8RdXiWHSgS8"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #10
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/Quentin__M"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/Quentin__M"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/Quentin__M"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @Quentin__M
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 113,013</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">60 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 3,763</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">9 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "96.77772727546133%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "3.2222727245386698%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">96.8% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">3.2% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmQtkm8AHqpX8LfZrhCwQZ8UkUwZj71tsZNnUxUp1uTDB4"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #11
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/JayHao8"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/JayHao8"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/JayHao8"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @JayHao8
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 110,819</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">25 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 898</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">7 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "99.19630463682974%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "0.8036953631702669%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">99.2% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">0.8% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmP1QUYQY4mw1z3jdf5PKjNHduXkhWQKEFVHm9PdjkYxDH"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #12
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/JiroOnoSushi"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/JiroOnoSushi"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/JiroOnoSushi"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @JiroOnoSushi
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 109,074</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">43 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 2,836</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">4 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "97.4660905184764%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "2.5339094815236085%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">97.5% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">2.5% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmfAGCWq7adzCr14fgZpsLFtDGL349yuNsvHzpg2bNWbpq"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #13
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/loomdart"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/loomdart"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/loomdart"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @loomdart
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 105,606</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">39 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 33,321</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">13 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "76.01554110566035%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "23.984458894339653%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">76.0% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">24.0% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmZDNWStER8rU4nux75bkjiDmt7hs1HGmYVcAXuuaJMZWv"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #14
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/boxmining"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/boxmining"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/boxmining"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @boxmining
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 93,846</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">92 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 32,533</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">24 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "74.257793883626%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "25.742206116374007%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">74.3% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">25.7% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmXxm3UWBbfHkkDw5yRZhkp8Ue5vq5qLpTGosiXc4E8zAt"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #15
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/RNR_0"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/RNR_0"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/RNR_0"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @RNR_0
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 78,355</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">20 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 28,146</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">12 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "73.5719883293727%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "26.428011670627306%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">73.6% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">26.4% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmWeSTpUBAiubG5yxxyFmBtxhBHtes28DyobqhC3rUZjD8"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #16
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/CL207"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/CL207"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/CL207"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @CL207
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 72,082</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">10 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 3,192</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">5 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "95.76000944853027%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "4.23999055146973%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">95.8% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">4.2% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmUsgMT3KUX1EWKKcbYGAKy9UUEgsLQrgrhkjajAM3s94o"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #17
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/moo9000"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/moo9000"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/moo9000"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @moo9000
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 67,081</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">21 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 144</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">1 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "99.78584769565062%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "0.2141523043493856%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">99.8% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">0.2% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmbAxnchwmxFdYpwQV1tT5fbPHe33D2E56cNwacwdWgXWi"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #18
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/abrkn"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/abrkn"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/abrkn"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @abrkn
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 44,739</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">8 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 54,040</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">9 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "45.292146708305204%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "54.707853291694796%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">45.3% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">54.7% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmV7MP5SQGtrGAn3b66e2DStAVCMqr6KUHDndYUqehicBz"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #19
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/PopcornKirby"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/PopcornKirby"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/PopcornKirby"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @PopcornKirby
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 43,175</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">6 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 4,391</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">9 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "90.76963664082356%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "9.230363359176447%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">90.8% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">9.2% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmeqW5cybiJZXBmD59xG6fYmUJGQKrMqzrFKPBuU8RZwuw"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #20
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/ctrl"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/ctrl"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/ctrl"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @ctrl
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 42,272</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">59 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 0</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">0 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "100%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "0%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">
                        100.0% Yes
                      </div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">0.0% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmNspea4fSffhq8WaxziKXq1g9GBLBH3Zg9TBK2ogc17fE"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #21
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/cryptokenneth01"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/cryptokenneth01"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/cryptokenneth01"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @cryptokenneth01
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 38,487</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">16 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 60,246</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">23 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "38.98103633174777%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "61.018963668252226%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">39.0% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">61.0% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmQTPSP831jaCgeC31PbuayrfxXzvRifdDrqcTepZaworS"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #22
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/shmula"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/shmula"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/shmula"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @shmula
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 30,358</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">29 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 1,838</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">3 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "94.29201660927583%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "5.707983390724163%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">94.3% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">5.7% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmQkZ5GMasvWu7J3JjkkaGbXZ4AZ17Uae8pATRwNmTJwF5"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #23
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/ichimikichiki"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/ichimikichiki"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/ichimikichiki"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @ichimikichiki
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 25,117</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">3 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 2,091</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">7 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "92.31501320781642%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "7.684986792183576%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">92.3% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">7.7% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmamWih1vRejYuEFQLsfpZ7jDxuW7Qv56rF9cvtEF8v7f7"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #24
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/LiuJie1985"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/LiuJie1985"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/LiuJie1985"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @LiuJie1985
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 24,150</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">28 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 13,363</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">19 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "64.37685903615849%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "35.62314096384151%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">64.4% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">35.6% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmYxUVv4YBhJM2TepnyYgvEUjz93Rr6nqndPckMbfTKN2k"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #25
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/Atonthego69"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/Atonthego69"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/Atonthego69"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @Atonthego69
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 12,202</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">4 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 790</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">6 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "93.92131955752183%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "6.078680442478178%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">93.9% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">6.1% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmRHwYvuDqkvKqjJ3ifbsvG8uerKiwuMLnuSGA1vb1ZJTb"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #26
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/JasonChoi"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/JasonChoi"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/JasonChoi"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @JasonChoi
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 11,190</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">17 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 3,353</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">7 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "76.94422227011877%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "23.05577772988122%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">76.9% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">23.1% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmQKxcpmas7JJYkKk33gVb31atcnCFAQGbLGPuhaE8tZsC"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #27
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/CryptoFinally"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/CryptoFinally"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/CryptoFinally"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @CryptoFinally
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 8,601</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">14 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 9,600</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">27 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "47.25436829714687%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "52.74563170285313%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">47.3% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">52.7% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmbedPsYBwsE6LAMCKkAj2yDpWi8YBHexxS74Tbup4Dmao"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #28
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/intocryptoast"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/intocryptoast"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/intocryptoast"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @intocryptoast
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 8,552</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">10 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 2,517</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">7 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "77.26050537076881%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "22.73949462923118%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">77.3% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">22.7% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmSKdd8wwBiu8TtH5asrToPvxhS1jUsHoEMH4f6AyYCFyf"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #29
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/tomhschmidt"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/tomhschmidt"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/tomhschmidt"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @tomhschmidt
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 7,615</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">5 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 3,463</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">6 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "68.73854437373969%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "31.26145562626032%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">68.7% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">31.3% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/Qma9TdzxHrqDxRAPLiYqECDjzKtFBAauoSfiJmdRk7jbMn"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #30
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/hmazawi"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/hmazawi"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/hmazawi"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @hmazawi
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 7,052</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">24 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 1,792</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">7 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "79.73986174802018%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "20.26013825197981%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">79.7% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">20.3% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/Qmbs9RTBm4WnhczHuH1VX2vRLvccDQaLNBmt23LvkomquX"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #31
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/martinkrung"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/martinkrung"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/martinkrung"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @martinkrung
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 6,469</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">23 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 736</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">4 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "89.79052747755176%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "10.209472522448234%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">89.8% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">10.2% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmbdaWp3W3q96FUPFwDqUrCUX6khzFnHabmRZFUxJr5gqy"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #32
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/BulldaxOfficial"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/BulldaxOfficial"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/BulldaxOfficial"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @BulldaxOfficial
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 2,935</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">3 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 172</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">2 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "94.45416324119137%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "5.545836758808638%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">94.5% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">5.5% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmQS4VVB2FCn1JkgydJ29LnAqw23cVf7aUKKSUD5HXRZki"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #33
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/Hardwood_"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/Hardwood_"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/Hardwood_"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @Hardwood_
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 2,603</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">12 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 6,149</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">14 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "29.74650309593819%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "70.2534969040618%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">29.7% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">70.3% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmbHuYvyvCiyKFFG4pL4VpNd1NDMJwv4RaXgs5MLTKa7MB"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #34
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/oddgems"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/oddgems"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/oddgems"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @oddgems
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 2,536</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">3 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 6,226</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">9 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "28.94563132684247%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "71.05436867315753%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">28.9% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">71.1% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmUQNT6q41BJagKeyDt3EGjwybFCcRzF2aeRNsJKsxqJPT"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #35
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/danielque"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/danielque"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/danielque"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @danielque
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 2,335</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">15 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 52,528</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">5 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "4.2565410086182105%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "95.74345899138179%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">4.3% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">95.7% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmRePpAS33UU8dePLVSeiA9pGsM4Lsaqc8idQKbHk8CTgN"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #36
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/OmakaseBar"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/OmakaseBar"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/OmakaseBar"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @OmakaseBar
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 1,783</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">8 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 0</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">0 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "100%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "0%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">
                        100.0% Yes
                      </div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">0.0% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmWawUVS3v2KcEqrTLgaw7LAuVK7mteZ3BM5Wpd3k15erK"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #37
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/AlbertoOnChain"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/AlbertoOnChain"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/AlbertoOnChain"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @AlbertoOnChain
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 1,337</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">15 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 5,781</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">9 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "18.788340619385906%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "81.2116593806141%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">18.8% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">81.2% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmV55E8dShhrkZ5X5sUqm5164bpzH31skgEJNj3LPRf4af"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #38
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/superdxixi"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/superdxixi"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/superdxixi"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @superdxixi
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 1,290</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">7 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 2,029</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">8 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "38.86162974298265%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "61.13837025701735%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">38.9% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">61.1% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmdLEKs2DLwX1kxXk3nrABVbKbcyE3WzZoFGKYtTyMVMMN"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #39
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/KRMA_0"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/KRMA_0"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/KRMA_0"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @KRMA_0
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 1,222</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">4 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 14,225</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">18 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "7.912026420339652%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "92.08797357966034%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">7.9% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">92.1% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmcjPa8Bta9fnyvxCDwbG3TDrJNTUD4amVyTyEe7M56yDu"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #40
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/OmakaseBar"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/OmakaseBar"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/OmakaseBar"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @OmakaseBar
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Contributor)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 1,039</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">9 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 0</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">0 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "100%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "0%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">
                        100.0% Yes
                      </div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">0.0% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmRYRwQXQZa1ppgN9f1g2p6kXVtjcJ5aa8nDPWZ2JRUWj9"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #41
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/BigONEexchange"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/BigONEexchange"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/BigONEexchange"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @BigONEexchange
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 699</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">4 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 61,114</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">22 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "1.1303023648043082%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "98.86969763519569%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">1.1% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">98.9% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmTseu54MMW6WgFYxMiMxjtUs1PM78LPg8e9YZR9EwnZ5C"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #42
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/imBagsy"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/imBagsy"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/imBagsy"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @imBagsy
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 611</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">12 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 29,645</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">7 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "2.0193822278589018%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "97.9806177721411%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">2.0% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">98.0% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmZE68FcABH3HEGefRRoLaTgtodgUAVhqEmfEMHn2KMu9b"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #43
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/Pentosh1"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/Pentosh1"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/Pentosh1"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @Pentosh1
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 268</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">8 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 55,130</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">6 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "0.4845785354798574%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "99.51542146452013%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">0.5% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">99.5% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmTnB7BNmnMBUkpdGuVLNMkRtQMDxwEfS7h1soYwkERszP"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #44
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/BlackDragon_io"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/BlackDragon_io"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/BlackDragon_io"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @BlackDragon_io
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 193</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">5 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 4,849</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">6 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "3.8339727655239493%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "96.16602723447605%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">3.8% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">96.2% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmNUqnKUcFTtB8mEni2v46fuJrrPzKQZbxcKjwNncNGBhh"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #45
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/coinmamba"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/coinmamba"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/coinmamba"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @coinmamba
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 139</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">3 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 3,164</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">6 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "4.194546362400799%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "95.8054536375992%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">4.2% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">95.8% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmdcqhqxpenoGJNU2vjSB1JUf5S1ntq9b77tKmP1KfFeXS"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #46
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/cherry_hotwife"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/cherry_hotwife"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/cherry_hotwife"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @cherry_hotwife
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 89</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">2 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 7,120</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">17 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "1.2283960524373334%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "98.77160394756267%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">1.2% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">98.8% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmY8fn2RMRMQDFDp9hePf9xXDvs8n7yGNc6gCekF2C4JoW"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #47
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/erezbk"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/erezbk"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/erezbk"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @erezbk
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 42</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">2 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 3,060</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">5 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "1.3472761854780766%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "98.65272381452192%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">1.3% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">98.7% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmQHAQiuX3BqxkgSfhu6VpARFfGD35AutCUqkeFja8x8UU"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #48
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/GainsAssociates"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/GainsAssociates"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/GainsAssociates"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @GainsAssociates
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 14</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">2 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 3,327</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">7 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "0.41417176196352445%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "99.58582823803648%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">0.4% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">99.6% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmT89tDnpwxYZUc99n2Uoti45N8ptWX1591rEEFBd2kJDF"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #49
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/TopTradersbyTV"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/TopTradersbyTV"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/TopTradersbyTV"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @TopTradersbyTV
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 0</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">0 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 819</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">5 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "0%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "100%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">0.0% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">100.0% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmTFryF1x6ktB9xXgAztW6nyMgzYDe5JYF1hXpYZ7TmkVs"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    #50
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://twitter.com/TheSahilsays"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-w-10 sushi-h-10 sushi-mr-4"
                      >
                        <img
                          src="https://unavatar.now.sh/twitter/TheSahilsays"
                          className="sushi-w-10 sushi-h-10 sushi-rounded-full sushi-shadow-md"
                        />
                      </a>{" "}
                      <div>
                        <a
                          href="https://twitter.com/TheSahilsays"
                          target="_blank"
                          className="sushi-flex sushi-items-center hover:sushi-underline"
                        >
                          @TheSahilsays
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>{" "}
                        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                          (Twitter)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 0</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">0 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 3,354</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">7 wallets</div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div className="sushi-flex sushi-w-40 sushi-h-4 sushi-overflow-hidden sushi-bg-gray-200 sushi-rounded-lg sushi-shadow">
                      <div
                        className="sushi-h-full sushi-bg-green-400"
                        style={{ width: "0%" }}
                      />{" "}
                      <div
                        className="sushi-h-full sushi-bg-red-400"
                        style={{ width: "100%" }}
                      />
                    </div>{" "}
                    <div className="sushi-w-40 sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      <div className="sushi-float-left sushi-text-green-600">0.0% Yes</div>{" "}
                      <div className="sushi-float-right sushi-text-red-600">100.0% No</div>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
                      <a
                        href="https://snapshot.page/#/sushi/proposal/QmfESUC9T8Wts1aLxPf5eyjHfuKMPDEs8LDUuAsbPqDbGt"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                      >
                        Snapshot
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Candidates;
