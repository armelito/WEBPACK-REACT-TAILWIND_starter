import { default as Home } from './Home'
import { default as About } from './About'
import { default as Error } from './Error'
import { default as Login } from './Login'

import { default as RealTime } from './custom/RealTime'
import { default as EstatePerformance } from './custom/EstatePerformance'
import { default as StoreAnalytics } from './custom/StoreAnalytics'
import { default as ProductAnalysis } from './custom/ProductAnalysis'

import { default as Counting } from './sensors/Counting'
import { default as AirQuality } from './sensors/AirQuality'
import { default as Engagement } from './sensors/Engagement'
import { default as VisitorJourney } from './sensors/VisitorJourney'

import { default as GeneralSettings } from './settings/GeneralSettings'
import { default as Users } from './settings/Users'
import { default as Profiles } from './settings/Profiles'
import { default as Groups } from './settings/Groups'
import { default as RightSystem } from './settings/RightSystem'
import { default as Tags } from './settings/Tags'

import { default as GeneralProfile } from './profile/GeneralProfile'
import { default as Security } from './profile/Security'
import { default as Theme } from './profile/preferences/Theme'
import { default as Sidebar } from './profile/preferences/Sidebar'
import { default as LanguageRegion } from './profile/preferences/LanguageRegion'
import { default as DateTime } from './profile/preferences/DateTime'
import { default as Advanced } from './profile/preferences/Advanced'

import { default as SettingsLayout } from '../components/layout/Settings'
import { default as ProfileLayout } from '../components/layout/Profile'
import { default as ProfilePreferencesLayout } from '../components/layout/ProfilePreferences'

const defaultPages =
[
  Home,
  About,
  Error,
  Login
]

const customPages =
[
  RealTime,
  EstatePerformance,
  StoreAnalytics,
  ProductAnalysis
]

const sensorPages = 
[
  Counting,
  AirQuality,
  Engagement,
  VisitorJourney
]

const settingsPages = 
[
  GeneralSettings,
  Users,
  Profiles,
  Groups,
  RightSystem,
  Tags
]

const profilePages = 
[
  GeneralProfile,
  ProfilePreferencesLayout,
  Security
]

const profilePreferencesPages =
[
  Theme,
  Sidebar,
  LanguageRegion,
  DateTime,
  Advanced
]

export default 
{
  layout: 
  {
    SettingsLayout,
    ProfileLayout,
    ProfilePreferencesLayout
  },
  array: 
  {
    defaultPages,
    customPages,
    sensorPages,
    settingsPages,
    profilePages,
    profilePreferencesPages
  }
}