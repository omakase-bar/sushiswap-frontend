import React from "react";
import WechatQRCode from "../../assets/img/wechat-qrcode.jpg";
const ShareWechatModal = ({ onDismiss }) => {
  return (
    <>
      <span className="sushi-hidden sm:sushi-inline-block sm:sushi-align-middle sm:sushi-h-screen" />
      <div
        className="sushi-bg-white sushi-inline-block sushi-align-bottom sushi-bg-white sushi-rounded-lg sushi-px-4 sushi-pt-5 sushi-pb-4 sushi-text-left sushi-overflow-hidden sushi-shadow-xl sushi-transform sushi-transition-all sm:sushi-my-8 sm:sushi-align-middle sm:sushi-max-w-lg sm:sushi-w-full sm:sushi-p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div className="sushi-hidden sm:sushi-block sushi-absolute sushi-top-0 sushi-right-0 sushi-pt-4 sushi-pr-4">
          <button
            onClick={() => {
              onDismiss();
            }}
            type="button"
            className="sushi-text-gray-400 hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-text-gray-500 sushi-transition sushi-ease-in-out sushi-duration-150"
            aria-label="Close"
          >
            <svg className="sushi-h-6 sushi-w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="sm:sushi-flex sm:sushi-items-start">
          <div className="sushi-mt-3 sushi-text-center sm:sushi-mt-0 sm:sushi-ml-4 sm:sushi-text-left">
            <div className="sushi-float-left sushi-flex sushi-items-center sushi-justify-center sushi-h-12 sushi-w-12 sushi-rounded-full sushi-bg-green-100 sm:sushi-mx-0 sm:sushi-h-10 sm:sushi-w-10">
              <svg
                className="sushi-h-6 sushi-w-6 sushi-text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <h3
              className="sushi-ml-12 sushi-p-2 sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900"
              id="modal-headline"
            >
              Scan to follow on Wechat
            </h3>
            <a href="https://weixin.qq.com/r/HBzj_33EuSDGrTmY90kO" target="_blank">
              <img className="max-w-12" src={WechatQRCode} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareWechatModal;
