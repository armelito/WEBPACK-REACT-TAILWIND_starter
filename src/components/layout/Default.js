import React from "react"
import { Outlet } from "react-router-dom"
import * as icons from '../icons/sidebar/index'
import * as paths from '../../router/paths'
import 
{ 
  Sidebar, 
  OrganizationLabel, 
  Navigation, 
  NavigationItem, 
  SubNavigation, 
} 
from "../sidebar/index"

const 
{
  HOME,
  LOGIN,
  REPORTING,
  REALTIME,
  ESTATE_PERFORMANCE,
  STORE_ANALYTICS,
  PRODUCT_ANALYSIS,
  COUNTING,
  AIR_QUALITY,
  ENGAGEMENT,
  VISITOR_JOURNEY,
  SETTINGS_GENERAL,
  HELP_CENTER
}
= paths

const 
{
  Home,
  Reporting,
  RealTime,
  EstatePerformance,
  StoreAnalytics,
  ProductAnalysis,
  Counting,
  AirQuality,
  VisitorJourney,
  Heart,
  Settings,
  Help
}
= icons

const DefaultLayout = () => 
{
  return (
    <div className="layout">
      <Sidebar>
        <OrganizationLabel />
        <Navigation>
          <NavigationItem link={HOME} icon={<Home />}>Home</NavigationItem>
          <NavigationItem link={REPORTING} icon={<Reporting />}>Reporting</NavigationItem>
          <SubNavigation label="CUSTOM VIEWS">
            <NavigationItem link={REALTIME} icon={<RealTime />}>Real-Time KPIs</NavigationItem>
            <NavigationItem link={ESTATE_PERFORMANCE} icon={<EstatePerformance />}>Estate Performance</NavigationItem>
            <NavigationItem link={STORE_ANALYTICS} icon={<StoreAnalytics />}>Store Analytics</NavigationItem>
            <NavigationItem link={PRODUCT_ANALYSIS} icon={<ProductAnalysis />}>Product Analysis</NavigationItem>
          </SubNavigation>
          <SubNavigation label="SENSOR VIEWS">
            <NavigationItem link={COUNTING} icon={<Counting />}>Counting</NavigationItem>
            <NavigationItem link={AIR_QUALITY} icon={<AirQuality />}>Air Quality</NavigationItem>
            <NavigationItem link={VISITOR_JOURNEY} icon={<VisitorJourney />}>Visitor Journey</NavigationItem>
            <NavigationItem link={ENGAGEMENT} icon={<Heart />}>Engagement</NavigationItem>
          </SubNavigation>
          <NavigationItem link={SETTINGS_GENERAL} icon={<Settings />}>Settings</NavigationItem>
          <NavigationItem link={HELP_CENTER} icon={<Help />}>Help</NavigationItem>
        </Navigation>
      </Sidebar>
      <Outlet />
    </div>
  )
}

export default DefaultLayout
