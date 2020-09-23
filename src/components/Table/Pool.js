import React from "react";

const Pool = ({ title }) => {
  return (
    <>
      <h2 className="sushi-max-w-6xl sushi-mx-auto sushi-mt-8 sushi-px-4 sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-cool-gray-900 sushi-">
        {title}
      </h2>
      <h3 className="sushi-px-4 sushi-mt-6 sushi-text-sm sushi-text-gray-500">
        <span className="sushi-p-1 sushi-text-xs sushi-font-medium sushi-bg-gray-200 sushi-rounded">
          YIELD PER $1,000
        </span>{" "}
        is amount of SUSHI rewarded per hour for a $1,000 investment.
      </h3>
      <h3 class="sushi-px-4 sushi-mt-2 sushi-text-sm sushi-text-gray-500">
        <span class="sushi-p-1 sushi-text-xs sushi-font-medium sushi-bg-gray-200 sushi-rounded">ROI</span> is
        calculated using the current two-week x10 reward bonus.
      </h3>
      <div className="sushi-mt-8 sushi-inline-block sushi-min-w-full sushi-overflow-hidden sushi-align-middle sushi-border-b sushi-border-gray-200 sushi-shadow sm:sushi-rounded-lg">
        <table className="sushi-min-w-full sushi-divide-y sushi-divide-gray-200">
          <thead>
            <tr>
              <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-bg-gray-50">
                <a href="#" className="sushi-flex sushi-items-center">
                  <span>Pool</span> {/**/}
                </a>
              </th>
              <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-bg-gray-50">
                <a href="#" className="sushi-flex sushi-items-center">
                  <span>Staked</span> {/**/}
                </a>
              </th>
              <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-bg-gray-50">
                <a href="#" className="sushi-flex sushi-items-center">
                  <span>Underlying Tokens</span> {/**/}
                </a>
              </th>
              <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-bg-gray-50">
                <a href="#" className="sushi-flex sushi-items-center">
                  <span>
                    <span className="sushi-whitespace-no-wrap">
                      Total Value Locked{" "}
                      <span
                        className="sushi-text-gray-400"
                        style={{ fontSize: "0.6rem" }}
                      >
                        (1h)
                      </span>
                    </span>
                  </span>{" "}
                  {/**/}
                </a>
              </th>
              <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-bg-gray-50">
                <a href="#" className="sushi-flex sushi-items-center">
                  <span>Yield per $1,000</span> {/**/}
                </a>
              </th>
              <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-bg-gray-50">
                <a href="#" className="sushi-flex sushi-items-center">
                  <span>ROI</span> {/**/}
                </a>
              </th>
            </tr>
          </thead>{" "}
          <tbody className="sushi-bg-white sushi-divide-y sushi-divide-gray-200">
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🍣</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/SUSHI-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        Sushi Party!
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      {/**/}
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap SUSHI/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                2,056,452.3593 LP
                <div className="sushi-text-xs sushi-text-gray-500">98.9% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAWlBMVEVHcEwAAAABAADvaVAAAAAAAAAAAAAAAAAAAAAAAADy8vIrKirwOhfvlofwTCzs5uW72Q4VFRXgYkt8NCalpaXIyMiBgIA8PDxYWFje2c5zc3PQ4mbwgGvb55LKqoY5AAAACnRSTlMAHv//wpBR6HMLaXlPkAAAAp1JREFUWMPt2MmCoyAQANBoVBTc6Lh3/v87h01kKTCauc3UySTdL0UJheTx+B9/LaoyS9OsrL5mUCoCfUVp5jvKYu5TB/P6+XndpkzmyeIm5TI3KYi5QblM09yi/GxM6GMKGtQByStNZcm12rjQQWXVpRL7kKbKCwwMMYrwlC6VGIbamhf8Rontq7auOZTeKvFxxRkfulBieSWZ+mVDSRaYxXBlNNM2mwVV2dUSK6bDowWVl0usGIw7C+IJkZMSvxuAYWFB/EXdnk0+iIGg+qBOS6wZGNLUaYlxBHrVB/U+K3EMmpq2NrOCZrHPANCIO4CyZjHAiNuPLEhMCjCrCIPFhLQh9QUeFWUwnti/5gDkUicMxsTqkCZkUqcM5msWVQHIoBxmHbZlJmRetmHUAzNG5kFmVgczLMSIecDdktoJAZCiTIanwjJhb3TjsPFX1NtD9tvvUkZtNkKWwfwbnh91M0JiQsZi4UNxguVInRrxfjTFnInMq//uqqTE6pC0CzsrISrhtXk/+/5XqSMhdpUS/nKLJaTyFSuvZ/G7f0DtnTbn0hCEZpWQbAX9IcmUjJ02Ebva0gUh+cn7gHp5Y13oUYgpQSeYIgp6wpC100opQJH40Oy9P0FhioSL7UPHU4RHsQEEbz8AMSqHqG6ifI0CM3+cAxCnUodiDNuF5Wr3l0gQYqXaqXQZxnFYxBqQjcNftDHIpHToHmS1kTPIqJULQRGDWFb2Ee0EQtFDRJFnLPKCtxgadij4eAxFGU8p9MAOjDKNpeQ0tmjkMclptfGUUFCSzT/59ECqWkzASYvPj7ZlClGS+bDSdrNilsIo3d8prp3a9cnAiSy5evx/uL9GiDJfTGcfn5NVdo8RebFlg1hmCLGl8+3vP/9i/AEZG2Hp7qtZRgAAAABJRU5ErkJggg=="
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    19,711,726.53 SUSHI
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    234,285.71 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $181,990,200
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+1.1%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      11.6% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.3172</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  <div
                    className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-full sushi-select-none sushi-text-green-800 sushi-bg-green-100 sushi-has-tooltip"
                    data-original-title="null"
                  >
                    <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                      4.8x Reward
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.15%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>3.52%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1,285.88%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🐢</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/USDT-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        Tether Turtle
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      {/**/}
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap ETH/USDT
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                5.4221 LP
                <div className="sushi-text-xs sushi-text-gray-500">88.0% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    331,503.22 ETH
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/USDT.049a891.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    129,358,733.65 USDT
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $257,486,115
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+0.5%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      16.4% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.0897</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  <div
                    className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-full sushi-select-none sushi-text-green-800 sushi-bg-green-100 sushi-has-tooltip"
                    data-original-title="null"
                  >
                    <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                      1.9x Reward
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.04%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1.00%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>363.47%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🐌</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/USDC-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        Circle Snail
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      {/**/}
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap USDC/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                5.1552 LP
                <div className="sushi-text-xs sushi-text-gray-500">92.8% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/USDC.bba429d.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    123,700,077.26 USDC
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    316,621.85 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $245,927,115
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+0.0%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      15.7% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.1136</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  <div
                    className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-full sushi-select-none sushi-text-green-800 sushi-bg-green-100 sushi-has-tooltip"
                    data-original-title="null"
                  >
                    <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                      2.3x Reward
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.05%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1.26%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>460.31%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🦆</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/DAI-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        Donald DAI
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      {/**/}
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap DAI/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                4,113,803.552 LP
                <div className="sushi-text-xs sushi-text-gray-500">95.1% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/DAI.b5fbde5.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    92,786,501.07 DAI
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    242,572.55 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $188,107,158
                      <div className="sushi-text-xs sushi-text-red-500">&nbsp;(-0.9%)</div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      12.0% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.1485</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  <div
                    className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-full sushi-select-none sushi-text-green-800 sushi-bg-green-100 sushi-has-tooltip"
                    data-original-title="null"
                  >
                    <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                      2.3x Reward
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.07%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1.65%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>601.80%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🦍</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/SUSD-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        Spartan Dollar
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      {/**/}
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap sUSD/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                1,493,438.8525 LP
                <div className="sushi-text-xs sushi-text-gray-500">91.8% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/sUSD.ba079e6.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    40,379,435.49 sUSD
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    105,586.11 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $81,916,930
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+1.2%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      5.2% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.147</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  {/**/}
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.07%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1.63%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>595.66%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🦑</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/UMA-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        Umami Squid
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      {/**/}
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap UMA/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                212,382.446 LP
                <div className="sushi-text-xs sushi-text-gray-500">98.8% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/UMA.156a83b.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    1,024,260.93 UMA
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    49,561.02 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $38,472,820
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+1.5%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      2.4% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.3129</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  {/**/}
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.14%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>3.47%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1,268.28%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🦖</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/BAND-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        Band-osaurus
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      {/**/}
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap BAND/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                270,629.5365 LP
                <div className="sushi-text-xs sushi-text-gray-500">92.0% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/BAND.f5779b4.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    2,090,949.80 BAND
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    60,297.04 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $46,834,232
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+2.0%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      3.0% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.257</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  {/**/}
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.12%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>2.85%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1,041.85%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🐸</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/LINK-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        Toadie Marine
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      {/**/}
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap LINK/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                501,648.2289 LP
                <div className="sushi-text-xs sushi-text-gray-500">95.5% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/LINK.fd650f1.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    3,269,101.39 LINK
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    105,310.29 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $81,801,202
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+0.0%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      5.2% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.1472</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  {/**/}
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.07%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1.63%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>596.50%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🐥</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/AMPL-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        Ample Chicks
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      {/**/}
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap ETH/AMPL
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                5.976 LP
                <div className="sushi-text-xs sushi-text-gray-500">74.0% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    49,355.66 ETH
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/AMPL.eb0825b.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    24,464,642.72 AMPL
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $38,319,901
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+0.5%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      2.4% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.3142</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  {/**/}
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.15%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>3.49%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1,273.34%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🍄</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/COMP-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        Compound Truffle
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      {/**/}
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap COMP/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                72,322.0304 LP
                <div className="sushi-text-xs sushi-text-gray-500">97.8% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/COMP.355599f.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    124,754.71 COMP
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    60,799.29 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $47,105,060
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+0.9%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      3.0% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.2556</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  {/**/}
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.12%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>2.84%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1,035.86%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🐗</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/LEND-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        Aave Boar
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      {/**/}
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap LEND/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                2,034,917.6357 LP
                <div className="sushi-text-xs sushi-text-gray-500">97.6% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/LEND.c4a4b8f.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    56,928,052.55 LEND
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    94,627.95 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $73,445,881
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+2.1%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      4.7% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.1639</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  {/**/}
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.08%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1.82%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>664.36%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🐍</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/SNX-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        Synthetic Snake
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      {/**/}
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap SNX/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                565,626.0943 LP
                <div className="sushi-text-xs sushi-text-gray-500">98.6% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/SNX.7922816.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    5,606,877.97 SNX
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    79,436.36 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $61,664,332
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+2.3%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      3.9% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.1952</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  {/**/}
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.09%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>2.17%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>791.29%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🐋</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/YFI-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        YFI Whale
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      {/**/}
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap YFI/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                16,813.3856 LP
                <div className="sushi-text-xs sushi-text-gray-500">97.0% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/YFI.3211baf.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    3,000.42 YFI
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    212,376.57 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $164,860,906
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+2.0%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      10.5% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.1694</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  <div
                    className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-full sushi-select-none sushi-text-green-800 sushi-bg-green-100 sushi-has-tooltip"
                    data-original-title="null"
                  >
                    <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                      2.3x Reward
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.08%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1.88%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>686.66%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🦏</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/REN-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        REN Rhino
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      <span className="sushi-ml-2 sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5 sushi-rounded-full sushi-text-xs sushi-font-medium sushi-leading-4 sushi-bg-teal-100 sushi-text-teal-800">
                        New
                      </span>
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap REN/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                581,591.7272 LP
                <div className="sushi-text-xs sushi-text-gray-500">93.6% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/REN.3d7d430.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    22,603,279.51 REN
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    21,684.75 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $16,842,873
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+0.7%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      1.1% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.1429</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  <div
                    className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-full sushi-select-none sushi-text-gray-800 sushi-bg-gray-100 sushi-has-tooltip"
                    data-original-title="null"
                  >
                    <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                      0.2x Reward
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.07%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1.59%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>579.41%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🐂</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/BASE-sUSD UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        BASED Bull
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      <span className="sushi-ml-2 sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5 sushi-rounded-full sushi-text-xs sushi-font-medium sushi-leading-4 sushi-bg-teal-100 sushi-text-teal-800">
                        New
                      </span>
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap sUSD/$BASED
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                148,149.4806 LP
                <div className="sushi-text-xs sushi-text-gray-500">52.0% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/sUSD.ba079e6.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    3,229,825.36 sUSD
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/$BASED.998092a.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    7,336.95 $BASED
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $6,577,159
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+8.5%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      0.4% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.3661</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  <div
                    className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-full sushi-select-none sushi-text-gray-800 sushi-bg-gray-100 sushi-has-tooltip"
                    data-original-title="null"
                  >
                    <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                      0.2x Reward
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.17%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>4.07%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1,483.75%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🦈</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/SRM-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        SRM Shark
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      <span className="sushi-ml-2 sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5 sushi-rounded-full sushi-text-xs sushi-font-medium sushi-leading-4 sushi-bg-teal-100 sushi-text-teal-800">
                        New
                      </span>
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap SRM/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                0.2108 LP
                <div className="sushi-text-xs sushi-text-gray-500">99.4% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/SRM.5f2f46c.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    2,530,643.69 SRM
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    18,576.07 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $14,380,945
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+0.0%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      0.9% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.1674</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  <div
                    className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-full sushi-select-none sushi-text-gray-800 sushi-bg-gray-100 sushi-has-tooltip"
                    data-original-title="null"
                  >
                    <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                      0.2x Reward
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.08%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1.86%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>678.60%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🍠</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/YAMV2-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        YAMv2 YAM
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      <span className="sushi-ml-2 sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5 sushi-rounded-full sushi-text-xs sushi-font-medium sushi-leading-4 sushi-bg-teal-100 sushi-text-teal-800">
                        New
                      </span>
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap YAMv2/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                28,588,828.049 LP
                <div className="sushi-text-xs sushi-text-gray-500">96.3% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/YAMv2.df3d91a.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    383,530.65 YAMv2
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    20,503.42 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $15,924,397
                      <div className="sushi-text-xs sushi-text-green-500">
                        &nbsp;(+1.8%)
                      </div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      1.0% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.1512</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  <div
                    className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-full sushi-select-none sushi-text-gray-800 sushi-bg-gray-100 sushi-has-tooltip"
                    data-original-title="null"
                  >
                    <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                      0.2x Reward
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.07%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1.68%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>612.82%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">🐊</div>{" "}
                  <div className="sushi-ml-4">
                    <div className="sushi-flex sushi-items-center">
                      <a
                        href="https://sushiswap.org/farms/CRV-ETH UNI-V2 LP"
                        target="_blank"
                        className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                      >
                        CRV Crocodile
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-4 sushi-h-4 sushi-ml-1"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      <span className="sushi-ml-2 sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5 sushi-rounded-full sushi-text-xs sushi-font-medium sushi-leading-4 sushi-bg-teal-100 sushi-text-teal-800">
                        New
                      </span>
                    </div>{" "}
                    <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Uniswap CRV/ETH
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                51,878.7613 LP
                <div className="sushi-text-xs sushi-text-gray-500">94.8% of Uniswap</div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-text-xs">
                  <div className="sushi-flex sushi-items-center">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/CRV.88447c1.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    12,512.99 CRV
                  </div>{" "}
                  <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                    <img
                      src="https://sushi.zippo.io/_nuxt/img/ETH.c8761e3.png"
                      className="sushi-mr-2"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    1,623,119.51 ETH
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <div>
                    <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                      $9,686,497
                      <div className="sushi-text-xs sushi-text-red-500">&nbsp;(-4.2%)</div>
                    </div>{" "}
                    <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                      0.6% of total
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-inline-flex sushi-flex-col">
                  <div className="sushi-flex sushi-items-center">
                    <div
                      className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                      style={{ border: "solid 1px #ee6d48" }}
                    >
                      🍣
                    </div>{" "}
                    <div>
                      <div>0.2486</div>{" "}
                      <div className="sushi-text-xs sushi-text-gray-500">SUSHI/hour</div>
                    </div>
                  </div>{" "}
                  <div
                    className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-full sushi-select-none sushi-text-gray-800 sushi-bg-gray-100 sushi-has-tooltip"
                    data-original-title="null"
                  >
                    <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                      0.2x Reward
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                <div className="sushi-flex sushi-items-center">
                  <span>0.12%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">hourly</span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>2.76%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    daily
                  </span>
                </div>{" "}
                <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                  <span>1,007.47%</span>{" "}
                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                    yearly
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Pool;
