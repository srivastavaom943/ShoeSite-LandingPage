import Hero from "./Sections/Hero"
import Footer from "./Sections/Footer"
import Popularproducts from "./Sections/Popularproducts"
import Services from "./Sections/Services"
import Specialoffer from "./Sections/Specialoffer"

import Superquality from "./Sections/Superquality"
import Navbar from "./Components/Navbar"
const App=()=>{
  return(
  <main className="relative">
<Navbar></Navbar>
<section className="xl:padding-1 wide:padding-r padding-b">
  <Hero></Hero>
</section>
<section className="padding">
<Popularproducts></Popularproducts>
</section>
<section className="padding">
<Superquality></Superquality>
</section>
<section className="padding-x py-10 ">
<Services></Services>
</section>
<section className="padding ">
<Specialoffer></Specialoffer>
</section>
<section className="bg-black padding-x padding-t pb-8 ">
<Footer></Footer>
</section>
  </main>
  )
}
export default App