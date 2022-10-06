import { Text, Button, Container, Image, Img, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useDropzone, DropzoneOptions } from "react-dropzone";

import upload from "../../../images/upload.png";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const onDrop = (files: File[], index: any, accordionIndex: any) => {
    const file = files[0];
    let fileReader = null as any;
    fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      const { result } = e.target;
      setImage(result);
    };
    fileReader.readAsDataURL(file);
  };

  const options: DropzoneOptions = {
    noClick: true,
    noKeyboard: true,
    onDrop,
  };
  const { getRootProps, getInputProps, open } = useDropzone(options);

  return (
    <>
      <Container
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        padding="4"
        border="2px dashed rgba(0,0,0,0.1)"
        alignItems="center"
        borderRadius="md"
        maxW={"auto"}
        mb={5}
        mt={10}
        {...getRootProps()}
        zIndex={0}
      >
        <Flex alignItems={"center"}>
          <Text color={"#A0AEC0"}>{"Browse image or drag&drop image"}</Text>
          <Button
            _hover={{
              background: "#fff",
              color: "#ED2130",
            }}
            _focus={{
              background: "#fff",
              color: "#ED2130",
            }}
            backgroundColor={"#fff"}
            onClick={open}
          >
            <Image src={upload} />
          </Button>
          <input name={"image"} {...getInputProps()} />
        </Flex>
      </Container>
      <Container maxW={"auto"} display={"flex"} justifyContent={"center"}>
        {image && <Img src={image} alt="preview" mb={10} />}
      </Container>
    </>
  );
};

export default ImageUploader;