
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 0,
  padding: 0,
  width: 230,
  height: 230,
  borderRadius: 5,
  border: "1px solid black",
  marginLeft:-10,

};


const thumb = {
  position: "relative",
  display: "inline-flex",
  borderRadius: 2,
  marginBottom: 8,
  marginRight: 8,
  width: 230,
  height: 230,
  padding: 4,
  boxSizing: "border-box"
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: 220,
  height: 220
};


function AlbumCover() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map((file, index) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="" />
      </div>
     
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the Object URL to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
       
        <aside style={thumbsContainer}> {thumbs}</aside> 
            
        </div>
           
     </section>







  );
}

export default AlbumCover;
