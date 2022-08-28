import {Routes,Route} from 'react-router-dom'
import {Home, Contact, KinderTeachers, ParentsCommittee, Classes, PageNotFound} from "./index"

export default function Router(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Contact' element={<Contact/>}/>
            <Route path='KinderTeachers' element={<KinderTeachers/>}/>
            {/* <Route path='ParentsCommittee' element={<ParentsCommittee/>}/> */}
            <Route path='Classes' element={<Classes/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    )
}