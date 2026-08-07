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
import Behandlungen from '@/pages/Behandlungen';
import TreatmentDetail from '@/pages/TreatmentDetail';
import Practice from '@/pages/Practice';
import Experience from '@/pages/Experience';
import Location from '@/pages/Location';
import Faq from '@/pages/Faq';
import Contact from '@/pages/Contact';
import Aerztinnen from '@/pages/Aerztinnen';
import Botulinumtoxin from '@/pages/behandlungen/Botulinumtoxin';
import HyaluronKonturierung from '@/pages/behandlungen/HyaluronKonturierung';
import HautqualitaetRegeneration from '@/pages/behandlungen/HautqualitaetRegeneration';
import Stirnfalten from '@/pages/behandlungen/Stirnfalten';
import Zornesfalte from '@/pages/behandlungen/Zornesfalte';
import Kraehenfuesse from '@/pages/behandlungen/Kraehenfuesse';
import MasseterZaehneknirschen from '@/pages/behandlungen/MasseterZaehneknirschen';
import Schwitzen from '@/pages/behandlungen/Schwitzen';
import Lippenbehandlung from '@/pages/behandlungen/Lippenbehandlung';
import Jawline from '@/pages/behandlungen/Jawline';
import Prp from '@/pages/behandlungen/Prp';
import Microneedling from '@/pages/behandlungen/Microneedling';
import Admin from '@/pages/Admin';
import AdminRoute from '@/components/AdminRoute';
import { Impressum, Datenschutz } from '@/pages/Legal';
import SeoReport from '@/pages/SeoReport';

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
          <Route path="/behandlungen" element={<Behandlungen />} />
          <Route path="/behandlungen/botulinumtoxin" element={<Botulinumtoxin />} />
          <Route path="/behandlungen/hyaluron-konturierung" element={<HyaluronKonturierung />} />
          <Route path="/behandlungen/hautqualitaet-regeneration" element={<HautqualitaetRegeneration />} />
          <Route path="/behandlungen/stirnfalten" element={<Stirnfalten />} />
          <Route path="/behandlungen/zornesfalte" element={<Zornesfalte />} />
          <Route path="/behandlungen/kraehenfuesse" element={<Kraehenfuesse />} />
          <Route path="/behandlungen/masseter-zaehneknirschen" element={<MasseterZaehneknirschen />} />
          <Route path="/behandlungen/schwitzen" element={<Schwitzen />} />
          <Route path="/behandlungen/lippenbehandlung" element={<Lippenbehandlung />} />
          <Route path="/behandlungen/jawline" element={<Jawline />} />
          <Route path="/behandlungen/prp" element={<Prp />} />
          <Route path="/behandlungen/microneedling" element={<Microneedling />} />
          <Route path="/behandlungen/:slug" element={<TreatmentDetail />} />
          <Route path="/praxis" element={<Practice />} />
          <Route path="/team" element={<Aerztinnen />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/standort-zuerich-enge" element={<Location />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/kontakt-termin" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          {/* English mirrors */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/behandlungen" element={<Behandlungen />} />
          <Route path="/en/behandlungen/botulinumtoxin" element={<Botulinumtoxin />} />
          <Route path="/en/behandlungen/hyaluron-konturierung" element={<HyaluronKonturierung />} />
          <Route path="/en/behandlungen/hautqualitaet-regeneration" element={<HautqualitaetRegeneration />} />
          <Route path="/en/behandlungen/stirnfalten" element={<Stirnfalten />} />
          <Route path="/en/behandlungen/zornesfalte" element={<Zornesfalte />} />
          <Route path="/en/behandlungen/kraehenfuesse" element={<Kraehenfuesse />} />
          <Route path="/en/behandlungen/masseter-zaehneknirschen" element={<MasseterZaehneknirschen />} />
          <Route path="/en/behandlungen/schwitzen" element={<Schwitzen />} />
          <Route path="/en/behandlungen/lippenbehandlung" element={<Lippenbehandlung />} />
          <Route path="/en/behandlungen/jawline" element={<Jawline />} />
          <Route path="/en/behandlungen/prp" element={<Prp />} />
          <Route path="/en/behandlungen/microneedling" element={<Microneedling />} />
          <Route path="/en/behandlungen/:slug" element={<TreatmentDetail />} />
          <Route path="/en/praxis" element={<Practice />} />
          <Route path="/en/team" element={<Aerztinnen />} />
          <Route path="/en/experience" element={<Experience />} />
          <Route path="/en/standort-zuerich-enge" element={<Location />} />
          <Route path="/en/faq" element={<Faq />} />
          <Route path="/en/kontakt-termin" element={<Contact />} />
          <Route path="/en/impressum" element={<Impressum />} />
          <Route path="/en/datenschutz" element={<Datenschutz />} />
        </Route>
        <Route path="/seo-bericht" element={<SeoReport />} />
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