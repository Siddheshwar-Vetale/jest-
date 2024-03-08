import React from "react";
import Button from "./Component/Button";

function App() {
  function handleClick() {
    // console.log("clicked");
  }

  return (
    <>
      <div className="flex justify-center mt-96">
        <div>
          <Button
            variant="primary"
            size="small"
            onClick={handleClick}
            disabled={false}
          />
        </div>
        <div>
          <Button
            variant="secondary"
            size="small"
            onClick={handleClick}
            disabled={false}
          />
        </div>
        <div>
          <Button
            variant="tertary"
            size="small"
            onClick={handleClick}
            disabled={true}
          />
        </div>
      </div>
    </>
  );
}

export default App;
