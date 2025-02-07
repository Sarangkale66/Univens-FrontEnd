import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index2.css'
import App2 from './App2';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root2')).render(
  <QueryClientProvider client={queryClient}>
  <StrictMode>  
    <App2 />
  </StrictMode>,
  </QueryClientProvider>
)