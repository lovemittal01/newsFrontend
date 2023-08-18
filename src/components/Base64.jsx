import React from "react";

class Base64Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null,
    };
  }

  componentDidMount() {
    const { base64Image } = this.props;

    // Remove data:image/gif;base64, from the base64Image string
    const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");

    // Convert Base64 to blob
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/gif" });

    // Create URL for the blob
    const imageUrl = URL.createObjectURL(blob);
    this.setState({ imageUrl });
  }

  componentWillUnmount() {
    // Revoke the URL to prevent memory leaks
    if (this.state.imageUrl) {
      URL.revokeObjectURL(this.state.imageUrl);
    }
  }

  render() {
    const { imageUrl } = this.state;
    if (!imageUrl) {
      return null;
    }

    return <img src={imageUrl} alt="Base64 Image" />;
  }
}

export default Base64Image;
