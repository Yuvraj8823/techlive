import { LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => (
    <>
        <div className="h-auto w-full py-5 flex flex-wrap justify-center bg-gray-800 bg-opacity-40 dark:bg-opacity-70">
            <a href='https://github.com/Yuvraj8823' target="_blank">
            <GitHubIcon sx={{
                color:"white",
                margin:"0.2rem 2rem",
                padding:"0.085rem",
                borderRadius:"50%",
                border:"1px solid white",
                transform:"scale(1.5)",
                "&:hover":{
                    cursor:"pointer",
                    color:"#00e6e6",
                    borderColor:"#00e6e6"
                }
            }} className=""/>
            </a>
            <a href="https://www.linkedin.com/in/yuvraj-singh-raghuwanshi-272485253/" target="_blank">
            <LinkedIn sx={{
                color:"white",
                margin:"0.2rem 2rem",
                padding:"0.085rem",
                borderRadius:"50%",
                border:"1px solid white",
                transform:"scale(1.5)",
                "&:hover":{
                    cursor:"pointer",
                    color:"#00e6e6",
                    borderColor:"#00e6e6"
                }
            }} />
            </a>
            <a href="https://twitter.com/Yuvraj8803" target="_blank">
            <Twitter sx={{
                color:"white",
                margin:"0.2rem 2rem",
                padding:"0.085rem",
                borderRadius:"50%",
                border:"1px solid white",
                transform:"scale(1.5)",
                "&:hover":{
                    cursor:"pointer",
                    color:"#00e6e6",
                    borderColor:"#00e6e6"
                }
            }} />
            </a>
            <a href="https://www.youtube.com/channel/UCfmaHjEgePDQ_PN_Augzbag" target="_blank">
            <YouTube sx={{
                color:"white",
                margin:"0.2rem 2rem",
                padding:"0.085rem",
                borderRadius:"50%",
                border:"1px solid white",
                transform:"scale(1.5)",
                "&:hover":{
                    cursor:"pointer",
                    color:"#00e6e6",
                    borderColor:"#00e6e6"
                }
            }} />
            </a>
    </div>
    </>
)
export default Footer