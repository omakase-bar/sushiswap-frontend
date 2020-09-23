import React from "react";
import { Link } from "react-router-dom";

const AccountsCard = () => {
  return (
    <div className="sushi-flex sushi-flex-col sushi-rounded-lg sushi-border sushi-border-gray-200 sushi-overflow-hidden">
      <div className="sushi-flex-1 sushi-bg-white sushi-p-6 sushi-flex sushi-flex-col sushi-justify-between">
        <div className="sushi-relative sushi-pb-5 sushi-border-b sushi-border-gray-200 sushi-space-y-4 sm:sushi-pb-0">
          <div className="sushi-space-y-3 sushi-flex sushi-items-center sushi-justify-between sushi-space-y-0">
            <h3 className="sushi-text-lg sushi-pb-4 sushi-leading-6 sushi-font-medium sushi-text-gray-900">
              Saved Accounts
            </h3>
            <Link
              to="/"
              className="sushi-ml-2 sushi-pb-4 sushi-text-sm sushi-leading-5 sushi-text-gray-500 sushi-truncate"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="#b4bfd8"
                class="sushi-arrows-expand sushi-w-6 sushi-h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="sushi-mt-6 sushi-flex-1">No Saved Accounts</div>
      </div>
    </div>
  );
};

export default AccountsCard;
