import React from 'react'
import useThemeSwitcher from '../hooks/ThemeSwitcher'
import { DarkToLightThemeIcon, GithubIcon, LightToDarkThemeIcon, LinkedInIcon } from '../media/Icons'
import { AnimatedAnchor, AnimatedIconButton } from '../media/AnimatedTags'
import NavigationLink from '../media/NavigationLink'
import LanguageSwitcher from '../hooks/LanguageSwticher'
import Logo from './Logo'



const NavBar = () => {

  const [themeMode, toggleTheme] = useThemeSwitcher();
  return (
    <header className="w-full px-24 pt-8 pb-24 font-medium flex items-center justify-around dark:text-light dark:bg-dark">
      <nav className='flex items-center '>
        <NavigationLink activeClassName="active" className='mr-4' translationId={"home-section"} />
        <NavigationLink activeClassName="active" className='mx-4' translationId={"about-section"} />
        <NavigationLink activeClassName="active" className='mx-4' translationId={"skills-section"} />
        <NavigationLink activeClassName="active" className='mx-4' translationId={"experience-section"} />
        <NavigationLink activeClassName="active" className='mx-4' translationId={"education-section"} />
        <NavigationLink activeClassName="active" className='ml-4' translationId={"expectations-section"} />
      </nav>
      <Logo className="flex items-center" />
      <nav className='flex items-center justify-around'>
        <AnimatedAnchor href="https://www.linkedin.com/in/aechdel" icon={<LinkedInIcon />} className={"flex mx-4"} />
        <AnimatedAnchor href="https://github.com/Pinguladora" icon={<GithubIcon className={"flex mx-4 dark:fill-light"} />} />
        <AnimatedIconButton onClick={toggleTheme} className="flex mx-4"
          icon={
            themeMode === 'dark' ? <DarkToLightThemeIcon className={"fill-dark"} /> :
              <LightToDarkThemeIcon className={"fill-dark"} />
          }
        />
        <LanguageSwitcher className={"flex mx-4"} />
      </nav>
    </header>
  )
}

export default NavBar
