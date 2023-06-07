import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SharedLayoutPrimary } from './routes/shared/SharedLayoutPrimary';
import { LandingPage } from './views/LandingPage/LandingPage';
import { Error } from './views/primary/Error';
import { DisplayMsg } from './views/primary/DisplayMsg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayoutPrimary />}>
          <Route index element={<LandingPage />} />
          <Route path='/dispmsg' element={<DisplayMsg />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
