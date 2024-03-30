import { useLayoutEffect, useState } from "react"

const isDarkTheme = window?.matchMedia('prefers-color-scheme: dark').matchMedia
const defaultTheme = isDarkTheme ? 'dark' : 'light'
console.log('defaultTheme', defaultTheme);


export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('app_theme') || 'dark')

    useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('app-theme', theme)
    }, [theme])

    return {theme, setTheme}
}