import { Box, Divider } from '@chakra-ui/react'
import data from './../images/images.json';
import Color from './Color';
import ImageComponent from './ImageComponent';
const ColorImage = ({handleColor,handleBackgroungImage}) => {
  return (
    <Box width="475px" padding="5px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" zIndex="3" >
        <Box display="flex" gap="2px" marginBottom="5px">
            {data.colors.map((color)=>{
                return <Color key={color.id} object={color} handleColor={handleColor} />
            })}
        </Box>
        <Divider orientation="horizontal" size="5px" colorScheme="gray" />
        <Box display="flex" gap="2px" marginTop="5px">
            {data.images.map((image)=>{
                return <ImageComponent key={image.id} url={image.url} text={image.description} handleBackgroungImage={handleBackgroungImage} />
            })}
        </Box>
    </Box>
  )
}

export default ColorImage