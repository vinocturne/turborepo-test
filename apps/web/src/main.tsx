import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {AntConfigProvider, AntTheme } from "@repo/ui";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <AntConfigProvider
              prefixCls={"ant"}
              theme={{
                  algorithm: document.documentElement.classList.contains(
                      "dark"
                  )
                      ? AntTheme.darkAlgorithm
                      : AntTheme.defaultAlgorithm,
              }}
          >
              <App />
          </AntConfigProvider>
      </BrowserRouter>
  </StrictMode>,
)
