import React from "react";

const Signers = () => {
  return (
    <>
      <div className="sushi-mt-4 sushi-mb-2 sushi-w-full sushi-bg-white sushi-shadow-lg sushi-rounded-lg sushi-pointer-events-auto">
        <div className="sushi-flex sushi-rounded-lg sushi-shadow-xs">
          <div className="sushi-w-0 sushi-flex-1 sushi-p-4">
            <div className="sushi-flex sushi-items-start">
              <div className="sushi-ml-3 sushi-w-0 sushi-flex-1">
                <p className="sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                  The path to decentralization
                </p>
                <p className="sushi-mt-1 sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                  9 signers were selected from 50 candidates. 7 out of 9 signers
                  must approve action items from proposals. The signing
                  committee can also fast track proposals given timely
                  necessity...{" "}
                  <span>
                    <a
                      href="https://help.sushidocs.com/faqs/governance"
                      target="_blank"
                      className="sushi-text-sm sushi-font-medium sushi-text-orange-600 hover:sushi-text-orange-500 active:sushi-text-orange-700 sushi-transition sushi-ease-in-out sushi-duration-150"
                    >
                      Learn more
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sushi-flex sushi-flex-col">
        <div className="sushi-py-2 sushi-px-2 sushi-overflow-x-auto sushi-overflow-y-auto">
          <div className="sushi-inline-block sushi-min-w-full sushi-overflow-hidden sushi-align-middle">
            <table className="sushi-min-w-full sushi-divide-y sushi-divide-gray-200">
              <thead>
                <tr>
                  <th className="sushi-pr-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                    <a href="#" className="sushi-flex sushi-items-center">
                      <span>Signer</span> {/**/}
                    </a>
                  </th>
                  <th className="sushi-pr-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                    <a href="#" className="sushi-flex sushi-items-center">
                      <span className="sushi-text-green-500">Yes</span>
                    </a>
                  </th>
                  <th className="sushi-pr-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                    <a href="#" className="sushi-flex sushi-items-center">
                      <span className="sushi-text-red-500">No</span>
                    </a>
                  </th>
                  <th className="sushi-pr-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                    {/**/}
                  </th>
                  <th className="sushi-pr-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                    {/**/}
                  </th>
                </tr>
              </thead>{" "}
              <tbody className="sushi-bg-white sushi-divide-y sushi-divide-gray-200">
                <tr>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 261,381</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      273 wallets
                    </div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 9,341</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">12 wallets</div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 231,257</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      146 wallets
                    </div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 1,003</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">4 wallets</div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 191,255</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      212 wallets
                    </div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 409</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">6 wallets</div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 178,616</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">86 wallets</div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 2,224</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">5 wallets</div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 172,483</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">33 wallets</div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 9,415</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">7 wallets</div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 160,726</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">38 wallets</div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 591</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">2 wallets</div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 158,745</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">40 wallets</div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 2,614</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">4 wallets</div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 147,298</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">93 wallets</div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 7,119</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">4 wallets</div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 130,035</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
                      109 wallets
                    </div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                    <div>🍣 19,347</div>{" "}
                    <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">6 wallets</div>
                  </td>
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
                  <td className="sushi-pr-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signers;
