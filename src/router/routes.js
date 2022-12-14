import React from 'react'
import * as paths from './paths'
import * as components from './pages'

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
  SETTINGS_GROUPS,
  SETTINGS_PROFILES,
  SETTINGS_USERS, 
  SETTINGS_RIGHTSYSTEM, 
  SETTINGS_TAGS,
  PROFILE_SECURITY,
  PROFILE_PREFERENCES_THEME,
  PROFILE_PREFERENCES_SIDEBAR,
  PROFILE_PREFERENCES_DATE_TIME,
  PROFILE_PREFERENCES_LANGUAGE_REGION,
  PROFILE_PREFERENCES_ADVANCED,
  HELP_CENTER,
  ERROR
}
= paths

const 
{
  DefaultLayout,
  SettingsLayout,
  ProfileLayout,
  ProfilePreferencesLayout,
  Home,
  Login,
  Reporting,
  RealTime,
  EstatePerformance,
  StoreAnalytics,
  ProductAnalysis,
  Counting,
  AirQuality,
  Engagement,
  VisitorJourney,
  GeneralSettings,
  Security,
  Users,
  Profiles,
  Groups,
  RightSystem,
  Tags,
  Theme,
  Sidebar,
  DateTime,
  LanguageRegion,
  Advanced,
  HelpCenter,
  Error
}
= components

let routes = 
[
  {
    path: HOME,
    element: <DefaultLayout />,
    children: 
    [
      { 
        index: true, 
        element: <Home />
      },
      {
        path: LOGIN,
        element: <Login />,
      },
      {
        path: REPORTING,
        element: <Reporting />,
      },
      {
        path: REALTIME,
        element: <RealTime />,
      },
      {
        path: ESTATE_PERFORMANCE,
        element: <EstatePerformance />,
      },
      {
        path: STORE_ANALYTICS,
        element: <StoreAnalytics />,
      },
      {
        path: PRODUCT_ANALYSIS,
        element: <ProductAnalysis />,
      },
      {
        path: COUNTING,
        element: <Counting />,
      },
      {
        path: AIR_QUALITY,
        element: <AirQuality />,
      },
      {
        path: ENGAGEMENT,
        element: <Engagement />,
      },
      {
        path: VISITOR_JOURNEY,
        element: <VisitorJourney />,
      },
      {
        element: <SettingsLayout />,
        children:
        [
          {
            path: SETTINGS_GENERAL,
            element: <GeneralSettings />
          },
          {
            path: SETTINGS_USERS,
            element: <Users />
          },
          {
            path: SETTINGS_PROFILES,
            element: <Profiles />
          },
          {
            path: SETTINGS_GROUPS,
            element: <Groups />
          },
          {
            path: SETTINGS_RIGHTSYSTEM,
            element: <RightSystem />
          },
          {
            path: SETTINGS_TAGS,
            element: <Tags />
          }
        ]
      },
      {
        path: HELP_CENTER,
        element: <HelpCenter />,
      },
      {
        element: <ProfileLayout />,
        children:
        [
          {
            element: <ProfilePreferencesLayout />,
            children: 
            [
              {
                path: PROFILE_PREFERENCES_THEME,
                element: <Theme />
              },
              {
                path: PROFILE_PREFERENCES_SIDEBAR,
                element: <Sidebar />
              },
              {
                path: PROFILE_PREFERENCES_LANGUAGE_REGION,
                element: <LanguageRegion />
              },
              {
                path: PROFILE_PREFERENCES_DATE_TIME,
                element: <DateTime />
              },
              {
                path: PROFILE_PREFERENCES_ADVANCED,
                element: <Advanced />
              },
            ]
          },
          {
            path: PROFILE_SECURITY,
            element: <Security />
          },
        ]
      },
      { 
        path: ERROR, 
        element: <Error />
      },
    ],
  },
]

export default routes
