import { useLayoutEffect, useState } from "react"


const defaultTheme = 'dark'
console.log('defaultTheme', defaultTheme);

export const useTheme = () => {
    const [theme, setTheme] = useState(defaultTheme)

    useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return {theme, setTheme}
}