import React from "react";

const ProjectSmall = () => {
  return (
    <div className="sushi-mt-10 sm:sushi-hidden">
      <div className="sushi-px-4 sm:sushi-px-6">
        <h2 className="sushi-text-gray-500 sushi-text-xs sushi-font-medium sushi-uppercase sushi-tracking-wide">
          Projects
        </h2>
      </div>
      <ul className="sushi-mt-3 sushi-border-t sushi-border-gray-200 sushi-divide-y sushi-divide-gray-100">
        <li>
          <a
            href="#"
            className="sushi-flex sushi-items-center sushi-justify-between sushi-px-4 sushi-py-4 hover:sushi-bg-orange-50 sm:sushi-px-6"
          >
            <div className="sushi-flex sushi-items-center sushi-truncate sushi-space-x-3">
              <div className="sushi-w-2.5 sushi-h-2.5 sushi-flex-shrink-0 sushi-rounded-full sushi-bg-pink-600" />
              <p className="sushi-font-medium sushi-truncate sushi-text-sm sushi-leading-6">
                GraphQL API{" "}
                <span className="sushi-truncate sushi-font-normal sushi-text-gray-500">
                  in Engineering
                </span>
              </p>
            </div>
            <svg
              className="sushi-ml-4 sushi-h-5 sushi-w-5 sushi-text-gray-400 group-hover:sushi-text-gray-500 group-focus:sushi-text-gray-600 sushi-transition sushi-ease-in-out sushi-duration-150"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
        {/* More project rows... */}
      </ul>
    </div>
  );
};

export default ProjectSmall;
