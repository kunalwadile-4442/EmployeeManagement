// import React from "react";
// import { ControllerRenderProps } from "react-hook-form";
// import ReactQuill from "react-quill";

// const TextEditor = (props) => {
//   const modules = {
//     toolbar: [
//       [{ font: [] }, { size: ["small", false, "large", "huge"] }],
//       [{ list: "ordered" }, { list: "bullet" }],
//       ["bold", "italic", "underline"],
//       [{ color: [] }, { background: [] }],
//       [{ align: [] }],
//     ],
//   };

//   const formats = [
//     "font",
//     "size",
//     "bold",
//     "italic",
//     "underline",
//     "list",
//     "bullet",
//     "color",
//     "background",
//     "align",
//     "link",
//   ];

//   return (
//     <>
//       <ReactQuill
//         theme="snow"
//         {...props.field}  // Spread field from props
//         modules={modules}
//         formats={formats}
//       />
//       <div className="error_message_description">
//         {props.errors && (
//           <p className="text-xs mx-1 text-red-500 mt-1">{props.errors.message}</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default TextEditor;

import React from "react";
import ReactQuill from "react-quill";

const TextEditor = ({ field, errors }) => {
  const modules = {
    toolbar: [
      [{ font: [] }, { size: ["small", false, "large", "huge"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image"], 
      ["blockquote", "code-block"], 
      [{ script: "sub" }, { script: "super" }], 
      ["clean"], 
    ],
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "color",
    "background",
    "align",
    "link",
    "image",
    "blockquote",
    "code-block",
    "script", 
  ];

  return (
    <>
      <ReactQuill
        theme="snow"
        value={field.value || ""}
        onChange={field.onChange}
        modules={modules}
        formats={formats}
        style={{ height: "calc(100vh - 520px)", marginBottom: "50px" }}
      />
      {errors && (
        <p className="text-xs mx-1 text-red-500 mt-1">{errors.message}</p>
      )}
    </>
  );
};

export default TextEditor;
