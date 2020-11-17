import React, { useState } from "react";
import useMigrateState, { MigrateState } from "../../../services/lite/hooks/useMigrateState";
import { isEmptyValue, parseBalance } from "../../../services/lite/utils";

const Migrate = () => {
  const state = useMigrateState();
  console.log("MIGRATE:", state);
  return (
    <>
      <div>Migrate Test</div>
    </>
  );
};

export default Migrate;
