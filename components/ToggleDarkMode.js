import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ToggleDarkMode = ( ) => {
    const {toggleColorMode} = useColorMode()
    return (
        <IconButton aria-label="Toggle theme"
        colorScheme={useColorModeValue('blue', 'orange')}
        icon={useColorModeValue(<MoonIcon/>,<SunIcon/>)}
        onClick={toggleColorMode}
        >
        </IconButton>
    )
}
export default ToggleDarkMode