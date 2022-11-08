import React, { useState } from "react";
import Progressbar from "./Progressbar";

const UploadForm = () => {
  const [File, setFile] = useState(null);
  const [errorMsg, seterrorMsg] = useState("");
  const types = ["image/jpeg", "image/png"];

  const changehandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      seterrorMsg("");
    } else {
      setFile(null);
      seterrorMsg("Please Select a image File (png/jpeg)");
    }
  };
  return (
    <div>
      <div className="form-group">
        <input
          type="file"
          onChange={changehandler}
          name="imagesupload"
          id="imagesupload"
          placeholder="Upload a Image"
          className="custom-file-input"
          aria-describedby="fileHelpId"
        />
        <div className=" outPut">
          {errorMsg && <div className=" text-danger">{errorMsg}</div>}{" "}
          {File && <div className=" img-fluid">{File.name}</div>}
          {File && <Progressbar File={File} setFile={setFile}></Progressbar>}
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
