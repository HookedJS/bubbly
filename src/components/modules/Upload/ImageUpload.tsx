import React from "react";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { createStyles } from "@material-ui/core/styles";
import Button, { ButtonPropsExt } from "@bubbly/components/modules/Buttons/Button";

import defaultImage from "@bubbly/components/demo/assets/img/image_placeholder.jpg";
import defaultAvatar from "@bubbly/components/demo/assets/img/placeholder.jpg";

const styles = createStyles({});

const ImageUpload = withStyles(styles)((
  {
    classes ,
    avatar = false,
    addButtonProps = {},
    changeButtonProps = {},
    removeButtonProps = {}
  }
    : WithStyles<typeof styles> & {
    avatar?: boolean,
    addButtonProps?: ButtonPropsExt,
    changeButtonProps?: ButtonPropsExt,
    removeButtonProps?: ButtonPropsExt,
  }
) => {

  const [file, setFile] = React.useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(avatar ? defaultAvatar : defaultImage);
  let fileInputRef: HTMLInputElement;

  const handleImageChange = (e: React.ChangeEvent) => {
    e.preventDefault();
    const reader = new FileReader();
    // @ts-ignore: Ignore TS missing the files attribute
    const file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // this.state.file is the file/image uploaded
  //   // in this function you can save the image (this.state.file) on form submit
  //   // you have to call it yourself
  // };

  const handleClick = () => {
    fileInputRef.click();
  };

  const handleRemove = () => {
    setFile(null);
    setImagePreviewUrl(avatar ? defaultAvatar : defaultImage);
    fileInputRef.value = '';
  };

  return (
    <div className="fileinput text-center">
      <input
        type="file"
        onChange={handleImageChange}
        ref={ref => {fileInputRef = ref as HTMLInputElement}}
      />
      <div className={"thumbnail" + (avatar ? " img-circle" : "")}>
        <img src={imagePreviewUrl} alt="..."/>
      </div>
      <div>
        {file === null ? (
          <Button {...addButtonProps} onClick={handleClick}>
            {avatar ? "Add Photo" : "Select image"}
          </Button>
        ) : (
          <span>
              <Button {...changeButtonProps} onClick={handleClick}>
                Change
              </Button>
            {avatar ? <br/> : null}
            <Button
              {...removeButtonProps}
              onClick={handleRemove}
            >
                <i className="fas fa-times"/> Remove
              </Button>
            </span>
        )}
      </div>
    </div>
  );

});

// ImageUpload.propTypes = {
//   avatar: PropTypes.bool,
//   addButtonProps: PropTypes.object,
//   changeButtonProps: PropTypes.object,
//   removeButtonProps: PropTypes.object
// };

export default ImageUpload;
