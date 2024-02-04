import { useLocation } from "react-router-dom";
import Analytics from "widgets/Analytics";
import ChartIcon from 'shared/icons/chart-with-up-arrow.svg?react';
import CrosshairIcon from 'shared/icons/crosshair-icon.svg?react';
import Navbar, { NavbarLink } from "widgets/Navbar";
import style from "./AdminAnalytics.module.scss"


const AdminAnalyticsPage = () => {
  const { pathname } = useLocation();
  return (
    <main>
      <Navbar >
        <NavbarLink to="/Admin" text="ИПР" Icon={CrosshairIcon}/>
        <NavbarLink to="/Admin/Analytics" text="Аналитика" Icon={ChartIcon} />
      </Navbar>
      <Analytics />
    </main>
  );

}

export default AdminAnalyticsPage;