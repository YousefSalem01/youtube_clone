import { useState,useEffect } from "react"
import {Box,Stack,Typography} from '@mui/material'
import Sidebar from "./Sidebar"
import Videos from "./Videos"
import {fetchFromAPI} from '../utils/fetchFromAPI'
const Feed = () => {
const [selectedCategory, setSelectedCategory] = useState('New')
const [videos, setVideos] = useState([])
useEffect(() => {
  console.log("Selected Category:", selectedCategory); // Add this line for debugging
  fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
    .catch((error) => {
      // Handle the error as needed, e.g., show an error message
      console.error("Error fetching data:", error);  
    });
}, [selectedCategory]);
  return (
    <Stack  sx={{flexDirection:{sx:"col",md:"row"}}}>
        <Box sx={{height:{sm:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d ',px:{sx:0,md:2}}}>
          <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          />
          <Typography className="copyright" variant="body2" sx={{mt:1.5,color:'#fff'}}>
            © 2023 by Yousef Salem

          </Typography>
        </Box>
        <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
           {selectedCategory} <span style={{color:'#F31503'}} >videos</span>
          </Typography>
          <Videos videos={videos}/>
          
        </Box>
    </Stack>
  )
}

export default Feed



