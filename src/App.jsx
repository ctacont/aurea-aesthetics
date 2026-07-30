import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { LanguageProvider } from '@/lib/LanguageContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Treatments from '@/pages/Treatments';
import TreatmentDetail from '@/pages/TreatmentDetail';
import Practice from '@/pages/Practice';
import Experience from '@/pages/Experience';
import Location from '@/pages/Location';
import Faq from '@/pages/Faq';
import Contact from '@/pages/Contact';
import Admin from '@/pages/Admin';
import AdminRoute from '@/components/AdminRoute';
import { Impressum, Datenschutz } from '@/pages/Legal';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/behandlungen" element={<Treatments />} />
          <Route path="/behandlungen/:slug" element={<TreatmentDetail />} />
          <Route path="/praxis" element={<Practice />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/standort-zuerich-enge" element={<Location />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/kontakt-termin" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          {/* English mirrors */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/behandlungen" element={<Treatments />} />
          <Route path="/en/behandlungen/:slug" element={<TreatmentDetail />} />
          <Route path="/en/praxis" element={<Practice />} />
          <Route path="/en/experience" element={<Experience />} />
          <Route path="/en/standort-zuerich-enge" element={<Location />} />
          <Route path="/en/faq" element={<Faq />} />
          <Route path="/en/kontakt-termin" element={<Contact />} />
          <Route path="/en/impressum" element={<Impressum />} />
          <Route path="/en/datenschutz" element={<Datenschutz />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </LanguageProvider>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App