import React from 'react'
import * as icons from '../icons/sidebar/index'
import * as paths from '../../router/paths'

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

const navigationItems = 
[
  {
    display: 'Home',
    icon: <Home />,
    to: HOME,
    section: null
  },
  {
    display: 'Reporting',
    icon: <Reporting />,
    to: REPORTING,
    section: null
  },
  {
    display: 'Real-Time KPIs',
    icon: <RealTime />,
    to: REALTIME,
    section: 'CUSTOM VIEWS'
  },
  {
    display: 'Estate Performance',
    icon: <EstatePerformance />,
    to: ESTATE_PERFORMANCE,
    section: 'CUSTOM VIEWS'
  },
  {
    display: 'Store Analytics',
    icon: <StoreAnalytics />,
    to: STORE_ANALYTICS,
    section: 'CUSTOM VIEWS'
  },
  {
    display: 'Product Analysis',
    icon: <ProductAnalysis />,
    to: PRODUCT_ANALYSIS,
    section: 'CUSTOM VIEWS'
  },
  {
    display: 'Counting',
    icon: <Counting />,
    to: COUNTING,
    section: 'SENSOR VIEWS'
  },
  {
    display: 'Air Quality',
    icon: <AirQuality />,
    to: AIR_QUALITY,
    section: 'SENSOR VIEWS'
  },
  {
    display: 'Visitor Journey',
    icon: <VisitorJourney />,
    to: VISITOR_JOURNEY,
    section: 'SENSOR VIEWS'
  },
  {
    display: 'Engagement',
    icon: <Heart />,
    to: ENGAGEMENT,
    section: 'SENSOR VIEWS'
  },
  {
    display: 'Settings',
    icon: <Settings />,
    to: SETTINGS_GENERAL,
    section: 'footer'
  },
  {
    display: 'Help Center',
    icon: <Help />,
    to: HELP_CENTER,
    section: 'footer'
  },
]

export default navigationItems
