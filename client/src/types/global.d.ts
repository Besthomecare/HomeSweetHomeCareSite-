// Global type definitions for window objects

interface Window {
  _hsp?: any[];
  hbspt?: {
    forms: {
      create: (config: {
        region: string;
        portalId: string;
        formId: string;
        target: string;
        formInstanceId?: string;
      }) => void;
    }
  };
  reinitHubSpotForms?: () => void;
}