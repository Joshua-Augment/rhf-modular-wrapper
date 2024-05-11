import React, { useMemo } from "react";
import { IWYSIWYG } from "../../core/index";
import InputWrapper from "../../core/InputWrapper/index";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WYSIWYG = (props: IWYSIWYG) => {
  return (
    <InputWrapper empty={<p></p>} type={props.type ?? "wysiwyg"} {...props}>
      <ReactQuillWrapper {...props} />
    </InputWrapper>
  );
};

// const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const ReactQuillWrapper = (props: IWYSIWYG) => {
  const toolbarOptions = useMemo(() => {
    const isMobile = screen.width <= 768 
    return props.toolbar
      ? Array.isArray(props.toolbar)
        ? props.toolbar
        : isMobile
          ? props.toolbar.mobile
          : props.toolbar.normal
      : isMobile
        ? [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            ["link", "image"],
            [{ list: "ordered" }, { list: "bullet" }],
          ]
        : [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],
            ["link", "image"],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction

            [{ size: ["small", false, "large", "huge"] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],

            ["clean"], // remove formatting button
          ];
  }, [screen.width, screen.height]);

  return (
    <ReactQuill
      theme={"snow"}
      modules={{ toolbar: toolbarOptions }}
      value={props.value}
      onBlur={props.onBlur}
      onChange={props.onChange}
      {...props.quillProps}
    />
  );
};

export default WYSIWYG;
