import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

// CSS
import "./App.css";

// React Icons
import { FiSettings } from "react-icons/fi";

// Syncfusion Components
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// Pages
import {
  EcommerceDashboardPage,
  OrdersPage,
  EmployeesPage,
  CustomersPage,
  CalendarAppPage,
  KanbanAppPage,
  EditorAppPage,
  ColorPickerAppPage,
  LineChartPage,
  AreaChartPage,
  BarChartPage,
  PieChartPage,
  FinancialChartPage,
  ColorMappingChartPage,
  PyramidChartPage,
  StackedChartPage,
} from "./pages";

// Components
import {
  ThemeSettingsComponent,
  SidebarComponent,
  NavbarComponent,
  FooterComponent,
} from "./components";

// Context API
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    currentThemeMode,
    setCurrentThemeMode,
    currentThemeColor,
    setCurrentThemeColor,
    isMenuActive,
    isThemeSettingsActive,
    setIsThemeSettingsActive,
  } = useStateContext();

  useEffect(() => {
    const currentSavedThemeMode = localStorage.getItem("themeMode");
    const currentSavedThemeColor = localStorage.getItem("themeColor");

    if (currentSavedThemeMode && currentSavedThemeColor) {
      setCurrentThemeMode(currentSavedThemeMode);
      setCurrentThemeColor(currentSavedThemeColor);
    }
  }, [setCurrentThemeMode, setCurrentThemeColor]);

  return (
    <div className={`App ${currentThemeMode === "Dark" ? "dark" : ""}`}>
      <div className="app-container">
        <div className="theme-settings-container">
          <TooltipComponent content="Theme Settings" position="Top">
            <button
              className="theme-settings-btn"
              style={{ background: currentThemeColor }}
              onClick={() => setIsThemeSettingsActive(true)}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        <div
          className={`sidebar-container ${
            isMenuActive
              ? "sidebar-container--open"
              : "sidebar-container--close"
          }`}
        >
          <SidebarComponent />
        </div>

        <div
          className={`app-body ${
            isMenuActive ? "app-body--sidebar-open" : "app-body--sidebar-close"
          }`}
        >
          <div className="navbar-container">
            <NavbarComponent />
          </div>

          <div className="page-container">
            {isThemeSettingsActive && <ThemeSettingsComponent />}

            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<EcommerceDashboardPage />} />
              <Route path="/ecommerce" element={<EcommerceDashboardPage />} />

              {/* Pages */}
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/customers" element={<CustomersPage />} />
              <Route path="/employees" element={<EmployeesPage />} />

              {/* Apps */}
              <Route path="/calendar" element={<CalendarAppPage />} />
              <Route path="/kanban" element={<KanbanAppPage />} />
              <Route path="/editor" element={<EditorAppPage />} />
              <Route path="/color-picker" element={<ColorPickerAppPage />} />

              {/* Charts */}
              <Route path="/line" element={<LineChartPage />} />
              <Route path="/area" element={<AreaChartPage />} />
              <Route path="/bar" element={<BarChartPage />} />
              <Route path="/pie" element={<PieChartPage />} />
              <Route path="/financial" element={<FinancialChartPage />} />
              <Route
                path="/color-mapping"
                element={<ColorMappingChartPage />}
              />
              <Route path="/pyramid" element={<PyramidChartPage />} />
              <Route path="/stacked" element={<StackedChartPage />} />
            </Routes>
          </div>

          <div className="footer-container">
            <FooterComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
