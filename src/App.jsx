import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SharedLayoutPrimary } from './routes/shared/SharedLayoutPrimary';
import { LandingPage } from './views/LandingPage/LandingPage';
import { CoursesPage } from './views/primary/CoursesPage';
import { Error } from './views/primary/Error';
import { InsightsPage } from './views/primary/InsightsPage';
import { LoginForm } from './views/primary/LoginForm';
import { MoreInfoPage } from './views/primary/MoreInfoPage';
import { PrimaryMenu } from './views/primary/PrimaryMenu';
import { ReqInfoForm } from './views/primary/ReqInfoForm';
import { SearchMenu } from './views/primary/SearchMenu';
import { TeachOnSEL } from './views/primary/TeachOnSEL';
import { UserRegForm } from './views/primary/UserRegForm';
import { SharedLayoutFeaCourses } from './routes/shared/SharedLayoutFeaCourses';
import { L1CommerceFoundation } from './views/featuredCourses/L1CommerceFoundation';
import { L1ProfessionalCourses } from './views/featuredCourses/L1ProfessionalCourses';
import { L2CommerceFoundation } from './views/featuredCourses/L2CommerceFoundation';
import { L2ProfessionalCourses } from './views/featuredCourses/L2ProfessionalCourses';
import { UGCNetCommerceManagement } from './views/featuredCourses/UGCNetCommerceManagement';
import { UndergraduateCourses } from './views/featuredCourses/UndergraduateCourses';
import { SharedLayoutSubArea } from './routes/shared/SharedLayoutSubArea';
import { BuzCommunicationReporting } from './views/subArea/BuzCommunicationReporting';
import { BuzManagementStudies } from './views/subArea/BuzManagementStudies';
import { EconomicsStatistics } from './views/subArea/EconomicsStatistics';
import { FinanceAccountancy } from './views/subArea/FinanceAccountancy';
import { ComputerScience } from './views/subArea/ComputerScience';
import { OfficeProductivity } from './views/subArea/OfficeProductivity';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayoutPrimary />}>
          <Route index element={<LandingPage />} />
          <Route path='/courses' element={<CoursesPage />} />
          <Route path='/insights' element={<InsightsPage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/moreinfo' element={<MoreInfoPage />} />
          <Route path='/primarymenu' element={<PrimaryMenu />} />
          <Route path='/reqinfoform' element={<ReqInfoForm />} />
          <Route path='/search' element={<SearchMenu />} />
          <Route path='/teachonsel' element={<TeachOnSEL />} />
          <Route path='/userregform' element={<UserRegForm />} />
          <Route path='*' element={<Error />} />
        </Route>

        <Route path='/featuredCourses' element={<SharedLayoutFeaCourses />}>
          <Route index element={<CoursesPage />} />
          <Route path='XI' element={<L1CommerceFoundation />} />
          <Route path='cafoundation' element={<L1ProfessionalCourses />} />
          <Route path='XII' element={<L2CommerceFoundation />} />
          <Route path='cainter' element={<L2ProfessionalCourses />} />
          <Route path='ugcnet' element={<UGCNetCommerceManagement />} />
          <Route path='ugcourses' element={<UndergraduateCourses />} />
        </Route>

        <Route path='/subjectarea' element={<SharedLayoutSubArea />}>
          <Route index element={<CoursesPage />} />
          <Route
            path='communication&reporting'
            element={<BuzCommunicationReporting />}
          />
          <Route path='managementstudies' element={<BuzManagementStudies />} />
          <Route
            path='economics&statistics'
            element={<EconomicsStatistics />}
          />
          <Route path='finance&accountancy' element={<FinanceAccountancy />} />
          <Route path='cs' element={<ComputerScience />} />
          <Route path='ops' element={<OfficeProductivity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
