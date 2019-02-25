import React from "react";

import defaultImage from "@bubbly/components/demo/assets/img/default-avatar.png";
import withStyles, { WithStyles } from "~/themes/bubbly/node_modules/@material-ui/core/styles/withStyles";
import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({});

export const PictureUpload = withStyles(styles)((
  {
    classes ,
  }
  : WithStyles<typeof styles> & {
  }
) => {

  // @ts-ignore: Ingore that file isn't currently being used
  const [file, setFile] = React.useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(defaultImage);

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


  return (
    <div className="picture-container">
      <div className="picture">
        <img
          src={imagePreviewUrl}
          className="picture-src"
          alt="..."
        />
        <input type="file" onChange={handleImageChange}/>
      </div>
      <h6 className="description">Choose Picture</h6>
    </div>
  );

});

export default PictureUpload;
