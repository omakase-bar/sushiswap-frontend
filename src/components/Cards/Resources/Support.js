import React from "react";

const Support = () => {
  return (
    <>
      <div className="sushi-flex-1 sushi-flex sushi-flex-col sushi-justify-between">
        <div className="sushi-divide-y sushi-divide-gray-200">
          <div className="sushi-space-y-6 sushi-pb-5">
            <div className="sushi-space-y-1">
              <label
                htmlFor="project_name"
                className="sushi-block sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900"
              >
                Title
              </label>
              <div className="sushi-relative sushi-rounded-md sushi-shadow-sm">
                <input
                  id="project_name"
                  className="sushi-form-input sushi-block sushi-w-full sm:sushi-text-sm sm:sushi-leading-5 sushi-transition sushi-ease-in-out sushi-duration-150"
                />
              </div>
            </div>
            <div className="sushi-space-y-1">
              <label
                htmlFor="description"
                className="sushi-block sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900"
              >
                Description
              </label>
              <div className="sushi-relative sushi-rounded-md sushi-shadow-sm">
                <textarea
                  id="description"
                  rows={4}
                  className="sushi-form-input sushi-block sushi-w-full sm:sushi-text-sm sm:sushi-leading-5 sushi-transition sushi-ease-in-out sushi-duration-150"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sushi-space-y-2">
              <h3 className="sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900">
                Online to assist
              </h3>
              <div>
                <div className="sushi-flex sushi-space-x-2">
                  <a
                    href="#"
                    className="sushi-rounded-full hover:sushi-opacity-75 focus:sushi-outline-none focus:sushi-shadow-outline sushi-transition sushi-ease-in-out sushi-duration-150"
                  >
                    <img
                      className="sushi-inline-block sushi-h-8 sushi-w-8 sushi-rounded-full"
                      src="https://cdn.discordapp.com/avatars/269919167895961601/1ac894516fc08f845d6a5524c3c42242.png?size=256"
                      alt="@Ctrl"
                    />
                  </a>
                  <a
                    href="#"
                    className="sushi-rounded-full hover:sushi-opacity-75 focus:sushi-outline-none focus:sushi-shadow-outline sushi-transition sushi-ease-in-out sushi-duration-150"
                  >
                    <img
                      className="sushi-inline-block sushi-h-8 sushi-w-8 sushi-rounded-full"
                      src="https://cdn.discordapp.com/avatars/352907625790308353/2c9688f2e9d3c92df2781be20b0e5a53.png?size=256"
                      alt="@AdamSC1"
                    />
                  </a>
                  <a
                    href="#"
                    className="sushi-rounded-full hover:sushi-opacity-75 focus:sushi-outline-none focus:sushi-shadow-outline sushi-transition sushi-ease-in-out sushi-duration-150"
                  >
                    <img
                      className="sushi-inline-block sushi-h-8 sushi-w-8 sushi-rounded-full"
                      src="https://cdn.discordapp.com/avatars/325427894149054466/62fe16487a2e828678b32f728e05464a.png?size=256"
                      alt="@Wendel"
                    />
                  </a>
                  <a
                    href="#"
                    className="sushi-rounded-full hover:sushi-opacity-75 focus:sushi-outline-none focus:sushi-shadow-outline sushi-transition sushi-ease-in-out sushi-duration-150"
                  >
                    <img
                      className="sushi-inline-block sushi-h-8 sushi-w-8 sushi-rounded-full"
                      src="https://cdn.discordapp.com/avatars/288356656037888010/94af74c9be8a96c0be1c42bb3ba56ccb.png?size=256"
                      alt="@Aeto"
                    />
                  </a>
                  <a
                    href="#"
                    className="sushi-rounded-full hover:sushi-opacity-75 focus:sushi-outline-none focus:sushi-shadow-outline sushi-transition sushi-ease-in-out sushi-duration-150"
                  >
                    <img
                      className="sushi-inline-block sushi-h-8 sushi-w-8 sushi-rounded-full"
                      src="https://cdn.discordapp.com/avatars/747278114446639205/fdf7c3ac92da40e108378d99de34520e.png?size=256"
                      alt="Miya"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="sushi-mt-6">
              <span className="sushi-block sushi-w-full sushi-rounded-md sushi-shadow-sm">
                <button
                  type="submit"
                  className="sushi-w-full sushi-flex sushi-justify-center sushi-px-5 sushi-py-3 sushi-border sushi-border-transparent sushi-text-base sushi-font-medium sushi-rounded-md sushi-text-white sushi-bg-orange-600 hover:sushi-bg-orange-500 focus:sushi-outline-none focus:sushi-border-orange-700 focus:sushi-shadow-outline-orange active:sushi-bg-orange-700 sushi-transition sushi-duration-150 sushi-ease-in-out"
                >
                  Submit support request
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
