import PageBanner from "@/app/components/generalComp/PageBanner"
import TeamMember from "../../components/about/TeamMember"
import TestComp from "@/app/components/about/test"
import PageLoader from "@/app/components/generalComp/PageLoader"
import Introduction from "../../components/about/Introduction"
import OurVisionSection from "@/app/components/about/OurVision"
import OurValues from "@/app/components/about/OurValues"

const AboutUs = ()=>{
    return (<>
   <div>
   <PageBanner
        pageName="About"
        parentPage="Home"
        backgroundImage="/assert/images/recycle_image.jpg"
      />
      <Introduction/>
      <OurValues/>
      {/* <OurVisionSection/> */}
    
      <TeamMember/>
   </div>
    </>)
}

export default AboutUs