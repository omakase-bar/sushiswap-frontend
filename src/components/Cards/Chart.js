import React from "react";
import { Link } from "react-router-dom";

const ChartWrapper = ({ children }) => {
  return (
    <div className="sushi-flex sushi-flex-col sushi-rounded-lg sushi-border sushi-border-gray-200 sushi-overflow-hidden">
      <div className="sushi-flex-1 sushi-bg-white sushi-p-6 sushi-flex sushi-flex-col sushi-justify-between">
        <div className="sushi-flex-1">{children}</div>
        <div className="sushi-mt-6 sushi-flex">
          <div className="sushi-w-full sushi-bg-white sushi-shadow-lg sushi-rounded-lg sushi-pointer-events-auto">
            <div className="sushi-flex sushi-rounded-lg sushi-shadow-xs">
              <div className="sushi-w-0 sushi-flex-1 sushi-p-4">
                <div className="sushi-flex sushi-items-start">
                  <div className="sushi-flex-shrink-0 sushi-pt-0.5">
                    <img
                      className="sushi-h-10 sushi-w-10 sushi-rounded-full"
                      src="https://cdn.discordapp.com/avatars/201534195695091712/618f054e78d4469e9a0ec61e57bc26e1.png?size=256"
                      alt="Tip from ChefNomi"
                    />
                  </div>
                  <div className="sushi-ml-3 sushi-w-0 sushi-flex-1">
                    <p className="sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                      Tip from 0xMaki
                    </p>
                    <p className="sushi-mt-1 sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      Why don't you try some 🍣 instead ?
                    </p>
                  </div>
                </div>
              </div>
              <div className="sushi-flex sushi-border-l sushi-border-gray-200">
                <Link
                  to="/token/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"
                  className="sushi--ml-px sushi-flex sushi-items-center sushi-justify-center sushi-w-full sushi-border sushi-border-transparent sushi-rounded-r-lg sushi-p-4 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-orange-600 hover:sushi-text-orange-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-text-orange-700 active:sushi-bg-gray-50 sushi-transition sushi-ease-in-out sushi-duration-150"
                >
                  Feast
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartWrapper;
