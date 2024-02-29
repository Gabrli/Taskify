import DashboardHeader from "../components/Dashboard/DashHeader/dashboardHeader";
import DashTaskList from "../components/Dashboard/DashTask/dashTaskList";
import DashFooter from "../components/Dashboard/DashFooter/dashFooter";
import { themeContext } from "../App";
import { Helmet } from "react-helmet-async";
import LoaderPopup from "../components/Loader/loaderPopup";
import DashAlertContainer from "../components/Dashboard/DashAlert/dashAlertContainer";
import { taskListContext } from "../contexts/taskListContext";
import { isMobileContext } from "../contexts/isMobileContext";
import { counterNotificationContext } from "../contexts/counterNotificationsContext";
import { chartsBoxIsActiveContext } from "../contexts/chartsBoxIsActiveContext";
import { useDashboardPageLogic } from "../hooks/LogicComponentsHooks/useDashboardPageLogic";

export default function DashboardPage(props: {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { setTheme } = props;
  const {
    counterNotyfications,
    setCounterNotyfications,
    isMobile,
    taskList,
    setTaskList,
    theme,
    isLoading,
    setIsLoading,
    charstBoxIsActive,
    setChartsBoxIsActive,
    isActive,
    setIsActive,
    isAlert,
    setIsAlert,
  } = useDashboardPageLogic(setTheme);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta
          name="description"
          content="Back to work ! Go to the your dashboard."
        />
        <link rel="canonical" href="/dashboard" />
      </Helmet>
      <div
        className={`dashboard_page  ${
          theme === "dark" ? "dark" : "light"
        } min-h-screen ${isMobile ? "pb-16" : ""}`}
      >
        <LoaderPopup isLoading={isLoading} />
        <themeContext.Provider value={theme}>
          <counterNotificationContext.Provider value={counterNotyfications}>
            <taskListContext.Provider value={taskList}>
              <isMobileContext.Provider value={isMobile}>
                <chartsBoxIsActiveContext.Provider value={charstBoxIsActive}>
                  <>
                    <DashboardHeader
                      setTheme={setTheme}
                      setIsActive={setIsActive}
                    />

                    <DashTaskList
                      isActive={isActive}
                      setIsActive={setIsActive}
                      setCounter={setCounterNotyfications}
                      setTaskList={setTaskList}
                      setIsLoading={setIsLoading}
                      setIsAlert={setIsAlert}
                    />

                    {isMobile ? (
                      <DashFooter setChartsBoxIsActive={setChartsBoxIsActive} />
                    ) : (
                      ""
                    )}

                    <DashAlertContainer
                      setIsAlert={setIsAlert}
                      isAlert={isAlert}
                    />
                  </>
                </chartsBoxIsActiveContext.Provider>
              </isMobileContext.Provider>
            </taskListContext.Provider>
          </counterNotificationContext.Provider>
        </themeContext.Provider>
      </div>
    </>
  );
}
