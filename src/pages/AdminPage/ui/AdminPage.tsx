import type { FC } from "react"
import { useLocation } from "react-router-dom";
import { ButtonDesktop } from '@alfalab/core-components-button/desktop';
import Navbar, { NavbarLink } from "widgets/Navbar";
import EmployeeList from "components/EmployeeList";
import Search from "components/Search";
import ChartIcon from 'shared/icons/chart-with-up-arrow.svg?react';
import CrosshairIcon from 'shared/icons/crosshair-icon.svg?react';
import { Typography } from "@alfalab/core-components-typography";
import style from "./AdminPage.module.scss"

const AdminPage = () => {
  const { pathname } = useLocation();

  return (
    <main>
      <Navbar>
        <NavbarLink to="/Admin" text="ИПР" Icon={CrosshairIcon}/>
        <NavbarLink to="/Admin/Analytics" text="Аналитика" Icon={ChartIcon} />
      </Navbar>
      <section className={style.SupervisorPage}>
        <Typography.Title tag="h2" className={style.h2}>ИПР</Typography.Title>
        <ButtonDesktop view='accent' className={style.button}>Добавить ИПР</ButtonDesktop>
        <div>
          <Typography.Title tag="h3" className={style.h3}>Сотрудники</Typography.Title>
          <div>
            <Search />
          </div>
          <EmployeeList />
        </div>
      </section>
    </main>
  );
}

export default AdminPage;