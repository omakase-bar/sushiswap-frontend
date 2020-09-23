import React, { useState, useEffect, createContext } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
const DEVICE_ID_KEY = 'deviceId';
const GENERATE_DEVICE = gql`
  mutation CreateDevice($device: DeviceInput!) {
    createDevice(device: $device) {
      success
      message
      device {
        id
      }
    }
  }
`;
export const DeviceContext = createContext();
export const DeviceContextProvider = ({ children }) => {
  const deviceInStorage = localStorage.getItem(DEVICE_ID_KEY);
  const [deviceId, setDeviceId] = useState(deviceInStorage || null);
  const [createDevice] = useMutation(GENERATE_DEVICE);
  useEffect(() => {
    if (!deviceId) {
      console.log('Need to generate deviceId!');
      createDevice({
        variables: { device: { fingerprint: 'some-fingerprint' } },
      })
        .then(({ data }) => {
          console.log(data.createDevice.device.id);
          const id = data.createDevice.device.id;
          localStorage.setItem(DEVICE_ID_KEY, id);
          setDeviceId(id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  return (
    <DeviceContext.Provider
      value={{
        deviceId,
        setDevice: (id) => {
          localStorage.setItem(DEVICE_ID_KEY, id);
          setDeviceId(id);
        },
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
