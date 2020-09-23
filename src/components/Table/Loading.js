import React from "react";

const Loading = ({ title }) => {
  return (
    <>
      <h2 className="sushi-max-w-6xl sushi-mx-auto sushi-mt-8 sushi-px-4 sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-cool-gray-900 sm:sushi-px-6 lg:sushi-px-8">
        {title}
      </h2>
      <div className="sushi-mt-4 sushi-inline-block sushi-min-w-full sushi-overflow-hidden sushi-align-middle">
        <table className="sushi-min-w-full sushi-divide-y sushi-divide-gray-200">
          <thead>
            <tr>
              {[...Array(3)].map(() => (
                <th className="sushi-px-8 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-bg-orange-50"></th>
              ))}
            </tr>
          </thead>
          <tbody className="sushi-bg-white sushi-divide-y sushi-divide-gray-200">
            {[...Array(10)].map(() => (
              <tr className="sushi-bg-white" key={Math.random()}>
                <td className="sushi-max-w-0 sushi-w-full sushi-px-6 sushi-py-4 sushi-whitespace-no-wrap sushi-text-sm sushi-leading-5 sushi-text-cool-gray-900">
                  <div className="sushi-animate-fade">
                    <div className="sushi-h-4 sushi-bg-gray-300 sushi-rounded"></div>
                  </div>
                </td>
                <td className="sushi-px-6 sushi-py-4 sushi-text-right sushi-whitespace-no-wrap sushi-text-sm sushi-leading-5 sushi-text-cool-gray-500">
                  <div className="sushi-animate-fade">
                    <div className="sushi-h-4 sushi-bg-gray-300 sushi-rounded"></div>
                  </div>
                </td>
                {/* <td className="sushi-px-6 sushi-py-4 sushi-whitespace-no-wrap sushi-text-sm sushi-leading-5 sushi-text-cool-gray-500 md:sushi-block">
              <div className="sushi-animate-fade">
                <div className="sushi-h-4 sushi-bg-gray-300 sushi-rounded"></div>
              </div>
            </td> */}
                <td className="sushi-px-6 sushi-py-4 sushi-text-right sushi-whitespace-no-wrap sushi-text-sm sushi-leading-5 sushi-text-cool-gray-500">
                  <div className="sushi-animate-fade">
                    <div className="sushi-h-4 sushi-bg-gray-300 sushi-rounded"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Loading;
