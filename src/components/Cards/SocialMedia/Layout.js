import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "./Tabs";
import ExpandButton from "../ExpandButton";
import {
  announcements,
  mediums,
  tweets,
  wechats,
} from "../../../constants/resources.json";

const SocialMediaCard = ({ title }) => {
  const [section, setSection] = useState("announcements");
  return (
    <div className="sushi-flex sushi-flex-col sushi-rounded-lg sushi-border sushi-border-gray-200 sushi-overflow-hidden">
      <div className="sushi-flex-1 sushi-bg-white sushi-p-6 sushi-flex sushi-flex-col sushi-justify-between">
        <div className="sushi-relative sushi-border-b sushi-border-gray-200 sushi-space-y-4 sushi-pb-0">
          <div className="sushi-space-y-3 sushi-flex sushi-items-center sushi-justify-between sushi-space-y-0">
            <h3 className="sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900">
              📣 SUSHI Content
            </h3>
            <ExpandButton
              widgetPath={"/widgets/social-media"}
              dashboardPath={"/omakase-bar"}
            />
          </div>
          <Tabs selected={section} setSelected={setSection} />
        </div>
        {
          {
            announcements: (
              <div className="sushi-mt-6 sushi-flex-1">
                {announcements.map((announcement) => {
                  return (
                    <div className="sushi-mt-2 sushi-w-full sushi-bg-white sushi-shadow-lg sushi-rounded-lg sushi-pointer-events-auto">
                      <div className="sushi-flex sushi-rounded-lg sushi-shadow-xs">
                        <div className="sushi-w-0 sushi-flex-1 sushi-p-4">
                          <div className="sushi-flex sushi-items-start">
                            <div className="sushi-ml-3 sushi-w-0 sushi-flex-1">
                              <p className="sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                                {announcement.title}
                              </p>
                              <p className="sushi-mt-1 sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                                {announcement.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="sushi-flex sushi-border-l sushi-border-gray-200">
                          <a
                            href={announcement.url}
                            target="_blank"
                            className="sushi--ml-px sushi-flex sushi-items-center sushi-justify-center sushi-w-full sushi-border sushi-border-transparent sushi-rounded-r-lg sushi-p-4 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-orange-600 hover:sushi-text-orange-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-text-orange-700 active:sushi-bg-gray-50 sushi-transition sushi-ease-in-out sushi-duration-150"
                          >
                            {announcement.cta}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ),
            twitter: (
              <div className="sushi-mt-6 sushi-flex-1">
                {tweets.map((tweet) => {
                  return (
                    <div className="sushi-mt-2 sushi-w-full sushi-bg-white sushi-shadow-lg sushi-rounded-lg sushi-pointer-events-auto">
                      <div className="sushi-flex sushi-rounded-lg sushi-shadow-xs">
                        <div className="sushi-w-0 sushi-flex-1 sushi-p-4">
                          <div className="sushi-flex sushi-items-start">
                            <div className="sushi-ml-3 sushi-w-0 sushi-flex-1">
                              <p className="sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                                {tweet.title}
                              </p>
                              <p className="sushi-mt-1 sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                                {tweet.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="sushi-flex sushi-border-l sushi-border-gray-200">
                          <a
                            href={tweet.url}
                            target="_blank"
                            className="sushi--ml-px sushi-flex sushi-items-center sushi-justify-center sushi-w-full sushi-border sushi-border-transparent sushi-rounded-r-lg sushi-p-4 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-orange-600 hover:sushi-text-orange-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-text-orange-700 active:sushi-bg-gray-50 sushi-transition sushi-ease-in-out sushi-duration-150"
                          >
                            {tweet.cta}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ),
            medium: (
              <div className="sushi-mt-6 sushi-flex-1">
                {mediums.map((medium) => {
                  return (
                    <div className="sushi-mt-2 sushi-w-full sushi-bg-white sushi-shadow-lg sushi-rounded-lg sushi-pointer-events-auto">
                      <div className="sushi-flex sushi-rounded-lg sushi-shadow-xs">
                        <div className="sushi-w-0 sushi-flex-1 sushi-p-4">
                          <div className="sushi-flex sushi-items-start">
                            <div className="sushi-ml-3 sushi-w-0 sushi-flex-1">
                              <p className="sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                                {medium.title}
                              </p>
                              <p className="sushi-mt-1 sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                                {medium.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="sushi-flex sushi-border-l sushi-border-gray-200">
                          <a
                            href={medium.url}
                            target="_blank"
                            className="sushi--ml-px sushi-flex sushi-items-center sushi-justify-center sushi-w-full sushi-border sushi-border-transparent sushi-rounded-r-lg sushi-p-4 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-orange-600 hover:sushi-text-orange-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-text-orange-700 active:sushi-bg-gray-50 sushi-transition sushi-ease-in-out sushi-duration-150"
                          >
                            {medium.cta}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ),
            wechat: (
              <div className="sushi-mt-6 sushi-flex-1">
                {wechats.map((wechat) => {
                  return (
                    <div className="sushi-mt-2 sushi-w-full sushi-bg-white sushi-shadow-lg sushi-rounded-lg sushi-pointer-events-auto">
                      <div className="sushi-flex sushi-rounded-lg sushi-shadow-xs">
                        <div className="sushi-w-0 sushi-flex-1 sushi-p-4">
                          <div className="sushi-flex sushi-items-start">
                            <div className="sushi-ml-3 sushi-w-0 sushi-flex-1">
                              <p className="sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                                {wechat.title}
                              </p>
                              <p className="sushi-mt-1 sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                                {wechat.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="sushi-flex sushi-border-l sushi-border-gray-200">
                          <a
                            href={wechat.url}
                            target="_blank"
                            className="sushi--ml-px sushi-flex sushi-items-center sushi-justify-center sushi-w-full sushi-border sushi-border-transparent sushi-rounded-r-lg sushi-p-4 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-orange-600 hover:sushi-text-orange-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-text-orange-700 active:sushi-bg-gray-50 sushi-transition sushi-ease-in-out sushi-duration-150"
                          >
                            {wechat.cta}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ),
          }[section]
        }
      </div>
    </div>
  );
};

export default SocialMediaCard;
